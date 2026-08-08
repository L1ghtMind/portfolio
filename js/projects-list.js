;(function () {
  "use strict";

  var grid = document.getElementById("projects-grid");
  var pagination = document.getElementById("projects-pagination");
  var filters = document.getElementById("projects-filters");

  if (!grid || !pagination || !filters || !Array.isArray(window.PROJECTS)) {
    return;
  }

  var pageSize = Math.max(1, Number(window.PROJECTS_CONFIG && window.PROJECTS_CONFIG.pageSize) || 4);
  var projects = window.PROJECTS
    .filter(function (project) { return project.status !== "hidden"; })
    .sort(function (a, b) {
      return (Number(a.order) || 0) - (Number(b.order) || 0) || a.title.localeCompare(b.title);
    });
  var availableFilters = ["all", "unreal", "mobile"];
  var currentFilter = "all";

  var escapeHtml = function (value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  var renderMedia = function (project) {
    var media = project.media || {};
    var isNda = project.status === "nda";
    var src = escapeHtml(isNda ? "images/nda.png" : (media.src || "images/portfolio-1.jpg"));
    var alt = escapeHtml(isNda ? "NDA project preview" : (media.alt || (project.title + " preview")));
    var position = escapeHtml(isNda ? "center" : (media.position || "center"));

    if (media.type === "video" && !isNda) {
      var poster = media.poster ? ' poster="' + escapeHtml(media.poster) + '"' : "";
      return '<video autoplay muted loop playsinline preload="metadata"' + poster + ' style="object-position:' + position + '">' +
        '<source src="' + src + '" type="video/mp4">' +
        '<span>' + alt + '</span>' +
      '</video>';
    }

    return '<img' + (isNda ? ' class="nda-project-image"' : '') + ' src="' + src + '" alt="' + alt + '" loading="lazy" style="object-position:' + position + '">';
  };

  var renderStack = function (stack) {
    return (stack || []).map(function (item) {
      return "<li>" + escapeHtml(item) + "</li>";
    }).join("");
  };

  var renderProjectDeveloper = function (project) {
    var developer = project.status === "nda" ? "NDA" : project.developedBy;
    if (!developer) {
      return "";
    }

    return '<div class="project-section project-card-developer">' +
      '<span class="project-label">Developed by</span>' +
      '<p>' + escapeHtml(developer) + '</p>' +
    '</div>';
  };

  var renderProjectPeriod = function (project) {
    if (!project.period) {
      return "";
    }

    return '<div class="project-section project-card-period">' +
      '<span class="project-label">Period</span>' +
      '<p>' + escapeHtml(project.period) + '</p>' +
    '</div>';
  };

  var disabledAction = function (label, icon, reason, extraClass) {
    return '<span class="project-link is-disabled ' + (extraClass || "") + '" aria-disabled="true" title="' + escapeHtml(reason) + '">' +
      (icon ? '<i class="' + icon + '" aria-hidden="true"></i>' : "") +
      escapeHtml(label) +
    '</span>';
  };

  var renderActions = function (project) {
    var isPublic = project.status === "public";
    var links = project.links || {};
    var detailsAction = isPublic && links.details
      ? '<a class="project-link project-read-more" href="project.html?project=' + encodeURIComponent(project.slug) + '">Read More<i class="icon-arrow-right22" aria-hidden="true"></i></a>'
      : disabledAction("Read More", "icon-lock", "Project details are unavailable due to NDA.", "project-read-more");
    var githubAction = links.github
      ? (isPublic
        ? '<a class="project-link" href="' + escapeHtml(links.github) + '" target="_blank" rel="noopener noreferrer"><i class="icon-github" aria-hidden="true"></i>View on GitHub</a>'
        : disabledAction("View on GitHub", "icon-lock", "Source code is not publicly available.", ""))
      : "";
    var storeAction = isPublic && links.store
      ? '<a class="project-link project-store-link" href="' + escapeHtml(links.store) + '" target="_blank" rel="noopener noreferrer"><i class="icon-android" aria-hidden="true"></i>View on Google Play</a>'
      : "";

    return '<div class="project-actions">' + detailsAction + githubAction + storeAction + '</div>';
  };

  var renderCard = function (project) {
    var isNda = project.status === "nda";
    var classes = ["project-card"];

    if (project.layout === "wide") {
      classes.push("project-card-wide");
    }
    if (isNda) {
      classes.push("project-card-nda");
    }

    var badges = "";
    if (isNda) {
      badges += '<span class="project-status-badge"><i class="icon-lock" aria-hidden="true"></i> Under NDA</span>';
    } else if (project.featured) {
      badges += '<span class="project-status-badge project-status-featured">Featured</span>';
    } else if (project.personal) {
      badges += '<span class="project-status-badge project-status-personal">Personal Project</span>';
    }

    return '<article class="' + classes.join(" ") + '">' +
      '<div class="project-media">' + renderMedia(project) + badges + '</div>' +
      '<div class="project-content">' +
        '<h3>' + escapeHtml(project.title) + '</h3>' +
        '<ul class="project-stack" aria-label="Technology stack">' + renderStack(project.stack) + '</ul>' +
        '<div class="project-section"><span class="project-label">Description</span><p>' + escapeHtml(project.summary || project.description) + '</p></div>' +
        '<div class="project-card-facts">' +
          '<div class="project-section project-card-role"><span class="project-label">Role</span><p>' + escapeHtml(project.role) + '</p></div>' +
          renderProjectDeveloper(project) +
          renderProjectPeriod(project) +
        '</div>' +
        renderActions(project) +
      '</div>' +
    '</article>';
  };

  var getRequestedFilter = function () {
    var value = new URLSearchParams(window.location.search).get("filter") || "all";
    return availableFilters.indexOf(value) !== -1 ? value : "all";
  };

  var getFilteredProjects = function () {
    if (currentFilter === "all") {
      return projects;
    }

    return projects.filter(function (project) {
      return (project.stack || []).some(function (item) {
        var technology = String(item).toLowerCase();
        return currentFilter === "unreal"
          ? technology.indexOf("unreal engine") !== -1
          : technology === "mobile";
      });
    });
  };

  var updateFilterControls = function () {
    filters.querySelectorAll("button[data-project-filter]").forEach(function (button) {
      var isActive = button.getAttribute("data-project-filter") === currentFilter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  var getRequestedPage = function () {
    var value = Number(new URLSearchParams(window.location.search).get("page"));
    return Number.isInteger(value) && value > 0 ? value : 1;
  };

  var setPageInUrl = function (page, anchorProjects) {
    var url = new URL(window.location.href);
    if (page === 1) {
      url.searchParams.delete("page");
    } else {
      url.searchParams.set("page", String(page));
    }
    if (currentFilter === "all") {
      url.searchParams.delete("filter");
    } else {
      url.searchParams.set("filter", currentFilter);
    }
    var hash = anchorProjects ? "#fh5co-projects" : url.hash;
    history.replaceState({ page: page }, "", url.pathname + url.search + hash);
  };

  var renderPagination = function (currentPage, totalPages) {
    if (totalPages <= 1) {
      pagination.innerHTML = "";
      pagination.hidden = true;
      return;
    }

    pagination.hidden = false;
    var controls = [];
    controls.push('<button type="button" data-page="' + (currentPage - 1) + '"' + (currentPage === 1 ? " disabled" : "") + ' aria-label="Previous projects page"><i class="icon-chevron-left" aria-hidden="true"></i><span>Previous</span></button>');

    for (var page = 1; page <= totalPages; page++) {
      controls.push('<button type="button" data-page="' + page + '"' + (page === currentPage ? ' class="is-current" aria-current="page"' : "") + ' aria-label="Projects page ' + page + '">' + page + '</button>');
    }

    controls.push('<button type="button" data-page="' + (currentPage + 1) + '"' + (currentPage === totalPages ? " disabled" : "") + ' aria-label="Next projects page"><span>Next</span><i class="icon-chevron-right" aria-hidden="true"></i></button>');
    pagination.innerHTML = controls.join("");
  };

  var render = function (requestedPage, shouldScroll) {
    var filteredProjects = getFilteredProjects();
    var totalPages = Math.max(1, Math.ceil(filteredProjects.length / pageSize));
    var currentPage = Math.min(Math.max(1, requestedPage), totalPages);
    var start = (currentPage - 1) * pageSize;
    var visibleProjects = filteredProjects.slice(start, start + pageSize);

    grid.innerHTML = visibleProjects.map(renderCard).join("");
    updateFilterControls();
    renderPagination(currentPage, totalPages);
    setPageInUrl(currentPage, shouldScroll);

    if (shouldScroll) {
      document.getElementById("fh5co-projects").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  pagination.addEventListener("click", function (event) {
    var button = event.target.closest("button[data-page]");
    if (!button || button.disabled) {
      return;
    }
    render(Number(button.getAttribute("data-page")), true);
  });

  filters.addEventListener("click", function (event) {
    var button = event.target.closest("button[data-project-filter]");
    if (!button) {
      return;
    }

    currentFilter = button.getAttribute("data-project-filter");
    render(1, false);
  });

  currentFilter = getRequestedFilter();
  render(getRequestedPage(), false);
}());
