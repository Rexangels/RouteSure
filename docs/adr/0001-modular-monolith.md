# ADR 0001: Start with a modular monolith

- **Status:** Accepted
- **Decision:** Keep the initial API in one FastAPI deployment with explicit service boundaries.
- **Context:** The MVP needs fast iteration and straightforward local development; separate microservices would add deployment and operational cost before boundaries are proven.
- **Consequences:** Modules must remain cohesive and provider calls isolated. Revisit service extraction only when load, ownership, or release needs justify it.
