#!/usr/bin/env python3
"""Preflight, safely rename, and validate a reviewed case-study media plan."""
from __future__ import annotations

import argparse
import csv
import hashlib
import json
import os
import re
import subprocess
import sys
from pathlib import Path

from PIL import Image

MEDIA_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".mp4", ".mov", ".webm"}
VIDEO_EXTENSIONS = {".mp4", ".mov", ".webm"}
MAP_FIELDS = [
    "original_path", "proposed_path", "content_hash", "duplicate_group", "relationship",
    "references_found", "status", "rollback_path", "extension", "media_type", "file_size",
    "dimensions", "duration", "frame_count", "vcs_status", "confidence",
]


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as fh:
        for chunk in iter(lambda: fh.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def video_metadata(path: Path) -> tuple[str, str, str]:
    command = [
        "ffprobe", "-v", "error", "-show_entries",
        "format=duration:stream=codec_type,width,height,nb_frames", "-of", "json", str(path),
    ]
    payload = json.loads(subprocess.check_output(command, text=True))
    stream = next(item for item in payload["streams"] if item.get("codec_type") == "video")
    return (f"{stream.get('width')}x{stream.get('height')}", str(round(float(payload["format"].get("duration") or 0), 3)), str(stream.get("nb_frames") or ""))


def image_metadata(path: Path) -> tuple[str, str, str]:
    with Image.open(path) as image:
        dimensions = f"{image.width}x{image.height}"
        frames = getattr(image, "n_frames", 1)
        duration = ""
        if path.suffix.lower() == ".gif":
            duration = str(round(sum((image.seek(i) or image.info.get("duration", 0)) for i in range(frames)) / 1000, 3))
        return dimensions, duration, str(frames)


def git_status(repo: Path, path: Path) -> str:
    result = subprocess.run(["git", "status", "--porcelain", "--", str(path.relative_to(repo))], cwd=repo, text=True, capture_output=True, check=True)
    return result.stdout.strip() or "clean"


def atomic_text(path: Path, content: str) -> None:
    temporary = path.with_suffix(path.suffix + ".tmp-write")
    temporary.write_text(content)
    os.replace(temporary, path)


def read_plan(plan_path: Path) -> list[dict]:
    plan = json.loads(plan_path.read_text())
    names = [item["file"] for item in plan]
    if len(names) != len(set(names)):
        raise ValueError("The plan contains duplicate source files.")
    return plan


def make_entries(repo: Path, case: Path, plan: list[dict]) -> list[dict]:
    assets = case / "assets"
    actual = {str(path.relative_to(assets)) for path in assets.rglob("*") if path.is_file() and path.suffix.lower() in MEDIA_EXTENSIONS}
    planned = {item["file"] for item in plan}
    if actual != planned:
        raise ValueError(f"Asset set differs from the reviewed plan. Missing={planned - actual}; unplanned={actual - planned}")
    destinations = [item["name"] for item in plan]
    if len(destinations) != len(set(destinations)) or len([item.casefold() for item in destinations]) != len({item.casefold() for item in destinations}):
        raise ValueError("The plan has a destination collision.")
    entries: list[dict] = []
    for item in plan:
        source = assets / item["file"]
        proposed = source.parent / item["name"]
        if source.suffix.lower() != proposed.suffix.lower():
            raise ValueError(f"Extension changed for {source.name}")
        if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*" + re.escape(proposed.suffix.lower()), proposed.name):
            raise ValueError(f"Non-kebab-case destination: {proposed.name}")
        if len(proposed.stem) > 60 or len(str(proposed)) >= 220:
            raise ValueError(f"Path limit exceeded: {proposed}")
        media_type = "video" if source.suffix.lower() in VIDEO_EXTENSIONS else "gif" if source.suffix.lower() == ".gif" else "image"
        dimensions, duration, frame_count = video_metadata(source) if media_type == "video" else image_metadata(source)
        original = str(source.relative_to(case))
        proposed_relative = str(proposed.relative_to(case))
        entries.append({
            "original_path": original, "proposed_path": proposed_relative, "content_hash": sha256(source),
            "duplicate_group": item["group"] or "none", "relationship": item["relationship"],
            "references_found": "none", "status": "preflight-approved", "rollback_path": original,
            "extension": source.suffix.lower(), "media_type": media_type, "file_size": source.stat().st_size,
            "dimensions": dimensions, "duration": duration, "frame_count": frame_count,
            "vcs_status": git_status(repo, source), "confidence": item["confidence"],
            "catalog": {"path": proposed_relative, "visible_summary": item["summary"], "content_tags": item["tags"],
                        "story_roles": item["roles"], "story_priority": item["priority"],
                        "duplicate_group": item["group"] or "none", "relationship": item["relationship"],
                        "primary": item["primary"], "dimensions": dimensions, "duration": duration or None,
                        "confidence": item["confidence"]},
        })
    return entries


def write_map_and_catalog(case: Path, entries: list[dict]) -> None:
    map_path = case / "media-rename-map.csv"
    catalog_path = case / "media-catalog.jsonl"
    # Use csv.StringIO so every field remains machine-reversible even if a value gains punctuation.
    import io
    buffer = io.StringIO(newline="")
    writer = csv.DictWriter(buffer, fieldnames=MAP_FIELDS)
    writer.writeheader()
    writer.writerows([{field: entry[field] for field in MAP_FIELDS} for entry in entries])
    atomic_text(map_path, buffer.getvalue())
    atomic_text(catalog_path, "".join(json.dumps(entry["catalog"], separators=(",", ":")) + "\n" for entry in entries))


def load_map(case: Path) -> list[dict]:
    map_path = case / "media-rename-map.csv"
    if not map_path.exists():
        raise ValueError("Run --preflight before --execute or --validate.")
    with map_path.open(newline="") as fh:
        return list(csv.DictReader(fh))


def execute(case: Path, entries: list[dict]) -> None:
    frozen = load_map(case)
    if len(frozen) != len(entries):
        raise ValueError("Frozen map does not match plan length.")
    by_original = {entry["original_path"]: entry for entry in entries}
    if set(row["original_path"] for row in frozen) != set(by_original):
        raise ValueError("Frozen map does not match the reviewed plan.")
    for row in frozen:
        source = case / row["original_path"]
        if not source.exists() or sha256(source) != row["content_hash"]:
            raise ValueError(f"Preflight integrity check failed for {row['original_path']}")
        target = case / row["proposed_path"]
        if target.exists() and target != source:
            raise ValueError(f"Refusing to overwrite existing path: {row['proposed_path']}")
        if row["references_found"] != "none":
            raise ValueError(f"Blocked unresolved reference: {row['original_path']}")
    temporary: list[tuple[Path, Path, dict]] = []
    for row in frozen:
        source = case / row["original_path"]
        source_key = hashlib.sha256(row["original_path"].encode()).hexdigest()[:12]
        temp = source.with_name(f".{sha256(source)[:16]}-{source_key}.media-rename-tmp{source.suffix.lower()}")
        if temp.exists():
            raise ValueError(f"Temporary path already exists: {temp}")
        os.rename(source, temp)
        temporary.append((temp, case / row["proposed_path"], row))
    try:
        for temp, target, _ in temporary:
            os.rename(temp, target)
    except Exception:
        for temp, target, row in reversed(temporary):
            if target.exists():
                os.rename(target, case / row["original_path"])
            elif temp.exists():
                os.rename(temp, case / row["original_path"])
        raise
    for entry in entries:
        entry["status"] = "renamed"
    write_map_and_catalog(case, entries)


def restore_staged(case: Path) -> int:
    """Restore media left at old temporary names if an execution failed before destinations were written."""
    rows = load_map(case)
    restored = 0
    for row in rows:
        source = case / row["original_path"]
        source_key = hashlib.sha256(row["original_path"].encode()).hexdigest()[:12]
        temp = source.with_name(f".{row['content_hash'][:16]}-{source_key}.media-rename-tmp{source.suffix.lower()}")
        legacy_temp = source.with_name(f".{row['content_hash'][:16]}.media-rename-tmp{source.suffix.lower()}")
        candidate = temp if temp.exists() else legacy_temp
        if candidate.exists():
            if source.exists():
                raise ValueError(f"Cannot restore {candidate}; original path already exists: {source}")
            os.rename(candidate, source)
            restored += 1
    return restored


def validate(case: Path, plan: list[dict], dry_run: bool = False) -> dict:
    rows = load_map(case)
    if len(rows) != len(plan):
        raise ValueError("Media map row count does not match reviewed plan.")
    expected = {str(Path(item["file"]).parent / item["name"]) for item in plan}
    current = {str(path.relative_to(case / "assets")) for path in (case / "assets").rglob("*") if path.is_file() and path.suffix.lower() in MEDIA_EXTENSIONS}
    failures: list[str] = []
    if current != expected:
        failures.append(f"Unexpected current assets: missing={expected-current}; extra={current-expected}")
    hashes: dict[str, int] = {}
    for row in rows:
        target = case / row["proposed_path"]
        if not target.exists():
            failures.append(f"Missing destination: {row['proposed_path']}")
            continue
        if sha256(target) != row["content_hash"]:
            failures.append(f"Hash changed: {row['proposed_path']}")
        hashes[row["content_hash"]] = hashes.get(row["content_hash"], 0) + 1
        if row["status"] != "renamed":
            failures.append(f"Map not marked renamed: {row['proposed_path']}")
    if any("media-rename-tmp" in path.name for path in (case / "assets").rglob("*")):
        failures.append("Temporary filenames remain.")
    catalog = case / "media-catalog.jsonl"
    if not catalog.exists() or len(catalog.read_text().splitlines()) != len(rows):
        failures.append("Catalog does not have one line per media file.")
    if failures:
        raise ValueError("; ".join(failures))
    return {"media_files": len(rows), "unique_hashes": len(hashes), "proposed_renames": 0 if dry_run else None, "failures": 0}


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("case", type=Path)
    parser.add_argument("plan", type=Path)
    parser.add_argument("--preflight", action="store_true")
    parser.add_argument("--execute", action="store_true")
    parser.add_argument("--validate", action="store_true")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--restore", action="store_true")
    args = parser.parse_args()
    if sum([args.preflight, args.execute, args.validate, args.dry_run, args.restore]) != 1:
        parser.error("choose exactly one action")
    case = args.case.resolve()
    repo = Path.cwd().resolve()
    plan = read_plan(args.plan.resolve())
    if args.restore:
        print(json.dumps({"status": "restored", "media_files": restore_staged(case)}))
    elif args.preflight:
        entries = make_entries(repo, case, plan)
        write_map_and_catalog(case, entries)
        print(json.dumps({"status": "preflight-approved", "media_files": len(entries), "map": str(case / "media-rename-map.csv")}))
    elif args.execute:
        entries = make_entries(repo, case, plan)
        execute(case, entries)
        print(json.dumps({"status": "renamed", "media_files": len(entries)}))
    else:
        print(json.dumps(validate(case, plan, dry_run=args.dry_run)))


if __name__ == "__main__":
    main()
