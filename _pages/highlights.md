---
layout: page
title: Highlights
permalink: /highlights/
nav: true
nav_order: 2
---

<div class="post">
  <article>

    {% assign sorted_projects = site.projects | sort: "importance" %}

    {% for project in sorted_projects %}
      <hr>
      <div class="row justify-content-sm-center">
        <div class="col-sm-8 mt-3 mt-md-0">
          <h3>{{ project.title }}</h3>
          {% if project.description %}
            <p>{{ project.description }}</p>
          {% endif %}
          {% if project.url %}
            <p><a href="{{ project.url }}">Learn more</a></p>
          {% endif %}
        </div>
        <div class="col-sm-4 mt-3 mt-md-0">
          {% assign project_image_path = project.basename | prepend: 'assets/img/highlights/' | append: '.png' %}
          {% include figure.liquid path=project_image_path class="img-fluid rounded z-depth-1" %}
        </div>
      </div>
    {% endfor %}

  </article>
</div>

