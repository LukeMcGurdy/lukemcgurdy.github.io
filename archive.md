---
layout: archive
title: Archive
---
<section class="archive">
  
{% for post in site.posts %}
  {% unless post.next %}
  <ul class="archive-container">
  {% else %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
  {% if year != nyear %}
  </ul>
  <h2>{{ post.date | date: '%Y' }}</h2>
  <ul class="past">
  {% endif %}
  {% endunless %}
    <li>
        <a href="{{ post.url }}">{{ post.title }}</a> - <time>{{ post.date | date:"%d %b" }}</time>
    </li>
{% endfor %}
  </ul>
</section>