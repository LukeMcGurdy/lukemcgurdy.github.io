---
layout: default
title: Blog
permalink: /blog/
---
<section class="archive">
<h1>Blog Posts</h1> 
{% for post in site.posts %}
  {% unless post.next %}
  <ul class="archive-container">
  {% else %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
  {% if year != nyear %}
  </ul>
  <h2>{{ post.date | date: '%Y' }} Archives</h2>
  <ul class="past">
  {% endif %}
  {% endunless %}
    <a href="{{ post.url }}">
       <li>
            <h2>{{ post.title }}</h2>

            <div class="bottom-half"><time>&nbsp;{{ post.date | date:"%d %b %Y" }}</time></div>
        </li>
    </a>
{% endfor %}
  </ul>
</section>
