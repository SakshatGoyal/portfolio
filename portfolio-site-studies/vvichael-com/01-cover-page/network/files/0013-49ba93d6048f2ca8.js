const DESIGN_WIDTH = 1750;
const DESIGN_HEIGHT = 900;
const MAX_DESKTOP_VIEWPORT = 3000;

const DESKTOP_SNAP_OFFSETS = [0, -340, -1186];
const DESKTOP_INDEX_SECOND_OFFSET_BASE = -1554;
const DESKTOP_GRID_SECOND_OFFSET_BASE = DESKTOP_SNAP_OFFSETS[2];
const RESPONSIVE_BREAKPOINT = 1200;
const TABLET_FREE_SCROLL_MIN = 901;

const app = document.getElementById("app");
const board = document.getElementById("board");
const boardShell = document.querySelector(".board-shell");
const body = document.body;
const nyClockNodes = document.querySelectorAll(".top-ny, .r-ny");
const worksList = document.querySelector(".works-list");
const workItems = Array.from(document.querySelectorAll(".works-list .work-item"));
const responsiveWorksList = document.querySelector(".r-works-grid");
const responsiveWorkItems = Array.from(document.querySelectorAll(".r-works-grid .r-work-item"));
const viewToggleNodes = Array.from(document.querySelectorAll(".view-toggle"));
const bioShortcutNodes = Array.from(document.querySelectorAll(".top-bio, .r-bio"));
const selectedWorksShortcutNodes = Array.from(document.querySelectorAll(".selected-label, .r-section-label"));
const responsiveFirstPanelNode = document.querySelector(".r-panel-first");
const heroWeightSliderNode = document.getElementById("heroWeightSlider");
const heroOpticalSliderNode = document.getElementById("heroOpticalSlider");
const heroWeightValueNode = document.querySelector(".hero-axis-value-weight");
const heroOpticalValueNode = document.querySelector(".hero-axis-value-optical");
const responsiveHeroWeightSliderNode = document.getElementById("rHeroWeightSlider");
const responsiveHeroOpticalSliderNode = document.getElementById("rHeroOpticalSlider");
const responsiveHeroWeightValueNode = document.querySelector(".r-hero-axis-value-weight");
const responsiveHeroOpticalValueNode = document.querySelector(".r-hero-axis-value-optical");
const heroRemixButtonNode = document.querySelector(".hero-axis-remix");
const responsiveHeroRemixButtonNode = document.querySelector(".r-hero-axis-remix");
const indexViewNode = document.querySelector(".index-view");
const indexBodyNode = document.getElementById("indexBody");
const responsiveIndexBodyNode = document.getElementById("rIndexBody");
const gridCardsNode = document.getElementById("gridCards");
const responsiveGridCardsNode = document.getElementById("rGridCards");
const selectedLabelNode = document.querySelector(".selected-label");
const gridGroupLabelNodes = {
  selected: selectedLabelNode,
  brand: document.querySelector(".grid-group-brand"),
  product: document.querySelector(".grid-group-product"),
  system: document.querySelector(".grid-group-system"),
};
const gridGroupAboutNodes = {
  selected: document.querySelector(".grid-selected-about"),
  brand: document.querySelector(".grid-group-about-brand"),
  product: document.querySelector(".grid-group-about-product"),
  system: document.querySelector(".grid-group-about-system"),
};
const metaTitleNode = document.querySelector(".meta-title");
const metaSubNode = document.querySelector(".meta-sub");
const metaYearNode = document.querySelector(".meta-right");
const metaYearCounterNode = document.querySelector(".meta-right-counter");
const metaBodyNode = document.querySelector(".meta-body");
const responsiveMetaTitleNode = document.querySelector(".r-meta-title");
const responsiveMetaSubNode = document.querySelector(".r-meta-sub");
const responsiveMetaYearNode = document.querySelector(".r-meta-right");
const responsiveMetaYearCounterNode = document.querySelector(".r-meta-right-counter");
const responsiveMetaBodyNode = document.querySelector(".r-meta-body");
const billboardFrameNode = document.querySelector(".billboard-frame");
const responsiveBillboardFrameNode = document.querySelector(".r-billboard-frame");
const fabCursorCounterNode = document.querySelector(".fab-cursor-counter");
const billboardVideo = document.querySelector(".billboard-media");
const billboardImage = document.querySelector(".billboard-image");
const responsiveBillboardVideo = document.querySelector(".r-billboard-media");
const responsiveBillboardImage = document.querySelector(".r-billboard-image");
const defaultBillboardVideoSrc = billboardVideo ? billboardVideo.getAttribute("src") || "" : "";
const defaultResponsiveBillboardVideoSrc = responsiveBillboardVideo
  ? responsiveBillboardVideo.getAttribute("src") || ""
  : "";
const defaultMetaTitle = metaTitleNode ? metaTitleNode.textContent.trim() : "";
const defaultMetaSub = metaSubNode ? metaSubNode.textContent.trim() : "";
const defaultMetaYear = metaYearNode ? metaYearNode.textContent.trim() : "";
const defaultMetaBody = metaBodyNode ? metaBodyNode.textContent.trim() : "";
const defaultResponsiveMetaTitle = responsiveMetaTitleNode ? responsiveMetaTitleNode.textContent.trim() : "";
const defaultResponsiveMetaSub = responsiveMetaSubNode ? responsiveMetaSubNode.textContent.trim() : "";
const defaultResponsiveMetaYear = responsiveMetaYearNode ? responsiveMetaYearNode.textContent.trim() : "";
const defaultResponsiveMetaBody = responsiveMetaBodyNode ? responsiveMetaBodyNode.textContent.trim() : "";
const MEDIA_CACHE_BUST = Date.now().toString(36);

let stateIndex = 0;
let wheelBuffer = 0;
let locked = false;
let touchStartY = null;
let touchUsedForIndexScroll = false;
let isResponsiveLayout = false;
let isTabletFreeScrollLayout = false;
let isMobileLayout = false;
let renderedResponsiveMode = "";
let billboardRequestId = 0;
let indexPreviewRequestId = 0;
let activeIndexProjectName = "";
let activeResponsiveIndexProjectName = "";
let activeWorkProjectName = "";
let indexFreeScrollOffset = 0;
let indexBoundaryScrollBuffer = 0;
let desktopIndexSecondOffset = DESKTOP_INDEX_SECOND_OFFSET_BASE;
let gridMediaRequestId = 0;
let activeGridGroupKey = "";
let activeGridProjectName = "";
let fabCarouselIndex = 0;
let heroNewsreaderWeight = 500;
let heroNewsreaderOptical = 72;
let gridMediaObserver = null;
let activeGridMediaRequestId = 0;
let heroVariationAnimationFrame = null;
let heroRemixTypeVisibilityTimeout = null;

const LOCK_MS = 760;
const WHEEL_THRESHOLD = 34;
const SWIPE_THRESHOLD = 38;
const HERO_MARK_FONT_SIZE = 133;
const HERO_MARK_LETTER_SPACING = -9.31;
const HERO_MARK_LINE_HEIGHT = 0.87;
const HERO_MARK_BOTTOM_GUTTER = 12;
const HERO_VARIATION_BOTTOM_SPACE = 30;
const HERO_NEWSREADER_WEIGHT_MIN = 200;
const HERO_NEWSREADER_WEIGHT_MAX = 800;
const HERO_NEWSREADER_OPTICAL_MIN = 6;
const HERO_NEWSREADER_OPTICAL_MAX = 72;
const THEME_STORAGE_KEY = "portfolioTheme";
const DESKTOP_TRACK_HEIGHT_BASE = 2600;
const INDEX_FOOTER_GAP = 135;
const CONTACT_TO_HERO_GAP = 668;
const DEFAULT_WORK_INDEX = 0;
const projectMediaCache = new Map();
const sourceProbeCache = new Map();
const VIDEO_EXTENSIONS = ["mp4", "webm", "mov"];
const IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "webp", "avif", "gif", "svg"];
const PROJECT_ASSET_ALIASES = {
  "IBM CSR": ["IBM"],
  "italiaDesign—11th Edition": ["italiaDesign"],
};
const PROJECT_ABOUT_TEXT = {
  Instrument: "An overview of product, design system, and brand work I've contributed to at Instrument.",
  "Epic Games":
    "Partnered with Epic to unify their brand identity across all their digital touch-points, including Unreal Engine, Artstation, and the Epic Game Store.",
  FAB: "Created a brand extension for Epic's new digital marketplace for creators, designers, and 3D modelers.",
  Futureworks: "Translated Indeed's conference into an identity that can encompass physical and digital.",
  "Google Shopping":
    "Conceptualized a shopping destination that centralizes all of Google's shopping touch-points into a curated and unified experience.",
  "Google Trends":
    "Established a new flexible system for Trends that would adapt to a wide-range of data-points, trending topics, and timely events.",
  Thorne: "Ushered in the next chapter of Thorne's brand through a new health-tracking app and design system.",
  Converse: "incorporated more lifestyle and heritage storytelling into Converse's e-commerce experience.",
  Gemini: "Developed content and helped launch Google Gemini's social presence on Instagram.",
  "IBM CSR":
    "IBM Corporate Social Responsibility focuses on sharing and communicating the social impact initiatives that IBM is involved in globally.",
  "On Borrowed Time":
    "On Borrowed Time 暫借的時間 is a digital anthology that contributes in preserving the collective memory and identity of Hong Kong.",
  italiaDesign:
    "italiaDesign—11th Edition is an inquiry into italian design, history, and culture that documents the philosophy of the 18 designers we interviewed in Italia.",
  "italiaDesign—11th Edition":
    "italiaDesign—11th Edition is an inquiry into italian design, history, and culture that documents the philosophy of the 18 designers we interviewed in Italia.",
};
const DEFAULT_PROJECT_ABOUT_TEXT = PROJECT_ABOUT_TEXT.Instrument;
const INDEX_ROWS = [
  { year: "2021—PRESENT", client: "Instrument", category: "WORK COLLECTION" },
  { year: "2025", client: "Thorne", category: "BRAND, PRODUCT, DESIGN SYSTEM" },
  { year: "2025", client: "Converse", category: "WEBSITE, DESIGN SYSTEM" },
  { year: "2025", client: "Gemini", category: "SOCIAL" },
  { year: "2024", client: "Google Shopping", category: "PRODUCT VISION" },
  { year: "2024", client: "Google Trends", category: "WEBSITE" },
  { year: "2023", client: "FAB", category: "BRAND" },
  { year: "2023", client: "Futureworks", category: "WEBSITE, BRAND" },
  { year: "2022", client: "Epic Games", category: "PRODUCT, DESIGN SYSTEM" },
  { year: "2020", client: "IBM CSR", category: "DESIGN SYSTEM" },
  { year: "2020", client: "On Borrowed Time", category: "DIGITAL ANTHOLOGY" },
  { year: "2018", client: "italiaDesign—11th Edition", category: "WEBSITE" },
];
const MOBILE_INDEX_ROWS = [
  { year: "2026", client: "Instrument", category: "WORK COLLECTION" },
  { year: "2025", client: "Thorne", category: "PRODUCT" },
  { year: "2025", client: "Converse", category: "DESIGN SYSTEM" },
  { year: "2025", client: "Gemini", category: "SOCIAL" },
  { year: "2024", client: "Google Shopping", category: "PRODUCT" },
  { year: "2024", client: "Google Trends", category: "WEBSITE" },
  { year: "2023", client: "FAB", category: "BRAND" },
  { year: "2023", client: "Futureworks", category: "BRAND" },
  { year: "2022", client: "Epic Games", category: "PRODUCT" },
  { year: "2020", client: "IBM CSR", category: "DESIGN SYSTEM" },
  { year: "2020", client: "On Borrowed Time", category: "DIGITAL" },
  { year: "2018", client: "italiaDesign—11th Edition", category: "WEBSITE" },
];
const MOBILE_GRID_CARD_LAYOUT = [
  { project: "Instrument", year: "2026" },
  { project: "Thorne", year: "2025" },
  { project: "Converse", year: "2025" },
  { project: "Gemini", year: "2025" },
  { project: "Google Shopping", year: "2024" },
  { project: "Google Trends", year: "2024" },
  { project: "FAB", year: "2023" },
  { project: "Futureworks", year: "2023" },
  { project: "Epic Games", year: "2022" },
  { project: "IBM CSR", year: "2020" },
  { project: "On Borrowed Time", year: "2020" },
  { project: "italiaDesign—11th Edition", year: "2018" },
];
const GRID_CARD_LAYOUT = [
  { project: "Instrument", year: "2026" },
  { project: "On Borrowed Time", year: "2020" },
  { project: "italiaDesign—11th Edition", year: "2018" },
  { project: "FAB", year: "2023" },
  { project: "Futureworks", year: "2023" },
  { project: "Gemini", year: "2025" },
  { project: "Thorne", year: "2025" },
  { project: "Google Trends", year: "2024" },
  { project: "Google Shopping", year: "2024" },
  { project: "Converse", year: "2025" },
  { project: "Epic Games", year: "2022" },
  { project: "IBM CSR", year: "2020" },
];
const GRID_GROUP_DEFAULT_LABELS = {
  selected: "(SELECTED WORKS)",
  brand: "BRAND",
  product: "PRODUCT",
  system: "DESIGN SYSTEM",
};
const GRID_ROW_GROUP_MAP = ["selected", "brand", "product", "system"];
const PROJECT_META_OVERRIDES = {
  Instrument: {
    title: defaultMetaTitle || "INSTRUMENT",
    year: "2026",
  },
};
const PROJECT_MEDIA_OVERRIDES = {
  Thorne: [{ type: "video", src: "asset/videos/THORNE.mp4" }],
  Gemini: [
    {
      type: "video",
      src: "https://dl.dropboxusercontent.com/scl/fi/9ieio41q8rrr8xdeftg0o/Hi_Gemini.mp4?rlkey=of8oll38ipmeitrmqwen1jsge&st=23km49os",
    },
  ],
  "Epic Games": [
    {
      type: "video",
      src: "https://dl.dropboxusercontent.com/scl/fi/qrzi7bfm8umy9bdd0bb9s/Epic-Sizzle-Final.mp4?rlkey=3gneh88i21m1btkaoyvon6du2&st=lgc2xrnh",
    },
  ],
};
const FAB_CAROUSEL_MEDIA = [
  { type: "image", src: "asset/images/FAB.png" },
  { type: "image", src: "asset/images/Fab_02.jpg" },
  { type: "image", src: "asset/images/Fab_03.jpg" },
  { type: "image", src: "asset/images/Fab_04.jpg" },
];
const PROJECT_OVERVIEW_CAROUSELS = {
  FAB: FAB_CAROUSEL_MEDIA,
  Thorne: [
    { type: "video", src: "asset/videos/THORNE.mp4" },
    { type: "image", src: "asset/images/Thorne_3.jpg" },
    { type: "video", src: "asset/images/Thorne_2.mp4" },
    { type: "image", src: "asset/images/Thorne_4.jpg" },
  ],
  Futureworks: [
    { type: "image", src: "asset/images/Futureworks.png" },
    { type: "image", src: "asset/images/Futureworks_2.jpg" },
    { type: "video", src: "asset/images/Futurework_3.mp4", fit: "contain" },
  ],
  Converse: [
    { type: "video", src: "asset/videos/Converse.mp4" },
    { type: "video", src: "asset/images/Converse_1.mp4" },
    { type: "video", src: "asset/images/Converse_2.mp4" },
    { type: "image", src: "asset/images/Converse_3.jpg" },
  ],
  "IBM CSR": [
    { type: "image", src: "asset/images/IBM.png" },
    { type: "image", src: "asset/images/IBM_2.png" },
    { type: "image", src: "asset/images/IBM_3.jpg" },
  ],
};
const PROJECT_LINKS = {
  Instrument: "https://www.vvichael.com/instrument",
  Thorne: "https://www.vvichael.com/instrument#thorne",
  Converse: "https://www.vvichael.com/instrument#converse",
  Gemini: "https://www.vvichael.com/instrument#gemini",
  "Google Shopping": "https://www.vvichael.com/instrument#googleshopping",
  "Google Trends": "https://www.vvichael.com/instrument#googletrends",
  FAB: "https://www.vvichael.com/instrument#fab",
  Futureworks: "https://www.vvichael.com/instrument#futureworks",
  "Epic Games": "https://www.vvichael.com/instrument#epicgames",
  "IBM CSR": "https://www.vvichael.com/ibm-csr",
  "On Borrowed Time": "https://www.vvichael.com/on-borrowed-time",
  italiaDesign: "https://www.vvichael.com/italiadesign-11th-edition",
  "italiaDesign—11th Edition": "https://www.vvichael.com/italiadesign-11th-edition",
};
const DESKTOP_OVERVIEW_CATEGORY_OVERRIDES = {
  Gemini: "SOCIAL",
  "On Borrowed Time": "DIGITAL ANTHOLOGY",
};

