# RouteSure

RouteSure is a SaaS starter for Nigerian logistics address validation and postcode intelligence, designed around the official Nigerian Postcode API (NIPOST).

## What is included

- **Web app:** React, TypeScript, Vite, and Lucide icons.
- **Address lookup UI:** autocomplete form connected to the RouteSure API, with loading, validation, success, provider-error, and network-error states.
- **API:** FastAPI service with a postcode adapter.
- **Infrastructure:** Docker Compose configuration for local development.
- **Tests:** pytest backend suite, Vitest/React Testing Library frontend suite, and GitHub Actions CI.
- **Product docs:** requirements, architecture, data model, API contracts, security, deployment, roadmap, test strategy, and test cases.
- **Diagrams:** system architecture and address-lookup sequence (Mermaid).

> This is a development scaffold, not production-ready software. Authentication, tenant isolation, persistent storage, end-to-end tests, and production hardening remain implementation work. The NIPOST endpoint paths and authentication header in the current adapter are assumptions pending verification against current official developer documentation and sandbox access. Do not use it to make operational delivery decisions until those controls and provider details have been implemented and tested.

## Quick start

1. Copy the environment template to .env and configure the backend settings. Keep provider keys on the server; never put them in Vite variables.
2. Start the API and database services with Docker Compose.
3. For frontend development outside Docker:
   ```bash
   cd apps/web
   cp .env.example .env
   npm install
   npm run dev
   ```
4. Check docs/IMPLEMENTATION_STATUS.md and docs/ROADMAP.md before extending the scaffold.

## Run tests

Backend (from the repository root):

```bash
pip install -r backend/requirements-dev.txt
cd backend
pytest
```

Frontend:

```bash
cd apps/web
npm install
npm run test:run
npm run build
```

See docs/TEST_STRATEGY.md and docs/TEST_CASES.md for coverage, acceptance gates, and manual smoke checks. Do not report tests as passing until the test command or GitHub Actions run has completed successfully.

## API endpoints

- GET /health — service health.
- GET /v1/search/autocomplete?q=... — postcode/address autocomplete adapter.
- GET /v1/lookup?code=...&level=1 — postcode lookup adapter.

The current adapter is configured with base URL https://api.postcode.gov.ng and an X-API-Key header as initial assumptions. Confirm the current official NIPOST API contract, authentication, routes, schemas, access rights, and usage terms before deployment.

## Project map

- apps/web/ — React + TypeScript dashboard and address lookup.
- backend/ — FastAPI application, postcode service adapter, and pytest tests.
- docs/ — product, architecture, API, security, deployment, roadmap, and test documentation.
- docs/diagrams/ and diagrams/ — Mermaid diagrams.
- .github/workflows/ci.yml — backend/frontend test and build workflow.

## Principles

- Treat postcode data as provider-backed source data, not a guessed location.
- Keep provider-specific logic behind a service adapter.
- Plan tenant isolation and least-privilege access before storing customer addresses.
- Never commit API keys or secrets; use environment variables.
- Treat dashboard counts as demo content until backed by real instrumentation.

## License

No license has been selected yet. All rights remain with the repository owner unless a license is added.
