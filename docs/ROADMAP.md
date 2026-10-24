# RouteSure product and engineering roadmap

This is the source of truth for what is implemented, what is in progress, what is blocked, and what must be true before a release. Check off work only after acceptance criteria and tests pass.

## Current snapshot

- **Foundation:** starter UI, FastAPI service, provider adapter, environment configuration, and product/architecture docs exist.
- **Core quality gate:** backend tests, frontend tests, and the production build passed in GitHub Actions for commit 1449dc1.
- **Address lookup UI:** wired to the backend autocomplete endpoint with loading, success, validation, API-error, and network-error states.
- **CI:** GitHub Actions workflow is active for backend tests, frontend tests, and production build.
- **Critical blocker:** the NIPOST provider's current API contract (base URL, auth, routes, schemas, access terms) must be verified against official developer documentation before the integration can be considered live or reliable.
- **Not yet production-ready:** authentication, tenant isolation, database persistence, migrations, rate limits, observability, end-to-end tests, and security review.

## Phase 0 — Starter scaffold (complete as a scaffold)

- [x] Create product requirements, architecture, API contract notes, data model proposal, privacy/security notes, deployment guide, roadmap, and diagrams.
- [x] Create React + TypeScript + Vite dashboard with Lucide icons.
- [x] Create FastAPI service and health endpoint.
- [x] Isolate upstream calls in a postcode adapter.
- [x] Add environment template and local Docker Compose setup.

**Success looks like:** a new developer can understand the system, install dependencies, and identify which pieces are demo-only versus provider-backed. This phase does not claim production readiness.

## Phase 1 — Core quality gate (core baseline passed; hardening continues)

- [x] Add backend API tests for health, valid autocomplete/lookup requests, input validation, missing credentials, and upstream timeout mapping.
- [x] Add frontend tests for dashboard rendering, demo-data disclosure, lookup input validation, success response, API error, and network failure.
- [x] Add CI workflow for backend tests, frontend tests, and frontend production build.
- [x] Wire the lookup UI to the backend endpoint and add restricted local CORS configuration.
- [x] Run GitHub Actions: backend tests, frontend tests, and production build passed on commit 1449dc1.
- [ ] Add tests for maximum query length, blank/whitespace input, malformed JSON, and provider HTTP status errors.
- [ ] Add an API request timeout at the browser layer and accessible focus/status announcements.
- [ ] Add a basic manual smoke-test checklist for Docker and frontend local development.

**Success looks like:** core tests pass in a clean CI runner; default tests make no real provider calls and require no API key; the UI exposes loading/error/success states and never presents demo values as live validation results.

## Phase 2 — Official NIPOST integration (blocked on contract verification)

- [ ] Register/access the official developer portal and obtain approved sandbox credentials, if required.
- [ ] Confirm current base URL, endpoint paths, authentication header, request parameters, response schemas, error codes, rate limits, caching rules, and commercial/data-use terms.
- [ ] Record the verified contract and date in docs/POSTCODE_INTEGRATION.md.
- [ ] Replace assumptions in the adapter with verified values and typed Pydantic request/response models.
- [ ] Add mocked provider contract tests for success, no results, invalid credentials, forbidden access, throttling, server error, timeout, malformed response, and unexpected content type.
- [ ] Add opt-in sandbox smoke tests that run only when explicit sandbox credentials are provided.
- [ ] Add safe retry/backoff rules only where the provider contract allows them; never retry validation/auth errors blindly.
- [ ] Map provider responses to a stable RouteSure response schema rather than returning arbitrary upstream JSON.
- [ ] Add user-facing no-results and provider-unavailable states.

**Exit criteria:** every endpoint and header is backed by official documentation or sandbox evidence; no guessed API paths remain; contract tests pass; provider secrets never reach the browser or logs; provider terms are reviewed.

## Phase 3 — SaaS security and tenant foundation

- [ ] Choose authentication and session strategy; document the decision in an ADR.
- [ ] Add tenant, user, role, API credential, address check, and audit-event database models.
- [ ] Add migrations and isolated test-database fixtures.
- [ ] Implement tenant-scoped data access and authorization policies.
- [ ] Hash customer API keys at rest; support issue, one-time display, rotation, and revocation.
- [ ] Add rate limiting, quotas, request IDs, structured redacted logs, and safe error envelopes.
- [ ] Add password/session protections or managed identity-provider configuration.
- [ ] Add privacy notice, retention/deletion policy, and data export/deletion workflow.

**Exit criteria:** cross-tenant access tests prove isolation for every tenant-owned resource; revoked keys stop working; secrets and personal address data are not exposed in logs; migrations and backup/restore procedures are tested.

## Phase 4 — Address workflow and persistence

- [ ] Define the stable address result schema and field-level provenance (user-entered vs provider-returned).
- [ ] Add result selection/confirmation rather than treating every search suggestion as verified.
- [ ] Add address-check history backed by PostgreSQL.
- [ ] Add pagination, filtering, and clear empty/loading/error states.
- [ ] Add bulk CSV validation only after privacy, quotas, provider terms, and error recovery are designed.
- [ ] Add audit trail for lookup actions and data changes.

**Exit criteria:** a user can search, review a provider-backed result, confirm it, retrieve past checks in their tenant, and export/delete their own records according to policy.

## Phase 5 — Reliability, security, and release readiness

- [ ] Add dependency and secret scanning to CI.
- [ ] Add coverage reporting and meaningful thresholds after the suite stabilises.
- [ ] Add API and browser end-to-end tests using synthetic data.
- [ ] Add performance tests for expected concurrency and provider latency.
- [ ] Configure production CORS, TLS, managed secrets, database backups, monitoring, and alerts.
- [ ] Complete threat model, privacy review, incident response runbook, and release checklist.
- [ ] Run accessibility checks at desktop and mobile sizes.

**Exit criteria:** CI is green; critical flows pass end-to-end; security review has no unresolved critical/high findings; rollback and restore have been rehearsed; operational owners and alert routes are defined.

## Phase 6 — Controlled pilot

- [ ] Recruit a small number of logistics/e-commerce pilot users.
- [ ] Onboard with explicit terms and approved data only.
- [ ] Establish baseline and definitions for validation completion, correction rate, provider latency/error rate, and address-related failed deliveries.
- [ ] Review weekly with pilot users and prioritise the highest-impact friction.
- [ ] Agree commercial pricing and provider costs before general availability.

**Success looks like:** users complete address checks reliably, provider results are understood rather than over-trusted, support burden is measured, and privacy/security obligations are met. Do not use demo dashboard metrics as evidence of pilot outcomes.

## Definition of done for every feature

1. Requirements and acceptance criteria are written.
2. Unit and integration tests cover expected behaviour and important failure paths.
3. UI includes loading, empty, error, and success states where relevant.
4. Accessibility and mobile behaviour are checked.
5. No secrets or real personal data are committed.
6. Documentation and docs/IMPLEMENTATION_STATUS.md are updated.
7. CI passes on the branch before merge.
