module.exports = {
  locales: ['es'],
  defaultLocale: 'es',
  pages: {
    '*': ['common', 'error'],
    '/items/[iid]': ['items']
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
};