if (billboardVideo && defaultBillboardVideoSrc) {
  billboardVideo.addEventListener("error", () => {
    if (stripQueryAndHash(billboardVideo.getAttribute("src") || "") !== stripQueryAndHash(defaultBillboardVideoSrc)) {
      setBillboardMedia({ type: "video", src: defaultBillboardVideoSrc });
    }
  });
}

if (billboardImage) {
  billboardImage.addEventListener("error", () => {
    if (defaultBillboardVideoSrc) {
      setBillboardMedia({ type: "video", src: defaultBillboardVideoSrc });
    }
  });
}

if (responsiveBillboardVideo && defaultResponsiveBillboardVideoSrc) {
  responsiveBillboardVideo.addEventListener("error", () => {
    if (
      stripQueryAndHash(responsiveBillboardVideo.getAttribute("src") || "") !==
      stripQueryAndHash(defaultResponsiveBillboardVideoSrc)
    ) {
      setResponsiveBillboardMedia({ type: "video", src: defaultResponsiveBillboardVideoSrc });
    }
  });
}

if (responsiveBillboardImage) {
  responsiveBillboardImage.addEventListener("error", () => {
    if (defaultResponsiveBillboardVideoSrc) {
      setResponsiveBillboardMedia({ type: "video", src: defaultResponsiveBillboardVideoSrc });
    }
  });
}

function getOverviewCarousel(projectName) {
  const normalizedProjectName = (projectName || "").trim();
  if (!normalizedProjectName) {
    return null;
  }
  const carouselItems = PROJECT_OVERVIEW_CAROUSELS[normalizedProjectName];
  if (!Array.isArray(carouselItems) || !carouselItems.length) {
    return null;
  }
  return carouselItems;
}

function hasOverviewCarousel(projectName) {
  return Boolean(getOverviewCarousel(projectName));
}

function getOverviewCarouselMediaByIndex(projectName, index) {
  const carouselItems = getOverviewCarousel(projectName);
  if (!carouselItems) {
    return null;
  }
  const clampedIndex = clamp(index, 0, carouselItems.length - 1);
  return carouselItems[clampedIndex] || null;
}

async function resolveOverviewCarouselMedia(projectName, index) {
  const carouselItem = getOverviewCarouselMediaByIndex(projectName, index);
  if (!carouselItem) {
    return null;
  }

  if (typeof carouselItem.src === "string" && carouselItem.src) {
    return carouselItem;
  }

  const candidateSources = Array.isArray(carouselItem.srcCandidates) ? carouselItem.srcCandidates : [];
  for (const candidateSrc of candidateSources) {
    if (!candidateSrc || typeof candidateSrc !== "string") {
      continue;
    }
    const probeTarget = { type: carouselItem.type, src: candidateSrc };
    const exists = await probeMediaSource(probeTarget);
    if (exists) {
      return probeTarget;
    }
  }

  if (candidateSources.length) {
    return { type: carouselItem.type, src: candidateSources[0] };
  }

  return null;
}

function getFabCarouselCounterLabel(projectName) {
  const carouselItems = getOverviewCarousel(projectName);
  if (!carouselItems) {
    return "";
  }
  const currentLabel = String(fabCarouselIndex + 1).padStart(2, "0");
  const totalLabel = String(carouselItems.length).padStart(2, "0");
  return `${currentLabel}/${totalLabel}`;
}

function hideFabCursorCounter() {
  if (!fabCursorCounterNode) {
    return;
  }
  fabCursorCounterNode.classList.remove("is-visible");
}

function canShowFabCursorCounter(pointerType) {
  const normalizedPointerType = pointerType || "mouse";
  if (normalizedPointerType !== "mouse" && normalizedPointerType !== "pen") {
    return false;
  }
  return hasOverviewCarousel(activeWorkProjectName) && app?.dataset?.indexView === "overview";
}

function positionFabCursorCounter(clientX, clientY) {
  if (!fabCursorCounterNode) {
    return;
  }

  const offsetX = 16;
  const offsetY = 12;
  const viewportPadding = 8;
  const measuredWidth = fabCursorCounterNode.offsetWidth || 0;
  const measuredHeight = fabCursorCounterNode.offsetHeight || 0;
  const maxX = Math.max(viewportPadding, window.innerWidth - measuredWidth - viewportPadding);
  const maxY = Math.max(viewportPadding, window.innerHeight - measuredHeight - viewportPadding);
  const targetX = clamp(clientX + offsetX, viewportPadding, maxX);
  const targetY = clamp(clientY + offsetY, viewportPadding, maxY);
  fabCursorCounterNode.style.transform = `translate3d(${Math.round(targetX)}px, ${Math.round(targetY)}px, 0)`;
}

function syncFabCarouselCounter(projectName) {
  const counterLabel = getFabCarouselCounterLabel(projectName);

  if (metaYearCounterNode) {
    metaYearCounterNode.textContent = counterLabel;
    metaYearCounterNode.hidden = !counterLabel;
  }

  if (responsiveMetaYearCounterNode) {
    responsiveMetaYearCounterNode.textContent = counterLabel;
    responsiveMetaYearCounterNode.hidden = !counterLabel;
  }

  if (fabCursorCounterNode) {
    fabCursorCounterNode.setAttribute("data-count", counterLabel);
    if (!counterLabel) {
      fabCursorCounterNode.removeAttribute("data-count");
      hideFabCursorCounter();
    }
  }
}

function syncFabCarouselInteractionState(projectName) {
  const canAdvance = hasOverviewCarousel(projectName) && app?.dataset?.indexView === "overview";
  if (billboardFrameNode) {
    billboardFrameNode.classList.toggle("is-fab-carousel", canAdvance);
  }
  if (responsiveBillboardFrameNode) {
    responsiveBillboardFrameNode.classList.toggle("is-fab-carousel", canAdvance);
  }
  if (!canAdvance) {
    hideFabCursorCounter();
  }
}

function syncFabCarouselUi(projectName) {
  syncFabCarouselCounter(projectName);
  syncFabCarouselInteractionState(projectName);
}

async function advanceFabCarousel() {
  if (!hasOverviewCarousel(activeWorkProjectName) || app?.dataset?.indexView !== "overview") {
    return false;
  }

  const carouselItems = getOverviewCarousel(activeWorkProjectName);
  if (!carouselItems) {
    return false;
  }
  const total = carouselItems.length;
  if (total <= 1) {
    return false;
  }

  fabCarouselIndex = (fabCarouselIndex + 1) % total;
  const nextMedia = await resolveOverviewCarouselMedia(activeWorkProjectName, fabCarouselIndex);
  if (!nextMedia) {
    return false;
  }

  setBillboardMedia(nextMedia);
  setResponsiveBillboardMedia(nextMedia);
  syncFabCarouselUi(activeWorkProjectName);
  return true;
}

