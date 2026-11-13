/* ==========================================================================
   Eghogho Esele — Portfolio
   Plain, dependency-free JavaScript.
   01 · Site configuration (edit your real links HERE, once)
   02 · Link wiring
   03 · Navigation (scroll state, mobile menu)
   04 · Scrollspy
   05 · Scroll reveal (honours prefers-reduced-motion)
   ========================================================================== */
(() => {
  "use strict";

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── 01 · SITE CONFIGURATION ───────────────────────────────────────────
     Put your real values here. Anything left `null` renders as a
     faded "coming soon" link instead of a broken one.
     ──────────────────────────────────────────────────────────────────── */
  const CONFIG = {
    email:    "eseleeghogho@gmail.com",                 
    whatsapp: "https://wa.me/2349038488540",                                 
    github:   "https://github.com/Eghogh0",
    linkedin: "https://linkedin.com/in/eghogho-esele-8b8b23293",
                              

    live: {
      greedypig: null,   // your deployed Greedy Pig Reimagined URL
      timetable: "https://time-table-dapw.vercel.app",    // your deployed Study Timetable Planner URL
    }
  };

  /* ── 02 · LINK WIRING ──────────────────────────────────────────────── */
  const LINKS = {
    email: CONFIG.email ? `mailto:${CONFIG.email}` : null,
    whatsapp: CONFIG.whatsapp ? `https://wa.me/${CONFIG.whatsapp}` : null,
    github: CONFIG.github,
    linkedin: CONFIG.linkedin,
    x: CONFIG.x,
    greedypig: CONFIG.live.greedypig,
    timetable: CONFIG.live.timetable
  };

  $$("[data-live]").forEach((el) => {
    const href = LINKS[el.dataset.live];
    if (href) {
      el.setAttribute("href", href);
      if (href.startsWith("http")) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      }
    } else {
      el.classList.add("is-todo");
      el.setAttribute("aria-disabled", "true");
      el.title = "Link to be added — edit js/main.js (CONFIG)";
    }
  });

  $$("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ── 03 · NAVIGATION ──────────────────────────────────────────────── */
  const nav = $(".nav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const burger = $(".nav__burger", nav);
    if (burger) {
      const setOpen = (open) => {
        nav.classList.toggle("is-open", open);
        burger.setAttribute("aria-expanded", String(open));
        burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        document.body.style.overflow = open ? "hidden" : "";
      };
      burger.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
      $$(".nav__menu a", nav).forEach((a) => a.addEventListener("click", () => setOpen(false)));
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && nav.classList.contains("is-open")) setOpen(false);
      });
    }
  }

  /* ── 04 · SCROLLSPY (same-page anchors only) ──────────────────────── */
  const links = $$(".nav__link");
  const targets = links
    .filter((l) => l.hash && l.closest("a").getAttribute("href") === l.hash)
    .map((l) => ({ link: l, el: document.getElementById(l.hash.slice(1)) }))
    .filter((t) => t.el);

  if (targets.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const match = targets.find((t) => t.el === entry.target);
          if (match && entry.isIntersecting) {
            targets.forEach((t) => t.link.removeAttribute("aria-current"));
            match.link.setAttribute("aria-current", "true");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    targets.forEach((t) => spy.observe(t.el));
  }

  /* ── 05 · SCROLL REVEAL ───────────────────────────────────────────── */
  const reveals = $$(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  }
})();
