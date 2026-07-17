# Kavy Soni Portfolio with Autoplay Music

This version adds background music with an autoplay attempt and a fallback Play/Pause control.

## Features
- Attempts to autoplay `public/music.mp3` on page load
- If the browser blocks autoplay, music starts after the first click/touch/key press
- Floating Play/Pause music button
- Uploaded song included as `public/music.mp3`
- Existing dark/light mode and portfolio design preserved

## Run locally
```bash
npm install
npm run dev
```

## Deploy on Vercel
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

> Note: Modern browsers may block sound autoplay until the visitor interacts with the page. This project includes the closest browser-safe autoplay behavior. Use only music you own or have permission to use publicly.
