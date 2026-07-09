# Yuranja

A static editorial guide to art spaces and exhibitions.

## Development

```bash
npm install
npm run dev
```

## Analytics (Plausible)

Yuranja uses [Plausible Analytics](https://plausible.io) — cookieless, privacy-friendly, and requires no cookie banner.

### Configuration

| Variable | Required | Description |
| --- | --- | --- |
| `VITE_PLAUSIBLE_DOMAIN` | Production | Domain registered in your [Plausible dashboard](https://plausible.io/sites). |
| `VITE_PLAUSIBLE_CAPTURE_LOCALHOST` | No | Set to `true` to enable analytics during `npm run dev`. Off by default. |

**Production** (`.env.production`):

```env
VITE_PLAUSIBLE_DOMAIN=yuranja.com
```

**Local verification** (`.env`):

```env
VITE_PLAUSIBLE_DOMAIN=yuranja.com
VITE_PLAUSIBLE_CAPTURE_LOCALHOST=true
```

Copy `.env.example` as a starting point: `cp .env.example .env.production`

### How it works

- The official Plausible script (`script.manual.js`) is injected once via `PlausibleAnalytics` in `src/App.jsx`.
- React Router navigations are tracked with one explicit `pageview` per route change (manual mode avoids duplicate pageviews).
- Plausible may also send separate **`engagement`** events when leaving a page — these are not duplicate pageviews.
- Analytics is **disabled during development** unless `VITE_PLAUSIBLE_CAPTURE_LOCALHOST=true` (uses `script.local.manual.js` when enabled).
- No cookies, no backend, no third-party ad or tracking SDKs.

### Verification

Automated check (requires `.env` with domain + localhost flag, and `npm run dev`):

```bash
node scripts/verify-plausible.mjs http://localhost:5173
```

Manual check:

1. Set `VITE_PLAUSIBLE_DOMAIN` (and `VITE_PLAUSIBLE_CAPTURE_LOCALHOST=true` for local dev).
2. Run `npm run dev`.
3. Open DevTools → **Network**, filter by `event`.
4. Navigate between routes — each change should produce **exactly one `pageview` POST** (status **202**). An `engagement` POST for the previous page is normal.
5. Do not open `/api/event` in a browser tab (POST-only; returns a harmless 404).

Check Plausible **Realtime** in your dashboard, or use the installation checker in site settings.

## Build

```bash
npm run build
```

Production builds are served from the domain root (`base: /` in `vite.config.js`). Upload `dist/` contents to your IONOS web folder.
