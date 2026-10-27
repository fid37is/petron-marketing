# Petron Marketing (petron.marketing)

React 18 + Vite single-page marketing site, linked to the parent site https://www.petron.com.

## Run
```
npm install
npm run dev        # local development
npm run build      # production build in ./dist
npm run preview    # preview the build
```
Deploy the contents of `dist/` to any static host and point `petron.marketing` at it.

Pages: `/` (home), `/products` (full catalog with search), `/leadership` (Board of Directors, management, who to contact). These are client-side routes, so the host must serve `index.html` for every path. `public/_redirects` (Netlify, Cloudflare Pages) and `vercel.json` (Vercel) already do this.

## Content
Facts, contacts and names live in `src/data.js`; the full product list lives in `src/catalog.js` and was taken from petron.com on October 27, 2026. Edit data there, not in the components. The logo and favicon load from petron.com (`LOGO` in `src/data.js`).
