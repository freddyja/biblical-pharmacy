/**
 * Biblical Pharmacy — UI behavior
 * Educational only. Never diagnoses or advises stopping medications.
 */
(function () {
  const featuredGrid = document.getElementById("featured-grid");
  const catalogGrid = document.getElementById("catalog-grid");
  const catalogSection = document.getElementById("full-catalog");
  const revealCta = document.getElementById("reveal-cta");
  const searchInput = document.getElementById("search");
  const featuredEmpty = document.getElementById("featured-empty");
  const catalogEmpty = document.getElementById("catalog-empty");
  const backdrop = document.getElementById("modal-backdrop");
  const modalClose = document.getElementById("modal-close");

  const ICONS = {
    pomegranate: `
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <ellipse cx="32" cy="38" rx="16" ry="15" fill="#b83232"/>
        <ellipse cx="32" cy="38" rx="16" ry="15" fill="url(#pg)" opacity="0.35"/>
        <path d="M24 24c2-8 8-10 8-10s6 2 8 10" fill="none" stroke="#6b8f4e" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="32" cy="16" r="3" fill="#7a9e55"/>
        <path d="M20 36c4 6 10 8 12 8s8-2 12-8" fill="none" stroke="#7a1f1f" stroke-width="1.2" opacity="0.5"/>
        <ellipse cx="48" cy="42" rx="9" ry="10" fill="#c43c3c"/>
        <path d="M40 42h16M42 38c2 3 5 4 6 4s4-1 6-4M42 46c2-2 5-3 6-3s4 1 6 3" fill="none" stroke="#f0c4a0" stroke-width="1.1"/>
        <defs><radialGradient id="pg"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#b83232"/></radialGradient></defs>
      </svg>`,
    coriander: `
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <g fill="#5a9e4a">
          <ellipse cx="32" cy="28" rx="7" ry="11" transform="rotate(-20 32 28)"/>
          <ellipse cx="24" cy="34" rx="6" ry="10" transform="rotate(-55 24 34)"/>
          <ellipse cx="40" cy="34" rx="6" ry="10" transform="rotate(55 40 34)"/>
          <ellipse cx="28" cy="42" rx="5" ry="9" transform="rotate(-30 28 42)"/>
          <ellipse cx="36" cy="42" rx="5" ry="9" transform="rotate(30 36 42)"/>
        </g>
        <circle cx="22" cy="50" r="2.2" fill="#c4a35a"/>
        <circle cx="28" cy="52" r="2" fill="#b89548"/>
        <circle cx="34" cy="51" r="2.3" fill="#c4a35a"/>
        <circle cx="40" cy="49" r="1.8" fill="#a8843a"/>
        <path d="M32 18v28" stroke="#3d6b32" stroke-width="1.5" fill="none"/>
      </svg>`,
    dill: `
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <g stroke="#7cb86a" stroke-width="1.3" fill="none" stroke-linecap="round">
          <path d="M32 54V14"/>
          <path d="M32 24c-8-6-14-6-16-4"/>
          <path d="M32 24c8-6 14-6 16-4"/>
          <path d="M32 34c-10-5-16-3-18 0"/>
          <path d="M32 34c10-5 16-3 18 0"/>
          <path d="M32 44c-8-4-12-2-14 1"/>
          <path d="M32 44c8-4 12-2 14 1"/>
          <path d="M32 18c-5-5-8-4-9-2"/>
          <path d="M32 18c5-5 8-4 9-2"/>
        </g>
        <circle cx="26" cy="48" r="1.5" fill="#d4b86a"/>
        <circle cx="32" cy="50" r="1.5" fill="#c4a35a"/>
        <circle cx="38" cy="48" r="1.5" fill="#d4b86a"/>
      </svg>`,
    spikenard: `
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <ellipse cx="32" cy="48" rx="14" ry="6" fill="#5c4030"/>
        <path d="M22 48c0-12 4-28 10-34 6 6 10 22 10 34" fill="#6b8f4e"/>
        <path d="M28 48c1-10 2-20 4-26 2 6 3 16 4 26" fill="#557a3e" opacity="0.7"/>
        <path d="M32 14c-2 4-2 8 0 10 2-2 2-6 0-10z" fill="#8fbf6a"/>
        <ellipse cx="44" cy="28" rx="5" ry="7" fill="#e8c84a" opacity="0.9"/>
        <path d="M44 22c1 3 1 6 0 9" stroke="#c4a020" stroke-width="1" fill="none"/>
        <circle cx="44" cy="20" r="2" fill="#f0e2b0"/>
      </svg>`,
  };

  function wreathHTML(iconKey) {
    const svg = ICONS[iconKey] || ICONS.coriander;
    return `<div class="wreath"><div class="wreath-inner">${svg}</div></div>`;
  }

  function matchesQuery(herb, q) {
    if (!q) return true;
    const hay = `${herb.name} ${herb.benefits} ${herb.verse} ${herb.traditionalUses || ""}`.toLowerCase();
    return hay.includes(q);
  }

  function renderFeatured(filter) {
    const q = (filter || "").trim().toLowerCase();
    featuredGrid.innerHTML = "";
    let shown = 0;
    HERBS.featured.forEach((herb) => {
      if (!matchesQuery(herb, q)) return;
      shown++;
      const li = document.createElement("li");
      li.className = "herb-card";
      li.tabIndex = 0;
      li.setAttribute("role", "button");
      li.setAttribute("aria-label", `${herb.name}: ${herb.benefits}. Open details.`);
      li.dataset.id = herb.id;
      li.innerHTML = `
        ${wreathHTML(herb.icon)}
        <span class="herb-name">${herb.name}</span>
        <span class="herb-verse">${herb.verse}</span>
        <span class="herb-benefits">${herb.benefits}</span>
      `;
      li.addEventListener("click", () => openModal(herb.id));
      li.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(herb.id);
        }
      });
      featuredGrid.appendChild(li);
    });
    featuredEmpty.classList.toggle("is-visible", shown === 0);
  }

  function renderCatalog(filter) {
    const q = (filter || "").trim().toLowerCase();
    catalogGrid.innerHTML = "";
    let shown = 0;
    HERBS.catalog.forEach((herb) => {
      if (!matchesQuery(herb, q)) return;
      shown++;
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "catalog-card";
      btn.dataset.id = herb.id;
      btn.innerHTML = `
        <div class="emoji" aria-hidden="true">${herb.emoji || "🌿"}</div>
        <h3>${herb.name}</h3>
        <p class="ref">${herb.verse}</p>
        <p class="ben">${herb.benefits}</p>
      `;
      btn.addEventListener("click", () => openModal(herb.id));
      li.appendChild(btn);
      catalogGrid.appendChild(li);
    });
    catalogEmpty.classList.toggle("is-visible", shown === 0 && catalogSection.classList.contains("is-open"));
  }

  function openModal(id) {
    const herb = findHerb(id);
    if (!herb) return;
    document.getElementById("modal-title").textContent = herb.name;
    document.getElementById("modal-verse").textContent = herb.verse;
    document.getElementById("modal-verse-text").textContent = herb.verseText || "";
    document.getElementById("modal-uses").textContent = herb.traditionalUses;
    document.getElementById("modal-prep").textContent = herb.prepNote;
    const badge = document.getElementById("modal-badge");
    if (herb.icon && ICONS[herb.icon]) {
      badge.innerHTML = wreathHTML(herb.icon);
    } else {
      badge.innerHTML = `<div class="wreath"><div class="wreath-inner" style="font-size:2rem">${herb.emoji || "🌿"}</div></div>`;
    }
    backdrop.hidden = false;
    backdrop.classList.add("is-open");
    document.body.classList.add("modal-open");
    modalClose.focus();
  }

  function closeModal() {
    backdrop.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    setTimeout(() => {
      backdrop.hidden = true;
    }, 250);
  }

  function toggleCatalog() {
    const open = !catalogSection.classList.contains("is-open");
    catalogSection.classList.toggle("is-open", open);
    catalogSection.hidden = !open;
    revealCta.setAttribute("aria-expanded", String(open));
    revealCta.textContent = open
      ? "Hide the Full Biblical Pharmacy"
      : "Reveal the Full Biblical Pharmacy";
    if (open) {
      renderCatalog(searchInput.value);
      catalogSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  revealCta.addEventListener("click", toggleCatalog);
  modalClose.addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("is-open")) closeModal();
  });

  searchInput.addEventListener("input", () => {
    const q = searchInput.value;
    renderFeatured(q);
    if (catalogSection.classList.contains("is-open")) renderCatalog(q);
  });

  renderFeatured();
  renderCatalog();
})();
