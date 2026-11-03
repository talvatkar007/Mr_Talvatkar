# Website implementation guide

## Architecture

```
Browser
  └── Next.js App Router (public home page)
        ├── Server: app/layout.tsx (metadata)
        ├── Server: app/page.tsx (entry point)
        ├── Client: components/portfolio.tsx (reveal animations, filter, clipboard, menu)
        ├── Data: content/site.ts (typed content inferred by TypeScript)
        ├── Styles: app/globals.css (responsive visual system)
        └── Hosting: Vercel / Node deployment (TLS, headers, edge protection)
```

## Design system

- Background: `#080b12`; surface: `#111622`; text: `#f2f5f7`; primary accent: `#bbf578`; secondary: `#ac92ff`.
- `shell` sets a maximum content width of 1200px.
- Breakpoints at 1100px, 820px and 600px.
- Animation relies on Framer Motion viewport reveal, CSS orbit/marquee/pulse and subtle hover transforms. Reduced-motion mode disables nonessential motion.
- Icons from `lucide-react`, included in the package manifest.

## Content workflow

1. Update `profile` with preferred public headline and social links.
2. Keep commercial case studies high level; never publish internal APIs, screenshots or customer names without approval.
3. If attaching a GitHub link to an enterprise project, ensure it is your own **public** repository and corresponds to the described work.
4. Add a new public project object to `openSource` and keep URL names exact.
5. For a new featured case study, include `name`, `summary`, `details`, `stack`, `tone`, `number`, `slug`, `type`, `symbol` and `public`.
6. To feature a real portrait, add an image you own to `public/portrait.webp` and implement `<Image>` from `next/image` with a meaningful `alt`. Do not hotlink arbitrary third-party images.

## AI roadmap (optional next phase)

The current website uses **AI-inspired visual design**; it does not falsely claim to host a running LLM. Future architecture could add a retrieval-backed 'Ask about my work' assistant that answers only from published case studies. Suggested guardrails: capped context, server-side keys, request validation, per-IP throttling, prompt-injection-aware retrieval, spending limits, no private resume/ERP data and links to public evidence.

## Accessibility

Use semantic headings/landmarks, keyboard-friendly anchors and native details/summary disclosure. Test with a screen reader; verify text contrast and tab order after customizing. Motion should remain optional.

## Validation checklist

- Navigation works on desktop and mobile.
- Work filter shows all/case studies/public repos correctly.
- Copy email reports success when clipboard is available; falls back to mailto if unavailable.
- All external repositories open in a new safe tab.
- All layouts render at 360, 768, 1024 and 1440px.
- All project claims are approved for public viewing.
