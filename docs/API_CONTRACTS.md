# API contracts

Base path: `/v1`. These routes are starter adapters and must be checked against the current official NIPOST contract.

## `GET /v1/search/autocomplete?q={query}`
- `q`: required, 2–120 characters.
- Returns the provider response as JSON for now; define and validate a stable public response schema before release.
- `503`: provider credentials are not configured.
- `502`: provider request failed.

## `GET /v1/lookup?code={postcode}&level=1`
- `code`: required, 2–32 characters.
- `level`: integer 1–5, defaults to 1; confirm supported levels with the provider.
- Returns the provider response as JSON for now.

## `GET /health`
Returns service health metadata. Do not treat this as a full dependency/readiness check.

## Planned conventions
- Add authentication and tenant context before any customer-specific history endpoints.
- Standardise errors as `{ code, message, request_id }` without leaking upstream response bodies or secrets.
- Add pagination, idempotency where needed, versioning policy, and OpenAPI examples.
