# 📸 Image Assets Required

Copy the following images from your `IMG` folder to `she-pokot-site/public/img/`

## Essential Images

| Filename | Usage | Location | Suggested Size |
|----------|-------|----------|-----------------|
| `logo.png` | Header branding | All pages header | 300×300px |
| `hero-01.jpg` | Homepage hero | `/` page | 1200×600px |
| `program-climate.jpg` | Climate program | `/programs` card | 400×300px |
| `program-girls.jpg` | Girls/Women program | `/programs` card | 400×300px |
| `program-livelihoods.jpg` | Livelihoods program | `/programs` card | 400×300px |
| `asha.jpg` | Impact story 1 | `/impact` page | 300×300px |
| `grace.jpg` | Impact story 2 | `/impact` page | 300×300px |
| `community.jpg` | Impact story 3 | `/impact` page | 300×300px |

## Optional Enhancement Images

- Background imagery for hero sections
- Team member photos (for About page leadership section)
- Program activity photos (trees planted, training sessions, etc.)
- Gallery images for news posts
- Infographic for fund allocation (can be created as SVG or image)

## How to Add Images

1. **Copy Images**:
   ```bash
   cp ../IMG/logo.png she-pokot-site/public/img/
   cp ../IMG/hero-*.jpg she-pokot-site/public/img/
   # ... copy other images
   ```

2. **Update Component References**:
   - In components, change image paths to `/img/filename.jpg`
   - Example: `<img src="/img/logo.png" alt="She Pokot Network logo" />`

3. **Verify in Development**:
   ```bash
   npm run dev
   # Visit http://localhost:3000 and verify images display
   ```

## Image Optimization Tips

- Keep file sizes under 500KB (use JPEG for photos, PNG for graphics)
- Use descriptive alt text for all images (accessibility)
- Responsive images: CSS handles scaling for mobile/desktop
- Consider using WebP format for faster loading (optional)

## Next Steps

1. **Collect Final Images**: Ensure high-resolution authentic photos
2. **Copy to `public/img/`**: All images in one folder
3. **Update Content**: Replace placeholder text with real impact data
4. **Test Locally**: Verify images load correctly
5. **Deploy**: Vercel will serve images from CDN

---

All images should be placed in `she-pokot-site/public/img/` before deploying to Vercel.
