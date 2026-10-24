# Implementation status

## Present in scaffold
- React + TypeScript + Vite dashboard with Lucide icons and responsive styling.
- FastAPI application, health endpoint, and two postcode adapter routes.
- Environment-based settings and a Docker Compose development stack.
- Product, architecture, data model, API, provider integration, privacy, deployment, roadmap, and pilot documentation.

## Not yet implemented / not production-ready
- Authentication and tenant isolation.
- Database models, migrations, or persisted address-check history.
- Frontend address lookup workflow wired to the API.
- Verified live NIPOST API contract and provider-backed integration tests.
- Automated tests, CI/CD, production frontend container, observability, quotas, and billing.

Treat the dashboard numbers as demo content. Validate all provider endpoint assumptions before using real customer data.
