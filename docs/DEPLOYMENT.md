# Deployment guide

## Local development
1. Copy `.env.example` to `.env` and replace placeholder credentials.
2. Run `docker compose up --build` from the repository root.
3. API health check: `http://localhost:8000/health`.
4. API docs in development: `http://localhost:8000/docs`.
5. Frontend: `cd apps/web && npm install && npm run dev`.

## Before deploying
- Configure secrets through the platform secret manager.
- Add production CORS, authentication, migrations, rate limiting, tests, and monitoring.
- Use managed PostgreSQL with TLS, backups, and least-privilege access.
- Add frontend container/hosting configuration and API base URL handling.
- Run build, unit, integration, security, and dependency checks in CI.
- Verify NIPOST endpoints with approved credentials and confirm terms.

The current Compose database is provisioned for future work; this scaffold does not yet implement database persistence.
