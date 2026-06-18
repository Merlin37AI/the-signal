# Gary Does Strategy — Website

Static site. Plain HTML/CSS/JS, no build step. Deploy the folder as-is to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Folder structure

```
GDS Website/
├── index.html            Homepage
├── how-i-work.html       How I Work page
├── 404.html              Not-found page (host serves automatically)
├── favicon.svg           Site icon
├── robots.txt            Crawler rules + sitemap pointer
├── sitemap.xml           Page index for search engines
├── README.md             This file
│
├── assets/               Everything the live site loads
│   ├── fonts/            grindy-brush.otf
│   ├── images/           Page images (web-safe names, no spaces)
│   └── video/            mid-page.mp4
│
└── _source/              NOT deployed. Working files only.
    ├── GDS Brand.txt         Brand notes
    ├── my voice.txt          Voice notes
    ├── Website structure.txt Planning notes
    ├── GDS_Homepage_Wireframe_v3.html  Wireframe
    └── unused-assets/        Images/video not currently used on the site
```

## Conventions

- **No spaces in any deployed file or folder name.** Web servers and URLs treat spaces badly. Use kebab-case (`hero.png`, `grindy-brush.otf`).
- All site assets live under `assets/`. Reference them with relative paths, e.g. `assets/images/hero.png`.
- `_source/` and anything inside it never ships. Keep brand docs, wireframes, and spare assets here.

## Before going live — checklist

1. **Set the real domain.** Replace `https://garydoesstrategy.com` in `robots.txt` and `sitemap.xml` with the live domain.
2. **Confirm the Calendly link** in `index.html` (currently a "catch-up" booking URL) is the correct booking page.
3. **Add Open Graph / social-share tags** to each page `<head>` if link previews matter (title, description, og:image).
4. **Wire the newsletter form** in `index.html` (currently `onsubmit="return false"`) to a real handler.
5. **Optimise images.** PNGs are large; convert hero/cover images to WebP or AVIF for faster load.
6. Deploy. The host serves `404.html` for missing pages automatically.
