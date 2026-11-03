# Deployment playbook

## Local (Windows)

```powershell
cd ajay-portfolio
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. For production parity, run `npm run build` then `npm start`.

## Vercel

1. `git init`, commit source and push to your GitHub portfolio repository.
2. Import repository to Vercel and select Next.js.
3. Configure `NEXT_PUBLIC_SITE_URL=https://your-actual-domain` in Project Settings → Environment Variables.
4. Deploy and bind a custom domain. Make sure HTTPS is active.
5. Inspect page source and Open Graph preview; verify `robots.txt`, sitemap, 404 route and all CTAs.
6. Perform security header testing and adopt a CSP fitted to your actual output and hosting configuration.

## Alternative: Node hosting

```bash
npm ci
npm run build
NODE_ENV=production npm start
```

Use an HTTPS reverse proxy (such as Nginx) and set up monitoring, process restarts and HSTS as appropriate. Never expose `.env.local` through your web server.

## Release / maintenance

- Weekly: review dependency alerts and `npm audit` results.
- On each release: typecheck, lint, build, check mobile navigation, links, metadata, and no secrets or confidential artifacts in diff.
- Quarterly: review resume claims, screenshots (if any) and links to public repositories.
