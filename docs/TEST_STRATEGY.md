# RouteSure test strategy

## Goals

Tests should prove that RouteSure validates inputs, maps upstream failures safely, does not fabricate postcode results, keeps credentials server-side, and prevents regressions as the SaaS foundation grows. All default CI tests use synthetic data and must run without live provider credentials.

## Test layers

| Layer | What it protects | Current status | Success criteria |
|---|---|---|---|
| Backend unit | Settings and provider adapter behavior | Initial tests added | Missing credentials fail closed; secrets never appear in client bundles or error details |
| Backend API | Health, query validation, lookup validation, error mapping | Initial tests added | All documented success/error paths have assertions; no external network calls |
| Frontend component | Dashboard content, status labels, demo-data disclosure | Initial tests added | Core UI renders in CI and clearly distinguishes demo values |
| Provider contract | Real request path, authentication, schemas, limits | Pending provider documentation/credentials | Verified against official sandbox with opt-in credentials; never required for normal CI |
| Database/integration | Migrations, persistence, tenant scoping, rollback | Pending | Isolated test database; cross-tenant reads/writes denied; migrations run cleanly |
| End-to-end | Address search from browser to API | Pending until lookup UI is wired | Search, loading, empty, success, validation, timeout, and retry states tested in a browser |
| Security | Dependency audit, secret scanning, authorization tests | Partial/pending | CI checks pass; no secret in history/client; auth and tenant boundary tests required before pilot |
| Performance/reliability | Provider timeout, rate limits, p95 latency | Pending | Agreed SLOs measured under representative synthetic load; no uncontrolled retries |

## Running tests locally

Backend (from repository root):

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

Coverage report:

```bash
cd apps/web
npm run test:coverage
```

## Core acceptance gates

1. **Input safety:** missing, too-short, too-long, and invalid-level parameters return 422.
2. **Provider failures:** missing credentials map to 503; provider timeouts/errors map to a generic 502 without leaking upstream detail.
3. **No fabricated data:** API returns provider-backed data only; dashboard metrics remain explicitly demo-labelled until live instrumentation exists.
4. **Credential safety:** keys are read by the backend only and are never embedded in frontend build variables.
5. **CI:** backend tests, frontend tests, and frontend production build pass for each pull request.
6. **Before pilot:** provider contract is verified, auth and tenant isolation are implemented and tested, database migrations/backups exist, and privacy/security review is complete.

## Test data rules

Use synthetic or approved sandbox records. Never commit real API keys, personal addresses, customer exports, or raw production provider payloads. Live contract tests must be opt-in and use environment-provided sandbox credentials.
