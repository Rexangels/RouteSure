# ADR 0002: Isolate postcode provider integration

- **Status:** Accepted
- **Decision:** Route all provider requests through a dedicated service adapter.
- **Context:** API endpoints, credentials, schemas, and limits may evolve; the rest of the application should not depend directly on provider-specific details.
- **Consequences:** Add contract tests, typed mapping, timeouts, and error translation at the adapter boundary. Verify endpoint assumptions against official documentation before release.
