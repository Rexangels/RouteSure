# RouteSure 90-Day Execution Plan

**Founder goal:** recurring side income  
**Initial budget:** modest pilot and essential services  
**Beachhead segment:** Nigerian courier and logistics operators  
**Status:** execution plan; targets are hypotheses, not guaranteed outcomes.

## Strategy

Build a narrow workflow that helps a courier or logistics operator capture, resolve, confirm, and reuse precise delivery-location references. Do not market postcode lookup alone as proof that a delivery address is correct or that a parcel will be delivered successfully.

Start with a manual/concierge pilot and one repeatable workflow. Avoid expensive infrastructure and broad integrations until a customer commits to paying.

## North-star outcome

At least one logistics operator pays for a pilot or subscription because RouteSure measurably improves an address-related workflow, with positive conservative contribution margin and provider terms that permit the intended commercial use.

## Days 1–14: Validate the problem and provider terms

### Customer discovery
- [ ] Build a list of 15 courier/logistics operators, prioritising small-to-medium operators and local dispatch firms.
- [ ] Complete 5–7 interviews in week 1 and 10–15 by day 14.
- [ ] Ask for recent examples of hard-to-find addresses, failed attempts, repeated customer calls, and manual correction work.
- [ ] Quantify frequency, staff time, and cost where the operator can substantiate it.
- [ ] Map the existing workflow from order received to driver finding the destination.
- [ ] Record the buyer, daily user, current tools, purchasing process, and objections.
- [ ] Avoid collecting real recipient addresses or phone numbers during discovery.

### Provider access
- [ ] Create or verify the official NIPOST developer/organisation account.
- [ ] Request sandbox/development credentials and confirm what those credentials permit.
- [ ] Ask NIPOST in writing about production access, commercial pricing, rate limits, service levels, caching, data retention, resale/proxy rights, and required agreements.
- [ ] Record the current verified contract and date in docs/POSTCODE_INTEGRATION.md.
- [ ] Do not use guessed endpoints or market the integration as live.

### Day-14 gate
Continue if the interviews show repeated, costly pain and at least three operators agree to explore a pilot. If not, narrow the use case before adding features.

## Days 15–30: Define the smallest useful workflow

### Product hypothesis
A dispatcher or customer-service staff member can:
1. Enter or paste a destination's Digital Postcode or search using the permitted official flow.
2. Resolve the postcode/location using verified provider API behaviour.
3. Review the returned location information.
4. Confirm it matches the intended destination or mark it as unresolved.
5. Attach the confirmed reference to an internal test delivery record, if provider terms and privacy controls permit.
6. See a clear reason when the lookup returns no match or the provider is unavailable.

A postcode format check is not proof that a code exists. A valid postcode is not proof of recipient availability, access instructions, or successful delivery. Preserve these distinctions in the UI and marketing.

### Engineering checklist
- [ ] Verify official API routes, auth, schema, error codes, quotas, and commercial terms.
- [ ] Implement typed provider request/response models and a stable RouteSure response schema.
- [ ] Add provider contract tests for success, no match, invalid credentials, forbidden access, throttling, server error, timeout, malformed response, and unexpected content type.
- [ ] Add explicit test/sandbox configuration; normal CI must not require provider credentials.
- [ ] Keep secrets server-side and redact credentials and personal data from logs.
- [ ] Add request timeout, safe retry behaviour only where provider guidance permits, and request IDs.
- [ ] Add accessible loading, empty, confirmation, and failure states.
- [ ] Run a manual smoke test against the approved sandbox, when available.

### Commercial checklist
- [ ] Recruit 3–5 design partners.
- [ ] Agree in writing on pilot scope, duration, responsibilities, data handling, and success metric.
- [ ] Use synthetic data first; use customer-authorised, minimised data only after legal/provider terms and security controls allow it.
- [ ] Create a demo script and one-page pilot offer.

## Days 31–60: Run a controlled pilot

### Pilot structure
- [ ] Establish a baseline for the current workflow before introducing RouteSure.
- [ ] Track lookup attempts, successful resolutions, no-match cases, manual correction rate, provider errors/latency, and staff time.
- [ ] If the operator has trustworthy delivery data, agree on a way to track address-related failed attempts without overclaiming causation.
- [ ] Review results with each operator weekly.
- [ ] Log support requests and the time they consume.
- [ ] Ask each pilot customer what would make them continue paying.