function setActiveWorkItem(index) {
  const sourceItems = workItems.length ? workItems : responsiveWorkItems;
  if (!sourceItems.length) {
    return;
  }
  const clampedIndex = clamp(index, 0, sourceItems.length - 1);
  workItems.forEach((item, itemIndex) => item.classList.toggle("active", itemIndex === clampedIndex));
  responsiveWorkItems.forEach((item, itemIndex) => item.classList.toggle("active", itemIndex === clampedIndex));

  const activeProjectName = sourceItems[clampedIndex]?.textContent?.trim() || "";
  const activeProjectYear = workItems[clampedIndex]?.dataset?.year || getProjectYearLabel(activeProjectName);
  if (activeWorkProjectName !== activeProjectName) {
    fabCarouselIndex = 0;
  }
  activeWorkProjectName = activeProjectName;
  syncProjectMeta(activeProjectName, activeProjectYear);
  syncResponsiveProjectMeta(activeProjectName, activeProjectYear);
  syncFabCarouselUi(activeProjectName);
  void syncBillboardForProject(activeProjectName);
}

function setHoveredWorkItem(index) {
  if (!workItems.length) {
    return;
  }
  workItems.forEach((item, itemIndex) => {
    const shouldHover = typeof index === "number" && itemIndex === index;
    item.classList.toggle("hovered", shouldHover);
  });
}

function canHoverProjects() {
  return !isResponsiveLayout && (stateIndex === 0 || stateIndex === 1 || stateIndex === 2);
}

function canHoverResponsiveOverviewProjects() {
  return isResponsiveLayout && !isMobileLayout && app.dataset.indexView === "overview";
}

function canHoverResponsiveIndexRows() {
  return isResponsiveLayout && !isMobileLayout && app.dataset.indexView === "index";
}

function canUseGridGroupHover() {
  return !isResponsiveLayout && app.dataset.indexView === "grid" && (stateIndex === 0 || stateIndex === 1 || stateIndex === 2);
}

function isTabletFreeScrollModeActive() {
  return isTabletFreeScrollLayout;
}

function clampHeroAxisValue(value, min, max, fallback) {
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) {
    return fallback;
  }
  return Math.min(max, Math.max(min, Math.round(numericValue)));
}

function getRandomIntInclusive(min, max) {
  const safeMin = Math.ceil(min);
  const safeMax = Math.floor(max);
  return Math.floor(Math.random() * (safeMax - safeMin + 1)) + safeMin;
}

function cancelHeroVariationAnimation() {
  if (heroVariationAnimationFrame !== null) {
    window.cancelAnimationFrame(heroVariationAnimationFrame);
    heroVariationAnimationFrame = null;
  }
}

