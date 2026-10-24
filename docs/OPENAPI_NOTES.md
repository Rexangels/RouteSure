# OpenAPI notes

FastAPI currently generates an OpenAPI document automatically at `/openapi.json` and interactive docs at `/docs` in the default development configuration.

Before public API launch:
- Define stable public schemas instead of returning unvalidated upstream JSON.
- Document authentication, quotas, error codes, pagination, and versioning.
- Add examples that contain synthetic addresses only.
- Consider disabling interactive docs in production or protecting them according to deployment policy.
