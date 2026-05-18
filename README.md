# betodt.github.io

Personal website for Alberto Diaz-Tostado, built with Astro, TypeScript, Tailwind CSS, and content collections.

## Development

```bash
npm install
npm run dev
npm run build
```

The site is static-first and deploys to GitHub Pages via the workflow in `.github/workflows/deploy.yml`. The `public/.nojekyll` marker is copied into Astro's `dist/` output so GitHub Pages serves the uploaded static files directly instead of trying to rebuild them with Jekyll.
