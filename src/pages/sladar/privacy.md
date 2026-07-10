---
layout: ../../layouts/LegalLayout.astro
title: Privacy Policy — SLAdar | OutpostLabs
description: How OutpostLabs handles data for SLAdar — code review SLAs & stale pull request reminders for Bitbucket Cloud. Runs on Atlassian Forge; no data leaves Atlassian Cloud.
backHref: /sladar/
backLabel: ← Back to SLAdar
---

# Privacy Policy — SLAdar

**Last updated: [DATE — e.g. 10 July 2026]**

This Privacy Policy explains how **Outpost Labs** ("Outpost Labs", "we", "us") handles
information in connection with **SLAdar — Code Review SLAs & Stale Pull Request Reminders
for Bitbucket Cloud** (the "App"), distributed through the Atlassian Marketplace and
running on the Atlassian Forge platform.

Website: https://outpostlabs.dev · Contact: support@outpostlabs.dev

> **Summary (plain English).** SLAdar runs entirely on Atlassian's cloud. It does **not**
> send your data to any third party or to any server outside Atlassian. It stores only a small
> "SLA layer" over each pull request (who's reviewing, when it's due against your review SLA,
> its status, and how it was nudged). We do not use cookies, advertising, or analytics, and we
> never sell your data.

## 1. Who is responsible for your data

For the personal data processed by the App, the Atlassian customer (the organization that
installed SLAdar on its Bitbucket workspace) is the **data controller**, and Outpost Labs acts
as a **data processor** on that customer's behalf. We process data only to provide the App's
functionality.

## 2. The platform: Runs on Atlassian, no external egress

SLAdar is a Forge app. All of its code and storage run inside Atlassian Cloud. The App makes
**no network requests to Outpost Labs or to any third party**, and transfers **no customer data
outside of Atlassian's infrastructure**. We do not operate servers that receive your content,
and we cannot read your data except as exposed through Atlassian's standard partner tooling.

## 3. What data the App stores

Bitbucket remains the source of truth for the pull request itself. SLAdar stores only the **SLA
/ accountability layer** in Forge storage — for each tracked pull request:

- an internal tracker identifier, plus the **workspace and repository UUIDs**, the
  **repository slug**, and the **pull-request number**;
- the **pull-request title** and a **link** to the PR (for the dashboard);
- the **author's display name** and the **reviewers' display names**, so the App can show and
  address them in a nudge;
- the **created time** (the SLA clock anchor), the **first-review time** (if any), the current
  **state** (open / merged / declined / draft), and the computed **SLA status**;
- the **anti-spam ledger** (which nudge stages have fired, and when); and
- the workspace's **SLA policy** and **settings** (the hour targets, remind window, and
  skip-weekends flag).

**We do not store** the pull request's code, diffs, file contents, commit messages, or comment
threads.

## 4. What the App writes into your Atlassian site

To provide its features, the App writes the following **into the customer's own Bitbucket
workspace** (not to us):

- **comments** on pull requests that breach or approach their review SLA (the "nudge"), which
  Bitbucket delivers to the relevant people through its native notifications.

This content stays within your Atlassian site under Atlassian's control. The App does not push,
merge, or decline code on your behalf.

## 5. Personal data we process

The personal data the App processes is limited to **display names** of the PR author and
reviewers (used to show who's accountable and to @-mention them in a nudge) and the identifiers
above. The pull-request title is free text authored by your users and may incidentally contain
personal data; advise your users not to put unnecessary personal data in PR titles.

We do **not** process special categories of data, and the App is **not directed to children**.

## 6. Permissions (scopes) and why we need them

| Scope                        | Purpose                                                                 |
| ---------------------------- | ----------------------------------------------------------------------- |
| `read:pullrequest:bitbucket` | Read pull requests (title, reviewers, state, timestamps) to track SLAs. |
| `write:pullrequest:bitbucket`| Post the nudge comment on a stale pull request.                         |
| `read:repository:bitbucket`  | Identify the repository a pull request belongs to.                      |
| `read:workspace:bitbucket`   | Scope tracking and the dashboard to your workspace.                     |
| `storage:app`                | Persist the SLA layer, policy, and settings in Forge storage.           |

## 7. Sub-processors

Our only infrastructure sub-processor is **Atlassian**, which hosts the App and its storage on
the Forge platform. We use no other sub-processors, analytics providers, or advertising
networks.

## 8. Data location and residency

Customer data handled by the App is stored in **Atlassian Cloud via Forge storage**. Where the
customer has configured Atlassian **data residency** for supported product data, the App's
in-scope stored data follows Atlassian's data residency capabilities for Forge.

## 9. Data retention and deletion

- Pull-request tracker records are retained until the PR is deleted upstream or the App is
  **uninstalled**.
- **Uninstalling** the App removes its Forge storage for that workspace.
- The comments the App posted remain in your Bitbucket workspace and are managed by you, as
  with any other Bitbucket content.
- To request access to, correction of, or deletion of personal data, contact
  support@outpostlabs.dev, or have your workspace administrator make the request. Because we act
  as a processor, we may direct such requests to the controlling customer.

## 10. Your rights

Depending on your jurisdiction (e.g. the GDPR or CCPA/CPRA), you may have rights to access,
correct, delete, or restrict processing of your personal data, and to data portability. As a
processor, we will assist the controlling customer in responding to verified requests. Contact
support@outpostlabs.dev.

## 11. Security

The App relies on Atlassian Forge's security model and "Runs on Atlassian" trust posture:
hosted execution, scoped permissions shown to the installing admin, and no external egress. We
do not log pull-request content; logs contain only opaque identifiers, counts, and outcomes. No
secrets are stored in the App.

## 12. Changes to this policy

We may update this policy from time to time. Material changes will be reflected by updating the
"Last updated" date above and, where appropriate, through the Marketplace listing.

## 13. Contact

Outpost Labs — support@outpostlabs.dev — https://outpostlabs.dev

---

_This document describes the data practices of the SLAdar App and is provided for transparency.
It is not a substitute for legal advice; the controlling customer remains responsible for its
own compliance obligations._
