# Roadmap

## Phase 0 — scaffold (current)
- [x] Create product and architecture docs.
- [x] Add React dashboard demo and FastAPI service shell.
- [x] Isolate provider calls behind a NIPOST adapter.

## Phase 1 — verified provider integration
- [ ] Confirm official API contract and authentication.
- [ ] Define typed request/response models and error mapping.
- [ ] Add mocked contract tests and frontend lookup form.

## Phase 2 — SaaS foundation
- [ ] Authentication, organisations/tenants, roles, API key lifecycle.
- [ ] PostgreSQL migrations and tenant-scoped repository layer.
- [ ] Address-check history and audit events.

## Phase 3 — operational readiness
- [ ] Rate limiting, quotas, usage analytics, and billing integration.
- [ ] CI/CD, observability, backups, incident playbooks.
- [ ] Privacy review, security review, pilot feedback loop.

## Phase 4 — pilot
- [ ] Onboard a small number of logistics/e-commerce teams.
- [ ] Measure address acceptance, correction rate, provider latency, and downstream delivery outcomes.
- [ ] Expand only after quality and privacy targets are met.