function setRemixTypeVisibility(isHidden) {
  if (!app) {
    return;
  }

  if (heroRemixTypeVisibilityTimeout) {
    window.clearTimeout(heroRemixTypeVisibilityTimeout);
    heroRemixTypeVisibilityTimeout = null;
  }

  app.dataset.remixType = isHidden ? "hidden" : "visible";
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function animateHeroVariationSettings({
  weight,
  optical,
  duration = 900,
} = {}) {
  const targetWeight = clampHeroAxisValue(
    weight,
    HERO_NEWSREADER_WEIGHT_MIN,
    HERO_NEWSREADER_WEIGHT_MAX,
    heroNewsreaderWeight
  );
  const targetOptical = clampHeroAxisValue(
    optical,
    HERO_NEWSREADER_OPTICAL_MIN,
    HERO_NEWSREADER_OPTICAL_MAX,
    heroNewsreaderOptical
  );

  const startWeight = heroNewsreaderWeight;
  const startOptical = heroNewsreaderOptical;
  const startTime = performance.now();

  cancelHeroVariationAnimation();
  setRemixTypeVisibility(true);

  const step = (now) => {
    const elapsed = now - startTime;
    const rawProgress = Math.min(1, elapsed / duration);
    const eased = easeOutCubic(rawProgress);

    const nextWeight = Math.round(startWeight + (targetWeight - startWeight) * eased);
    const nextOptical = Math.round(startOptical + (targetOptical - startOptical) * eased);

    applyHeroVariationSettings({
      weight: nextWeight,
      optical: nextOptical,
      syncLayout: false,
    });

    if (isResponsiveLayout) {
      if (!isMobileLayout) {
        syncTabletHeroMarkFit();
      }
    } else {
      syncDesktopHeroMarkFit();
    }

    if (rawProgress < 1) {
      heroVariationAnimationFrame = window.requestAnimationFrame(step);
      return;
    }

    applyHeroVariationSettings({
      weight: targetWeight,
      optical: targetOptical,
      syncLayout: true,
    });

    heroRemixTypeVisibilityTimeout = window.setTimeout(() => {
      setRemixTypeVisibility(false);
    }, 40);
    heroVariationAnimationFrame = null;
  };

  heroVariationAnimationFrame = window.requestAnimationFrame(step);
}

function applyHeroVariationSettings({ weight, optical, syncLayout = true } = {}) {
  heroNewsreaderWeight = clampHeroAxisValue(weight, HERO_NEWSREADER_WEIGHT_MIN, HERO_NEWSREADER_WEIGHT_MAX, heroNewsreaderWeight);
  heroNewsreaderOptical = clampHeroAxisValue(
    optical,
    HERO_NEWSREADER_OPTICAL_MIN,
    HERO_NEWSREADER_OPTICAL_MAX,
    heroNewsreaderOptical
  );

  if (app) {
    app.style.setProperty("--hero-newsreader-wght", String(heroNewsreaderWeight));
    app.style.setProperty("--hero-newsreader-opsz", String(heroNewsreaderOptical));
  }

  if (heroWeightSliderNode) {
    heroWeightSliderNode.value = String(heroNewsreaderWeight);
  }
  if (heroOpticalSliderNode) {
    heroOpticalSliderNode.value = String(heroNewsreaderOptical);
  }
  if (responsiveHeroWeightSliderNode) {
    responsiveHeroWeightSliderNode.value = String(heroNewsreaderWeight);
  }
  if (responsiveHeroOpticalSliderNode) {
    responsiveHeroOpticalSliderNode.value = String(heroNewsreaderOptical);
  }
  if (heroWeightValueNode) {
    heroWeightValueNode.textContent = String(heroNewsreaderWeight);
  }
  if (heroOpticalValueNode) {
    heroOpticalValueNode.textContent = String(heroNewsreaderOptical);
  }
  if (responsiveHeroWeightValueNode) {
    responsiveHeroWeightValueNode.textContent = String(heroNewsreaderWeight);
  }
  if (responsiveHeroOpticalValueNode) {
    responsiveHeroOpticalValueNode.textContent = String(heroNewsreaderOptical);
  }

  if (!syncLayout) {
    return;
  }

  if (isResponsiveLayout) {
    if (!isMobileLayout) {
      syncTabletHeroMarkFit();
    }
    return;
  }

  syncDesktopHeroMarkFit();
  syncDesktopIndexFooterMetrics();
  syncDesktopTrackHeight();
  updateDesktopIndexScrollMetrics();
  applyStateOffset();
}

function initializeHeroVariationControls() {
  applyHeroVariationSettings({
    weight: heroWeightSliderNode ? heroWeightSliderNode.value : heroNewsreaderWeight,
    optical: heroOpticalSliderNode ? heroOpticalSliderNode.value : heroNewsreaderOptical,
    syncLayout: false,
  });

  if (heroWeightSliderNode) {
    heroWeightSliderNode.addEventListener("input", () => {
      cancelHeroVariationAnimation();
      setRemixTypeVisibility(false);
      applyHeroVariationSettings({ weight: heroWeightSliderNode.value });
    });
  }

  if (heroOpticalSliderNode) {
    heroOpticalSliderNode.addEventListener("input", () => {
      cancelHeroVariationAnimation();
      setRemixTypeVisibility(false);
      applyHeroVariationSettings({ optical: heroOpticalSliderNode.value });
    });
  }

  if (responsiveHeroWeightSliderNode) {
    responsiveHeroWeightSliderNode.addEventListener("input", () => {
      cancelHeroVariationAnimation();
      setRemixTypeVisibility(false);
      applyHeroVariationSettings({ weight: responsiveHeroWeightSliderNode.value });
    });
  }

  if (responsiveHeroOpticalSliderNode) {
    responsiveHeroOpticalSliderNode.addEventListener("input", () => {
      cancelHeroVariationAnimation();
      setRemixTypeVisibility(false);
      applyHeroVariationSettings({ optical: responsiveHeroOpticalSliderNode.value });
    });
  }

  const remixAxes = () => {
    animateHeroVariationSettings({
      weight: getRandomIntInclusive(HERO_NEWSREADER_WEIGHT_MIN, HERO_NEWSREADER_WEIGHT_MAX),
      optical: getRandomIntInclusive(HERO_NEWSREADER_OPTICAL_MIN, HERO_NEWSREADER_OPTICAL_MAX),
    });
  };

  if (heroRemixButtonNode) {
    heroRemixButtonNode.addEventListener("click", remixAxes);
  }

  if (responsiveHeroRemixButtonNode) {
    responsiveHeroRemixButtonNode.addEventListener("click", remixAxes);
  }
}

function getGridGroupForCard(cardNode) {
  const groupKey = cardNode?.dataset?.gridGroup || "";
  if (groupKey === "selected" || groupKey === "brand" || groupKey === "product" || groupKey === "system") {
    return groupKey;
  }
  return null;
}

function getGridProjectDisplayName(projectName) {
  return projectName.toUpperCase();
}

function getGridAboutText(projectName) {
  return getProjectAboutText(projectName);
}

function setGridGroupLabelText(groupKey, text) {
  const labelNode = gridGroupLabelNodes[groupKey];
  if (!labelNode) {
    return;
  }
  labelNode.textContent = text;
}

function clearGridGroupLabelReveal(groupKey) {
  const labelNode = gridGroupLabelNodes[groupKey];
  if (!labelNode) {
    return;
  }
  labelNode.classList.remove("is-revealing");
}

function triggerGridGroupLabelReveal(groupKey) {
  const labelNode = gridGroupLabelNodes[groupKey];
  if (!labelNode) {
    return;
  }
  labelNode.classList.remove("is-revealing");
  // Force reflow so repeated hover changes replay the same reveal animation.
  void labelNode.offsetWidth;
  labelNode.classList.add("is-revealing");
}

function resetGridGroupHover() {
  for (const [groupKey, defaultLabel] of Object.entries(GRID_GROUP_DEFAULT_LABELS)) {
    const labelNode = gridGroupLabelNodes[groupKey];
    const aboutNode = gridGroupAboutNodes[groupKey];
    if (labelNode) {
      setGridGroupLabelText(groupKey, defaultLabel);
      labelNode.classList.remove("is-active");
      clearGridGroupLabelReveal(groupKey);
    }
    if (aboutNode) {
      aboutNode.classList.remove("is-active");
    }
  }
  activeGridGroupKey = "";
  activeGridProjectName = "";
}

function setGridGroupHover(projectName, groupKey) {
  if (!canUseGridGroupHover()) {
    resetGridGroupHover();
    return;
  }

  if (!projectName || !groupKey || !gridGroupLabelNodes[groupKey] || !gridGroupAboutNodes[groupKey]) {
    resetGridGroupHover();
    return;
  }

  if (activeGridProjectName === projectName && activeGridGroupKey === groupKey) {
    return;
  }

  for (const [currentGroupKey, defaultLabel] of Object.entries(GRID_GROUP_DEFAULT_LABELS)) {
    const labelNode = gridGroupLabelNodes[currentGroupKey];
    const aboutNode = gridGroupAboutNodes[currentGroupKey];
    const isTarget = currentGroupKey === groupKey;
    if (labelNode) {
      if (isTarget) {
        setGridGroupLabelText(currentGroupKey, getGridProjectDisplayName(projectName));
        triggerGridGroupLabelReveal(currentGroupKey);
      } else {
        setGridGroupLabelText(currentGroupKey, defaultLabel);
        clearGridGroupLabelReveal(currentGroupKey);
      }
      labelNode.classList.toggle("is-active", isTarget);
    }
    if (aboutNode) {
      aboutNode.textContent = isTarget ? getGridAboutText(projectName) : "";
      aboutNode.classList.toggle("is-active", isTarget);
    }
  }

  activeGridGroupKey = groupKey;
  activeGridProjectName = projectName;
}

function getDesktopFreeScrollMode() {
  const viewMode = app.dataset.indexView;
  if (viewMode === "index" || viewMode === "grid") {
    return viewMode;
  }
  return null;
}

function isDesktopFreeScrollModeActive() {
  return !isResponsiveLayout && getDesktopFreeScrollMode() !== null;
}

function setDesktopTrackMotionMode(mode) {
  if (!app) {
    return;
  }
  if (isResponsiveLayout) {
    delete app.dataset.desktopTrackMotion;
    return;
  }
  app.dataset.desktopTrackMotion = mode === "free" ? "free" : "snap";
}

function getDesktopHeroBottomGutter() {
  return HERO_MARK_BOTTOM_GUTTER + HERO_VARIATION_BOTTOM_SPACE;
}

function resolveCssLengthPx(lengthExpression) {
  if (!board) {
    return NaN;
  }

  const expression = String(lengthExpression || "").trim();
  if (!expression) {
    return NaN;
  }

  const directPxMatch = expression.match(/^(-?\d+(?:\.\d+)?)px$/);
  if (directPxMatch) {
    return Number.parseFloat(directPxMatch[1]);
  }

  const probeNode = document.createElement("div");
  probeNode.style.position = "absolute";
  probeNode.style.left = "-10000px";
  probeNode.style.top = expression;
  probeNode.style.width = "0";
  probeNode.style.height = "0";
  probeNode.style.margin = "0";
  probeNode.style.visibility = "hidden";
  probeNode.style.pointerEvents = "none";
  board.appendChild(probeNode);

  const resolvedTop = Number.parseFloat(window.getComputedStyle(probeNode).top);
  probeNode.remove();

  return Number.isFinite(resolvedTop) ? resolvedTop : NaN;
}

function syncDesktopIndexFooterMetrics() {
  if (!app || !indexViewNode || !indexBodyNode) {
    return;
  }

  if (isResponsiveLayout || app.dataset.indexView !== "index") {
    return;
  }

  const contentBottom = indexViewNode.offsetTop + indexBodyNode.offsetTop + indexBodyNode.scrollHeight;
  if (!Number.isFinite(contentBottom) || contentBottom <= 0) {
    return;
  }

  const footerContactTop = Math.ceil(contentBottom + INDEX_FOOTER_GAP);
  const footerRuleTop = footerContactTop - 12;
  const footerHeroTop = footerContactTop + CONTACT_TO_HERO_GAP;

  app.style.setProperty("--desktop-footer-rule-index", `${footerRuleTop}px`);
  app.style.setProperty("--desktop-footer-contact-index", `${footerContactTop}px`);
  app.style.setProperty("--desktop-footer-hero-index", `${footerHeroTop}px`);
}

function syncDesktopTrackHeight() {
  if (!app) {
    return;
  }

  if (isResponsiveLayout) {
    app.style.removeProperty("--desktop-track-height");
    return;
  }

  const footerHeroTopRaw = window.getComputedStyle(app).getPropertyValue("--footer-hero-top");
  const footerHeroTop = resolveCssLengthPx(footerHeroTopRaw);
  if (!Number.isFinite(footerHeroTop)) {
    app.style.removeProperty("--desktop-track-height");
    return;
  }

  const desktopHeroFontSizeRaw = window.getComputedStyle(app).getPropertyValue("--desktop-hero-font-size");
  const desktopHeroFontSize = Number.parseFloat(desktopHeroFontSizeRaw);
  const heroVisibleHeight =
    (Number.isFinite(desktopHeroFontSize) ? desktopHeroFontSize : HERO_MARK_FONT_SIZE) * HERO_MARK_LINE_HEIGHT;
  const heroBottomGutter = getDesktopHeroBottomGutter();
  const requiredHeight = Math.ceil(footerHeroTop + heroVisibleHeight + heroBottomGutter + 24);
  const trackHeight = Math.max(DESKTOP_TRACK_HEIGHT_BASE, requiredHeight);

  app.style.setProperty("--desktop-track-height", `${trackHeight}px`);
}

function updateDesktopIndexScrollMetrics() {
  if (isResponsiveLayout) {
    desktopIndexSecondOffset = DESKTOP_INDEX_SECOND_OFFSET_BASE;
    return;
  }

  const freeScrollMode = getDesktopFreeScrollMode();
  if (!freeScrollMode) {
    desktopIndexSecondOffset = DESKTOP_INDEX_SECOND_OFFSET_BASE;
    return;
  }

  const boardHeight = board.clientHeight || window.innerHeight || DESIGN_HEIGHT;
  const footerHeroTopRaw = window.getComputedStyle(app).getPropertyValue("--footer-hero-top");
  const footerHeroTop = resolveCssLengthPx(footerHeroTopRaw);
  if (!Number.isFinite(footerHeroTop)) {
    desktopIndexSecondOffset = DESKTOP_INDEX_SECOND_OFFSET_BASE;
    return;
  }

  const desktopHeroFontSizeRaw = window.getComputedStyle(app).getPropertyValue("--desktop-hero-font-size");
  const desktopHeroFontSize = Number.parseFloat(desktopHeroFontSizeRaw);
  const heroVisibleHeight =
    (Number.isFinite(desktopHeroFontSize) ? desktopHeroFontSize : HERO_MARK_FONT_SIZE) * HERO_MARK_LINE_HEIGHT;
  const heroBottomGutter = getDesktopHeroBottomGutter();
  const desiredSecondOffset = -(footerHeroTop + heroVisibleHeight + heroBottomGutter - boardHeight);

  if (freeScrollMode === "grid") {
    desktopIndexSecondOffset = Math.min(DESKTOP_SNAP_OFFSETS[1] - 20, Math.round(desiredSecondOffset));
    return;
  }

  desktopIndexSecondOffset = Math.min(DESKTOP_INDEX_SECOND_OFFSET_BASE, Math.round(desiredSecondOffset));
}

function getDesktopIndexScrollRange() {
  return Math.abs(desktopIndexSecondOffset - DESKTOP_SNAP_OFFSETS[1]);
}

function getDesktopIndexFullScrollMax() {
  return getDesktopIndexScrollRange();
}

function applyDesktopIndexFreeScrollOffset() {
  const scrollRange = getDesktopIndexScrollRange();
  indexFreeScrollOffset = clamp(indexFreeScrollOffset, 0, scrollRange);
  const atSecondSnap = scrollRange <= 0 ? true : indexFreeScrollOffset >= scrollRange - 0.5;

  setDesktopTrackMotionMode("free");
  stateIndex = atSecondSnap ? 2 : 1;
  app.dataset.state = atSecondSnap ? "2" : "1";
  board.style.setProperty("--track-offset", `${DESKTOP_SNAP_OFFSETS[1] - indexFreeScrollOffset}px`);
}

function handleDesktopIndexScrollDelta(deltaY) {
  if (!isDesktopFreeScrollModeActive()) {
    return false;
  }

  if (stateIndex !== 1 && stateIndex !== 2) {
    return false;
  }

  const maxScroll = getDesktopIndexScrollRange();
  const previousOffset = indexFreeScrollOffset;
  const nextOffset = clamp(previousOffset + deltaY, 0, maxScroll);

  if (nextOffset !== previousOffset) {
    indexFreeScrollOffset = nextOffset;
    indexBoundaryScrollBuffer = 0;
    applyDesktopIndexFreeScrollOffset();
    return true;
  }

  indexBoundaryScrollBuffer += deltaY;

  if (previousOffset <= 0 && deltaY < 0 && Math.abs(indexBoundaryScrollBuffer) >= WHEEL_THRESHOLD) {
    indexBoundaryScrollBuffer = 0;
    setState(0);
    return true;
  }

  return true;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function renderIndexRows() {
  const desktopMarkup = INDEX_ROWS.map(
    (row) => `
      <article class="index-row" data-project="${row.client}">
        <p class="index-year">${row.year}</p>
        <p class="index-client">${row.client}</p>
        <p class="index-category">${row.category}</p>
        <p class="index-about">${getProjectAboutText(row.client)}</p>
        <figure class="index-preview" aria-hidden="true">
          <video class="index-preview-video" muted loop playsinline preload="metadata"></video>
          <img class="index-preview-image" alt="" decoding="async" loading="lazy" />
        </figure>
      </article>
    `
  ).join("");

  if (indexBodyNode) {
    indexBodyNode.innerHTML = desktopMarkup;
  }

  const responsiveRows = isMobileLayout ? MOBILE_INDEX_ROWS : INDEX_ROWS;
  const responsiveMarkup = responsiveRows.map(
    (row) => `
      <article class="r-index-row" data-project="${row.client}">
        <p class="r-index-year">${row.year}</p>
        <p class="r-index-client">${row.client}</p>
        <p class="r-index-category">${row.category}</p>
        <p class="r-index-about">${getProjectAboutText(row.client)}</p>
      </article>
    `
  ).join("");

  if (responsiveIndexBodyNode) {
    responsiveIndexBodyNode.innerHTML = responsiveMarkup;
  }

  const desktopGridMarkup = GRID_CARD_LAYOUT.map((item, index) => {
    const rowIndex = Math.floor(index / 3);
    const groupKey = GRID_ROW_GROUP_MAP[Math.min(rowIndex, GRID_ROW_GROUP_MAP.length - 1)] || "system";
    return `
      <figure class="grid-card" data-project="${item.project}" data-grid-group="${groupKey}">
        <p class="grid-card-year">(${item.year})</p>
        <video class="grid-card-video" muted loop playsinline preload="metadata"></video>
        <img class="grid-card-image" alt="" decoding="async" loading="lazy" />
      </figure>
    `
  }).join("");

  if (gridCardsNode) {
    gridCardsNode.innerHTML = desktopGridMarkup;
  }

  const responsiveGridMarkup = isMobileLayout
    ? MOBILE_GRID_CARD_LAYOUT.map(
        (item) => `
          <figure class="r-grid-card" data-project="${item.project}" data-year="${item.year}" data-grid-group="selected">
            <p class="r-grid-card-year">(${item.year})</p>
            <video class="r-grid-card-video" muted loop playsinline preload="metadata"></video>
            <img class="r-grid-card-image" alt="" decoding="async" loading="lazy" />
          </figure>
        `
      ).join("")
    : GRID_ROW_GROUP_MAP.map((groupKey, rowIndex) => {
        const rowLabel = GRID_GROUP_DEFAULT_LABELS[groupKey] || "(SELECTED WORKS)";
        const rowItems = GRID_CARD_LAYOUT.slice(rowIndex * 3, rowIndex * 3 + 3);
        if (!rowItems.length) {
          return "";
        }

        const rowCardsMarkup = rowItems
          .map(
            (item) => `
              <figure class="r-grid-card" data-project="${item.project}" data-year="${item.year}" data-grid-group="${groupKey}">
                <p class="r-grid-card-year">(${item.year})</p>
                <video class="r-grid-card-video" muted loop playsinline preload="metadata"></video>
                <img class="r-grid-card-image" alt="" decoding="async" loading="lazy" />
              </figure>
            `
          )
          .join("");

        return `
          <div class="r-grid-row" data-grid-group="${groupKey}">
            <p class="r-grid-row-label">${rowLabel}</p>
            <div class="r-grid-row-cards">
              ${rowCardsMarkup}
            </div>
          </div>
        `;
      }).join("");

  if (responsiveGridCardsNode) {
    responsiveGridCardsNode.innerHTML = responsiveGridMarkup;
  }

  resetGridGroupHover();
  void syncGridCardsMedia();
}

function setIndexViewMode(mode) {
  let nextMode = mode === "index" || mode === "grid" ? mode : "overview";
  if (isResponsiveLayout && isMobileLayout && nextMode === "overview") {
    nextMode = "grid";
  }
  // On desktop, alternate list views are unavailable on LANDING only.
  if (!isResponsiveLayout && nextMode !== "overview" && stateIndex === 0) {
    return;
  }

  indexFreeScrollOffset = 0;
  indexBoundaryScrollBuffer = 0;
  app.dataset.indexView = nextMode;
  syncFabCarouselUi(activeWorkProjectName);
  syncDesktopHeroMarkFit();
  syncDesktopIndexFooterMetrics();
  syncDesktopTrackHeight();
  resetGridGroupHover();
  clearActiveIndexRow();
  updateDesktopIndexScrollMetrics();
  applyStateOffset();
}

function stripQueryAndHash(src) {
  return src.split("#")[0].split("?")[0];
}

function withMediaCacheBust(src) {
  const joiner = src.includes("?") ? "&" : "?";
  return `${src}${joiner}v=${MEDIA_CACHE_BUST}`;
}

function normalizeYearLabel(yearLabel) {
  return yearLabel.replace(/[()]/g, "").trim();
}

function getProjectYearLabel(projectName) {
  const trimmedName = (projectName || "").trim();
  if (!trimmedName) {
    return "";
  }
  const row = INDEX_ROWS.find((entry) => entry.client === trimmedName);
  if (!row || !row.year) {
    return "";
  }
  return `(${row.year})`;
}

function getProjectCategoryText(projectName) {
  const trimmedName = (projectName || "").trim();
  if (!trimmedName) {
    return defaultMetaSub || "WORK COLLECTION";
  }

  if (!isResponsiveLayout && app?.dataset?.indexView === "overview") {
    const desktopOverride = DESKTOP_OVERVIEW_CATEGORY_OVERRIDES[trimmedName];
    if (desktopOverride) {
      return desktopOverride;
    }
  }

  const mobileRow = MOBILE_INDEX_ROWS.find((entry) => entry.client === trimmedName);
  if (mobileRow?.category) {
    return mobileRow.category;
  }

  if (trimmedName.includes("—")) {
    const shortenedName = trimmedName.split("—")[0].trim();
    const shortenedRow = MOBILE_INDEX_ROWS.find((entry) => entry.client === shortenedName);
    if (shortenedRow?.category) {
      return shortenedRow.category;
    }
  }

  const fallbackRow = INDEX_ROWS.find((entry) => entry.client === trimmedName);
  return fallbackRow?.category || defaultMetaSub || "WORK COLLECTION";
}

function getProjectAboutText(projectName) {
  const trimmedName = (projectName || "").trim();
  if (!trimmedName) {
    return DEFAULT_PROJECT_ABOUT_TEXT;
  }
  if (PROJECT_ABOUT_TEXT[trimmedName]) {
    return PROJECT_ABOUT_TEXT[trimmedName];
  }
  if (trimmedName.includes("—")) {
    const shortenedName = trimmedName.split("—")[0].trim();
    if (PROJECT_ABOUT_TEXT[shortenedName]) {
      return PROJECT_ABOUT_TEXT[shortenedName];
    }
  }
  return DEFAULT_PROJECT_ABOUT_TEXT;
}

function getProjectLink(projectName) {
  const trimmedName = (projectName || "").trim();
  if (!trimmedName) {
    return "";
  }
  return PROJECT_LINKS[trimmedName] || "";
}

function navigateToProjectLink(projectName) {
  const destination = getProjectLink(projectName);
  if (!destination) {
    return;
  }
  window.location.assign(destination);
}

function syncProjectMeta(projectName, yearLabel) {
  if (!metaTitleNode || !metaSubNode || !metaYearNode || !metaBodyNode) {
    return;
  }

  const trimmedName = (projectName || "").trim();
  if (!trimmedName) {
    metaTitleNode.textContent = defaultMetaTitle || "INSTRUMENT";
    metaSubNode.textContent = defaultMetaSub || "WORK COLLECTION";
    metaYearNode.textContent = defaultMetaYear || "2021—PRESENT";
    metaBodyNode.textContent = defaultMetaBody || DEFAULT_PROJECT_ABOUT_TEXT;
    return;
  }

  const metaOverride = PROJECT_META_OVERRIDES[trimmedName];
  metaTitleNode.textContent = metaOverride?.title || trimmedName;
  metaSubNode.textContent = getProjectCategoryText(trimmedName);
  metaYearNode.textContent = metaOverride?.year || normalizeYearLabel(yearLabel) || defaultMetaYear || "";
  metaBodyNode.textContent = getProjectAboutText(trimmedName);
}

function syncResponsiveProjectMeta(projectName, yearLabel) {
  if (!responsiveMetaTitleNode || !responsiveMetaSubNode || !responsiveMetaYearNode || !responsiveMetaBodyNode) {
    return;
  }

  const trimmedName = (projectName || "").trim();
  if (!trimmedName) {
    responsiveMetaTitleNode.textContent = defaultResponsiveMetaTitle || "INSTRUMENT";
    responsiveMetaSubNode.textContent = defaultResponsiveMetaSub || "WORK COLLECTION";
    responsiveMetaYearNode.textContent = defaultResponsiveMetaYear || "2026";
    responsiveMetaBodyNode.textContent = defaultResponsiveMetaBody || DEFAULT_PROJECT_ABOUT_TEXT;
    return;
  }

  const metaOverride = PROJECT_META_OVERRIDES[trimmedName];
  responsiveMetaTitleNode.textContent = metaOverride?.title || trimmedName.toUpperCase();
  responsiveMetaSubNode.textContent = getProjectCategoryText(trimmedName);
  responsiveMetaYearNode.textContent = metaOverride?.year || normalizeYearLabel(yearLabel) || defaultResponsiveMetaYear || "";
  responsiveMetaBodyNode.textContent = getProjectAboutText(trimmedName);
}

function getNameVariants(name) {
  const trimmed = name.trim();
  if (!trimmed) {
    return [];
  }
  const underscored = trimmed.replace(/[^A-Za-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  const dashed = trimmed.replace(/[^A-Za-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const compact = trimmed.replace(/[^A-Za-z0-9]+/g, "");
  return Array.from(new Set([trimmed, underscored, dashed, compact].filter(Boolean)));
}

function getProjectAliases(projectName) {
  const trimmed = projectName.trim();
  if (!trimmed) {
    return [];
  }

  const aliases = [trimmed];
  const mappedAliases = PROJECT_ASSET_ALIASES[trimmed];
  if (Array.isArray(mappedAliases)) {
    aliases.push(...mappedAliases);
  }

  if (trimmed.includes("—")) {
    aliases.push(trimmed.split("—")[0].trim());
  }

  return Array.from(new Set(aliases.filter(Boolean)));
}

function getProjectMediaCandidates(projectName) {
  const uniqueCandidates = new Map();

  for (const alias of getProjectAliases(projectName)) {
    for (const variant of getNameVariants(alias)) {
      for (const ext of VIDEO_EXTENSIONS) {
        const src = `asset/videos/${variant}.${ext}`;
        uniqueCandidates.set(`video:${src}`, { type: "video", src });
      }
      for (const ext of IMAGE_EXTENSIONS) {
        const src = `asset/images/${variant}.${ext}`;
        uniqueCandidates.set(`image:${src}`, { type: "image", src });
      }
    }
  }

  return Array.from(uniqueCandidates.values());
}

function probeMediaSource(candidate) {
  const cacheKey = `${candidate.type}:${candidate.src}`;
  if (sourceProbeCache.has(cacheKey)) {
    return sourceProbeCache.get(cacheKey);
  }

  const probePromise = new Promise((resolve) => {
    let settled = false;
    const timeoutId = window.setTimeout(() => finish(false), 12000);

    function finish(exists) {
      if (settled) {
        return;
      }
      settled = true;
      window.clearTimeout(timeoutId);
      resolve(exists);
    }

    if (candidate.type === "video") {
      const probe = document.createElement("video");
      probe.preload = "metadata";
      probe.muted = true;
      probe.playsInline = true;
      probe.addEventListener("loadedmetadata", () => finish(true), { once: true });
      probe.addEventListener("loadeddata", () => finish(true), { once: true });
      probe.addEventListener("canplay", () => finish(true), { once: true });
      probe.addEventListener("error", () => finish(false), { once: true });
      probe.src = candidate.src;
      probe.load();
      return;
    }

    const probe = new Image();
    probe.addEventListener("load", () => finish(true), { once: true });
    probe.addEventListener("error", () => finish(false), { once: true });
    probe.src = candidate.src;
  });

  sourceProbeCache.set(cacheKey, probePromise);
  return probePromise;
}

async function resolveProjectMedia(projectName) {
  const fallback = { type: "video", src: defaultBillboardVideoSrc };
  if (!projectName) {
    return fallback;
  }

  const overrideCandidates = PROJECT_MEDIA_OVERRIDES[projectName];
  if (Array.isArray(overrideCandidates) && overrideCandidates.length) {
    for (const candidate of overrideCandidates) {
      if (candidate && typeof candidate.src === "string" && candidate.src) {
        projectMediaCache.set(projectName, candidate);
        return candidate;
      }
    }
  }

  if (projectMediaCache.has(projectName)) {
    return projectMediaCache.get(projectName);
  }

  const candidates = getProjectMediaCandidates(projectName);
  for (const candidate of candidates) {
    // Probe candidate sources once so we only switch to assets that actually exist.
    const exists = await probeMediaSource(candidate);
    if (exists) {
      projectMediaCache.set(projectName, candidate);
      return candidate;
    }
  }

  projectMediaCache.set(projectName, fallback);
  return fallback;
}

function syncBillboardVideoPresentationState(videoNode, frameNode, media) {
  if (!videoNode || !frameNode) {
    return;
  }

  const isMediaContainFit = media?.type === "video" && media?.fit === "contain";
  frameNode.classList.toggle("is-contained-video", isMediaContainFit);

  const applySquareState = () => {
    const width = Number(videoNode.videoWidth);
    const height = Number(videoNode.videoHeight);
    if (!width || !height) {
      frameNode.classList.remove("is-square-video");
      return;
    }
    const aspectRatio = width / height;
    const isSquareVideo = aspectRatio >= 0.95 && aspectRatio <= 1.05;
    frameNode.classList.toggle("is-square-video", isSquareVideo);
  };

  if (videoNode.readyState >= 1 && videoNode.videoWidth && videoNode.videoHeight) {
    applySquareState();
    return;
  }

  videoNode.addEventListener("loadedmetadata", applySquareState, { once: true });
}

function setBillboardMedia(media) {
  if (!billboardVideo || !media || !media.src) {
    return;
  }
  const resolvedSrc = withMediaCacheBust(media.src);

  if (media.type === "image" && billboardImage) {
    if (billboardFrameNode) {
      billboardFrameNode.classList.remove("is-square-video");
      billboardFrameNode.classList.remove("is-contained-video");
    }
    if (billboardImage.getAttribute("src") !== resolvedSrc) {
      billboardImage.setAttribute("src", resolvedSrc);
    }
    billboardImage.style.display = "block";
    billboardVideo.style.display = "none";
    billboardVideo.pause();
    return;
  }

  if (billboardImage) {
    billboardImage.style.display = "none";
  }
  billboardVideo.style.display = "block";

  if (billboardVideo.getAttribute("src") !== resolvedSrc) {
    billboardVideo.setAttribute("src", resolvedSrc);
    billboardVideo.load();
  }
  syncBillboardVideoPresentationState(billboardVideo, billboardFrameNode, media);

  const playPromise = billboardVideo.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
}

function setResponsiveBillboardMedia(media) {
  if (!responsiveBillboardVideo || !media || !media.src) {
    return;
  }
  const resolvedSrc = withMediaCacheBust(media.src);

  if (media.type === "image" && responsiveBillboardImage) {
    if (responsiveBillboardFrameNode) {
      responsiveBillboardFrameNode.classList.remove("is-square-video");
      responsiveBillboardFrameNode.classList.remove("is-contained-video");
    }
    if (responsiveBillboardImage.getAttribute("src") !== resolvedSrc) {
      responsiveBillboardImage.setAttribute("src", resolvedSrc);
    }
    responsiveBillboardImage.style.display = "block";
    responsiveBillboardVideo.style.display = "none";
    responsiveBillboardVideo.pause();
    return;
  }

  if (responsiveBillboardImage) {
    responsiveBillboardImage.style.display = "none";
  }
  responsiveBillboardVideo.style.display = "block";

  if (responsiveBillboardVideo.getAttribute("src") !== resolvedSrc) {
    responsiveBillboardVideo.setAttribute("src", resolvedSrc);
    responsiveBillboardVideo.load();
  }
  syncBillboardVideoPresentationState(responsiveBillboardVideo, responsiveBillboardFrameNode, media);

  const playPromise = responsiveBillboardVideo.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
}

function setIndexRowPreviewMedia(rowNode, media) {
  if (!rowNode || !media || !media.src) {
    return;
  }

  const previewVideo = rowNode.querySelector(".index-preview-video");
  const previewImage = rowNode.querySelector(".index-preview-image");
  if (!previewVideo || !previewImage) {
    return;
  }

  const resolvedSrc = withMediaCacheBust(media.src);

  if (media.type === "image") {
    if (previewImage.getAttribute("src") !== resolvedSrc) {
      previewImage.setAttribute("src", resolvedSrc);
    }
    previewImage.style.display = "block";
    previewVideo.style.display = "none";
    previewVideo.pause();
    return;
  }

  previewImage.style.display = "none";
  previewVideo.style.display = "block";

  if (previewVideo.getAttribute("src") !== resolvedSrc) {
    previewVideo.setAttribute("src", resolvedSrc);
    previewVideo.load();
  }

  const playPromise = previewVideo.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
}

function setGridCardMedia(cardNode, media, isResponsiveCard) {
  if (!cardNode || !media || !media.src) {
    return;
  }

  const videoSelector = isResponsiveCard ? ".r-grid-card-video" : ".grid-card-video";
  const imageSelector = isResponsiveCard ? ".r-grid-card-image" : ".grid-card-image";
  const cardVideo = cardNode.querySelector(videoSelector);
  const cardImage = cardNode.querySelector(imageSelector);
  if (!cardVideo || !cardImage) {
    return;
  }

  const resolvedSrc = withMediaCacheBust(media.src);
  if (media.type === "image") {
    if (cardImage.getAttribute("src") !== resolvedSrc) {
      cardImage.setAttribute("src", resolvedSrc);
    }
    cardImage.style.display = "block";
    cardVideo.style.display = "none";
    cardVideo.pause();
    return;
  }

  cardImage.style.display = "none";
  cardVideo.style.display = "block";

  if (cardVideo.getAttribute("src") !== resolvedSrc) {
    cardVideo.setAttribute("src", resolvedSrc);
    cardVideo.load();
  }

  const playPromise = cardVideo.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
}

function clearGridCardMediaLoadState() {
  const cards = [
    ...(gridCardsNode ? Array.from(gridCardsNode.querySelectorAll(".grid-card")) : []),
    ...(responsiveGridCardsNode ? Array.from(responsiveGridCardsNode.querySelectorAll(".r-grid-card")) : []),
  ];

  cards.forEach((cardNode) => {
    delete cardNode.dataset.mediaLoaded;
    delete cardNode.dataset.mediaLoading;
  });
}

function getGridCardsByPriority() {
  return [
    ...(gridCardsNode ? Array.from(gridCardsNode.querySelectorAll(".grid-card")) : []),
    ...(responsiveGridCardsNode ? Array.from(responsiveGridCardsNode.querySelectorAll(".r-grid-card")) : []),
  ];
}

function pauseGridCardVideo(cardNode) {
  if (!cardNode) {
    return;
  }
  const videoNode = cardNode.querySelector(".grid-card-video, .r-grid-card-video");
  if (videoNode && !videoNode.paused) {
    videoNode.pause();
  }
}

function resumeGridCardVideo(cardNode) {
  if (!cardNode) {
    return;
  }
  const videoNode = cardNode.querySelector(".grid-card-video, .r-grid-card-video");
  if (!videoNode || videoNode.style.display === "none" || !videoNode.getAttribute("src")) {
    return;
  }
  const playPromise = videoNode.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
}

async function loadGridCardMedia(cardNode, requestId) {
  if (!cardNode || !cardNode.isConnected || cardNode.dataset.mediaLoaded === "1" || cardNode.dataset.mediaLoading === "1") {
    return;
  }

  const projectName = cardNode.dataset.project || "";
  if (!projectName) {
    return;
  }

  cardNode.dataset.mediaLoading = "1";
  const resolvedMedia = await resolveProjectMedia(projectName);
  delete cardNode.dataset.mediaLoading;

  if (requestId !== gridMediaRequestId || !cardNode.isConnected) {
    return;
  }

  setGridCardMedia(cardNode, resolvedMedia, cardNode.classList.contains("r-grid-card"));
  cardNode.dataset.mediaLoaded = "1";
}

function ensureGridMediaObserver() {
  if (gridMediaObserver) {
    return gridMediaObserver;
  }

  if (typeof IntersectionObserver !== "function") {
    return null;
  }

  gridMediaObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const cardNode = entry.target;
        if (!cardNode || !cardNode.isConnected) {
          return;
        }

        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          if (cardNode.dataset.mediaLoaded === "1") {
            resumeGridCardVideo(cardNode);
            return;
          }
          void loadGridCardMedia(cardNode, activeGridMediaRequestId);
          return;
        }

        pauseGridCardVideo(cardNode);
      });
    },
    {
      root: null,
      rootMargin: "360px 0px 360px 0px",
      threshold: 0.01,
    }
  );

  return gridMediaObserver;
}

async function syncGridCardsMedia() {
  const allCards = getGridCardsByPriority();
  if (!allCards.length) {
    return;
  }

  const requestId = ++gridMediaRequestId;
  activeGridMediaRequestId = requestId;
  clearGridCardMediaLoadState();

  if (gridMediaObserver) {
    gridMediaObserver.disconnect();
  }

  const observer = ensureGridMediaObserver();
  if (observer) {
    allCards.forEach((cardNode) => {
      observer.observe(cardNode);
    });
  }

  const eagerCount = observer ? (isResponsiveLayout ? (isMobileLayout ? 2 : 3) : 3) : allCards.length;
  const eagerCards = allCards.slice(0, eagerCount);
  for (const cardNode of eagerCards) {
    await loadGridCardMedia(cardNode, requestId);
  }
}

async function syncIndexRowPreview(projectName, rowNode) {
  if (!rowNode || !projectName) {
    return;
  }

  const requestId = ++indexPreviewRequestId;
  const resolvedMedia = await resolveProjectMedia(projectName);
  if (requestId !== indexPreviewRequestId) {
    return;
  }

  if (!indexBodyNode || !indexBodyNode.contains(rowNode)) {
    return;
  }

  setIndexRowPreviewMedia(rowNode, resolvedMedia);
}

function clearActiveIndexRow() {
  if (indexBodyNode) {
    const activeRows = indexBodyNode.querySelectorAll(".index-row.is-active");
    activeRows.forEach((rowNode) => {
      rowNode.classList.remove("is-active");
      const previewVideo = rowNode.querySelector(".index-preview-video");
      if (previewVideo) {
        previewVideo.pause();
      }
    });
  }

  if (responsiveIndexBodyNode) {
    const activeResponsiveRows = responsiveIndexBodyNode.querySelectorAll(".r-index-row.is-active");
    activeResponsiveRows.forEach((rowNode) => {
      rowNode.classList.remove("is-active");
    });
  }

  activeIndexProjectName = "";
  activeResponsiveIndexProjectName = "";
  indexPreviewRequestId += 1;
}

function setActiveIndexRow(projectName) {
  if (!indexBodyNode) {
    return;
  }

  const indexRows = Array.from(indexBodyNode.querySelectorAll(".index-row"));
  if (!indexRows.length) {
    return;
  }

  const normalizedName = (projectName || "").trim();
  if (!normalizedName) {
    clearActiveIndexRow();
    return;
  }

  const targetRow = indexRows.find((row) => row.dataset.project === normalizedName);
  if (!targetRow) {
    clearActiveIndexRow();
    return;
  }

  indexRows.forEach((row) => {
    row.classList.toggle("is-active", row === targetRow);
  });

  const activeProject = targetRow.dataset.project || "";
  activeIndexProjectName = activeProject;
  void syncIndexRowPreview(activeProject, targetRow);
}

function setActiveResponsiveIndexRow(projectName) {
  if (!responsiveIndexBodyNode) {
    return;
  }

  const indexRows = Array.from(responsiveIndexBodyNode.querySelectorAll(".r-index-row"));
  if (!indexRows.length) {
    return;
  }

  const normalizedName = (projectName || "").trim();
  if (!normalizedName) {
    clearActiveIndexRow();
    return;
  }

  const targetRow = indexRows.find((row) => row.dataset.project === normalizedName);
  if (!targetRow) {
    clearActiveIndexRow();
    return;
  }

  indexRows.forEach((row) => {
    row.classList.toggle("is-active", row === targetRow);
  });

  activeResponsiveIndexProjectName = normalizedName;
}

async function syncBillboardForProject(projectName) {
  if (!billboardVideo && !responsiveBillboardVideo) {
    return;
  }

  const normalizedProjectName = (projectName || "").trim();
  const requestId = ++billboardRequestId;
  let resolvedMedia = null;
  if (hasOverviewCarousel(normalizedProjectName)) {
    resolvedMedia = await resolveOverviewCarouselMedia(normalizedProjectName, fabCarouselIndex);
  }
  if (!resolvedMedia) {
    resolvedMedia = await resolveProjectMedia(normalizedProjectName);
  }
  if (requestId !== billboardRequestId) {
    return;
  }

  setBillboardMedia(resolvedMedia);
  setResponsiveBillboardMedia(resolvedMedia);
  syncFabCarouselUi(normalizedProjectName);
}

function getSnapOffsets() {
  if (isResponsiveLayout) {
    const panelHeight = board.clientHeight || window.innerHeight || DESIGN_HEIGHT;
    return [0, -panelHeight, -panelHeight * 2];
  }

  return DESKTOP_SNAP_OFFSETS;
}

function applyStateOffset() {
  if (isTabletFreeScrollModeActive()) {
    setDesktopTrackMotionMode("snap");
    stateIndex = 0;
    app.dataset.state = "0";
    indexFreeScrollOffset = 0;
    indexBoundaryScrollBuffer = 0;
    board.style.setProperty("--track-offset", "0px");
    return;
  }

  const offsets = getSnapOffsets();
  stateIndex = clamp(stateIndex, 0, offsets.length - 1);
  app.dataset.state = String(stateIndex);

  if (isDesktopFreeScrollModeActive() && (stateIndex === 1 || stateIndex === 2)) {
    applyDesktopIndexFreeScrollOffset();
  } else {
    setDesktopTrackMotionMode("snap");
    if (stateIndex !== 1) {
      indexFreeScrollOffset = 0;
    }
    indexBoundaryScrollBuffer = 0;
    board.style.setProperty("--track-offset", `${offsets[stateIndex]}px`);
  }

  if (!canHoverProjects()) {
    setActiveWorkItem(DEFAULT_WORK_INDEX);
    setHoveredWorkItem(null);
    clearActiveIndexRow();
  }

  if (!canUseGridGroupHover()) {
    resetGridGroupHover();
  }
}

function updateScale() {
  const viewportWidth = window.innerWidth;
  isResponsiveLayout = viewportWidth <= RESPONSIVE_BREAKPOINT;
  isMobileLayout = isResponsiveLayout && viewportWidth < TABLET_FREE_SCROLL_MIN;
  isTabletFreeScrollLayout = isResponsiveLayout;
  const responsiveMode = isResponsiveLayout ? (isMobileLayout ? "mobile" : "tablet") : "desktop";
  if (responsiveMode !== renderedResponsiveMode) {
    renderedResponsiveMode = responsiveMode;
    renderIndexRows();
  }
  app.dataset.layout = isResponsiveLayout ? "responsive" : "desktop";
  app.dataset.interaction = isResponsiveLayout ? "free-scroll" : "snap";
  app.dataset.responsiveMode = responsiveMode;

  if (isMobileLayout && app.dataset.indexView === "overview") {
    app.dataset.indexView = "grid";
  }

  syncDocumentScrollMode();

  if (isResponsiveLayout) {
    app.style.removeProperty("--desktop-board-width");
    app.style.removeProperty("--desktop-inner-width");
    app.style.removeProperty("--desktop-track-height");
    delete app.dataset.desktopTrackMotion;
    board.style.zoom = "1";
    board.style.width = `${window.innerWidth}px`;
    board.style.height = "auto";
    board.style.left = "0px";
    board.style.top = "0px";
    board.style.setProperty("--responsive-panel-height", `${window.innerHeight}px`);

    stateIndex = 0;
    app.dataset.state = "0";
    indexFreeScrollOffset = 0;
    indexBoundaryScrollBuffer = 0;
    board.style.setProperty("--track-offset", "0px");
    syncDesktopHeroMarkFit();
    syncDesktopIndexFooterMetrics();
    syncDesktopTrackHeight();
    resetGridGroupHover();
    clearActiveIndexRow();
    updateResponsiveNavSurface();
    syncTabletHeroMarkFit();
    syncFabCarouselUi(activeWorkProjectName);
    return;
  }

  const shellWidth = boardShell ? boardShell.clientWidth : Math.max(1, window.innerWidth);
  const cappedShellWidth = Math.min(shellWidth, MAX_DESKTOP_VIEWPORT);
  const boardWidth = cappedShellWidth;
  const boardHeight = window.innerHeight;
  const boardLeft = Math.max(0, (cappedShellWidth - boardWidth) / 2);

  app.style.setProperty("--desktop-board-width", `${boardWidth}px`);
  app.style.setProperty("--desktop-inner-width", `${Math.max(0, boardWidth - 24)}px`);
  board.style.zoom = "1";
  board.style.width = `${boardWidth}px`;
  board.style.height = `${boardHeight}px`;
  board.style.left = `${boardLeft}px`;
  board.style.top = "0px";
  board.style.setProperty("--responsive-panel-height", `${boardHeight}px`);
  setDesktopTrackMotionMode("snap");
  syncDesktopHeroMarkFit();
  syncDesktopIndexFooterMetrics();
  syncDesktopTrackHeight();
  updateDesktopIndexScrollMetrics();
  applyStateOffset();
  updateResponsiveNavSurface();
  syncTabletHeroMarkFit();
  syncFabCarouselUi(activeWorkProjectName);
}

function setState(nextIndex) {
  if (isTabletFreeScrollModeActive()) {
    stateIndex = clamp(nextIndex, 0, 2);
    app.dataset.state = String(stateIndex);
    if (stateIndex === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return;
  }

  const offsets = getSnapOffsets();
  const target = clamp(nextIndex, 0, offsets.length - 1);
  if (target === stateIndex) {
    return;
  }

  stateIndex = target;
  app.dataset.state = String(stateIndex);

  if (isDesktopFreeScrollModeActive() && (stateIndex === 1 || stateIndex === 2)) {
    applyDesktopIndexFreeScrollOffset();
  } else {
    setDesktopTrackMotionMode("snap");
    if (stateIndex !== 1) {
      indexFreeScrollOffset = 0;
    }
    indexBoundaryScrollBuffer = 0;
    board.style.setProperty("--track-offset", `${offsets[stateIndex]}px`);
  }

  if (!canHoverProjects()) {
    setActiveWorkItem(DEFAULT_WORK_INDEX);
    setHoveredWorkItem(null);
    clearActiveIndexRow();
  }

  locked = true;
  window.setTimeout(() => {
    locked = false;
  }, LOCK_MS);
}

function jumpToSelectedWorks() {
  if (isResponsiveLayout) {
    if (responsiveFirstPanelNode) {
      const firstPanelTop = responsiveFirstPanelNode.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, firstPanelTop - 12),
        behavior: "smooth",
      });
      return;
    }
    setState(1);
    return;
  }

  setState(1);
}

