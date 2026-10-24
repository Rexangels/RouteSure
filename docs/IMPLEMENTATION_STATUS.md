# Implementation status

Last updated: 2026-10-24

## Implemented

- React + TypeScript + Vite dashboard with Lucide icons and responsive styling.
- Address lookup form wired to the FastAPI autocomplete route, with input validation, loading, response preview, provider/API error, and network error states.
- FastAPI application, health endpoint, and postcode adapter routes.
- Environment-based settings and restricted local CORS configuration.
- Docker Compose development configuration.
- Backend pytest suite for health, query/lookup validation, mocked provider success, missing provider configuration, and timeout error mapping.
- Frontend Vitest/React Testing Library suite for dashboard content, demo disclosure, lookup validation, mocked success, API error, and network failure.
- GitHub Actions workflow for backend tests, frontend tests, and frontend production build.
- Product requirements, architecture, data model, API contracts, integration notes, privacy/security, deployment, roadmap, pilot metrics, test strategy, test cases, and Mermaid diagrams.

## Verification completed

GitHub Actions run for commit 1449dc1 passed both jobs:
- Backend tests: passed.
- Frontend tests: passed.
- Frontend production build: passed.

This verifies the core baseline only. The extended tests and production readiness gates in docs/TEST_CASES.md and docs/ROADMAP.md remain pending.

## Not yet implemented / not production-ready

- Official NIPOST API contract verification. Current endpoint paths and authentication header in the adapter are assumptions and must be confirmed from current official documentation/sandbox.
- Stable typed mapping of upstream response fields; the prototype currently returns provider JSON.
- Authentication, roles, and tenant isolation.
- Database models, migrations, or persisted address-check history.
- Live dashboard metrics; visible counts and recent checks are demo content.
- Browser end-to-end tests, security/dependency scanning, coverage thresholds, and performance tests.
- Production frontend container/hosting configuration, observability, quotas, billing, backups, and release runbooks.

## Next actions

1. Verify the official NIPOST API contract and sandbox credentials; update the adapter and provider contract tests.
2. Add extended input/provider failure tests and browser request timeout.
3. Implement stable API response models and real no-results/error handling.
4. Build the SaaS foundation: auth, tenant isolation, migrations, and address-check persistence.
5. Add end-to-end and security gates before onboarding pilot users.
