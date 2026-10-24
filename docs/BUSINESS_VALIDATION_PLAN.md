# RouteSure business validation plan

Status: planned — hypotheses only; no customer demand or willingness-to-pay has been validated yet.

## Objective

Determine whether Nigerian e-commerce sellers and logistics operators have an urgent address-quality problem, whether RouteSure can reduce its cost, and whether customers will pay enough to cover provider, hosting, support, and development costs.

## Initial customer segment

Start with one segment rather than building for everyone:
- Primary hypothesis: small and medium Nigerian online sellers processing repeat weekly deliveries.
- Secondary hypothesis: small courier/logistics operators handling multiple merchants.
- Buyer: owner, operations lead, or dispatch manager.
- Daily user: customer support, order processing, or dispatch staff.

## Problem hypotheses to test

1. Incomplete or ambiguous addresses create failed delivery attempts, customer calls, delays, or returns.
2. Staff currently solve this manually through phone calls, WhatsApp, landmarks, maps, or personal knowledge.
3. Address lookup/standardisation at checkout or order intake would save measurable time or reduce avoidable delivery failures.
4. A simple web workflow or API integration is useful enough to justify a recurring fee.
5. Customers can lawfully and contractually use the official postcode service through RouteSure, and provider costs permit healthy margins.

These are hypotheses, not established facts.

## Discovery interviews

Conduct 10–15 interviews before committing to a broad feature set. Ask about recent behaviour, not hypothetical enthusiasm.

Questions:
- Walk me through the last delivery where the address was wrong, incomplete, or hard to find.
- How often does this happen in a typical week or month?
- What happens next, and who spends time fixing it?
- What does one failed attempt cost you in money, time, or customer trust?
- How do you currently capture, verify, and share addresses?
- Which tools or APIs do you already pay for?
- Can you show a redacted example of the current workflow, using synthetic or anonymised data?
- Who approves a purchase like this, and what evidence do they need?
- Would you agree to a paid, time-limited pilot if the agreed success metric improves? What would need to be true?

Do not ask only “Would you use this?” Do not collect real customer addresses or phone numbers during discovery.

## Concierge pilot

Before building integrations for many platforms, manually onboard 3–5 design partners. Use synthetic data or customer-authorised, minimised test data and only after the provider terms permit the intended processing.

Pilot workflow:
1. Record a baseline for a clearly defined period.
2. Run the proposed address-check workflow alongside the current process.
3. Record lookups, no-match cases, manual corrections, staff time, provider failures, and address-related delivery outcomes where measurable.
4. Compare against baseline and document confounding factors.
5. Ask for a paid continuation or a specific purchasing commitment.

Do not claim that address validation caused a delivery improvement unless the measurement supports it.

## Pricing experiments (not market-validated)

Test value-based offers in customer conversations; do not publish as final prices yet:
- Starter: limited monthly address checks for a single store.
- Growth: higher usage, history/export, and team access.
- Business/API: usage-based access, keys, quotas, and integration support.

For each offer, estimate:
- Provider cost per billable check and any minimum commitment.
- Hosting, database, monitoring, email/SMS, payment fees, and support time.
- Expected monthly usage and gross margin.
- Overage and abuse risk.
- Whether the provider agreement allows commercial resale, proxying, caching, and the intended retention of returned data.

Never promise unlimited usage until provider limits and unit economics are known.

## Go / no-go gates

Proceed to a paid MVP only if:
- At least 10 target-customer interviews are completed and recurring pain is evidenced by recent examples.
- At least 3 prospects agree to a pilot, and at least 1 is willing to pay or signs a concrete paid-pilot commitment.
- The provider confirms access rights, commercial use, costs, quotas, and data-use terms in writing.
- A conservative unit-economics model shows positive contribution margin at expected usage.
- The pilot has one primary outcome metric and a baseline.

Reposition or stop if customers do not experience the problem often enough, official access terms block the model, or provider costs prevent sustainable margins.

## Core metrics

- Activation: customer completes first successful, provider-backed check.
- Weekly active customer organisations.
- Checks per active organisation.
- Provider success/error rate and p95 latency.
- No-result and manual-correction rates.
- Time saved per 100 checks.
- Address-related failed-delivery rate where reliable baseline data exists.
- Trial-to-paid conversion, monthly recurring revenue, churn, gross margin, support time per account.

## Two-week founder sprint

Week 1:
- Interview 5–7 prospects.
- Create a one-page offer and clickable/demo workflow.
- Request official NIPOST developer access and written commercial/API terms.
- Document provider pricing, quotas, and test-environment details.

Week 2:
- Finish 10–15 interviews.
- Recruit 3–5 design partners.
- Run a controlled workflow test only when provider permissions and privacy safeguards allow it.
- Calculate unit economics using observed usage and confirmed provider costs.
- Decide: continue, narrow the segment, change the offer, or stop.

## Founder responsibilities

RouteSure can support technical development, test design, documentation, research, sales materials, onboarding scripts, and analysis. The founder remains responsible for legal agreements, official provider account access, customer relationships, spending, final business decisions, and operational accountability.