function nudge(direction) {
  if (locked) {
    return;
  }
  const delta = direction > 0 ? 1 : -1;
  setState(stateIndex + delta);
}

function getNewYorkTimeLabel() {
  const time = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "America/New_York",
  }).format(new Date());
  return `✹ NY ${time}`;
}

function updateTimeTicker() {
  const label = getNewYorkTimeLabel();
  for (const node of nyClockNodes) {
    const isResponsiveTimer = node.classList.contains("r-ny");
    if (isResponsiveTimer && isMobileLayout) {
      node.textContent = "✹";
      continue;
    }
    node.textContent = label;
  }
}

function runLoadAnimation() {
  body.dataset.loadState = "loading";
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      body.dataset.loadState = "ready";
    });
  });
}

function applyTheme(theme, persist = true) {
  const normalizedTheme = theme === "dark" ? "dark" : "light";
  body.dataset.theme = normalizedTheme;

  if (!persist) {
    return;
  }

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, normalizedTheme);
  } catch (_error) {
    // Ignore storage failures (private mode / storage disabled).
  }
}

function getStoredTheme() {
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY);
  } catch (_error) {
    return null;
  }
}

function toggleTheme() {
  const currentTheme = body.dataset.theme === "dark" ? "dark" : "light";
  body.dataset.themeTransition = "on";
  applyTheme(currentTheme === "dark" ? "light" : "dark");
  window.setTimeout(() => {
    if (body.dataset.themeTransition === "on") {
      delete body.dataset.themeTransition;
    }
  }, 360);
}

