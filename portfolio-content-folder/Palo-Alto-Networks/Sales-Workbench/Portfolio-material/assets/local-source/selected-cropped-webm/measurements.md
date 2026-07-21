# Selected Cropped WebM Measurements

All selected source files are `3840x2160`, ProRes, `29.97 fps`.

## panw-anchored-follow-ups-snippet-01.mov

- Source screenshot: `source-screenshots/Anchored Responses snippet 01.png`
- Pixel-detected non-black bounds: `x=839`, `y=0`, `w=2162`, `h=2160`
- Crop used for exact square output: `crop=2160:2160:840:0`
- Removed black/unused region:
  - left: `840x2160`
  - right: `840x2160`
  - top: `0`
  - bottom: `0`
- Output: `webm/Anchored Responses snippet 01.webm`
- Output dimensions: `2160x2160`
- Quality check vs cropped source: SSIM `0.999334`, PSNR `53.43 dB`

## panw-traceability-snippet.mov

- Source screenshot: `source-screenshots/Trace Snippet.png`
- Pixel-detected non-black bounds: `x=839`, `y=0`, `w=2162`, `h=2160`
- Crop used for exact square output: `crop=2160:2160:840:0`
- Removed black/unused region:
  - left: `840x2160`
  - right: `840x2160`
  - top: `0`
  - bottom: `0`
- Output: `webm/Trace Snippet.webm`
- Output dimensions: `2160x2160`
- Quality check vs cropped source: SSIM `0.999020`, PSNR `51.49 dB`

## panw-codex-shim-03.mov

- Source screenshot: `source-screenshots/codex shim 03.png`
- Pixel-detected non-black bounds: `x=0`, `y=169`, `w=3496`, `h=1822`
- Crop used: `crop=3496:1822:0:169`
- Removed black/unused region:
  - top: `3840x169`
  - bottom: `3840x169`
  - right: `344x1822`
  - left: `0`
- Output: `webm/codex shim 03.webm`
- Output dimensions: `3496x1822`
- Quality check vs cropped source: SSIM `0.994595`, PSNR `46.37 dB`
