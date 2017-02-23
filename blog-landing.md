---
layout: list
title: Blog
permalink: /blog/
---

<h1>Blog Posts</h1>
{% for post in site.posts %}
  {% unless post.next %}
  <ul class="current-blogs">
  {% else %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
  {% if year != nyear %}
  </ul>
  <div class="break-out">
  <div class="container">
   <div class="row">
    <div class="col-md-8 col-md-offset-2">
  <h2>{{ post.date | date: '%Y' }} Archives</h2>
  <ul class="past-blogs">
  {% endif %}
  {% endunless %}
       <li>
            <a href="{{ post.url }}">
                <p>{{ post.title }}</p>
                <time> <span>&#40;</span> {{ post.date | date:"%d %b %Y" }} <span>&#41;</span></time>
            </a>
        </li>
{% endfor %}
  </ul>
  </div>
  </div>
  </div>
    </div>
