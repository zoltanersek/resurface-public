---
title: 'Introducing Tripwire: Cross-Team Dependency Alerts for Jira'
description: Jira never tells the team waiting on a blocker when it slips. Tripwire watches your cross-team dependencies and alerts them the moment one moves.
pubDate: 2026-07-29
author: OutpostLabs
---

Every team we've worked on has had the same meeting. It's sprint review, someone
pulls up the board, and a story that was supposed to ship is sitting exactly
where it was two weeks ago. Not because anyone dropped it — because it was
blocked on another team's ticket, and that ticket quietly moved. The due date
went from the 12th to the 26th. Nobody outside that team noticed. We found out
in the room, in front of stakeholders, with nothing to say except "we were
blocked."

That's the failure mode Tripwire exists to kill. It's the third thing we've
shipped at OutpostLabs, and it does one job: when a Jira issue your team
**depends on** slips, the people waiting on it find out immediately, on the
issue, without anyone writing a rule.

**[Tripwire](/tripwire/)** is
[live on the Atlassian Marketplace](https://marketplace.atlassian.com/apps/709393635/tripwire-dependency-slip-alerts-for-jira)
for Jira Cloud, and it's free for teams of up to 10 users.

## Jira knows your dependency slipped. It just doesn't tell anyone

Here's the part that took us a while to accept: Jira already has all the
information. You linked the two issues. It's right there in the changelog —
`duedate` changed from one value to another, at a timestamp, by a named person.
Jira recorded it perfectly and notified precisely nobody who cared.

Native Jira notifications are built around **your** issues: things you're
assigned, reporting, or watching. A cross-team dependency is the opposite shape.
The issue that changed belongs to the platform team. The people who need to know
are on the payments team, and they aren't watchers, aren't assignees, and have no
reason to be subscribed to another team's ticket. So the one event that should
trigger a conversation — *the thing you're waiting on just moved two weeks* —
produces silence.

You can watch the blocker manually, of course. Some people do. It works right up
until you have eleven dependencies across four teams, at which point your inbox
becomes noise and you stop reading it. That isn't tracking. That's hoping.

## Meet Tripwire

Tripwire watches the **"blocks"** issue links you already use. No new fields, no
new process, no separate dependency register to maintain in parallel with
reality. If your teams link blockers today, Tripwire has everything it needs the
moment it's installed.

When a blocker slips, it posts a comment on the **dependent** issue and
@-mentions the people who need to act — normally the assignee and the project
lead. Jira's own notification system delivers it, so it lands wherever your team
already reads Jira. There's no Slack bot to configure and no email from us.

The wording is deliberately blame-free. It says what changed and what depends on
it, never who's at fault:

> ⚠️ **Dependency slipped:** PLAT-87 "Payments service migration" — due date
> moved **Jul 12 → Jul 26** (14 days later). This issue depends on it.
> @maya @tomas

That tone isn't decoration. An alert that reads as an accusation gets the app
uninstalled in a week, because the team being "reported on" hates it. An alert
that reads as information gets forwarded.

## What actually counts as a slip

"Dependency slipped" is broader than a moved due date, and getting the full set
right is most of the work. Tripwire detects:

- **Due date pushed later** — the obvious one, with a configurable threshold so a
  one-day nudge doesn't fire.
- **Due date removed entirely** — quieter and often worse. A commitment didn't
  move; it evaporated.
- **Punted to the backlog** — the blocker was pulled out of its sprint and no
  sprint owns it now.
- **Punted to a later sprint** — it moved from the current sprint to one that
  starts later. Tripwire reads sprint start dates, so a genuine push-out is
  distinguished from routine board hygiene.
- **Gone quiet** — an open blocker nobody has touched for longer than your stale
  window. No one moved it. It's just rotting, which is the failure nobody has a
  trigger for.
- **Unblocked** — the good news, and it's remaining-blocker aware. If three
  things block you and one resolves, you get "one blocker resolved, still waiting
  on 2 more," not a premature all-clear. When the last one clears you get
  "🟢 Ready to pick up" or "✅ You're unblocked" depending on whether the work has
  started.

That last category matters more than it looks. Half the cost of a dependency
isn't the delay — it's the days after the blocker cleared and nobody told the
team that had already moved on to something else.

## Why not Advanced Roadmaps, or a dependency map?

This is the honest competitive question, so here's the honest answer.

There are a good fifteen dependency apps on the Atlassian Marketplace, and they
are almost all **visualisation** tools. They draw you a beautiful graph of what
blocks what. We have nothing bad to say about them — a map is genuinely useful
when you're planning a quarter.

But a map only works **if someone is looking at it.** Nobody opens a dependency
graph on a random Tuesday afternoon. The slip happens on the Tuesday. That gap
between "the information exists in a diagram" and "the person who needs it has
been told" is exactly where sprints die, and it's the gap Tripwire fills. It's
the alerting layer the map apps never built, which means it **complements** a map
app rather than competing with one.

Advanced Roadmaps does show dependency warnings — as passive red arrows on a
timeline you have to open, and only on **Jira Premium**. If you're on Premium and
living in Roadmaps daily, you have partial coverage. Most teams aren't. Tripwire
works on every Jira Cloud plan, including Free and Standard, because the orgs
that Premium leaves behind are the ones with this problem worst.

## Why not just write a Jira Automation rule?

You can get partway there with Automation, and if you only have one or two
critical dependencies, honestly, do that — we'd rather you solve your problem than
buy something.

It stops scaling fast, for three reasons:

1. **Quota.** Jira Automation runs on a pooled monthly execution limit — around
   1,700 runs/month on a Standard site. A rule that watches every date change
   across every project burns through that fast, and it's the same pool your
   other automations need. Tripwire runs on **Atlassian Forge**, not Automation,
   so it consumes **none** of it.
2. **Per-project fiddliness.** Automation rules are configured per project (or
   as multi-project rules with the right permissions). Dependencies are
   cross-project by nature. Keeping rules in sync across a dozen projects is a
   maintenance job nobody wants.
3. **The hard cases.** Getting a rule to distinguish "moved to a later sprint"
   from "moved to an earlier sprint," to detect a blocker going stale, to count
   remaining blockers before declaring you unblocked, and to not fire eleven
   times during a bulk reshuffle — that's not a rule anymore, that's a project.

## Built not to spam

The fastest way to get an alerting app removed is to make it noisy, so restraint
is designed in at four levels:

- **One alert per dependency per day, per kind.** A 24-hour cooldown means a
  field that wobbles five times produces one comment.
- **Bulk reshuffles fold.** When one person shifts a dozen dependencies during
  sprint planning, the individual alerts collapse into a **single summary**
  instead of a comment storm.
- **De-duplication before posting.** Tripwire records that it's about to alert
  before it posts, so a retried platform event can't produce a duplicate.
- **One-click mute.** Every alert footer links to mute that project. Muted
  projects post nothing — but tracking continues in the background, so the
  dashboard still shows the truth when you look.

There's also a **weekly per-project digest** for the Monday catch-up, and a
**Dependencies-at-Risk dashboard** listing everything currently slipped, punted,
or stale, with how many days it has slipped. That dashboard is the 10-minute
triage that replaces a recurring cross-team status meeting, which is our favourite
kind of feature: one that deletes a meeting.

## Runs on Atlassian — nothing leaves your cloud

Tripwire is a **Forge** app. All of its code and storage run inside Atlassian
Cloud. It makes **no network requests to us or to any third party**, and no
customer data is transferred outside Atlassian's infrastructure. We don't operate
a server that receives your data, because there isn't one.

It stores only a minimal dependency layer — which issue blocks which, the current
state, the timestamps needed to detect the next change, and your settings. It
does not store issue descriptions, comments, or attachments. Scopes are
least-privilege, and settings changes are restricted to Jira admins. The
[privacy policy](/tripwire/privacy/) spells out exactly what's kept.

## Getting started

Install it and you're done — that's genuinely the setup. Tripwire watches the
standard **Blocks** link type with sensible defaults, so the first slip anywhere
on your site produces a correct alert without you configuring anything. Tune the
watched link types, thresholds, recipients, and digest day later if you want to,
from the Settings tab.

It's **free for teams of up to 10 users**, with simple per-user pricing above
that, billed through the Atlassian Marketplace. The
[Tripwire documentation](/tripwire/docs/) covers every alert type, the anti-spam
rules, and the dashboard in detail.

## Frequently asked questions

### Does Jira notify you when a blocking issue changes?

No. Jira records the change in the issue's changelog and notifies people
connected to **that** issue — its assignee, reporter, and watchers. The team on
the other end of a "blocks" link gets nothing, which is why cross-team slips are
usually discovered at sprint review rather than when they happen.

### How do I track cross-team dependencies in Jira?

Link the issues with the built-in "blocks" link type, then make sure something
actively surfaces changes to those blockers — either a dependency view somebody
genuinely opens on a schedule, an Automation rule per project, or an app like
Tripwire that watches the links and pushes an alert to the dependent team
automatically.

### Do I need Jira Premium or Advanced Roadmaps?

No. Tripwire works on every Jira Cloud plan, including Free and Standard. That's
deliberate — Advanced Roadmaps' dependency warnings are Premium-only, and the
teams without Premium have the least tooling for this problem.

### Does it use my Jira Automation quota?

No. Tripwire runs on Atlassian Forge, not Jira Automation, so watching every date
and sprint change across all your projects costs none of your site's pooled
Automation executions.

### Which issue link types does it watch?

The standard **Blocks / is blocked by** link type by default. If your teams model
dependencies with a different link type, you can change the watched types in
Settings.

### Will it spam my team during sprint planning?

No. Each dependency alerts at most once per day per kind of change, and when one
person shifts many dependencies at once the alerts fold into a single summary.
You can also mute any project in one click while tracking continues silently.

### Does my Jira data leave Atlassian?

No. Tripwire is a Forge app that runs entirely inside Atlassian Cloud, makes no
external network calls, and stores only a small dependency layer in Forge
storage.

## Wrapping up

The pattern behind everything we build at OutpostLabs is the same: find a place
where the information already exists but never reaches the person who needs it,
and close that gap with one small tool. [Resurface](/resurface/) does it for
retrospective action items that die after the retro board closes. [Berth](/berth/)
does it for AI coding agents fighting over ports. Tripwire does it for the
dependency that slipped while the team waiting on it was looking the other way.

If your teams have ever burned a sprint on a blocker that moved without telling
anyone,
[install Tripwire from the Atlassian Marketplace](https://marketplace.atlassian.com/apps/709393635/tripwire-dependency-slip-alerts-for-jira)
— it's free for small teams, and it takes about a minute to set up. If you'd like to follow along as we build these in the open,
the [blog](/blog) is the place.
