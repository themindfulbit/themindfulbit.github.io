---
layout: post
title: 'Typekit Adds Asynchronous Font Loading'
author: [Erik Hess]
categories: [design]
tags: [typekit, adobe]
banner: typekit-high90.png
caption: This site uses Futura and Adobe Caslon Pro
---

From the [Typekit blog](http://blog.typekit.com/2015/08/04/new-embed-code-for-asynchronous-font-loading/):

> As part of a series of performance improvements, we’re making some changes to our embed code. By default, our embed code blocks rendering of the page while your fonts are loading. This negatively impacts the performance of your site because the browser needs to wait until the fonts have loaded before it can start rendering the page.
>
> Today we’re changing that. From now on, all new kits will asynchronously load fonts. This will significantly improve your website performance. However, it can also cause the browser to render content in a fallback font before your web fonts load. This so-called Flash Of Unstyled Text can be controlled by using the font events provided by Typekit. Using font events, you can choose either to hide your content, or to show fallback fonts while your web fonts are loading.

This is big news from Typekit and good news for web fonts in general.

I love Typekit. While I had some [initial ](http://high90.pub/blog/adobe-acquires-typekit) [skepticism](http://high90.pub/blog/typekit-follow-up) when the company was purchased by Adobe, they’ve continued to add great features and fonts. Typekit’s Creative Cloud integration has been a nice addition to Adobe’s subscription service, and it’s one of many reasons I stay.

As for when or whether we’ll implement asynchronous font loading on high90’s Typekit-driven sites,  we’ll have to see. FOUT can be annoying, but so is waiting forever for an article to load over a slow connection.

I strongly believe that content should trump design, so we’ll probably transition in the very near future.
