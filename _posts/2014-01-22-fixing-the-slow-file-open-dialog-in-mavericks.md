---
layout: post
title: 'Fixing the Slow File Open Dialog in Mavericks'
categories: [technology]
tags: [apple, os x, mavericks, terminal]
banner: beach-ball.jpg
caption:
---

Overall, I think OS X 10.9 Mavericks has been a positive step for the Mac, but there's one bug that's been there from the beginning, still isn't fixed, and has caused me quite a bit of frustration.

The File Open/Save dialog is *incredibly slow*.

Luckily [Snaggletooth_DE](https://discussions.apple.com/people/Snaggletooth_DE) posted a workaround in an [Apple Support Communities thread](https://discussions.apple.com/thread/5495797?start=30&tstart=0) that offers a quick fix to this frustrating problem.

In the terminal type:

<pre class="prettyprint lang-sh">
sudo vim /etc/auto_master
</pre>

Follow that up with your password. You should now be editing a file that looks something like this:

<pre class="prettyprint linenums lang-sh">
#
# Automounter master map
#
+auto_master            # Use directory service
/net                    -hosts         -nobrowse,hidefromfinder,nosuid
/home                   auto_home      -nobrowse,hidefromfinder
/Network/Servers        -fstab
/-                      -static
</pre>

For those who haven't used the command-line text editor [vim](http://www.vim.org/) before, you'll need to type `i` to start editing. Use your cursors to move to the line with:

<pre class="prettyprint lang-sh">
/net
</pre>

Comment that line out by putting `#` in front of it, so it reads:

<pre class="prettyprint lang-sh">
#/net
</pre>

Save your file by typing `Esc, Shift-Z, Shift-Z` (that's the escape key, followed by capital Z twice in a row). Next enter the following command:

<pre class="prettyprint lang-sh">
sudo automount -vc
</pre>

You should see something like this:

<pre class="prettyprint lang-sh">
automount: /home updated
automount: /net unmounted
</pre>

You're done. No reboot or logout required.

More importantly you shouldn't have to worry about that silly delay anymore. Maybe Apple will fix this bug in 10.9.2, but I'm not holding my breath.
