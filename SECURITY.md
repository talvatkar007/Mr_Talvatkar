# Security checklist

## Included by default

- No backend endpoints, auth flow, analytics trackers, external iframes or storage of visitor-submitted information.
- External websites open with `rel="noopener noreferrer"`.
- React renders content as text; no `dangerouslySetInnerHTML`.
- Browser restrictions via `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`, and `Cross-Origin-Opener-Policy`.
- `poweredByHeader: false`, `.env*` ignored, and only `NEXT_PUBLIC_SITE_URL` is exposed on the client.
- Reduced-motion preference supported.

## Required before public launch

1. Run `npm audit --omit=dev`, investigate all findings and upgrade affected dependencies.
2. Configure HTTPS, TLS settings, HSTS, and HTTP → HTTPS redirect at deployment layer. Enable HSTS only after confirming all subdomains support HTTPS.
3. Implement and test a production Content Security Policy (CSP). Next.js App Router may require a per-request nonce and dynamic rendering for an especially strict CSP; consider the performance implications. Do not blindly paste a CSP that blocks Next.js hydration.
4. Set `NEXT_PUBLIC_SITE_URL` to your actual URL, run `npm run build`, and verify `/sitemap.xml` and `/robots.txt`.
5. Validate headers with browser developer tools or `curl -I https://your-domain.com`.
6. Enable platform-level bot/DDoS protection and monitor error logs.
7. Keep all company-specific information approved for public release. Do not paste real customer data, internal dashboard screenshots, credentials or infrastructure hosts.
8. Use branch protection, secret scanning and dependency alerts in GitHub.

## If adding an AI assistant later

Use a **server-side** route or managed backend to call a model API, with authentication if it accesses private content, hard rate limits, request and response size caps, prompt-injection defenses, safe output rendering, controlled data access, cost alerts, monitoring and abuse handling. Never place model API keys in `NEXT_PUBLIC_` variables or browser code. A decorative AI-like interface is not an AI chatbot.

## If adding a contact form later

Validate inputs on the server, throttle by IP/account, enforce CSRF / origin expectations as appropriate, protect the mail provider API key, add spam mitigation, and avoid logging sensitive messages.

## Limitations

This baseline is security-conscious, not a guarantee of a penetration-tested or attack-proof website. Security must be re-evaluated after dependencies, routes, hosting or external integrations change.
