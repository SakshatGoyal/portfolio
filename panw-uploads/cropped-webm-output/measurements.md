# Cropped WebM Measurements

Source frame size for all three videos: `3840x2160`, `29.97 fps`.

## codex shim 03.mov

- Detected non-black/content bounds: `x=0`, `y=169`, `w=3496`, `h=1822`
- Black/unused region removed:
  - top: `3840x169`
  - bottom: `3840x169`
  - right: `344x1822`
  - left: `0`
- Crop used: `crop=3496:1822:0:169`
- Output: `webm/codex shim 03-cropped-vp9.webm`
- Output dimensions: `3496x1822`
- Quality check vs cropped source: SSIM `0.994595`, PSNR `46.37 dB`

## Anchored Responses snippet 01.mov

- Effective black/unused region removed:
  - left: `840x2160`
  - right: `840x2160`
  - top: `0`
  - bottom: `0`
- Pixel threshold scan found the content transition at `x=839` and `x=3000`; the centered square crop uses `x=840`, `w=2160` to produce an exact square frame.
- Crop used: `crop=2160:2160:840:0`
- Output: `webm/Anchored Responses snippet 01-cropped-vp9.webm`
- Output dimensions: `2160x2160`
- Quality check vs cropped source: SSIM `0.999334`, PSNR `53.43 dB`

## Trace Snippet.mov

- Effective black/unused region removed:
  - left: `840x2160`
  - right: `840x2160`
  - top: `0`
  - bottom: `0`
- Pixel threshold scan found the content transition at `x=839` and `x=3000`; the centered square crop uses `x=840`, `w=2160` to produce an exact square frame.
- Crop used: `crop=2160:2160:840:0`
- Output: `webm/Trace Snippet-cropped-vp9.webm`
- Output dimensions: `2160x2160`
- Quality check vs cropped source: SSIM `0.999020`, PSNR `51.49 dB`
