---
layout: ../../layouts/LegalLayout.astro
title: Privacy Policy — Tripwire | OutpostLabs
description: How OutpostLabs handles data for Tripwire — dependency slip alerts for Jira Cloud. Runs on Atlassian Forge; no data leaves Atlassian Cloud.
backHref: /tripwire/
backLabel: ← Back to Tripwire
---

# Privacy Policy — Tripwire

**Last updated: [DATE — e.g. 24 July 2026]**

This Privacy Policy explains how **Outpost Labs** ("Outpost Labs", "we", "us") handles
information in connection with **Tripwire — Dependency Slip Alerts for Jira** (the "App"),
distributed through the Atlassian Marketplace and running on the Atlassian Forge platform.

Website: https://outpostlabs.dev · Contact: support@outpostlabs.dev

> **Summary (plain English).** Tripwire runs entirely on Atlassian's cloud. It does **not**
> send your data to any third party or to any server outside Atlassian. It watches the "blocks"
> links between your issues and stores only a small "dependency layer" over them (which issue
> blocks which, whether a blocker has slipped, and how it was alerted). We do not use cookies,
> advertising, or analytics, and we never sell your data.

## 1. Who is responsible for your data

For the personal data processed by the App, the Atlassian customer (the organization that
installed Tripwire on its Jira site) is the **data controller**, and Outpost Labs acts as a
**data processor** on that customer's behalf. We process data only to provide the App's
functionality.

## 2. The platform: Runs on Atlassian, no external egress

Tripwire is a Forge app. All of its code and storage run inside Atlassian Cloud. The App makes
**no network requests to Outpost Labs or to any third party**, and transfers **no customer data
outside of Atlassian's infrastructure**. We do not operate servers that receive your content,
and we cannot read your data except as exposed through Atlassian's standard partner tooling.

## 3. What data the App stores

Jira remains the source of truth for your issues, links, sprints, and dates. Tripwire stores
only the **dependency / accountability layer** in Forge storage:

- for each tracked dependency ("edge"): the **blocker and dependent issue keys and IDs**, the
  **dependent project key**, the link direction, the current **state** (OK / slipped / punted /
  stale / unblocked), a **slip count**, and the relevant **timestamps** and **due-date / sprint
  snapshots** used to detect the next change;
- the **anti-spam ledger** (which alert classes have fired for an edge, and when) and a short-lived
  record of recent bulk-change activity used to fold reshuffles;
- **digest bookkeeping** (the per-project "Dependency Digest" issue key and what has been rolled
  up); and
- your **global settings** and **per-project settings** (watched link types, thresholds, recipient
  configuration, digest weekday, and mute state).

**We do not store** the body of your issues, descriptions, comment threads, attachments, or any
work content beyond the identifiers, dates, and status facts needed to detect a slip.

## 4. What the App writes into your Atlassian site

To provide its features, the App writes the following **into the customer's own Jira site** (not
to us):

- **comments** on dependent issues when a blocker slips, is punted, goes stale, or resolves (the
  alert), which Jira delivers to the relevant people through its native notifications; and
- a lazily-created **"Dependency Digest" issue** per project (labelled `tripwire-digest`) that
  holds the weekly digest and any bulk-change summaries.

This content stays within your Atlassian site under Atlassian's control. The App does not change
your issues' dates, sprints, statuses, or links on your behalf.

## 5. Personal data we process

The personal data the App processes is limited to **display names and Atlassian account IDs** of
the people it needs to notify — the dependent issue's **assignee**, the **project lead**, and any
**additional recipients** you configure — used to show who's accountable and to @-mention them in
an alert. Issue summaries are free text authored by your users and may incidentally contain
personal data; advise your users not to put unnecessary personal data in issue summaries.

We do **not** process special categories of data, and the App is **not directed to children**.

## 6. Permissions (scopes) and why we need them

| Scope                       | Purpose                                                                       |
| --------------------------- | ----------------------------------------------------------------------------- |
| `read:jira-work`            | Read issues, links, dates, and statuses to detect dependency slips.           |
| `write:jira-work`           | Post the alert comment and maintain the per-project digest issue.             |
| `read:jira-user`            | Resolve display names of assignees, leads, and recipients to @-mention them.  |
| `read:sprint:jira-software` | Read sprint start dates to distinguish a real punt from routine sprint moves. |
| `storage:app`               | Persist the dependency layer, digest bookkeeping, and settings in Forge storage. |

## 7. Sub-processors

Our only infrastructure sub-processor is **Atlassian**, which hosts the App and its storage on
the Forge platform. We use no other sub-processors, analytics providers, or advertising
networks.

## 8. Data location and residency

Customer data handled by the App is stored in **Atlassian Cloud via Forge storage**. Where the
customer has configured Atlassian **data residency** for supported product data, the App's
in-scope stored data follows Atlassian's data residency capabilities for Forge.

## 9. Data retention and deletion

- Dependency records are retained while the link is active; a deactivated edge is purged after a
  short retention window (currently 90 days), and the App is capped so it never grows without
  bound.
- **Uninstalling** the App removes its Forge storage for that site.
- The comments and digest issue the App created remain in your Jira site and are managed by you,
  as with any other Jira content.
- To request access to, correction of, or deletion of personal data, contact
  support@outpostlabs.dev, or have your site administrator make the request. Because we act as a
  processor, we may direct such requests to the controlling customer.

## 10. Your rights

Depending on your jurisdiction (e.g. the GDPR or CCPA/CPRA), you may have rights to access,
correct, delete, or restrict processing of your personal data, and to data portability. As a
processor, we will assist the controlling customer in responding to verified requests. Contact
support@outpostlabs.dev.

## 11. Security

The App relies on Atlassian Forge's security model and "Runs on Atlassian" trust posture:
hosted execution, scoped permissions shown to the installing admin, and no external egress. We
do not log issue content; logs contain only opaque identifiers, counts, and outcomes. No secrets
are stored in the App.

## 12. Changes to this policy

We may update this policy from time to time. Material changes will be reflected by updating the
"Last updated" date above and, where appropriate, through the Marketplace listing.

## 13. Contact

Outpost Labs — support@outpostlabs.dev — https://outpostlabs.dev

---

_This document describes the data practices of the Tripwire App and is provided for transparency.
It is not a substitute for legal advice; the controlling customer remains responsible for its own
compliance obligations._
