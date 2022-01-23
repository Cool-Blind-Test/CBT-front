module.exports = {
  locales: ["fr", "en"],
  defaultLocale: "fr",
  pages: {
    "*": ["common"],
    "/": ["home"],
    "/signup": ["signUp"],
    "rgx:^/more-examples": ["more-examples"],
  },
  interpolation: {
    prefix: "${",
    suffix: "}",
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
};
