---
layout: post
title: 'Carousel Can Now Exclude Folders'
author: [Erik Hess]
categories: [design]
tags: [dropbox, carousel, photos]
banner: exclude-tree.png
caption: 'Get that junk out of there'
link:
---

I've been using Dropbox's [Carousel](https://carousel.dropbox.com) app for the last several months as an easy way to have my cake and eat it too when it comes to photo storage.

{% include image.html class="right outline" title="The Carousel Interface" file="carousel-interface.png" %}

Carousel provides a nice way to merge my family's multiple photo streams, while also allowing hands-free file access and archiving of those images. Its timeline-based viewer is elegant, intuitive, quick, and easy for non-techies to understand. I wanted to use it from day one.

When Carousel was first released, my biggest gripe was that you had to exclude images one-at-a-time. Since my full Dropbox has a bunch of random images from work, life, apps, you name it, it would have been helpful if I didn't have to click on every misplaced image (often several times) to remove it from our stream.

Unfortunately, at launch folder-level exclusion was unavailable.

We all hoped it would happen, and thankfully that day has arrived. The process is a bit tricky, so here's a short walkthrough.

#### Find a bad picture

To exclude a folder in Carousel, you first have to find a picture in the offending folder to exclude via their web app. You can't exclude folders via the mobile apps at this time, just single images.

{% include image.html class="wide outline" title="The Carousel Timeline" file="carousel-timeline.png" %}

I keep my photo archive in one place, so all other top-level folders should be off limits. Over time, those other folders have accumulated a bunch of stock photos and development-related image files from old projects.

They gave me a great place to start. Few have correct metadata, so they're all stuck at the very bottom of the timeline in the *Missing Dates* area. They're also visually distinctive, like all good stock photos.

#### Exclude the folder

To actually exclude a folder you've got to right click on an unwanted image and select *Exclude from Carousel* in the context menu that appears.

{% include image.html class="wide outline" title="The Folder Exclusion Dialog" file="exclude-tree.png" %}

You'll then be given a dialog that offers a folder tree. If you organize your Dropbox folder like me, scroll all the way to the top and select the top-level parent.

#### Restoring Excluded Folders

The master exclusion list lives in the Settings section. If you make a mistake or change your mind you can go there to restore any folders you decide you need.

{% include image.html class="outline" title="Excluded Folders List" file="excluded-folders.png" %}

#### Thoughts on Implementation

At its highest levels my Dropbox is pretty well organized, even if it gets messy in the depths. Our family's entire photo archive lives in `~/Dropbox/Photos`. For me, that means every other folder should be excluded from Carousel.

It's puzzling that Carousel offers a photo-first exclusion workflow without including a way to block multiple folders manually from the main settings page. As a result, the exclusion process takes several clicks more than it has to.

Even after using their workflow, I've still got a bunch of folders that aren't yet excluded (perhaps they don't have any images in them yet) but that I'd never want in Carousel. If I store an image in one of those folders later, it'll show up in our timeline.

As a user, that means I'm going to have to regularly check to see if there's additional "junk" that's appeared our stream so I can clean it out.

We're still using Dropbox and Carousel as our family's basic photo collection service, and it's worked out well so far. Hopefully manual folder exclusion will arrive in an update soon.

Carousel has seen steady development since its release, and the latest update continues to move the app in the right direction. I'm looking forward to what's next.
