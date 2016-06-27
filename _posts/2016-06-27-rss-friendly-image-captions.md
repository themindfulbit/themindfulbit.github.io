---
layout: post
title: "RSS-Friendly Image Captions"
author: [Erik Hess]
categories: [development]
tags: [rss, jekyll, html]
banner: quest-for-immortality.jpg
caption: "The Quest for Immortality, 18th Century. [Yuntai Xianrui](https://flic.kr/p/jYXhs2)"
medium: ""
---

For those who rely on them, RSS feeds *are* the internet. If you're a proud member of the RSS Addict community, you're constantly looking for ways to improve the appearance of your posts in feed readers.

RSS readers apply a default stylesheet to the XML files they download, and it can be a challenge making things appear correctly across different platforms and applications. Scaling and styling image captions can be especially problematic.

Here’s an example of a non-optimized caption in [Reeder](http://reederapp.com/):

{% include image.html file="ugly-caption.jpg" title="Not so nice." %}

See how the caption is indistinguishable from the body text? What we'd like is something closer to this:

{% include image.html file="nice-caption.jpg" title="Much better." %}

As you can see, Reeder has rendered the caption in a smaller and lighter colored font. We can achieve that effect using `<figure>` and `<figcaption>`.

[`<figure>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure) and [`<figcaption>`](https://developer.mozilla.org/en/docs/Web/HTML/Element/figcaption) are [broadly supported](http://caniuse.com/#search=figcaption) HTML 5 elements that are useful for supporting items that enrich a body of text. We’re using them here for images, but as elements they’re applicable for anything you might need to feature in a scientific paper or other explanatory document.

A simple implementation looks like this:

{% raw %}
<pre class="prettyprint linenums lang-html">
&lt;figure>
  &lt;img src=“my-image.jpg” alt="My Image Caption"/>
  &lt;figcaption>My Image Caption&lt;/figcaption>
&lt;/figure>
</pre>
{% endraw %}

As HTML goes, that's pretty elegant, but it takes a lot more typing than a standard [Markdown image tag](https://daringfireball.net/projects/markdown/syntax#img), which looks like this:

{% raw %}
<pre class="prettyprint linenums lang-html">
!&#91;My Image Caption](my-image.jpg "My Image Caption")
</pre>
{% endraw %}

Let's get creatively lazy. If your blog’s templating engine supports *includes*, you can make the whole process easier and cleaner. Includes are kind of like internal [TextExpander](https://smilesoftware.com/textexpander) snippets. Type something short and you get something longer when you're done.

The following examples will work in [Jekyll](http://jekyllrb.com), but should be easy enough to port to any blog engine that supports similar *include* functionality.

Create a file called `image.html` in the `_includes` folder. Add the following code and save the file:

{% raw %}
<pre class="prettyprint linenums lang-html">
&lt;figure class="image-figure">
  &lt;img src=“{{ site.url }}/path/to/img/{{ include.file }}” alt="{{ include.caption }}"/>
  &lt;figcaption>{{ include.caption }}&lt;/figcaption>
&lt;/figure>
</pre>
{% endraw %}

Now you can insert an image by typing this in the body of your text:

{% raw %}
<pre class="prettyprint linenums lang-html">
{% include image.html file="my-image.jpg" caption="My Image Caption" %}
</pre>
{% endraw %}

If you don't want to commit to captions on all your images, you can add some conditionals:

{% raw %}
<pre class="prettyprint linenums lang-html">
&lt;figure class="image-figure">
  &lt;img src=“{{ site.url }}/path/to/img/{{ include.file }}” alt="{{ include.caption }}"/>
  {% if include.caption %}
    &lt;figcaption>{{ include.caption }}&lt;/figcaption>
  {% endif $}
&lt;/figure>
</pre>
{% endraw %}

Sometimes you may want to style some images differently from the rest using HTML classes. That way, with CSS you can make certain images smaller, larger, or align them on the right or left side of the text. It can also be helpful to add Markdown links to your captions so others can learn more about the images and their sources. Here's how all that is done:

{% raw %}
<pre class="prettyprint linenums lang-html">
&lt;figure class="image-figure {{ include.class }}">
  &lt;img src=“{{ site.url }}/path/to/img/{{ include.file }}” alt="{{ include.caption | markdownify | strip_html }}"/>
  {% if include.caption %}
    &lt;figcaption>
      {{ include.caption | markdownify }}
    &lt;/figcaption>
  {% endif $}
&lt;/figure>
</pre>
{% endraw %}

You may notice a few additional tags after `image.caption`. `markdownify` translates Markdown to HTML. For the `alt=` attribute you can strip that HTML using [liquid's](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) `strip.html` function to leave pure text without links.

Adding classes requires adding one more attribute to your *include* line as well:

{% raw %}
<pre class="prettyprint linenums lang-html">
{% include image.html file="my-image.jpg" caption="My Image Caption" class="my-class" %}
</pre>
{% endraw %}

[Fancybox](http://fancyapps.com/fancybox/) is a beautiful shadowbox script. If you're reading this at [http://themindfulbit.com](http://themindfulbit.com) you can try it out by clicking on the images earlier in this post. Using Fancybox requires you to wrap the image in an `<a>` tag and apply a `fancybox` class. Doing that leaves you with this:

{% raw %}
<pre class="prettyprint linenums lang-html">
&lt;figure class="image-figure {{ include.class }}">
  &lt;a class="fancybox" href="{{ site.url }}/path/to/img/{{ include.file }}" >
    &lt;img src=“{{ site.url }}/path/to/img/{{ include.file }}” alt="{{ include.caption | markdownify | strip_html }}"/>
  &lt;/a>
  {% if include.caption %}
    &lt;figcaption>
      {{ include.caption | markdownify }}
    &lt;/figcaption>
  {% endif $}
&lt;/figure>
</pre>
{% endraw %}

Note though, that since all that mess is tucked away inside the *include*, all you have to invoke in your Markdown file is that same single line:

{% raw %}
<pre class="prettyprint linenums lang-html">
{% include image.html file="my-image.jpg" caption="My Image Caption" class="my-class" %}
</pre>
{% endraw %}

And while that may not be as simple as pure Markdown, it’s a heck of a lot more capable.
