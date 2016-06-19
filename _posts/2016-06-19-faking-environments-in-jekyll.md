---
layout: post
title: "Faking Environments in Jekyll"
author: [Erik Hess]
categories: [development]
tags: [jekyll]
banner: dinorama.jpg
caption: '[Annals of the South African Museum, 1898.](https://flic.kr/p/u4kAYH)'
medium: ""
---

Even though [my site](http://themindfulbit.com) is hosted on [Github Pages](https://pages.github.com/), I prefer to write and design on a laptop. To support that kind of local development, Jekyll offers a handy [dev server](https://jekyllrb.com/docs/usage/) that will watch your site’s files, reprocess them when anything changes, and fire up a local web server.

To get started, open a terminal window, navigate to your site's root folder, type `jekyll serve` and hit enter. After a few seconds of compiling, you'll find a (probably broken) copy of your website at [http://localhost:4000](http://localhost:4000).

In your site's root folder is a [YAML](https://en.wikipedia.org/wiki/YAML) file named `_config.yml`. That file sets a bunch of variables the Jekyll engine needs to do its job. If you open the file, you’ll see a line that looks like this:

<pre class="prettyprint lang-sh">
url: "http://themindfulbit.com"
</pre>

That’s perfect for my published site, but the local copy needs a different URL. If you try to serve your site up with the wrong value, the very best outcome is that all your internal links will be broken. Worse, they might silently point to your external site. That could drive you nuts when you make an edit and it never seems to appear in your browser.

Some blog engines (like [Statamic](https://v1.statamic.com/learn/advanced-features/environments)) natively support *environments*. Environments allow you to use different config files on different servers. A few engines detect where they're being hosted and serve the right version automatically. Jekyll isn't quite that smart, but we can get similar results using some simple trickery.

By default, Github Pages and other Jekyll installations will always look for the `_config.yml` file. We’ll need to make a different one for development work. Duplicate your original and name it something like `_config_dev.yml`. Now set the `url:` value in the dev file to this:

<pre class="prettyprint lang-sh">
url: "http://localhost:4000"
</pre>

Once you’ve got a development config file, you'll have to tell the dev server where to find it. That means instead of a simple `jekyll serve`, you’ll need to write:

<pre class="prettyprint lang-sh">
jekyll serve --config _config_dev.yml
</pre>

We can make the whole thing even easier by adding an [alias](http://www.linfo.org/alias.html) to your `.bashrc` file:

<pre class="prettyprint lang-sh">
alias watch='jekyll serve --config _config_dev.yml'
</pre>

Now all you have to do is navigate to the root of your Jekyll folder and type `watch`. Point your browser to [http://localhost:4000](http://localhost:4000) and you'll be set.
