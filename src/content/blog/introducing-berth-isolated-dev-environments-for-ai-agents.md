---
title: 'Introducing Berth: an isolated dev environment for every AI coding agent'
description: Running a swarm of coding agents in parallel means they fight over ports, databases, and state. Berth is a small, free, open-source CLI that gives each agent its own isolated dev environment — one command up, one command down.
pubDate: 2026-07-04
author: Zoltan Ersek
---

I run a lot of AI coding agents. On a good day there are half a dozen of them
going at once — one refactoring a module, one chasing a flaky test, one spiking a
feature I'm not sure about yet. Each lives on its own `git worktree`, which is the
easy part. The hard part is everything _around_ the code.

Because the moment two agents try to boot the same app, they collide. Same
`5432` for Postgres. Same `3000` for the web server. Same Redis, same volumes,
same half-migrated database. One agent's `docker compose up` steps on another's,
a test suite connects to the wrong database, and I lose ten minutes untangling
which `.env` belongs to which branch. Multiply that by five agents and the
workflow _around_ the agents becomes the bottleneck — not the agents themselves.

I kept solving it by hand: bespoke port numbers per branch, a scratch `.env`
here, a `docker compose -p` prefix there, a tmux tab I was afraid to close. It
worked, barely, and it didn't scale past a few agents. So I built the tool I
wanted instead.

## Meet Berth

**[Berth](/berth/)** gives every agent its own **berth** — an isolated dev
environment it can dock in without bumping into any other. For each parallel
task you get:

- an **isolated git worktree** on a fresh branch,
- an **isolated dev environment** with **auto-assigned, non-colliding ports**,
- **isolated state** — its own container network, database, cache, and volumes,
- **one command up, one command down**, and
- a **live view** of what's running where.

In practice it looks like this:

```
$ berth up agent-1

Ports:
  BACKEND_PORT    60291
  FRONTEND_PORT   60292

URLs:
  http://localhost:60291
  http://localhost:60292

✓ Berth 'agent-1' is running.
```

Spin up `agent-2` and it gets its own worktree, its own free ports, and its own
database — no collisions, nothing to configure. `berth ls` shows every berth,
its branch, status, age, and ports. `berth down agent-1` tears the whole thing
down — services, volumes, worktree, branch — in one command. Abandoned an
agent's work? `berth down --force` discards it cleanly.

Under the hood it's deliberately thin: `git worktree` for branches, Docker
Compose for the environment, a port allocator, and a tiny state file. It reads a
small `berth.yml` that points at your existing compose file and names the ports
to inject. That's the whole thing.

## What it isn't

Berth is **not** an agent runner, and it's **not** a cloud platform. It's the
environment layer that sits _underneath_ whatever agents you already use —
Claude Code, Codex, Cursor, Aider — on purpose. I don't want to replace your
workflow; I want to stop it from tripping over itself. Staying tool-agnostic is
the entire point.

## Free, open source, built in the open

Berth is **MIT licensed and free**, and it'll stay that way. It's a single local
binary — no daemon to babysit, no account, no bill. I built it because I needed
it, I use it every day, and the honest best outcome is that it's useful to other
people drowning in the same parallel-agent mess. If that's you, the code is on
**[GitHub](https://github.com/zoltanersek/berth)** — star it, try it on your own
projects, and tell me what breaks. Issues and PRs welcome.

This is the second thing we've shipped at OutpostLabs, after
**[Resurface](/resurface/)**. Different surface — one lives in Jira, one lives
in your terminal — but the same idea behind both: a small, focused tool that
does one real thing well and gets out of your way.

More soon. If you want to follow along as I build these in the open, the
[blog](/blog) is the place.
