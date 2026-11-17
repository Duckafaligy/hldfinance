# Agent workflow

Shared rules for **Aariz-Claude** and **Brendan-Claude**. All times are Toronto time (ET).

## Delegating to subagents
Aariz-Claude and Brendan-Claude are coordinators. Delegate all project execution to subagents, including research, planning, Paper design, coding, testing, review, GitHub checks, and log updates. The coordinator assigns work, reviews results, and decides what to do next.

- **Start with a GitHub check.** Assign a subagent to read the latest shared summaries and the other agent's current status. Before implementation begins, have it publish the work claim and confirm the push succeeded.
- **Give each subagent a clear scope.** Specify the task, allowed files or Paper screens, branch, expected result, and how to verify it. Run independent tasks in parallel only when their scopes don't overlap. Sequence tasks that touch the same files or screens.
- **Keep one writer per agent log.** Have implementation subagents return a short handoff with what changed, what they verified, blockers, and next steps. Assign a single logging subagent to update your daily file and handle the end-of-day summary.
- **Verify before closing.** Have a review subagent check significant changes against the original task. Send any fixes back to an implementation subagent and mark the work complete once verification passes.

If subagents are unavailable, report the blocker and leave the task pending.

## Branches
- **`agent-logs`** is the shared log branch. Every log file lives here: this file, `DESIGN_LOG.md`, `DEVELOPMENT_LOG.md`, and `daily/`. Work claims are pushed here.
- App code stays on its normal feature branches (for example `phase0-landing`) and goes to `main` through PRs.
- Only log files are committed to `agent-logs`. Never commit app code to it, and never merge it into a feature branch.

## Files
| File | What goes in it |
|---|---|
| `logs/DESIGN_LOG.md` | Major changes to the Paper design: the screen or component, what changed from the previous design, why, and a Paper reference (file, page, board). |
| `logs/DEVELOPMENT_LOG.md` | Major app changes and features: planned, in progress, blocked, shipped. Link the branch, commit, or PR. |
| `logs/AGENT_WORKFLOW.md` | These rules. |
| `logs/daily/YYYY-MM-DD/<Agent>.md` | Each agent's own log for the day. Only its owner's logging subagent edits it. |

Each permanent log starts with a **Latest summary**: the timestamp, recent changes, active work and owners, blockers, and next steps. Older entries go below it, newest first. Read the older history only when the task needs it.

## Daily log
Your logging subagent writes this file. At the start of each workday, create or resume `logs/daily/YYYY-MM-DD/<Agent>.md`.

- At the top, keep a **Current status** section: active task, the screen or code area it touches, next step, blocker.
- Below it, add timestamped entries, newest first, for meaningful progress, decisions, completed work, and changes of plan:

  > 14:20 ET · In progress · Aariz-Claude
  > Building the transaction list's expand/collapse animation on `feat/transaction-animations`.
  > Next: test rapid taps and reduced-motion behavior.
  > Blockers: none.

- Update the log when you start, finish, switch tasks, or hit a blocker. Push meaningful updates promptly.

## Checking GitHub
Your GitHub-check subagent runs the check at session start, before starting or switching tasks, and every 10 minutes while working:

```sh
git fetch origin
git log --oneline <last-seen-sha>..origin/agent-logs   # log changes since your last check
git show origin/agent-logs:logs/daily/$(TZ=America/Toronto date +%F)/<Other-Agent>.md
git log --oneline --all --since="<last check>"           # app branch activity
```

Read the latest summaries and the other agent's **Current status**, then inspect only the commits or files relevant to your task.

**Timers:** a Markdown file can't run a timer, and these sessions don't receive GitHub push events. In Claude Code, use an in-session scheduler (`/loop 10m` or a recurring cron task) for the 10-minute check while actively working. If no scheduler is running, check at the next work checkpoint: before each commit, before each push, and when switching tasks.

## Claiming work
Your GitHub-check or logging subagent does these steps and reports back before any implementation subagent starts.

1. Fetch `agent-logs` and check that the feature doesn't already exist (search the app branches and open PRs) and that the other agent hasn't claimed it.
2. Write the exact scope in your daily log: files or folders, Paper screens, branch name.
3. Commit and push the claim to `agent-logs`. Start editing only after the push succeeds.
4. If the push is rejected because the branch moved, run `git pull --rebase origin agent-logs`, check again for overlap, and retry.
5. If the other agent owns the same area, coordinate in your daily log (add a line addressed to them) or pick another task.

Tie design updates to their Paper screens, and development updates to their branches or PRs, so the other agent can find the actual work.

## Closing out the day
Your logging subagent does these steps.

1. Summarize your daily entries into the permanent logs: Paper changes go in `DESIGN_LOG.md`, app changes in `DEVELOPMENT_LOG.md`. Keep major decisions, completed work, blockers, and next steps. Update each **Latest summary**.
2. Carry unfinished work forward with its owner and status so it is visible the next morning.
3. Push, then confirm the summaries are on `origin/agent-logs` before deleting your own daily file. Each agent closes out only its own file.
4. If the closeout fails or the session ends early, finish it at the start of your next session.
