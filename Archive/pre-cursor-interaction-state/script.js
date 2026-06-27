const navItems = document.querySelectorAll(".nav-item");
const sectionNavItems = document.querySelectorAll(".panel-nav .nav-item");
const menuToggle = document.querySelector(".menu-toggle");
const sidePanel = document.querySelector(".side-panel");
const navScrim = document.querySelector(".nav-scrim");

const drawerMedia = window.matchMedia("(max-width: 1024px)");

const setPanelAvailability = () => {
  const isDrawer = drawerMedia.matches;
  const isOpen = document.body.classList.contains("nav-open");

  if (!sidePanel) return;

  if (isDrawer && !isOpen) {
    sidePanel.setAttribute("inert", "");
    sidePanel.setAttribute("aria-hidden", "true");
    return;
  }

  sidePanel.removeAttribute("inert");
  sidePanel.removeAttribute("aria-hidden");
};

const setNavigationOpen = (isOpen) => {
  document.body.classList.toggle("nav-open", isOpen);
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
  menuToggle?.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  setPanelAvailability();
};

navItems.forEach((item) => {
  item.addEventListener("pointerdown", () => {
    item.classList.add("is-pressed");
  });

  item.addEventListener("pointerup", () => {
    item.classList.remove("is-pressed");
  });

  item.addEventListener("pointerleave", () => {
    item.classList.remove("is-pressed");
  });

  item.addEventListener("click", () => {
    if (item.closest(".panel-nav")) {
      sectionNavItems.forEach((navItem) => {
        navItem.classList.remove("is-active");
        navItem.removeAttribute("aria-current");
      });
      item.classList.add("is-active");
      item.setAttribute("aria-current", "page");
    }

    setNavigationOpen(false);
    item.blur();
  });
});

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setNavigationOpen(!isOpen);
});

navScrim?.addEventListener("click", () => {
  setNavigationOpen(false);
});

document.addEventListener("click", (event) => {
  if (!document.body.classList.contains("nav-open")) return;
  if (sidePanel?.contains(event.target) || menuToggle?.contains(event.target)) return;
  setNavigationOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  setNavigationOpen(false);
  menuToggle?.focus();
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 1025px)").matches) {
    setNavigationOpen(false);
    return;
  }

  setPanelAvailability();
});

drawerMedia.addEventListener("change", () => {
  setNavigationOpen(false);
  setPanelAvailability();
});

setPanelAvailability();
