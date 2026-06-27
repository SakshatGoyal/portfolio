const pages = Array.from(document.querySelectorAll(".sample-page"));
const navLinks = Array.from(document.querySelectorAll(".motion-nav a"));
const replayButton = document.querySelector(".replay-button");
const scrollLane = document.querySelector(".scroll-lane");
const parallaxFrame = document.querySelector(".demo-parallax");
const parallaxCards = Array.from(document.querySelectorAll(".parallax-card"));
const switchControl = document.querySelector(".switch-control");
const switchGrid = document.querySelector(".switch-grid");
const routes = pages.map((page) => page.id);

let activePage = null;
let revealObserver = null;

function getRoute() {
  const hash = window.location.hash.replace("#", "");
  return routes.includes(hash) ? hash : routes[0];
}

function activate(route = getRoute()) {
  activePage = document.getElementById(route);
  pages.forEach((page) => {
    page.classList.toggle("is-active", page === activePage);
    page.classList.remove("is-running");
  });
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.route === route);
  });
  resetScrollDemo();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      activePage.classList.add("is-running");
      if (route === "scroll-rise") setupScrollReveal();
      if (route === "parallax-stack") updateParallax();
    });
  });
}

function replay() {
  if (!activePage) return;
  activePage.classList.remove("is-running");
  resetScrollDemo();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      activePage.classList.add("is-running");
      if (activePage.id === "scroll-rise") setupScrollReveal();
      if (activePage.id === "parallax-stack") updateParallax();
    });
  });
}

function resetScrollDemo() {
  document.querySelectorAll(".scroll-reveal").forEach((item) => {
    item.classList.remove("is-visible");
  });
  if (scrollLane) scrollLane.scrollTop = 0;
  if (revealObserver) revealObserver.disconnect();
}

function setupScrollReveal() {
  if (!scrollLane) return;
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  }, {
    root: scrollLane,
    threshold: 0.28,
  });
  document.querySelectorAll(".scroll-reveal").forEach((item) => revealObserver.observe(item));
}

function updateParallax() {
  if (!parallaxFrame || !activePage || activePage.id !== "parallax-stack") return;
  const rect = parallaxFrame.getBoundingClientRect();
  const viewport = window.innerHeight || 1;
  const progress = Math.min(1, Math.max(0, 1 - rect.top / viewport));
  const distances = [-18, -38, -62];
  parallaxCards.forEach((card, index) => {
    card.style.transform = `translateY(${Math.round(distances[index] * progress)}px)`;
  });
}

window.addEventListener("hashchange", () => activate());
window.addEventListener("scroll", updateParallax, { passive: true });
window.addEventListener("resize", updateParallax);
replayButton.addEventListener("click", replay);

if (scrollLane) {
  scrollLane.addEventListener("scroll", () => {
    if (activePage?.id === "scroll-rise" && !revealObserver) setupScrollReveal();
  }, { passive: true });
}

if (switchControl && switchGrid) {
  switchControl.addEventListener("click", () => {
    const nextMode = switchGrid.dataset.mode === "overview" ? "index" : "overview";
    switchGrid.dataset.mode = nextMode;
  });
}

activate();
