# Product requirements — RouteSure

## Problem
Nigerian logistics teams often receive inconsistent or incomplete delivery addresses. Manual correction increases failed deliveries, support costs, and customer frustration.

## Product goal
Provide an address intelligence workflow that helps teams standardise and validate addresses using trusted postcode data, while clearly surfacing uncertainty rather than inventing missing details.

## Primary users
- Dispatch and operations teams
- E-commerce and marketplace operators
- Customer support agents
- Developers integrating address validation into checkout and fulfilment flows

## MVP scope
1. Search address/postcode records through the official NIPOST API adapter.
2. Show provider-backed lookup results and distinguish verified data from user-entered values.
3. Keep a history of checks after authentication and persistence are implemented.
4. Provide an API for customer integrations, with tenant-specific API keys in a later milestone.
5. Instrument validation quality, provider errors, latency, and usage.

## Out of scope for first release
- Predicting or fabricating postcodes
- Autonomous dispatch routing
- Payments and driver tracking
- Claims of deliverability without an appropriate provider signal

## Acceptance criteria
- Invalid or missing queries receive a clear client error.
- Provider timeouts/errors are surfaced as service errors without exposing credentials.
- No API keys or personal addresses are logged by default.
- UI identifies demo data and does not imply the displayed metrics are live.
- Integration tests use mocked provider responses and never require production secrets.

## Success metrics
See [Pilot metrics](PILOT_METRICS.md).
