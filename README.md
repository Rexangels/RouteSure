# RouteSure

RouteSure is a SaaS starter for Nigerian logistics address validation and postcode intelligence, designed around the official Nigerian Postcode API (NIPOST).

## What is included

- **Web app:** React, TypeScript, Vite, and Lucide icons.
- **API:** FastAPI service with a postcode adapter.
- **Infrastructure:** Docker Compose configuration for local development.
- **Product docs:** requirements, architecture, data model, API contracts, security, deployment, roadmap, and pilot metrics.
- **Diagrams:** system architecture and address-lookup sequence (Mermaid).

> This is a development scaffold, not production-ready software. Authentication, tenant isolation, persistent storage, automated tests, CI/CD, and full end-to-end NIPOST verification remain implementation work. Do not use it to make operational delivery decisions until those controls have been implemented and tested.

## Quick start

1. Copy `.env.example` to `.env` and configure your NIPOST API key.
2. Start the services with `docker compose up --build`.
3. For frontend development outside Docker:
   ```bash
   cd apps/web
   npm install
   npm run dev
   ```
4. Check `docs/IMPLEMENTATION_STATUS.md` before extending the scaffold.

## API endpoints

- `GET /health` — service health.
- `GET /v1/search/autocomplete?q=...` — postcode/address autocomplete adapter.
- `GET /v1/lookup?code=...&level=1` — postcode lookup adapter.

The API integration uses `https://api.postcode.gov.ng` and sends the configured API key in the `X-API-Key` header. Confirm the current NIPOST API contract and credentials with the official provider before deployment.

## Project map

- `apps/web/` — React + TypeScript dashboard scaffold.
- `backend/` — FastAPI application and postcode service.
- `docs/` — product, architecture, API, security, deployment, and roadmap documentation.
- `docs/diagrams/` and `diagrams/` — Mermaid diagrams.

## Principles

- Treat postcode data as a provider-backed source, not a guessed location.
- Keep provider-specific logic behind a service adapter.
- Plan tenant isolation and least-privilege access before storing customer addresses.
- Never commit API keys or secrets; use environment variables.

## License

No license has been selected yet. All rights remain with the repository owner unless a license is added.
