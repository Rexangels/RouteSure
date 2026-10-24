# RouteSure test cases and acceptance matrix

Use this matrix alongside the implementation roadmap. “Added” means a test exists; “Passed” means the relevant CI job has reported success.

## Core automated tests

| ID | Area | Scenario | Expected result | Status |
|---|---|---|---|---|
| API-001 | Health | GET /health | 200 and service status is ok | Passed in CI |
| API-002 | Autocomplete | Valid query with mocked provider result | 200 and result passed through | Passed in CI |
| API-003 | Autocomplete | Missing query | 422 validation response | Passed in CI |
| API-004 | Autocomplete | One-character query | 422 validation response | Passed in CI |
| API-005 | Lookup | Valid code and level | 200 and result passed through | Passed in CI |
| API-006 | Lookup | Too-short code | 422 validation response | Passed in CI |
| API-007 | Lookup | Level below/above allowed range | 422 validation response | Passed in CI |
| API-008 | Provider config | Missing API key | 503; no provider request made | Passed in CI |
| API-009 | Provider reliability | Timeout from adapter | 502 with generic message | Passed in CI |
| API-010 | Credentials | Provider headers use configured server-side key | Header builder uses configured key | Passed in CI |
| WEB-001 | Dashboard | Core heading and navigation entry points render | Expected content is accessible | Passed in CI |
| WEB-002 | Demo disclosure | Demo data notice is visible | UI does not imply demo counts are live | Passed in CI |
| WEB-003 | Lookup validation | Query shorter than two characters | Inline error; fetch is not called | Passed in CI |
| WEB-004 | Lookup success | Mock API returns JSON | Result preview is displayed | Passed in CI |
| WEB-005 | API failure | Mock API returns non-2xx response | Safe error message is displayed | Passed in CI |
| WEB-006 | Network failure | Fetch rejects | Network error is displayed | Passed in CI |
| CI-001 | Backend | Run pytest on clean checkout | All backend tests pass | Passed |
| CI-002 | Frontend | Run Vitest once | All frontend tests pass | Passed |
| CI-003 | Build | TypeScript check and Vite production build | Build exits successfully | Passed |

## Required next tests

| ID | Area | Scenario | Acceptance criteria |
|---|---|---|---|
| API-011 | Input boundaries | Query at max length and above max | Boundary accepted; above max returns 422 |
| API-012 | Input normalisation | Whitespace-only query | Rejected clearly; no upstream call |
| API-013 | Provider response | Malformed JSON or unexpected content type | Stable 502 response; no traceback or upstream body leaked |
| API-014 | Provider response | 401/403/404/429/5xx from provider | Each category mapped intentionally; no blind retry on auth/validation errors |
| API-015 | Provider response | Empty result set | Stable empty-result schema, not an exception or fabricated result |
| API-016 | Timeout | Provider response exceeds configured timeout | Request terminates within the defined timeout budget |
| API-017 | CORS | Allowed local frontend origin | Browser preflight permits the configured origin |
| API-018 | CORS | Unlisted origin | Origin is not allowed |
| WEB-007 | Lookup | Loading state while request is pending | Button is disabled and loading indicator is accessible |
| WEB-008 | Lookup | Empty provider result | Helpful no-results message |
| WEB-009 | Lookup | Malformed response body | Friendly error; no raw exception stack |
| WEB-010 | Accessibility | Keyboard-only search flow | Input, button, errors, and result can be used/read by keyboard and assistive technology |
| DB-001 | Migrations | Empty database upgrade | All migrations complete successfully |
| SEC-001 | Tenant isolation | Tenant A requests Tenant B's resource | 403/404 with no data leakage |
| SEC-002 | API keys | Revoked/invalid customer key | Request denied; no credential in logs |
| SEC-003 | Privacy | Error and access logs | No API secrets or unnecessary full address data |
| E2E-001 | Full flow | Search with mocked provider | Search input to API response is verified in a browser |
| PERF-001 | Load | Representative concurrent lookups | Agreed p95 latency/error budget met without uncontrolled retries |

## Manual smoke test (current scaffold)

1. Copy the environment template to .env; keep real secrets out of source control.
2. Start the API and database containers using Docker Compose.
3. Open the API health endpoint and confirm status is ok.
4. Start the frontend with npm install and npm run dev.
5. Search for a synthetic query. Confirm loading state and a clear error if the provider is not configured.
6. If sandbox access is configured, confirm the returned JSON is from the provider and not fabricated.
7. Verify the page at mobile and desktop widths.
8. Confirm no API key appears in browser devtools, built frontend assets, console output, or Git history.

## Test data and safety

- Default tests use mocked/synthetic data only.
- Never require production credentials in CI.
- Do not commit real postcodes linked to identifiable people, full delivery addresses, API keys, or production response dumps.
- Sandbox tests must be opt-in and use approved test credentials.
