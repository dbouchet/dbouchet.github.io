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
      <div class="row justify-content-sm-center align-items-center">
        <div class="col-sm-8 mt-2">
          <p>
            <b>
              <span style="font-size: 1.1em;">
                <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
              </span>
            </b><br />
            {% if project.complement %}
              <small><span style="color:Gray;">{{ project.complement }}</span></small>
            {% endif %}
          </p>
        </div>
        {% if project.img %}
        <div class="col-sm-4 mt-2 text-center">
          {% include figure.liquid path=project.img class="img-fluid rounded z-depth-1" width="200px" %}
        </div>
        {% endif %}
      </div>
    {% endfor %}

  </article>
</div>

