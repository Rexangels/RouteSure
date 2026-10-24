# Data model (planned)

This is a proposed schema, not implemented persistence.

- `tenants`: id, name, plan, status, created_at
- `users`: id, tenant_id, email, role, status, created_at
- `api_credentials`: id, tenant_id, key_prefix, secret_hash, last_used_at, revoked_at
- `address_checks`: id, tenant_id, requested_query, provider_reference, normalized_result_json, outcome, latency_ms, created_at
- `audit_events`: id, tenant_id, actor_id, action, resource_type, resource_id, metadata_redacted_json, created_at

## Data rules
- Every tenant-owned row must include `tenant_id` and queries must scope by it.
- Store API credential hashes, not raw secrets; show secrets only once on creation.
- Define retention and deletion policies before storing personal addresses.
- Do not store full provider responses unless needed and contractually permitted.
- Use migrations and test cross-tenant access denial explicitly.
