# MEMORY.md

This file stores durable project context so future work can continue without re-discovering key decisions.

## Project Identity

- Project name: `Code Blue Medical Consultancy`
- Domain: digital health / medical consultancy
- Product type: healthcare service website and patient workflow platform

## Confirmed Stack Decisions

- Frontend: `Next.js`
- Backend: `Django`
- Service integration: `Docker`
- Hosting target: `DigitalOcean VPS`

## Brand and UX Direction

- The site should look like a modern digital-health startup
- The brand should feel professional, calm, clean, and trustworthy
- The preferred visual language is more premium and product-led than traditional clinic branding
- Realistic healthcare imagery is preferred over abstract illustrations

## Logo Direction

- The active logo system is the `CB` monogram with an ECG pulse line
- Primary lockup text is `Code Blue Medical Consultancy`
- Brand assets live under `assets/branding/`
- Preferred usage:
  - `code-blue-logo-light.png` on light backgrounds
  - `code-blue-logo-dark.png` on dark backgrounds
  - `code-blue-mark-light.png` or `code-blue-mark-dark.png` for compact icon use

## Design System Context

- The repository should use the local `assets/branding/` logo files as the source of truth for branding

## Website Direction

The site should support:

- Homepage trust building
- Service discovery
- Consultation request intake
- Diagnostics or laboratory request intake
- Payment proof / process clarity
- Follow-up communication flows

## Infrastructure Intent

Likely deployment shape:

- `Next.js` app served behind a web server or reverse proxy
- `Django` app served with `Gunicorn`
- `PostgreSQL` as primary database
- Dockerized services on a `DigitalOcean` VPS

## Product Tone

- Calm
- Clear
- Credible
- Human
- Organized

## Notes for Future Work

- Keep imagery and text from competing in the same visual region
- Keep startup polish without losing medical trust
- Prioritize responsive design early
- Keep documentation updated as architecture becomes concrete
