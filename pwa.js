/**
 * Biblical Pharmacy — PWA helpers
 * Registers SW under GitHub Pages base /biblical-pharmacy/ when needed.
 */
(function () {
  "use strict";

  var DISMISS_KEY = "bp-pwa-tip-dismissed";
  var deferredPrompt = null;

  function detectBase() {
    var path = location.pathname || "/";
    if (path.indexOf("/biblical-pharmacy") !== -1) {
      return "/biblical-pharmacy/";
    }
    return "/";
  }

  function registerSW() {
    if (!("serviceWorker" in navigator)) return;
    var base = detectBase();
    var swUrl = base + "sw.js";
    navigator.serviceWorker
      .register(swUrl, { scope: base })
      .then(function (reg) {
        if (reg && reg.update) {
          try {
            reg.update();
          } catch (e) {}
        }
      })
      .catch(function (err) {
        console.warn("[bp-pwa] SW register failed", err);
      });
  }

  function t(key, fallback) {
    if (typeof window.bpT === "function") {
      try {
        var v = window.bpT(key);
        if (v && v !== key) return v;
      } catch (e) {}
    }
    return fallback || key;
  }

  function applyTipI18n(root) {
    if (!root) return;
    root.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.textContent = t(key, el.textContent);
    });
    root.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      el.innerHTML = t(key, el.innerHTML);
    });
  }

  function isStandalone() {
    return (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true
    );
  }

  function wasDismissed() {
    try {
      return localStorage.getItem(DISMISS_KEY) === "1";
    } catch (e) {
      return false;
    }
  }

  function setDismissed() {
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch (e) {}
  }

  function findAnchor() {
    return (
      document.querySelector(".buy-cta") ||
      document.querySelector("footer.site-footer") ||
      document.body
    );
  }

  function ensureTip() {
    if (isStandalone() || wasDismissed()) return null;
    var existing = document.getElementById("pwa-tip");
    if (existing) return existing;

    var tip = document.createElement("aside");
    tip.id = "pwa-tip";
    tip.className = "pwa-tip";
    tip.setAttribute("role", "note");
    tip.innerHTML =
      '<p class="pwa-tip-text" data-i18n-html="pwaTip"></p>' +
      '<div class="pwa-tip-actions">' +
      '<button type="button" class="pwa-install-btn" id="pwa-install-btn" hidden data-i18n="pwaInstall">Install app</button>' +
      '<button type="button" class="pwa-tip-dismiss" id="pwa-tip-dismiss" data-i18n="pwaTipDismiss">Got it</button>' +
      "</div>";

    var anchor = findAnchor();
    if (anchor && anchor.classList && anchor.classList.contains("buy-cta")) {
      anchor.insertAdjacentElement("afterend", tip);
    } else if (anchor && anchor.tagName === "FOOTER") {
      anchor.insertAdjacentElement("beforebegin", tip);
    } else {
      document.body.appendChild(tip);
    }

    applyTipI18n(tip);

    var dismiss = tip.querySelector("#pwa-tip-dismiss");
    if (dismiss) {
      dismiss.addEventListener("click", function () {
        setDismissed();
        tip.hidden = true;
        tip.remove();
      });
    }

    var installBtn = tip.querySelector("#pwa-install-btn");
    if (installBtn) {
      installBtn.addEventListener("click", function () {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        deferredPrompt.userChoice.finally(function () {
          deferredPrompt = null;
          installBtn.hidden = true;
        });
      });
    }

    return tip;
  }

  function showInstallButton() {
    var btn = document.getElementById("pwa-install-btn");
    var tip = document.getElementById("pwa-tip") || ensureTip();
    if (btn) {
      btn.hidden = false;
      applyTipI18n(tip || btn.parentElement);
    }
  }

  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferredPrompt = e;
    if (!wasDismissed() && !isStandalone()) {
      showInstallButton();
    }
  });

  window.addEventListener("appinstalled", function () {
    deferredPrompt = null;
    setDismissed();
    var tip = document.getElementById("pwa-tip");
    if (tip) tip.remove();
  });

  // Re-apply tip strings when language changes
  var _origApply = window.bpApplyPageI18n;
  if (typeof _origApply === "function") {
    window.bpApplyPageI18n = function () {
      _origApply.apply(this, arguments);
      applyTipI18n(document.getElementById("pwa-tip"));
    };
  } else {
    // Wrap later if i18n loads after pwa.js — poll once on DOM ready
    document.addEventListener("DOMContentLoaded", function () {
      if (typeof window.bpApplyPageI18n === "function" && !window.bpApplyPageI18n._bpPwaWrapped) {
        var orig = window.bpApplyPageI18n;
        window.bpApplyPageI18n = function () {
          orig.apply(this, arguments);
          applyTipI18n(document.getElementById("pwa-tip"));
        };
        window.bpApplyPageI18n._bpPwaWrapped = true;
      }
      applyTipI18n(document.getElementById("pwa-tip"));
    });
  }

  function boot() {
    registerSW();
    ensureTip();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
