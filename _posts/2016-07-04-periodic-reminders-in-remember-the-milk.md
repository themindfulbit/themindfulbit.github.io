---
layout: post
title: "Periodic Reminders in Remember the Milk"
author: [Erik Hess]
categories: [productivity]
tags: [reminders, remember the milk]
banner: cometary-orbits.jpg
caption: "Looking Skyward and The Earth [Isaac Newton Snyder, 1911.](https://archive.org/stream/lookingskywardea00snyd/lookingskywardea00snyd#page/108/mode/1up)"
medium: ""
---

As my task workflow shifts over to [RTM](http://rememberthemilk.com), it makes sense that daily reminders should follow. This week I'm finally getting around to making that happen.

While [Streaks](http://streaksapp.com) is an excellent, minimal habit tracking app that's a pleasure to use, tracking the *length* of my streaks has become less important than ensuring they *simply get done*. Many of us also have tasks that repeat on a timescale longer than one day.

Here's one example. For me, writing is a daily task. Publishing however, is on a no-longer-than-three-day cycle. While seeing something you write live on the web is a lot of fun, sometimes it takes a little work before it's ready. On a three day cycle, it feels like there's some room to breathe.

Setting up these sorts of periodic reminders in Remember the Milk is remarkably straightforward. You may choose to create a dedicated list for these sorts of heartbeat-style tasks, so they don't clutter up your less periodic projects. That being said, it's certainly not required if that doesn't fit into your workflow.

### Repeating Task Options in RTM

There are two kinds of [repeating tasks](https://www.rememberthemilk.com/help/?ctx=basics.basics.repeatformat) in RTM, *repeat every* and *repeat after*.

*Repeat every* creates one task that will reappear at the prescribed interval. If you have a daily *repeat every* task and don't do it today, you'll find two tasks waiting for you tomorrow. Interestingly, even if you see two copies, they are actually the same task. Change an attribute on one and all the others will match it, both in the past and the future.

*Repeat after* duplicates the original task at the prescribed interval once the task is complete. Because it waits for completion, you won't see two of the same task at the same time. Since it's a duplicate, if you change a task it will get propagated forward, but not into the past.

Importantly, if something needs to be done on a specific day each week, you'll probably want to use *repeat every*. RTM can handle a wide variety of cool repeats, like `*every year on the second weekend day of January`. It's worth looking at [the documentation](https://www.rememberthemilk.com/help/?ctx=basics.basics.repeatformat) to get a feel for all the options.

### Some Repeating Task Examples

One of the nicer things about RTM is that you can enter detailed tasks purely by typing. Let's start by creating a daily task to write something:

<pre class="prettyprint">
Write Something ^today ~today *after a day
</pre>

The `^` symbol tells RTM when the task is due. The `~` marks the start date. The `*` sets the [periodicity](https://www.rememberthemilk.com/help/?ctx=basics.basics.repeatformat). Using a start date gives us the option of hiding the task until the day after you complete it, so you're not constantly bugged by something you just finished.

Now let's try a longer reminder window:

<pre class="prettyprint">
Publish Something ^in 3 days ~tomorrow *after 3 days
</pre>

When you complete the above task, it'll create a new one starting tomorrow with a due date in three days.

As I'm beginning to discover, RTM seems simple on the surface but hides a lot of power underneath. I haven't even touched the extensive [keyboard shortcuts](https://www.rememberthemilk.com/help/?ctx=basics.basics.keyboard) yet, but the fact that I'm looking forward to learning them is probably a good sign.
