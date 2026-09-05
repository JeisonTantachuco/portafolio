# Portfolio images

Drop the following files here. Filenames must match exactly — the site references them directly.

| File | Size / format | Used for | Status |
|------|---------------|----------|--------|
| `headshot.jpg` | ~600×600 px, square, JPG | About section photo. Until it exists, a "JT" monogram is shown automatically. | **you add this** |
| `og-image.png` | 1200×630 px, PNG | Link preview when the site is shared (LinkedIn, WhatsApp, Slack…). | convert from `og-image.svg` (below) |
| `hero-bg.svg` | — | Hero background texture. | included |
| `og-image.svg` | — | Source for `og-image.png`. | included |

## Making `og-image.png`

The SVG is ready; it just needs to be rasterised to PNG (most social scrapers ignore SVG):

- **Easiest:** open `og-image.svg` in a browser, take a screenshot at 1200×630, save as `og-image.png` here.
- **Online:** any "SVG to PNG" converter, set width 1200.
- **CLI (if you have it):** `rsvg-convert -w 1200 og-image.svg > og-image.png` or `inkscape og-image.svg --export-filename=og-image.png -w 1200`

Alternatively, replace it with a screenshot montage of your three apps — that makes a stronger preview.

## Headshot tips (for `headshot.jpg`)

- Head-and-shoulders, you facing the camera, eyes to lens.
- Plain, uncluttered background (a wall, or softly blurred).
- Soft, even light on the face — near a window works; avoid harsh overhead light and strong shadows.
- Neutral or lightly smiling expression; business-casual clothing.
- Shoot in landscape, then crop to a centred square; keep some headroom.
- Export at ~600×600 px, good quality, aim for under ~200 KB.
