---
layout: post
title: 'Mosh Arrives for iOS with Blink Shell'
author: [Erik Hess]
categories: [development]
tags: [ios, mosh, ssh, blink shell]
banner: 
caption: "caption text [image credit](image link)"
---

Have you been looking for a good iOS SSH app? Have you been wishing Panic would bring Mosh to Prompt? Have you been wishing for a way to remap your Smart Keyboard's Caps Lock key to something more appropriate for a terminal environment?

I certainly have. This week [Blink Shell](http://www.blink.sh/ "Blink Shell") came to my rescue and it's totally awesome. If you need to access remote terminal environments from an iOS device, it's well worth the $20.

Let's start with the basics - what's [Mosh](http://mosh.org "Mosh")? Put simply, Mosh is a replacement for SSH with vastly better support for the intermittent connectivity inherent to the mobile world. It allows you to keep your session open through changing IP addresses and erratic cell tower reception. If that weren't enough, Mosh also makes up for any latency in your connection by showing what you type as you type it and inferring server responses when appropriate. Predictions are underlined so you know when it's helping you.

If you've tried using SSH from your phone or iPad and experienced broken connections and latency, then Mosh is the answer to your prayers. So why haven't we seen Mosh support on iOS earlier? Unfortunately, because `mosh` is licensed under the GPL the only way it could be included in apps like Panic's excellent Prompt is by [opening up the source code for the entire app](https://library.panic.com/prompt/prompt-mosh/). That's a big pill for Panic to swallow, but now we have an alternative.

Since Blink is already [open-source](https://github.com/blinksh/blink), the GPL limitation isn't a problem. Blink also offers a lot of great customization options, like custom theme and font support. 

To me, Blink's greatest option is the ability to remap Control, Alt, Command, and Caps Lock. My brain has long been broken by remapping Caps Lock to Control. I made the swap in Blink's options menu (accessible via `Cmd-,`) and it's been a lifesaver. If you prefer to map Caps to Escape you can do that too. This offers a way to overcome one of the Smart Keyboard's biggest limitations, one it shares with many other iOS-oriented hardware keyboards as well.

Blink's interface is refreshingly simple. You start with an empty screen and a prompt that looks like this:

```
blink>
```

From there, simply type your protocol and identity. It supports ssh and mosh:

```
blink> mosh me@example.com
```

You can create new terminal "tabs" via `Cmd-T` then switch between them via a left-right swipe on the screen or `Cmd-[` and `Cmd-]`. Blink also supports iOS native copy and paste, although you'll have to touch your screen to do it.

I've been waiting for Blink Shell for a long time. While it's $20 price might be steep for some, to me that's a small price to pay for this kind of capability. Until we get a native iOS terminal app, this is the best alternative for a good command-line experience on your iPad or iPhone.
