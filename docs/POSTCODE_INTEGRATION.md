# NIPOST integration notes

Configured base URL: `https://api.postcode.gov.ng`. The adapter currently sends the key using `X-API-Key` and calls `/v1/search/autocomplete` and `/v1/lookup` as an initial scaffold.

**Important:** verify the base URL, authentication header, route paths, query parameters, response schemas, rate limits, and commercial terms using current official NIPOST documentation and credentials before treating these endpoints as verified. The scaffold deliberately does not fabricate successful results if credentials are absent.

## Checklist
- [ ] Confirm current provider docs, API version, authentication, and key scope.
- [ ] Add request/response models based on real provider examples.
- [ ] Add bounded retries for safe transient failures and respect rate-limit headers.
- [ ] Add timeouts, redacted observability, and tests for success, empty result, auth failure, throttling, timeout, and malformed response.
- [ ] Review data retention, attribution, and caching terms.
