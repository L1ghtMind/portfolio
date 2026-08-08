;(function () {
  "use strict";

  var hero = document.getElementById("project-detail-hero");
  var heroMedia = document.getElementById("project-hero-media");
  var heroCopy = document.getElementById("project-hero-copy");
  var content = document.getElementById("project-detail-content");

  if (!hero || !heroMedia || !heroCopy || !content || !Array.isArray(window.PROJECTS)) {
    return;
  }

  var escapeHtml = function (value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  var publicProjects = window.PROJECTS
    .filter(function (project) {
      return project.status === "public" && project.links && project.links.details;
    })
    .sort(function (a, b) {
      return (Number(a.order) || 0) - (Number(b.order) || 0) || a.title.localeCompare(b.title);
    });

  var slug = new URLSearchParams(window.location.search).get("project");
  var project = window.PROJECTS.find(function (item) { return item.slug === slug; });

  var renderStack = function (stack, className) {
    return '<ul class="' + className + '" aria-label="Technology stack">' + (stack || []).map(function (item) {
      return "<li>" + escapeHtml(item) + "</li>";
    }).join("") + "</ul>";
  };

  var renderUnavailable = function (isNda) {
    document.title = "Project unavailable | Dmytro Holombik";
    hero.classList.add("project-detail-hero-unavailable");
    heroCopy.innerHTML =
      '<span class="project-detail-eyebrow"><i class="icon-lock" aria-hidden="true"></i> ' + (isNda ? "Under NDA" : "Unavailable") + '</span>' +
      '<h1>Project details unavailable</h1>' +
      '<p>' + (isNda
        ? "This project is visible in the portfolio, but its details and source code cannot be shared publicly."
        : "The requested project could not be found or is not publicly available.") + '</p>';
    content.innerHTML =
      '<section class="project-unavailable-panel">' +
        '<i class="icon-lock" aria-hidden="true"></i>' +
        '<h2>' + (isNda ? "Protected by NDA" : "Nothing to show here") + '</h2>' +
        '<p>No restricted project content is stored or rendered on this page.</p>' +
        '<a class="project-link" href="index.html#fh5co-projects"><i class="icon-arrow-left22" aria-hidden="true"></i>Return to Projects</a>' +
      '</section>';
  };

  if (!project || project.status !== "public" || !project.links || !project.links.details) {
    renderUnavailable(Boolean(project && project.status === "nda"));
    return;
  }

  var media = project.media || {};
  var mediaSrc = escapeHtml(media.src || "images/portfolio-1.jpg");
  var mediaPosition = escapeHtml(media.position || "center");
  if (media.type === "video") {
    heroMedia.innerHTML = '<video autoplay muted loop playsinline preload="metadata"' +
      (media.poster ? ' poster="' + escapeHtml(media.poster) + '"' : "") +
      ' style="object-position:' + mediaPosition + '"><source src="' + mediaSrc + '" type="video/mp4"></video>';
  } else {
    heroMedia.innerHTML = '<img src="' + mediaSrc + '" alt="" style="object-position:' + mediaPosition + '">';
  }

  document.title = project.title + " | Dmytro Holombik";
  var descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", project.description);
  }

  heroCopy.innerHTML =
    (project.commercial
      ? '<span class="project-detail-eyebrow">' + (project.featured ? 'Featured Commercial Project' : 'Commercial Project') + '</span>'
      : project.personal
        ? '<span class="project-detail-eyebrow">Personal Project</span>'
        : '<span class="project-detail-eyebrow">Project Case Study</span>') +
    '<h1>' + escapeHtml(project.title) + '</h1>' +
    '<p class="project-detail-role">' + escapeHtml(project.role) + '</p>' +
    renderStack(project.stack, "project-detail-stack");

  var contributions = (project.contributions || []).length
    ? '<section class="project-detail-section"><span class="project-label">What I contributed</span><h2>Key Contributions</h2><ul class="project-detail-list">' +
        project.contributions.map(function (item) { return "<li>" + escapeHtml(item) + "</li>"; }).join("") +
      '</ul></section>'
    : "";

  var technical = (project.technical || []).length
    ? '<section class="project-detail-section"><span class="project-label">Under the hood</span><h2>Technical Approach</h2><div class="project-technical-grid">' +
        project.technical.map(function (item) {
          return '<article><h3>' + escapeHtml(item.title) + '</h3><p>' + escapeHtml(item.text) + '</p></article>';
        }).join("") +
      '</div></section>'
    : "";

  var github = project.links.github
    ? '<a class="project-link project-detail-github" href="' + escapeHtml(project.links.github) + '" target="_blank" rel="noopener noreferrer"><i class="icon-github" aria-hidden="true"></i>View on GitHub</a>'
    : "";
  var store = project.links.store
    ? '<a class="project-link project-detail-store" href="' + escapeHtml(project.links.store) + '" target="_blank" rel="noopener noreferrer"><i class="icon-android" aria-hidden="true"></i>View on Google Play</a>'
    : "";

  var projectIndex = publicProjects.findIndex(function (item) { return item.slug === project.slug; });
  var previous = projectIndex > 0 ? publicProjects[projectIndex - 1] : null;
  var next = projectIndex >= 0 && projectIndex < publicProjects.length - 1 ? publicProjects[projectIndex + 1] : null;
  var projectNavigation = (previous || next)
    ? '<nav class="project-detail-navigation" aria-label="Other public projects">' +
        (previous
          ? '<a href="project.html?project=' + encodeURIComponent(previous.slug) + '"><span>Previous project</span><strong><i class="icon-chevron-left" aria-hidden="true"></i>' + escapeHtml(previous.title) + '</strong></a>'
          : '<span></span>') +
        (next
          ? '<a class="project-next" href="project.html?project=' + encodeURIComponent(next.slug) + '"><span>Next project</span><strong>' + escapeHtml(next.title) + '<i class="icon-chevron-right" aria-hidden="true"></i></strong></a>'
          : '<span></span>') +
      '</nav>'
    : "";

  content.innerHTML =
    '<div class="project-detail-layout">' +
      '<div class="project-detail-body">' +
        '<section class="project-detail-section project-detail-overview"><span class="project-label">Overview</span><h2>About the Project</h2><p>' + escapeHtml(project.description) + '</p></section>' +
        contributions +
        technical +
      '</div>' +
      '<aside class="project-detail-sidebar">' +
        ((project.commercial || project.personal) ? '<div><span class="project-label">Project type</span><p>' + (project.commercial ? 'Commercial Project' : 'Personal Project') + '</p></div>' : '') +
        '<div><span class="project-label">Role</span><p>' + escapeHtml(project.role) + '</p></div>' +
        (project.developedBy ? '<div><span class="project-label">Developed by</span><p>' + escapeHtml(project.developedBy) + '</p></div>' : '') +
        (project.period ? '<div><span class="project-label">Period</span><p>' + escapeHtml(project.period) + '</p></div>' : '') +
        '<div><span class="project-label">Technology</span>' + renderStack(project.stack, "project-sidebar-stack") + '</div>' +
        github + store +
      '</aside>' +
    '</div>' +
    projectNavigation;
}());
