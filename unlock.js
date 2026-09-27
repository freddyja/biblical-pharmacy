/**
 * Biblical Pharmacy — library unlock (client-side redeem codes)
 * FREE: sample herbs only. PAID: Etsy purchase → unlock code → full library in PWA.
 * No server-side Etsy receipt verification.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "bp-library-unlocked";
  // Also honor older offline key if present
  var LEGACY_KEY = "bp-offline-unlocked";

  // SHA-256 hex digests of uppercase redeem codes (plaintext only in private workspace report)
  var CODE_HASHES = {
    "df39c5565b3399e1caa9005bbb844f3e6700169d95c514808760124f4968942d": 1,
    "aba94201c759dd5b562257b7476c4fb5f7b028a612b0272293b6d4e94b3814b6": 1,
    "9a9164fe5bcb7bd29fe474ed706f5f92699e85bfa3e6f89a4aa39f3773fe19b6": 1,
    "9894d57efae954690c5918ecc46da019d3b7849519b8aab64ebf456e32d52033": 1,
    "d94bc45dad2266d69f3acc3852e799756d694a1cbf03604cfa589586d8aca62f": 1,
    "ffc3564950fd2faed91672cfd6be1b6f71d3101ad53a1e0de92973e580b2ceb5": 1,
    "bc7f753aedf3a5c00a21d1386a5acef5f18d5fc22c6fa761437596c7ef29d360": 1,
    "af8ecdd27272dc90672e729d5d8c15d241a2e26cf10b5688676f056e84e6d025": 1
  };

  var ETSY_LISTING =
    "https://www.etsy.com/listing/4582102485/biblical-pharmacy-educational-herb";
  var ETSY_PURCHASES = "https://www.etsy.com/your/purchases";

  function t(key, fallback) {
    if (typeof window.bpT === "function") {
      try {
        var v = window.bpT(key);
        if (v && v !== key) return v;
      } catch (e) {}
    }
    return fallback || key;
  }

  function normalizeCode(code) {
    return String(code || "")
      .trim()
      .toUpperCase()
      .replace(/\s+/g, "");
  }

  function sha256hex(str) {
    if (!window.crypto || !window.crypto.subtle) {
      return Promise.reject(new Error("crypto"));
    }
    var data = new TextEncoder().encode(str);
    return window.crypto.subtle.digest("SHA-256", data).then(function (buf) {
      return Array.prototype.map
        .call(new Uint8Array(buf), function (b) {
          return ("0" + b.toString(16)).slice(-2);
        })
        .join("");
    });
  }

  function readUnlocked() {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") return true;
      if (localStorage.getItem(LEGACY_KEY) === "1") {
        localStorage.setItem(STORAGE_KEY, "1");
        return true;
      }
    } catch (e) {}
    return false;
  }

  function writeUnlocked(on) {
    try {
      if (on) {
        localStorage.setItem(STORAGE_KEY, "1");
        localStorage.setItem(LEGACY_KEY, "1");
      } else {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(LEGACY_KEY);
      }
    } catch (e) {}
  }

  window.bpIsUnlocked = function bpIsUnlocked() {
    return readUnlocked();
  };

  window.bpSetUnlocked = function bpSetUnlocked(on) {
    writeUnlocked(!!on);
    document.documentElement.classList.toggle("bp-unlocked", !!on);
    document.documentElement.classList.toggle("bp-locked", !on);
    try {
      window.dispatchEvent(
        new CustomEvent("bp-unlock-changed", { detail: { unlocked: !!on } })
      );
    } catch (e) {}
    applyAllUnlockUI();
  };

  window.bpRedeemCode = function bpRedeemCode(raw) {
    var code = normalizeCode(raw);
    if (!code) {
      return Promise.resolve({ ok: false, reason: "empty" });
    }
    return sha256hex(code)
      .then(function (hex) {
        if (CODE_HASHES[hex]) {
          window.bpSetUnlocked(true);
          return { ok: true };
        }
        return { ok: false, reason: "invalid" };
      })
      .catch(function () {
        return { ok: false, reason: "crypto" };
      });
  };

  function ensurePanel(aside) {
    if (!aside) return null;
    var existing = aside.querySelector(".unlock-panel");
    if (existing) return existing;

    var panel = document.createElement("div");
    panel.className = "unlock-panel";
    panel.innerHTML =
      '<div class="unlock-locked">' +
      '<p class="unlock-title" data-i18n="unlockTitle">Unlock the full library</p>' +
      '<p class="unlock-lead" data-i18n="unlockLead">Buy on Etsy ($9.99), then enter the unlock code from your download.</p>' +
      '<div class="unlock-actions">' +
      '<a class="buy-cta-btn unlock-buy" href="' +
      ETSY_LISTING +
      '" target="_blank" rel="noopener noreferrer" data-i18n="unlockBuy">Buy on Etsy — $9.99</a>' +
      "</div>" +
      '<label class="unlock-label" for="bp-unlock-code" data-i18n="unlockCodeLabel">I have a code</label>' +
      '<div class="unlock-redeem-row">' +
      '<input id="bp-unlock-code" class="unlock-input" type="text" autocomplete="off" spellcheck="false" placeholder="BP-OLIVE-XXXX" data-i18n-placeholder="unlockCodePlaceholder" />' +
      '<button type="button" class="unlock-redeem-btn" data-i18n="unlockRedeem">Unlock</button>' +
      "</div>" +
      '<p class="unlock-msg" hidden></p>' +
      "</div>" +
      '<div class="unlock-unlocked" hidden>' +
      '<p class="unlock-badge" data-i18n="unlockBadge">Full library unlocked</p>' +
      '<p class="unlock-unlocked-lead" data-i18n="unlockUnlockedLead">All 226 plants, vitamins, and recipes are available in this app. Offline browse works after pages are cached.</p>' +
      '<a class="unlock-etsy-dl" href="' +
      ETSY_PURCHASES +
      '" target="_blank" rel="noopener noreferrer" data-i18n="unlockEtsyDownloads">Re-download ZIP from Etsy Purchases</a>' +
      "</div>";

    // Prefer inserting after buy button / note
    aside.appendChild(panel);
    return panel;
  }

  function applyI18n(root) {
    if (!root) return;
    root.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"), el.textContent);
    });
    root.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute(
        "placeholder",
        t(el.getAttribute("data-i18n-placeholder"), el.getAttribute("placeholder"))
      );
    });
  }

  function bindPanel(panel) {
    if (!panel || panel.dataset.bound === "1") return;
    panel.dataset.bound = "1";
    var btn = panel.querySelector(".unlock-redeem-btn");
    var input = panel.querySelector(".unlock-input");
    var msg = panel.querySelector(".unlock-msg");
    if (btn && input) {
      function doRedeem() {
        if (msg) {
          msg.hidden = true;
          msg.textContent = "";
          msg.className = "unlock-msg";
        }
        btn.disabled = true;
        window.bpRedeemCode(input.value).then(function (res) {
          btn.disabled = false;
          if (res.ok) {
            if (msg) {
              msg.hidden = false;
              msg.className = "unlock-msg is-ok";
              msg.textContent = t("unlockSuccess", "Unlocked — enjoy the full library.");
            }
            input.value = "";
          } else {
            if (msg) {
              msg.hidden = false;
              msg.className = "unlock-msg is-err";
              msg.textContent = t(
                "unlockInvalid",
                "That code didn’t work. Check your Etsy download and try again."
              );
            }
          }
        });
      }
      btn.addEventListener("click", doRedeem);
      input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          doRedeem();
        }
      });
    }
  }

  function syncPanelState(panel, unlocked) {
    if (!panel) return;
    var locked = panel.querySelector(".unlock-locked");
    var free = panel.querySelector(".unlock-unlocked");
    if (locked) locked.hidden = !!unlocked;
    if (free) free.hidden = !unlocked;
    applyI18n(panel);
  }

  function syncPageChrome(unlocked) {
    document.documentElement.classList.toggle("bp-unlocked", !!unlocked);
    document.documentElement.classList.toggle("bp-locked", !unlocked);

    document.querySelectorAll(".sample-badge").forEach(function (el) {
      el.hidden = !!unlocked;
    });

    // Index: reveal + A–Z only when unlocked
    var reveal = document.getElementById("reveal-cta");
    if (reveal) {
      reveal.hidden = !unlocked;
      reveal.setAttribute("aria-hidden", unlocked ? "false" : "true");
    }
    document.querySelectorAll(".az-hint, #az-index").forEach(function (el) {
      if (!unlocked) {
        el.hidden = true;
        el.setAttribute("aria-hidden", "true");
      } else {
        el.hidden = false;
        el.removeAttribute("aria-hidden");
      }
    });

    // Catalog title/lead keys swap via data attributes if present
    var title = document.getElementById("catalog-title");
    if (title) {
      title.setAttribute("data-i18n", unlocked ? "catalogTitleUnlocked" : "catalogTitle");
    }
    var lead = document.querySelector("#full-catalog .catalog-lead");
    if (lead) {
      lead.setAttribute("data-i18n", unlocked ? "catalogLeadUnlocked" : "catalogLead");
    }

    // Vitamins / recipes full entries
    var entries = document.querySelectorAll("details.ref-entry");
    var paywall = document.getElementById("bp-ref-paywall");
    if (entries.length) {
      entries.forEach(function (el) {
        el.hidden = !unlocked;
        if (!unlocked) el.open = false;
      });
      if (paywall) paywall.hidden = !!unlocked;
      var jump = document.querySelector(".ref-jump, #jump-entries, nav.ref-toc");
      if (jump) jump.hidden = !unlocked;
    }
  }

  function ensureRefPaywall() {
    if (!document.querySelector("details.ref-entry")) return;
    // Existing #buy-cta already hosts the unlock panel — don't add a second pitch
    if (document.querySelector(".buy-cta")) return;
    if (document.getElementById("bp-ref-paywall")) return;
    var main = document.querySelector("main") || document.body;
    var box = document.createElement("aside");
    box.id = "bp-ref-paywall";
    box.className = "buy-cta bp-ref-paywall";
    box.setAttribute("aria-label", "Unlock full library");
    box.innerHTML =
      '<p class="buy-cta-lead" data-i18n="paywallLead">Full vitamins &amp; recipes unlock with your Etsy code — same purchase as the plant library.</p>';
    // insert near top of main after lead/note if possible
    var anchor =
      main.querySelector(".ref-note") ||
      main.querySelector("h1") ||
      main.firstElementChild;
    if (anchor && anchor.parentNode) {
      anchor.insertAdjacentElement("afterend", box);
    } else {
      main.insertBefore(box, main.firstChild);
    }
  }

  function applyAllUnlockUI() {
    var unlocked = readUnlocked();
    ensureRefPaywall();
    document.querySelectorAll(".buy-cta").forEach(function (aside) {
      var panel = ensurePanel(aside);
      bindPanel(panel);
      syncPanelState(panel, unlocked);
      // Soft-hide primary buy lead duplication when unlocked
      var lead = aside.querySelector(".buy-cta-lead");
      var btn = aside.querySelector(":scope > .buy-cta-btn");
      var note = aside.querySelector(":scope > .buy-cta-note");
      if (unlocked) {
        if (lead) lead.hidden = true;
        if (btn) btn.hidden = true;
        if (note) note.hidden = true;
      } else {
        if (lead) lead.hidden = false;
        if (btn) btn.hidden = false;
        if (note) note.hidden = false;
      }
    });
    syncPageChrome(unlocked);
    if (typeof window.bpApplyPageI18n === "function") {
      try {
        window.bpApplyPageI18n();
      } catch (e) {}
    } else {
      document.querySelectorAll(".unlock-panel, #bp-ref-paywall, .sample-badge").forEach(applyI18n);
    }
  }

  // Wrap i18n apply so unlock strings stay fresh
  function wrapI18n() {
    if (typeof window.bpApplyPageI18n !== "function") return;
    if (window.bpApplyPageI18n._bpUnlockWrapped) return;
    var orig = window.bpApplyPageI18n;
    window.bpApplyPageI18n = function () {
      orig.apply(this, arguments);
      document.querySelectorAll(".unlock-panel, #bp-ref-paywall").forEach(applyI18n);
      syncPageChrome(readUnlocked());
    };
    window.bpApplyPageI18n._bpUnlockWrapped = true;
  }

  function boot() {
    wrapI18n();
    applyAllUnlockUI();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  // Late i18n wrap
  setTimeout(wrapI18n, 0);
  setTimeout(wrapI18n, 500);
})();
