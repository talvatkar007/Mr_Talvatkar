# Ajay Talvatkar — AI Engineer Portfolio

A modern, mobile-responsive personal portfolio built with **Next.js App Router, TypeScript, Framer Motion, Lucide icons and CSS**. Content is based on Ajay's supplied resume and publicly visible GitHub repositories.

## Features

- Original dark editorial design with neon-green and violet accents, abstract orbital hero, bento grid and project visuals made in CSS (no unlicensed background images)
- Scroll reveals, hover motion, animated marquee, responsive nav and reduced-motion accessibility
- Featured enterprise case studies, public GitHub repository list, timeline, skill matrix and copy-email interaction
- SEO metadata, Open Graph, sitemap, robots, custom favicon and 404 page
- Security-related HTTP headers, external-link hardening and no server-side secrets or database dependencies
- Editable data in a single TypeScript file (`content/site.ts`)

## Quick start

**Requirements:** Node.js 20.9+ (Node 22 LTS recommended), npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. On Windows PowerShell, use `Copy-Item .env.example .env.local`.

## Production checks

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

## Edit the website

| Task | File |
|---|---|
| Name, headline, email and social links | `content/site.ts` (`profile`) |
| Case studies and GitHub projects | `content/site.ts` (`featuredProjects`, `openSource`) |
| Work history and technology stack | `content/site.ts` (`experience`, `skills`) |
| Sections and interaction | `components/portfolio.tsx` |
| Colors, responsive layout, animation | `app/globals.css` |
| Search / Open Graph metadata | `app/layout.tsx` |
| Security headers | `next.config.ts` |

## Deploy to Vercel

1. Create a **new GitHub repository** and push this project (do not upload `.env.local`).
2. Import the repository in Vercel; framework should be detected as Next.js.
3. Set `NEXT_PUBLIC_SITE_URL` to your final HTTPS URL.
4. Deploy, configure your custom domain and validate mobile layout, metadata and security headers.
5. Run `npm audit` and update dependencies before launch.

## Production security notes

This is a **public, static-content portfolio**, not an authenticated application. It intentionally contains no user accounts, keys, database, or custom contact API. The email link delegates mail to the visitor's email client.

Headers include frame denial, MIME-sniff protection, a restricted referrer policy, and browser permissions restrictions. **A strict CSP and HSTS should be configured and verified per production hosting environment**; a CSP must be tested against Next.js scripts/styles to avoid breaking rendering. HTTPS redirects, WAF/bot protection and dependency updates should be enforced at the host. Do not add an AI chatbot or contact form without server-side validation, abuse controls, budgets, rate limiting and secret handling.

Do not treat frontend animation, HTTP headers or client-side checks as authentication. See [SECURITY.md](SECURITY.md).

## Content accuracy and privacy

- Corporate projects are **non-confidential summaries** taken from the resume, not public repositories or verified client results. Review every description against employer confidentiality policies before publication.
- GitHub repo URLs were sourced from the public profile and a previously supplied repository URL; verify each remains publicly accessible.
- The public GitHub profile was accessible during preparation; the LinkedIn profile could not be independently retrieved due to access restrictions. The profile URL was supplied by the owner.
- No private resume PDF or phone number is shipped inside the public website. If you want a downloadable CV, add a redacted PDF intentionally to `public/` and link it.
- No scraped photography is bundled. The hero is original CSS artwork; you can optionally replace it with a licensed photo or your own professional headshot.

## Design approach

Inspired by global developer portfolio patterns — high-contrast typography, bento-style content, minimal navigation and project-first storytelling — without copying a third-party template. This makes the site easier to maintain and license.

## Further documentation

- [Implementation and customization](docs/IMPLEMENTATION.md)
- [Security checklist](SECURITY.md)
- [Deployment and testing](docs/DEPLOYMENT.md)

## License

Personal portfolio content © Ajay Narayan Talvatkar. Source project is intended for the owner's use. Review third-party dependency licenses before distribution.