function initializeThemeToggle() {
  const storedTheme = getStoredTheme();
  applyTheme(storedTheme === "dark" ? "dark" : "light", false);

  for (const clockNode of nyClockNodes) {
    clockNode.setAttribute("role", "button");
    clockNode.setAttribute("tabindex", "0");
    clockNode.setAttribute("aria-label", "Toggle dark mode");

    clockNode.addEventListener("click", () => {
      toggleTheme();
    });

    clockNode.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }
      event.preventDefault();
      toggleTheme();
    });
  }
}

function syncDocumentScrollMode() {
  const root = document.documentElement;
  if (isResponsiveLayout) {
    root.style.height = "auto";
    root.style.overflowY = "auto";
    root.style.overflowX = "hidden";
    body.style.height = "auto";
    body.style.overflowY = "auto";
    body.style.overflowX = "hidden";
    return;
  }

  root.style.height = "100%";
  root.style.overflow = "hidden";
  body.style.height = "100%";
  body.style.overflow = "hidden";
}

function syncDesktopHeroMarkFit() {
  const heroMarkNode = document.querySelector(".hero-mark");
  if (!heroMarkNode) {
    return;
  }

  const clearDesktopHeroVars = () => {
    app.style.removeProperty("--desktop-hero-font-size");
    app.style.removeProperty("--desktop-hero-letter-spacing");
    app.style.removeProperty("--desktop-hero-top");
  };

  if (isResponsiveLayout) {
    clearDesktopHeroVars();
    return;
  }

  app.style.removeProperty("--desktop-hero-font-size");
  app.style.removeProperty("--desktop-hero-letter-spacing");

  const availableWidth = heroMarkNode.clientWidth;
  if (!availableWidth) {
    return;
  }

  const probeNode = heroMarkNode.cloneNode(true);
  probeNode.style.position = "absolute";
  probeNode.style.left = "-10000px";
  probeNode.style.top = "0";
  probeNode.style.width = "auto";
  probeNode.style.whiteSpace = "nowrap";
  probeNode.style.margin = "0";
  probeNode.style.visibility = "hidden";
  probeNode.style.pointerEvents = "none";
  probeNode.style.fontSize = `${HERO_MARK_FONT_SIZE}px`;
  probeNode.style.letterSpacing = `${HERO_MARK_LETTER_SPACING}px`;
  probeNode.style.lineHeight = `${HERO_MARK_LINE_HEIGHT}`;
  board.appendChild(probeNode);

  const measuredWidth = probeNode.scrollWidth;
  probeNode.remove();

  if (!measuredWidth) {
    return;
  }

  // Slightly bias toward full-bleed so the mark lands edge-to-edge.
  const fitScale = (availableWidth / measuredWidth) * 1.002;
  const fittedFontSize = HERO_MARK_FONT_SIZE * fitScale;
  const fittedLetterSpacing = HERO_MARK_LETTER_SPACING * fitScale;
  app.style.setProperty("--desktop-hero-font-size", `${fittedFontSize}px`);
  app.style.setProperty("--desktop-hero-letter-spacing", `${fittedLetterSpacing}px`);

  if (app.dataset.indexView !== "overview") {
    app.style.removeProperty("--desktop-hero-top");
    return;
  }

  const boardHeight = board.clientHeight || window.innerHeight || DESIGN_HEIGHT;
  const heroVisibleHeight = fittedFontSize * HERO_MARK_LINE_HEIGHT;
  const heroBottomGutter = getDesktopHeroBottomGutter();
  const heroTop = Math.round(Math.abs(DESKTOP_SNAP_OFFSETS[2]) + boardHeight - heroVisibleHeight - heroBottomGutter);
  app.style.setProperty("--desktop-hero-top", `${heroTop}px`);
}

