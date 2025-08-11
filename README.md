
# PFS Finance – Static Site

This folder contains a static website built from your uploaded materials.

## Publish on GitHub Pages
1. Create a **public** repo (e.g., `pfsfinance-site`).
2. Upload these files to the repo root.
3. Settings → Pages → Deploy from a branch → `main` / root.
4. Custom domain: `www.pfsfinance.com` (CNAME file included).
5. After SSL is issued, check **Enforce HTTPS**.

## GoDaddy DNS
- CNAME: `www` → `<your-github-username>.github.io`
- Root: use GoDaddy Forwarding to `https://www.pfsfinance.com` *or* A records to GitHub.
- Do not change MX/TXT/SPF/DKIM (email).

