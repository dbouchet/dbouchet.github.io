---
layout: page
title: Highlights
permalink: /highlights/
nav: true
nav_order: 2
---

<!-- pages/highlights.md -->
<div class="projects">

{% assign sorted_projects = site.projects | sort: "importance" %}

<div class="project-list">
  {% for project in sorted_projects %}
    <div class="project">
      <h3>{{ project.title }}</h3>
      {% if project.description %}
        <p>{{ project.description }}</p>
      {% endif %}
      {% if project.url %}
        <p><a href="{{ project.url }}">Learn more</a></p>
      {% endif %}
    </div>
  {% endfor %}
</div>

</div>