function syncTabletHeroMarkFit() {
  const heroMarkNode = document.querySelector(".r-hero-mark");
  if (!heroMarkNode) {
    return;
  }

  const resetFit = () => {
    app.style.removeProperty("--tablet-hero-font-size");
    app.style.removeProperty("--tablet-hero-letter-spacing");
    app.style.removeProperty("--mobile-hero-font-size");
    app.style.removeProperty("--mobile-hero-letter-spacing");
  };

  if (!isTabletFreeScrollModeActive()) {
    resetFit();
    return;
  }

  const availableWidth = heroMarkNode.clientWidth;
  if (!availableWidth) {
    return;
  }

  let baseFontSize = 90.809;
  let baseLetterSpacing = -6.3566;
  let responsiveFontVar = "--tablet-hero-font-size";
  let responsiveLetterVar = "--tablet-hero-letter-spacing";

  if (isMobileLayout) {
    baseFontSize = 29.774;
    baseLetterSpacing = -2.0842;
    responsiveFontVar = "--mobile-hero-font-size";
    responsiveLetterVar = "--mobile-hero-letter-spacing";
  }

  const probeNode = heroMarkNode.cloneNode(true);
  probeNode.style.position = "absolute";
  probeNode.style.left = "-10000px";
  probeNode.style.top = "0";
  probeNode.style.width = "auto";
  probeNode.style.whiteSpace = "nowrap";
  probeNode.style.margin = "0";
  probeNode.style.visibility = "hidden";
  probeNode.style.pointerEvents = "none";
  probeNode.style.fontSize = `${baseFontSize}px`;
  probeNode.style.letterSpacing = `${baseLetterSpacing}px`;
  probeNode.style.lineHeight = "0.87";
  board.appendChild(probeNode);

  const measuredWidth = probeNode.scrollWidth;
  probeNode.remove();

  if (!measuredWidth) {
    return;
  }

  // Slightly bias toward full-bleed so the mark visually lands edge-to-edge.
  const fitScale = (availableWidth / measuredWidth) * 1.002;
  const fittedFontSize = baseFontSize * fitScale;
  const fittedLetterSpacing = baseLetterSpacing * fitScale;

  app.style.setProperty(responsiveFontVar, `${fittedFontSize}px`);
  app.style.setProperty(responsiveLetterVar, `${fittedLetterSpacing}px`);
}

function updateResponsiveNavSurface() {
  if (!isTabletFreeScrollModeActive()) {
    app.dataset.navSurface = "top";
    return;
  }
  const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
  app.dataset.navSurface = scrollTop > 2 ? "scrolled" : "top";
}

window.addEventListener("resize", updateScale);
window.addEventListener(
  "scroll",
  () => {
    updateResponsiveNavSurface();
  },
  { passive: true }
);
initializeHeroVariationControls();
initializeThemeToggle();
updateScale();
applyStateOffset();
syncDesktopHeroMarkFit();
syncDesktopIndexFooterMetrics();
syncDesktopTrackHeight();
updateResponsiveNavSurface();
syncTabletHeroMarkFit();
updateTimeTicker();
runLoadAnimation();
window.setInterval(updateTimeTicker, 1000);
setActiveWorkItem(DEFAULT_WORK_INDEX);

