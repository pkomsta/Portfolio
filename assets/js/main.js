(function () {
  "use strict";

  var STORE_META = {
    appStore: {
      label: "App Store",
      icon: "M16.4 12.7c0-2.4 2-3.6 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.6.9-.8 0-1.9-.9-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.2 1.8 2.4 3 2.4 1.2 0 1.7-.8 3.1-.8 1.4 0 1.8.8 3.1.7 1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7 0 0-2.5-1-2.6-3.8zM14 5.6c.7-.8 1.1-1.9 1-3-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.5z"
    },
    googlePlay: {
      label: "Google Play",
      icon: "M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l.1.1 9.3-9.3v-.2L3.6 2.3zM16.2 15.6l-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1 .6 1 1.6 0 2.2l-3.7 2.1-.1-.1zM15.5 16.3L12.3 13l-9.3 9.3c.3.4.9.4 1.5 0l11-6zM15.5 7.7L4.5 1.7c-.6-.4-1.2-.3-1.5 0L12.3 11l3.2-3.3z"
    },
    website: {
      label: "Website",
      icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm6.9 6h-2.9a15.7 15.7 0 00-1.4-3.6A8 8 0 0118.9 8zM12 4c.7 1 1.3 2.3 1.7 4h-3.4c.4-1.7 1-3 1.7-4zM4.3 14a8 8 0 010-4h3.3a17.6 17.6 0 000 4H4.3zm.8 2H8a15.7 15.7 0 001.4 3.6A8 8 0 015.1 16zm2.9-8H5.1a8 8 0 014.3-3.6A15.7 15.7 0 008 8zm4 12c-.7-1-1.3-2.3-1.7-4h3.4c-.4 1.7-1 3-1.7 4zm2.1-6H9.9a15.6 15.6 0 010-4h4.2a15.6 15.6 0 010 4zm.5 5.6A15.7 15.7 0 0016 16h2.9a8 8 0 01-4.3 3.6zm1.8-5.6a17.6 17.6 0 000-4h3.3a8 8 0 010 4h-3.3z"
    }
  };

  /* Only allow http(s) — blocks javascript: and data: URIs from the data file. */
  function safeUrl(value) {
    if (typeof value !== "string") return null;
    try {
      var url = new URL(value, window.location.href);
      return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
    } catch (err) {
      return null;
    }
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function svgIcon(pathData) {
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    var path = document.createElementNS(ns, "path");
    path.setAttribute("d", pathData);
    svg.appendChild(path);
    return svg;
  }

  function buildMedia(app, primaryUrl) {
    var media = primaryUrl ? el("a", "app-media") : el("div", "app-media");
    if (primaryUrl) {
      media.href = primaryUrl;
      media.target = "_blank";
      media.rel = "noopener noreferrer";
      media.tabIndex = -1;
      media.setAttribute("aria-hidden", "true");
    }

    function useFallback() {
      media.classList.add("is-fallback");
      media.textContent = "";
      media.appendChild(el("span", "app-fallback", app.name.charAt(0).toUpperCase()));
    }

    var imageUrl = safeUrl(app.image);
    if (!imageUrl) {
      useFallback();
      return media;
    }

    var img = new Image();
    img.src = imageUrl;
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";
    img.referrerPolicy = "no-referrer";
    img.addEventListener("error", useFallback);
    media.appendChild(img);
    return media;
  }

  function buildCard(app) {
    if (!app || typeof app.name !== "string" || !app.name.trim()) return null;

    var links = app.links || {};
    var primaryUrl = safeUrl(links.appStore) || safeUrl(links.googlePlay) || safeUrl(links.website);

    var card = el("article", "app-card reveal");
    card.appendChild(buildMedia(app, primaryUrl));

    var body = el("div", "app-body");

    var title = el("h3", "app-title");
    if (primaryUrl) {
      var titleLink = el("a", null, app.name);
      titleLink.href = primaryUrl;
      titleLink.target = "_blank";
      titleLink.rel = "noopener noreferrer";
      title.appendChild(titleLink);
    } else {
      title.textContent = app.name;
    }
    body.appendChild(title);

    if (app.tagline) body.appendChild(el("p", "app-tagline", app.tagline));

    if (app.role) {
      var role = el("p", "app-role");
      role.appendChild(el("strong", null, "My role: "));
      role.appendChild(document.createTextNode(app.role));
      body.appendChild(role);
    }

    if (Array.isArray(app.tags) && app.tags.length) {
      var chips = el("div", "chips");
      app.tags.forEach(function (tag) {
        chips.appendChild(el("span", "chip", String(tag)));
      });
      body.appendChild(chips);
    }

    var linkRow = el("div", "app-links");
    Object.keys(STORE_META).forEach(function (key) {
      var url = safeUrl(links[key]);
      if (!url) return;
      var meta = STORE_META[key];
      var a = el("a", "store-link");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.appendChild(svgIcon(meta.icon));
      a.appendChild(document.createTextNode(meta.label));
      a.setAttribute("aria-label", meta.label + " — " + app.name);
      linkRow.appendChild(a);
    });
    if (linkRow.childNodes.length) body.appendChild(linkRow);

    card.appendChild(body);
    return card;
  }

  function renderApps() {
    var grid = document.getElementById("appGrid");
    var empty = document.getElementById("gridEmpty");
    if (!grid) return;

    var apps = Array.isArray(window.APPS) ? window.APPS : [];
    var fragment = document.createDocumentFragment();
    var count = 0;

    apps.forEach(function (app) {
      var card = buildCard(app);
      if (card) {
        fragment.appendChild(card);
        count++;
      }
    });

    grid.appendChild(fragment);
    if (empty) empty.hidden = count > 0;
  }

  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (item) { item.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    items.forEach(function (item, index) {
      item.style.transitionDelay = Math.min(index % 6, 5) * 55 + "ms";
      observer.observe(item);
    });
  }

  function initHeader() {
    var header = document.getElementById("siteHeader");
    var toggle = document.getElementById("navToggle");
    if (!header) return;

    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (toggle) {
      toggle.addEventListener("click", function () {
        var open = header.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      header.querySelectorAll(".nav a").forEach(function (link) {
        link.addEventListener("click", function () {
          header.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  }

  function initActiveNav() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
    var sections = links
      .map(function (link) { return document.querySelector(link.getAttribute("href")); })
      .filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach(function (section) { observer.observe(section); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());

    renderApps();
    initReveal();
    initHeader();
    initActiveNav();
  });
})();
