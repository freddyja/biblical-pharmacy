/**
 * Per-language plant monograph bodies.
 * window.HERB_LOCALES = { es: { [id]: { ...fields } }, pt: { ... } }
 * Filled by locale chunk files (herb-locales-es-*.js / herb-locales-pt-*.js).
 */
window.HERB_LOCALES = window.HERB_LOCALES || { es: {}, pt: {} };

window.localizeHerb = function localizeHerb(herb) {
  if (!herb) return herb;
  const lang = window.bpLang || "en";
  if (lang === "en" || !window.HERB_LOCALES || !window.HERB_LOCALES[lang]) return herb;
  const loc = window.HERB_LOCALES[lang][herb.id];
  if (!loc) return herb;
  return Object.assign({}, herb, loc);
};
