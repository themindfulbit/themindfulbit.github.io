---
layout: post
title: 'Mosh Arrives on iOS with Blink Shell'
author: [Erik Hess]
categories: [development]
tags: [ios, mosh, ssh, blink shell]
banner: cone-snail-shell.jpg
caption: "Another nice shell. [Exotic Conchology, 1821.](https://flic.kr/p/odvuLE)"
---

Have you been looking for a good iOS SSH app? Have you been wishing [Panic](http://panic.com) would bring Mosh to [Prompt](https://panic.com/prompt/)? Have you been desperate to remap your Smart Keyboard's Caps Lock key to something more appropriate for a terminal environment?

I certainly have. This week [Blink Shell](http://www.blink.sh/ "Blink Shell") came to my rescue. If you need to access remote terminal environments from an iOS device, it's well worth $20.

So what's [Mosh](http://mosh.org "Mosh")? 

Mosh (short for *mobile shell*) is a replacement for SSH with vastly better support for the intermittent connectivity we encounter daily in the mobile world. It allows you to keep your session open through changing IP addresses and erratic cell tower reception. If that weren't enough, Mosh also makes up for any latency in your connection by displaying what you type as you type it and inferring server responses when appropriate. Predictions are underlined so you know when your commands haven't made it to the server yet.

If you're used to broken connections and latency when using SSH from an iPhone or iPad, then you may find Mosh quite helpful. So why haven't we seen Mosh support on iOS earlier? Unfortunately, because Mosh is licensed under the GPL the only way it could be included in apps like Panic's excellent Prompt is if the developers [opened up the source code for the entire app](https://library.panic.com/prompt/prompt-mosh/). 

That's a big pill for Panic and other developers to swallow, but now users have an alternative. Since Blink is already [open-source](https://github.com/blinksh/blink), the GPL limitation isn't a problem. 

On top of Mosh support, Blink offers a lot of great ways to customize your terminal, including custom theme and font support. But to me Blink's greatest option is the ability to remap Control, Alt, Command, and Caps Lock. Long ago, i broke my brain by remapping Caps Lock to Control. With Blink, swapping keys via the the options menu (accessible via `Cmd-,`) was quick and easy. Blink's ability to map Escape to Caps offers a way to overcome one of the Smart Keyboard's biggest limitations.

{% include image.html class="" title="Blink's non-interface is lovely." file="blink-tmux.jpg" %}

Blink's interface is refreshingly simple. You start with an empty screen and a prompt that looks like this:

<pre class="prettyprint lang-sh">
blink>
</pre>

From there, simply type your protocol and identity. Blink supports both SSH and Mosh:

<pre class="prettyprint lang-sh">
blink> mosh me@example.com
</pre>

New terminal "tabs" are available by typing `Cmd-T` and you can switch between them via a left-right swipe on the screen or `Cmd-[` and `Cmd-]`. Blink also supports iOS native copy and paste, although you'll have to touch your screen to make it happen.

I've been waiting for Blink Shell for a long time. While its $20 price tag might be steep for some, to me that's a small price to pay for this kind of capability. Until we get a native iOS terminal app, Blink offers the best alternative on your iPad or iPhone.

