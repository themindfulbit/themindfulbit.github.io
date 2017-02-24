---
layout: post
title: 'Mosh Arrives on iOS with Blink Shell'
author: [Erik Hess]
categories: [development]
tags: [ios, mosh, ssh, blink shell]
banner: cone-snail-shell.jpg
caption: "Another fancy shell. [Exotic Conchology, 1821.](https://archive.org/stream/exoticconchology00swai/exoticconchology00swai#page/n44/mode/1up)"
---

Have you been looking for a good iOS SSH app? Have you been wishing [Panic](http://panic.com) would bring Mosh to [Prompt](https://panic.com/prompt/)? Have you been desperate to remap your Smart Keyboard's Caps Lock key to something more appropriate for a terminal environment?

I certainly have. This week [Blink Shell](http://www.blink.sh/ "Blink Shell") came to my rescue. If you need to access remote terminal environments from an iOS device, it's well worth $20.

{% include image.html class="right" title="Blink's non-interface is lovely." file="blink-iphone.jpg" %}

## What's Mosh?

[Mosh](http://mosh.org "Mosh") (short for *mobile shell*) is a replacement for SSH with vastly better support for the intermittent connectivity we encounter daily in the mobile world. It allows you to keep your session open through changing IP addresses and erratic cell tower reception. If that weren't enough, Mosh also makes up for any latency in your connection by displaying what you type as you type it and inferring server responses when appropriate. Predictions are underlined so you know when your commands haven't made it to the server yet.

If you're used to broken connections and latency when using SSH from an iPhone or iPad, then you may find Mosh quite helpful. So why haven't we seen Mosh support on iOS earlier? Unfortunately, because Mosh is licensed under the GPL the only way it could be included in apps like Panic's excellent Prompt is if the developers [opened up the source code for the entire app](https://library.panic.com/prompt/prompt-mosh/). 

## Enter Blink

Open-sourcing your whole app is a big pill for developers like Panic to swallow, but it's not an insurmountable barrier for everyone. Since Blink is [open-source](https://github.com/blinksh/blink) from the start, the GPL limitation hasn't been a problem. And nothing in the GPL prevents you from charging for your software, as you'll discover if you decide to plunk down $20 for the app. If you need what Blink offers, it's money well spent.

{% include image.html class="" title="Blink's settings pane." file="blink-settings.jpg" %}

On top of Mosh support, Blink offers several ways to customize your terminal, including custom theme and font support. But to me Blink's greatest option is the ability to remap Control, Alt, Command, and Caps Lock. Long ago, I broke my brain by remapping Caps Lock to Control. With Blink, swapping keys via the the options menu (accessible via `Cmd-,`) was quick and easy. Additionally, Blink's ability to map Escape to Caps, Alt, Control, or Command offers a way to overcome one of the Smart Keyboard's biggest limitations -- no Escape key.

Blink's interface is refreshingly simple. You start with an empty screen and a prompt that looks like this:

<pre class="prettyprint lang-sh">
blink>
</pre>

From there, simply type your protocol and identity. Blink supports both SSH and Mosh:

<pre class="prettyprint lang-sh">
blink> mosh me@example.com
</pre>

New terminal "tabs" are available by typing `Cmd-T` and you can switch between them via a left-right swipe on the screen or `Cmd-[` and `Cmd-]`. Blink also supports iOS native copy and paste, although you'll have to touch your screen to make it happen. The rest of the keyboard shortcuts are available by holding down the Command key.

I've been waiting for Blink Shell for a long time. While its $20 price tag might be steep for some, to me that's a small price to pay for this kind of capability. Until we get a native iOS terminal app, Blink offers the best alternative on your iPad or iPhone.

