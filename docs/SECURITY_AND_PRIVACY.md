# Security and privacy checklist

This repository is a scaffold; the following controls are required before production.

- Keep provider secrets server-side and out of the web bundle, logs, source control, and error responses.
- Add authentication, tenant-scoped authorization, and tests for cross-tenant access denial.
- Hash API credentials at rest and support rotation/revocation.
- Minimise address data collection; define lawful purpose, retention, export, and deletion workflows.
- Redact addresses, tokens, and upstream payloads from routine logs.
- Add request limits, input validation, rate limiting, dependency scanning, and secure headers.
- Restrict CORS to known origins in production; do not use wildcard origins with credentials.
- Configure TLS, database backups, restore drills, alerting, and incident response.
- Review applicable Nigerian privacy requirements and contractual provider terms with qualified counsel.
