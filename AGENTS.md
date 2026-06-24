# AGENTS.md

This file helps coding agents and contributors work consistently in the Code Blue Medical Consultancy project.

## Project Summary

Code Blue Medical Consultancy is being built as a digital-health platform using:

- `Next.js` for the frontend
- `Django` for the backend
- `Docker` to connect services
- `DigitalOcean VPS` for hosting

The product should feel like a modern healthcare startup: calm, trustworthy, clear, and premium.

## Primary Goals

- Build a polished patient-facing web experience
- Support consultation and diagnostics request flows
- Enable lab coordination and supporting-document workflows
- Maintain a strong visual system that feels professional and modern
- Keep the codebase production-oriented from the start

## Working Principles

- Preserve clarity over cleverness
- Favor maintainable architecture
- Keep frontend and backend boundaries explicit
- Reuse components and tokens instead of duplicating styles
- Optimize for trust, readability, accessibility, and mobile usability

## Frontend Guidance

- Use `Next.js` app structure cleanly and consistently
- Build reusable UI primitives before page-specific variants
- Match the approved Figma direction where possible
- Prefer realistic medical imagery in product/marketing contexts
- Avoid cluttered layouts, weak contrast, and generic healthcare clichés

## Backend Guidance

- Keep `Django` apps separated by domain responsibility
- Prefer API-first design for frontend integration
- Validate all patient-submitted data carefully
- Design for future auditability of request and document workflows
- Keep secrets and configuration out of source files

## Docker Guidance

- Keep local development simple to start
- Separate services clearly:
  - `frontend`
  - `backend`
  - `database`
  - optional `nginx`
- Use environment variables for per-environment configuration

## Expected Near-Term Structure

The repository will likely grow toward:

- `frontend/` for `Next.js`
- `backend/` for `Django`
- `docker/` or root Docker config for orchestration
- `docs/` for product or technical documentation if needed

## Design Standards

- Modern digital-health startup look
- Strong whitespace
- Credible typography
- Blue/teal-led palette unless intentionally revised
- Realistic photography with minimal overlap from text/cards
- Components should feel light, premium, and structured

## When Making Changes

- Check if the change affects both frontend and backend contracts
- Keep API assumptions documented
- Prefer small, reviewable edits
- Add docs when making architectural decisions
- Do not introduce unnecessary complexity early

## Decision Defaults

If no newer instruction overrides this file, assume:

- Frontend framework: `Next.js`
- Backend framework: `Django`
- Local integration: `Docker`
- Deployment target: `DigitalOcean VPS`
- Brand direction: modern, premium, trustworthy digital health