### Pilot success measures
Agree on the primary metric with each operator before the pilot. Potential measures:
- Time spent resolving a delivery destination per order.
- Percentage of address records with a confirmed location reference.
- Manual follow-up calls per 100 orders.
- Rate of unresolved destinations at dispatch.
- Address-related failed delivery attempts, only where reliably defined and measured.

Do not claim improvement unless the baseline and observed data support it. Separate correlation from causation.

## Days 61–90: Convert to recurring revenue or change course

- [ ] Present each pilot customer with a concise results report.
- [ ] Offer a paid continuation with a clear usage cap and support boundary.
- [ ] Test monthly plans only after confirming provider costs and commercial rights.
- [ ] Estimate per-customer variable cost: provider usage, infrastructure, payments, and support time.
- [ ] Estimate contribution margin and a conservative break-even point.
- [ ] Ask for a purchase decision; positive feedback without a commitment is not proof of willingness to pay.
- [ ] Prioritise only the features needed by multiple customers or explicitly required by a paying customer.
- [ ] If there is no paid commitment by day 90, interview lost prospects and change the segment, use case, or offer before adding broad features.

## Pricing experiments (not approved price list)

Use customer interviews to test the value and packaging of:
- **Pilot:** time-limited, defined scope and usage cap.
- **Starter:** one team, basic lookup/confirmation workflow, limited monthly usage.
- **Operations:** team workflow, history, exports, higher usage, and basic reporting.
- **API:** developer integration, API keys, quotas, usage reporting, and support boundaries.

Do not promise unlimited lookups or publish a fixed price until commercial API charges, limits, and allowed use are confirmed. The official NIPOST developer initiative currently states development access is free while building, with live commercial pricing to be confirmed; treat this as a provider question to re-check, not a permanent price guarantee.

## Modest-budget rules

- Use existing GitHub Actions and low-cost hosting while the pilot is small.
- Prefer one backend, one database, and one deployable web application; avoid premature microservices.
- Do not pay for broad marketing before interviews and pilot evidence.
- Do not buy bulk data or scrape address datasets.
- Do not store full recipient addresses unless needed, authorised, secured, and covered by retention/deletion policy.
- Track spending monthly and set a hard pilot budget before subscribing to paid services.
- Keep a separate record of cash costs and founder hours so "free" founder labour does not hide unprofitable economics.

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| Postcode lookup does not solve the operator's biggest problem | Interview around real failed or delayed deliveries; validate the workflow before expanding |
| API production pricing or rights make resale uneconomic | Obtain written terms before pricing or launch |
| Operators like the demo but will not pay | Ask for a paid-pilot commitment early |
| Inaccurate assumptions create false confidence | Use official contract evidence and explicit user confirmation |
| Personal address data creates privacy/security exposure | Minimise collection, redact logs, define retention, restrict access, and review Nigerian data-protection obligations |
| Side project scope becomes too large | Limit each sprint to one customer outcome and one release gate |

## Weekly founder cadence

- **Monday:** review customer pipeline, top product risk, and one weekly outcome.
- **Midweek:** customer calls and a short product demo.
- **Friday:** review tests, spending, user evidence, and decide continue/change/stop.
- Maintain a simple tracker with prospect, last contact, pain evidence, next step, pilot status, and purchase decision.

## Decision gates

### Gate A — problem evidence (day 14)
At least 10 interviews, repeated recent pain, three pilot candidates.

### Gate B — technical and legal feasibility (day 30)
Verified provider contract and commercial terms; sandbox flow works; privacy/security controls are sufficient for the agreed test.

### Gate C — product value (day 60)
Pilot data shows a useful outcome against a defined baseline, with support burden measured.

### Gate D — willingness to pay (day 90)
At least one paying pilot or recurring commitment and a plausible positive contribution margin. Otherwise, do not scale infrastructure; revise the offer.

## Founder and assistant responsibilities

ChatGPT can help with code, tests, documentation, customer research scripts, financial models, analysis, demos, and prioritisation. The founder remains responsible for provider registration, customer relationships, contracts, budget approval, legal/compliance decisions, and real-world operations.
