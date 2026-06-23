---
layout: default
title: Privacy Policy — Resurface
---

# Privacy Policy — Resurface

**Last updated: [DATE — e.g. 23 June 2026]**

This Privacy Policy explains how **Outpost Labs** ("Outpost Labs", "we", "us") handles
information in connection with **Resurface — Retro Action Item Tracker & Accountability
for Jira** (the "App"), distributed through the Atlassian Marketplace and running on the
Atlassian Forge platform.

Website: https://outpostlabs.dev · Contact: support@outpostlabs.dev

> **Summary (plain English).** Resurface runs entirely on Atlassian's cloud. It does **not**
> send your data to any third party or to any server outside Atlassian. We store only a small
> "accountability layer" (who owns an action item, when it's due, its status, and how often it
> has been carried over). We do not use cookies, advertising, or analytics, and we never sell
> your data.

## 1. Who is responsible for your data

For the personal data processed by the App, the Atlassian customer (the organization that
installed Resurface on its Atlassian site) is the **data controller**, and Outpost Labs acts
as a **data processor** on that customer's behalf. We process data only to provide the App's
functionality.

## 2. The platform: Runs on Atlassian, no external egress

Resurface is a Forge app. All of its code and storage run inside Atlassian Cloud. The App
makes **no network requests to Outpost Labs or to any third party**, and transfers **no
customer data outside of Atlassian's infrastructure**. We (Outpost Labs) do not operate
servers that receive your content, and we cannot read your data except as exposed through
Atlassian's standard partner tooling.

## 3. What data the App stores

The Jira issue remains the source of truth for the task itself. Resurface stores only the
**accountability layer** in Forge storage, namely, for each tracked action item:

- an internal action-item identifier;
- the **Jira issue key** and **project key** it relates to;
- the **owner's Atlassian account ID** (an opaque identifier, not a name or email);
- the **due date**, **status** (open/done), and **source type** (retro / sprint / manual /
  confluence);
- an optional **source reference** and, in project settings, a **definition of done** — these
  are free-text fields whose contents are chosen by your users;
- timestamps (created, closed, last nudged) and a **carry-over count**;
- per-project **settings** (nudge cadence, definition of done); and
- cached, aggregated **metrics** and internal index lists used to display dashboards.

**We do not store** issue summaries or descriptions, comment text, attachments, user display
names, or email addresses.

## 4. What the App writes into your Atlassian site

To provide its features, the App writes the following **into the customer's own Jira
instance** (not to us):

- a label (`action-item`) and an issue property on tracked issues, so items are queryable;
- **comments** on overdue issues (the scheduled "nudge"), which Jira delivers to the assignee
  through its native notifications; and
- **status transitions** when a user marks an item done or reopens it from the App.

This content stays within your Atlassian site under Atlassian's control.

## 5. Personal data we process

The principal personal data is the **Atlassian account ID** used to attribute ownership of an
action item and to render the owner via Atlassian's user component. Free-text fields (source
reference, definition of done) may contain personal data if your users enter it; please advise
your users not to put unnecessary personal data in those fields.

We do **not** process special categories of data, and the App is **not directed to children**.

## 6. Permissions (scopes) and why we need them

| Scope             | Purpose                                                                     |
| ----------------- | --------------------------------------------------------------------------- |
| `read:jira-work`  | Read issues/projects to display and index action items.                     |
| `write:jira-work` | Add the action-item label/property, post nudge comments, transition issues. |
| `read:jira-user`  | Resolve the owner/assignee so the App can display and notify them.          |
| `storage:app`     | Persist the accountability layer and indexes in Forge storage.              |

## 7. Sub-processors

Our only infrastructure sub-processor is **Atlassian**, which hosts the App and its storage on
the Forge platform. We use no other sub-processors, analytics providers, or advertising
networks.

## 8. Data location and residency

Customer data handled by the App is stored in **Atlassian Cloud via Forge storage**. Where the
customer has configured Atlassian **data residency** for supported product data, the App's
in-scope stored data follows Atlassian's data residency capabilities for Forge.

## 9. Data retention and deletion

- Action-item records are retained until the item is deleted or the App is **uninstalled**.
- **Uninstalling** the App removes its Forge storage for that site.
- The Jira artifacts written by the App (labels, properties, comments, transitions) remain in
  your Jira instance and are managed by you, as with any other Jira content.
- To request access to, correction of, or deletion of personal data, contact
  privacy@outpostlabs.dev, or have your Atlassian site administrator make the request. Because
  we act as a processor, we may direct such requests to the controlling customer.

## 10. Your rights

Depending on your jurisdiction (e.g. the GDPR or CCPA/CPRA), you may have rights to access,
correct, delete, or restrict processing of your personal data, and to data portability. As a
processor, we will assist the controlling customer in responding to verified requests. Contact
support@outpostlabs.dev.

## 11. Security

The App relies on Atlassian Forge's security model and "Runs on Atlassian" trust posture:
hosted execution, scoped permissions shown to the installing admin, and no external egress. We
do not log issue content or personal data; logs contain only opaque identifiers, counts, and
outcomes. No secrets are stored in the App.

## 12. Changes to this policy

We may update this policy from time to time. Material changes will be reflected by updating the
"Last updated" date above and, where appropriate, through the Marketplace listing.

## 13. Contact

Outpost Labs — support@outpostlabs.dev — https://outpostlabs.dev

---

_This document describes the data practices of the Resurface App and is provided for
transparency. It is not a substitute for legal advice; the controlling customer remains
responsible for its own compliance obligations._
