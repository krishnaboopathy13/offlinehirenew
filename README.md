# OfflineHire v9 — Deploy Package

## Files
| File | Purpose |
|------|---------|
| `index.html` | Main application (238KB, all-in-one) |
| `sw.js` | Service worker — enables offline mode |
| `manifest.json` | PWA manifest — enables "Install App" |
| `icon.svg` | Vector icon (all sizes) |
| `icon-192.png` | App icon 192×192 (Android/PWA) |
| `icon-512.png` | App icon 512×512 (splash screen) |
| `vercel.json` | Vercel deployment config |
| `_headers` | Vercel/Netlify HTTP headers |
| `.htaccess` | Apache/cPanel config |

---

## Deploy to Vercel (recommended — 2 minutes)

```bash
npm i -g vercel
cd offlinehire-deploy
vercel --prod
```

Or drag-and-drop this folder at vercel.com/new

---

## Deploy to Netlify

Drag-and-drop this folder at app.netlify.com/drop

---

## Deploy to cPanel / Shared Hosting

1. Upload all files to `public_html/`
2. Ensure `.htaccess` is uploaded (may be hidden)
3. Visit your domain — app loads immediately

---

## First Login

- **Admin:** `offlinehire2026`
- **Recruiter:** `rec2026`
- **Security:** `sec2026`

---

## AI Tools Setup (optional)

1. Get Anthropic API key at console.anthropic.com
2. In app → Settings → Integrations → AI Configuration
3. Paste key — AI tools activate immediately
4. Works offline without AI key (6 AI tools need key)

---

## PWA Install

On mobile: browser shows "Add to Home Screen" banner  
On desktop Chrome/Edge: install icon appears in address bar  
Works fully offline after first load.

---

## Domain Setup

Point your domain (offlinehire.com) to Vercel:  
Vercel Dashboard → Project → Settings → Domains → Add `offlinehire.com`

CNAME: `cname.vercel-dns.com`  
A record: `76.76.21.21`

---

Built with ❤️ in Bengaluru · offlinehire.com