window.addEventListener("load", () => {
  syncDesktopHeroMarkFit();
  syncDesktopIndexFooterMetrics();
  syncDesktopTrackHeight();
  syncTabletHeroMarkFit();
});

if (document.fonts && typeof document.fonts.ready?.then === "function") {
  document.fonts.ready.then(() => {
    syncDesktopHeroMarkFit();
    syncDesktopIndexFooterMetrics();
    syncDesktopTrackHeight();
    syncTabletHeroMarkFit();
  });
}

for (const toggleNode of viewToggleNodes) {
  toggleNode.addEventListener("click", () => {
    setIndexViewMode(toggleNode.dataset.viewTarget || "overview");
  });
}

for (const bioShortcutNode of bioShortcutNodes) {
  bioShortcutNode.addEventListener("click", () => {
    setState(0);
  });

  bioShortcutNode.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    event.preventDefault();
    setState(0);
  });
}

for (const selectedWorksShortcutNode of selectedWorksShortcutNodes) {
  selectedWorksShortcutNode.addEventListener("click", () => {
    jumpToSelectedWorks();
  });

  selectedWorksShortcutNode.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    event.preventDefault();
    jumpToSelectedWorks();
  });
}

const handleFabBillboardClick = async (event) => {
  const advanced = await advanceFabCarousel();
  if (!advanced) {
    return;
  }
  event.preventDefault();
};

const handleFabCursorPointerEnter = (event) => {
  if (!canShowFabCursorCounter(event.pointerType)) {
    hideFabCursorCounter();
    return;
  }
  positionFabCursorCounter(event.clientX, event.clientY);
  if (fabCursorCounterNode) {
    fabCursorCounterNode.classList.add("is-visible");
  }
};

const handleFabCursorPointerMove = (event) => {
  if (!canShowFabCursorCounter(event.pointerType)) {
    hideFabCursorCounter();
    return;
  }
  positionFabCursorCounter(event.clientX, event.clientY);
  if (fabCursorCounterNode) {
    fabCursorCounterNode.classList.add("is-visible");
  }
};

const handleFabCursorPointerLeave = () => {
  hideFabCursorCounter();
};

if (billboardFrameNode) {
  billboardFrameNode.addEventListener("click", handleFabBillboardClick);
  billboardFrameNode.addEventListener("pointerenter", handleFabCursorPointerEnter);
  billboardFrameNode.addEventListener("pointermove", handleFabCursorPointerMove);
  billboardFrameNode.addEventListener("pointerleave", handleFabCursorPointerLeave);
  billboardFrameNode.addEventListener("pointercancel", handleFabCursorPointerLeave);
}

if (responsiveBillboardFrameNode) {
  responsiveBillboardFrameNode.addEventListener("click", handleFabBillboardClick);
  responsiveBillboardFrameNode.addEventListener("pointerenter", handleFabCursorPointerEnter);
  responsiveBillboardFrameNode.addEventListener("pointermove", handleFabCursorPointerMove);
  responsiveBillboardFrameNode.addEventListener("pointerleave", handleFabCursorPointerLeave);
  responsiveBillboardFrameNode.addEventListener("pointercancel", handleFabCursorPointerLeave);
}

if (worksList) {
  worksList.addEventListener("pointerover", (event) => {
    if (!canHoverProjects()) {
      return;
    }
    const hoveredItem = event.target.closest(".work-item");
    if (!hoveredItem || !worksList.contains(hoveredItem)) {
      return;
    }
    const hoveredIndex = workItems.indexOf(hoveredItem);
    if (hoveredIndex !== -1) {
      setActiveWorkItem(hoveredIndex);
      setHoveredWorkItem(hoveredIndex);
    }
  });

  worksList.addEventListener("pointerleave", () => {
    if (!canHoverProjects()) {
      return;
    }
    setHoveredWorkItem(null);
  });

  worksList.addEventListener("click", (event) => {
    const selectedItem = event.target.closest(".work-item");
    if (!selectedItem || !worksList.contains(selectedItem)) {
      return;
    }
    navigateToProjectLink(selectedItem.textContent || "");
  });
}

if (responsiveWorksList) {
  responsiveWorksList.addEventListener("pointerover", (event) => {
    if (!canHoverResponsiveOverviewProjects()) {
      return;
    }
    const hoveredItem = event.target.closest(".r-work-item");
    if (!hoveredItem || !responsiveWorksList.contains(hoveredItem)) {
      return;
    }
    const hoveredIndex = responsiveWorkItems.indexOf(hoveredItem);
    if (hoveredIndex !== -1) {
      setActiveWorkItem(hoveredIndex);
    }
  });

  responsiveWorksList.addEventListener("click", (event) => {
    const selectedItem = event.target.closest(".r-work-item");
    if (!selectedItem || !responsiveWorksList.contains(selectedItem)) {
      return;
    }
    navigateToProjectLink(selectedItem.textContent || "");
  });
}

if (indexBodyNode) {
  indexBodyNode.addEventListener("pointerover", (event) => {
    if (isResponsiveLayout) {
      return;
    }
    const rowNode = event.target.closest(".index-row");
    if (!rowNode || !indexBodyNode.contains(rowNode)) {
      return;
    }
    const projectName = rowNode.dataset.project || "";
    if (projectName && projectName !== activeIndexProjectName) {
      setActiveIndexRow(projectName);
    }
  });

  indexBodyNode.addEventListener("pointerleave", () => {
    clearActiveIndexRow();
  });

  indexBodyNode.addEventListener("click", (event) => {
    const rowNode = event.target.closest(".index-row");
    if (!rowNode || !indexBodyNode.contains(rowNode)) {
      return;
    }
    navigateToProjectLink(rowNode.dataset.project || "");
  });
}

if (responsiveIndexBodyNode) {
  responsiveIndexBodyNode.addEventListener("pointerover", (event) => {
    if (!canHoverResponsiveIndexRows()) {
      return;
    }
    const rowNode = event.target.closest(".r-index-row");
    if (!rowNode || !responsiveIndexBodyNode.contains(rowNode)) {
      return;
    }
    const projectName = rowNode.dataset.project || "";
    if (projectName && projectName !== activeResponsiveIndexProjectName) {
      setActiveResponsiveIndexRow(projectName);
    }
  });

  responsiveIndexBodyNode.addEventListener("pointerleave", () => {
    clearActiveIndexRow();
  });

  responsiveIndexBodyNode.addEventListener("click", (event) => {
    const rowNode = event.target.closest(".r-index-row");
    if (!rowNode || !responsiveIndexBodyNode.contains(rowNode)) {
      return;
    }
    navigateToProjectLink(rowNode.dataset.project || "");
  });
}

if (gridCardsNode) {
  const syncGridGroupHoverFromEvent = (event) => {
    if (!canUseGridGroupHover()) {
      resetGridGroupHover();
      return;
    }
    const cardNode = event.target.closest(".grid-card");
    if (!cardNode || !gridCardsNode.contains(cardNode)) {
      resetGridGroupHover();
      return;
    }
    const projectName = cardNode.dataset.project || "";
    const groupKey = getGridGroupForCard(cardNode);
    setGridGroupHover(projectName, groupKey);
  };

  gridCardsNode.addEventListener("pointerover", syncGridGroupHoverFromEvent);
  gridCardsNode.addEventListener("pointermove", syncGridGroupHoverFromEvent);
  gridCardsNode.addEventListener("pointerleave", () => {
    resetGridGroupHover();
  });

  gridCardsNode.addEventListener("click", (event) => {
    const cardNode = event.target.closest(".grid-card");
    if (!cardNode || !gridCardsNode.contains(cardNode)) {
      return;
    }
    navigateToProjectLink(cardNode.dataset.project || "");
  });
}

if (responsiveGridCardsNode) {
  responsiveGridCardsNode.addEventListener("click", (event) => {
    const cardNode = event.target.closest(".r-grid-card");
    if (!cardNode || !responsiveGridCardsNode.contains(cardNode)) {
      return;
    }
    navigateToProjectLink(cardNode.dataset.project || "");
  });
}

window.addEventListener(
  "wheel",
  (event) => {
    if (isTabletFreeScrollModeActive()) {
      return;
    }

    event.preventDefault();

    if (Math.abs(event.deltaY) < 1) {
      return;
    }

    if (handleDesktopIndexScrollDelta(event.deltaY)) {
      wheelBuffer = 0;
      return;
    }

    if (locked) {
      return;
    }

    wheelBuffer += event.deltaY;

    const threshold = isResponsiveLayout ? Math.max(20, WHEEL_THRESHOLD - 10) : WHEEL_THRESHOLD;

    if (Math.abs(wheelBuffer) >= threshold) {
      const direction = wheelBuffer > 0 ? 1 : -1;
      wheelBuffer = 0;
      nudge(direction);
    }
  },
  { passive: false }
);

window.addEventListener(
  "touchstart",
  (event) => {
    if (event.touches.length !== 1) {
      return;
    }
    touchStartY = event.touches[0].clientY;
    touchUsedForIndexScroll = false;
  },
  { passive: true }
);

window.addEventListener(
  "touchmove",
  (event) => {
    if (isTabletFreeScrollModeActive()) {
      return;
    }

    if (touchStartY !== null && event.touches.length === 1) {
      const deltaY = touchStartY - event.touches[0].clientY;
      touchStartY = event.touches[0].clientY;

      if (Math.abs(deltaY) > 0 && handleDesktopIndexScrollDelta(deltaY)) {
        touchUsedForIndexScroll = true;
        event.preventDefault();
        return;
      }
    }

    event.preventDefault();
  },
  { passive: false }
);

window.addEventListener("touchend", (event) => {
  if (isTabletFreeScrollModeActive()) {
    touchUsedForIndexScroll = false;
    touchStartY = null;
    return;
  }

  if (touchUsedForIndexScroll) {
    touchUsedForIndexScroll = false;
    touchStartY = null;
    return;
  }

  if (touchStartY === null || event.changedTouches.length !== 1 || locked) {
    touchStartY = null;
    return;
  }

  const endY = event.changedTouches[0].clientY;
  const deltaY = touchStartY - endY;
  touchStartY = null;

  if (Math.abs(deltaY) < SWIPE_THRESHOLD) {
    return;
  }

  nudge(deltaY > 0 ? 1 : -1);
});

window.addEventListener("keydown", (event) => {
  if (isTabletFreeScrollModeActive()) {
    return;
  }

  const key = event.key;
  const indexKeys = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", " ", "Home", "End"];

  if (isDesktopFreeScrollModeActive() && (stateIndex === 1 || stateIndex === 2)) {
    if (indexKeys.includes(key)) {
      event.preventDefault();
    }

    if (key === "ArrowDown") {
      handleDesktopIndexScrollDelta(48);
      return;
    }

    if (key === "ArrowUp") {
      handleDesktopIndexScrollDelta(-48);
      return;
    }

    if (key === "PageDown" || key === " ") {
      handleDesktopIndexScrollDelta(220);
      return;
    }

    if (key === "PageUp") {
      handleDesktopIndexScrollDelta(-220);
      return;
    }

    if (key === "Home") {
      stateIndex = 1;
      indexFreeScrollOffset = 0;
      indexBoundaryScrollBuffer = 0;
      applyDesktopIndexFreeScrollOffset();
      return;
    }

    if (key === "End") {
      stateIndex = 1;
      indexFreeScrollOffset = getDesktopIndexFullScrollMax();
      indexBoundaryScrollBuffer = 0;
      applyDesktopIndexFreeScrollOffset();
      return;
    }
  }

  if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", " ", "Home", "End"].includes(key)) {
    event.preventDefault();
  }

  if (key === "ArrowDown" || key === "PageDown" || key === " ") {
    nudge(1);
    return;
  }

  if (key === "ArrowUp" || key === "PageUp") {
    nudge(-1);
    return;
  }

  if (key === "Home") {
    setState(0);
    return;
  }

  if (key === "End") {
    setState(getSnapOffsets().length - 1);
  }
});
