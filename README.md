# Code Blue Medical Consultancy

Code Blue Medical Consultancy is a digital-health platform concept for consultation requests, laboratory coordination, payment proof handling, and patient follow-up.

The product direction is a modern, trustworthy healthcare experience with:

- A `Next.js` frontend
- A `Django` backend
- Docker-based local and deployment orchestration
- Planned VPS hosting on DigitalOcean

## Vision

Build a calm, premium, startup-style healthcare experience that helps patients:

- Request consultations
- Coordinate laboratory services
- Upload supporting documents or payment proof
- Receive clearer next steps and follow-up

The experience should feel:

- Credible
- Simple
- Fast
- Human

## Planned Architecture

### Frontend

- Framework: `Next.js`
- Responsibility:
  - Marketing website
  - Patient-facing request flows
  - Design system implementation
  - Responsive UI for desktop and mobile

### Backend

- Framework: `Django`
- Responsibility:
  - Business logic
  - Request intake and workflow handling
  - Authentication and admin operations
  - API endpoints for frontend consumption
  - File/document handling

### Infrastructure

- Containerization: `Docker`
- Hosting target: `DigitalOcean VPS`
- Expected supporting services:
  - `PostgreSQL`
  - `Nginx`
  - `Gunicorn`
  - Optional object storage for uploads

## Product Direction

The current design direction is:

- Modern digital-health startup aesthetic
- Clean typography and strong spacing
- Confident but calm blue/teal healthcare palette
- Realistic healthcare imagery instead of abstract placeholders
- Minimal visual clutter
- `Code Blue Medical Consultancy` branding with the `CB` ECG logo system in `assets/branding/`

## Core User Flows

- Homepage trust-building and service discovery
- Consultation or diagnostics request submission
- Lab coordination and requisition handling
- Payment clarity and proof submission
- Follow-up and status visibility

## Documentation

- [AGENTS.md](AGENTS.md): Working rules for coding agents and contributors
- [MEMORY.md](MEMORY.md): Durable project context and decisions
- [assets/README.md](assets/README.md): Brand asset locations and logo usage notes

## Current Status

This repository is in its early setup stage. The initial priorities are:

1. Establish project structure
2. Apply the `Code Blue Medical Consultancy` logo system consistently across future frontend and marketing surfaces
3. Build frontend foundation in `Next.js`
4. Stand up API/backend foundation in `Django`
5. Connect both via Docker for local development and deployment
