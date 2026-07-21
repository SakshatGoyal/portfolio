#!/usr/bin/env python3
"""Create read-only metadata and thumbnail contact sheets for a case-study media folder."""
from __future__ import annotations

import csv
import hashlib
import json
import math
import subprocess
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

MEDIA_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".mp4", ".mov", ".webm"}
VIDEO_EXTENSIONS = {".mp4", ".mov", ".webm"}


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as fh:
        for chunk in iter(lambda: fh.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def probe_video(path: Path) -> dict:
    command = [
        "ffprobe", "-v", "error", "-show_entries",
        "format=duration:stream=codec_type,width,height,nb_frames,avg_frame_rate",
        "-of", "json", str(path),
    ]
    payload = json.loads(subprocess.check_output(command, text=True))
    video = next((s for s in payload.get("streams", []) if s.get("codec_type") == "video"), {})
    return {
        "width": video.get("width"), "height": video.get("height"),
        "duration": round(float(payload.get("format", {}).get("duration") or 0), 3),
        "frame_count": video.get("nb_frames"),
    }


def sample_video(path: Path, duration: float, output: Path) -> None:
    at = max(0.0, duration * 0.1)
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-ss", str(at), "-i", str(path), "-frames:v", "1", str(output)], check=True)


def media_row(root: Path, path: Path, thumbnail_dir: Path) -> dict:
    ext = path.suffix.lower()
    row = {
        "original_path": str(path.relative_to(root.parent)),
        "extension": ext, "media_type": "video" if ext in VIDEO_EXTENSIONS else "gif" if ext == ".gif" else "image",
        "file_size": path.stat().st_size, "content_hash": sha256(path),
        "width": None, "height": None, "duration": None, "frame_count": None,
    }
    thumb = thumbnail_dir / (path.stem + ".jpg")
    if ext in VIDEO_EXTENSIONS:
        metadata = probe_video(path)
        row.update(metadata)
        sample_video(path, metadata["duration"], thumb)
    else:
        with Image.open(path) as image:
            row["width"], row["height"] = image.size
            row["frame_count"] = getattr(image, "n_frames", 1)
            if ext == ".gif":
                row["duration"] = round(sum(image.seek(i) or image.info.get("duration", 0) for i in range(image.n_frames)) / 1000, 3)
                image.seek(0)
            image.convert("RGB").save(thumb, quality=85)
    row["thumbnail"] = str(thumb)
    return row


def make_contact_sheet(rows: list[dict], output: Path) -> None:
    cell_w, cell_h, columns = 360, 290, 4
    font = ImageFont.load_default()
    canvas = Image.new("RGB", (cell_w * columns, cell_h * math.ceil(len(rows) / columns)), "#f4f4f4")
    draw = ImageDraw.Draw(canvas)
    for i, row in enumerate(rows):
        x, y = (i % columns) * cell_w, (i // columns) * cell_h
        with Image.open(row["thumbnail"]).convert("RGB") as image:
            image.thumbnail((cell_w - 20, 210))
            framed = ImageOps.contain(image, (cell_w - 20, 210))
            canvas.paste(framed, (x + 10, y + 8))
        label = f"{i + 1:02d} {Path(row['original_path']).name}\n{row['width']}x{row['height']} {row['media_type']}"
        draw.multiline_text((x + 10, y + 225), label, fill="#111", font=font, spacing=4)
    canvas.save(output, quality=92)


def make_motion_contact_sheet(root: Path, rows: list[dict], output: Path) -> None:
    motion = [row for row in rows if row["media_type"] in {"video", "gif"}]
    if not motion:
        return
    cell_w, cell_h, columns = 300, 220, 4
    font = ImageFont.load_default()
    frames: list[tuple[dict, float, Image.Image]] = []
    for row in motion:
        source = root.parent / row["original_path"]
        if row["media_type"] == "gif":
            with Image.open(source) as image:
                indexes = sorted(set(round(i * (image.n_frames - 1) / 6) for i in range(7)))
                for index in indexes:
                    image.seek(index)
                    frames.append((row, index, image.convert("RGB").copy()))
        else:
            duration = row["duration"] or 0
            for position in [0, .25, .5, .75, 1]:
                frame_path = output.parent / f"motion-{len(frames)}.jpg"
                sample_video(source, duration * position, frame_path)
                with Image.open(frame_path) as image:
                    frames.append((row, duration * position, image.convert("RGB").copy()))
                frame_path.unlink()
    canvas = Image.new("RGB", (cell_w * columns, cell_h * math.ceil(len(frames) / columns)), "#f4f4f4")
    draw = ImageDraw.Draw(canvas)
    for i, (row, timepoint, image) in enumerate(frames):
        x, y = (i % columns) * cell_w, (i // columns) * cell_h
        image.thumbnail((cell_w - 16, 170))
        canvas.paste(image, (x + 8, y + 8))
        draw.multiline_text((x + 8, y + 182), f"{Path(row['original_path']).name}\n{timepoint:.1f}s", fill="#111", font=font, spacing=3)
    canvas.save(output, quality=92)


def main() -> None:
    root = Path(sys.argv[1]).resolve()
    output = Path(sys.argv[2]).resolve()
    output.mkdir(parents=True, exist_ok=True)
    thumbnails = output / "thumbnails"
    thumbnails.mkdir(exist_ok=True)
    rows = [media_row(root, path, thumbnails) for path in sorted(root.rglob("*")) if path.is_file() and path.suffix.lower() in MEDIA_EXTENSIONS]
    with (output / "inventory.json").open("w") as fh:
        json.dump(rows, fh, indent=2)
    with (output / "inventory.csv").open("w", newline="") as fh:
        writer = csv.DictWriter(fh, fieldnames=[k for k in rows[0] if k != "thumbnail"])
        writer.writeheader()
        writer.writerows([{k: v for k, v in row.items() if k != "thumbnail"} for row in rows])
    make_contact_sheet(rows, output / "contact-sheet.jpg")
    make_motion_contact_sheet(root, rows, output / "motion-contact-sheet.jpg")
    print(json.dumps({"files": len(rows), "inventory": str(output / "inventory.json"), "contact_sheet": str(output / "contact-sheet.jpg")}))


if __name__ == "__main__":
    main()
