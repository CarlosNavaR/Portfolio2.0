/** @type {import('next').NextConfig} */

module.exports = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    localeDetection: false,
  },
  trailingSlash: true,
  env: {
    IMAGE_SANITY_URL: process.env.IMAGE_SANITY_URL,
    APP_EMAIL: process.env.APP_EMAIL,
    APP_LINK_CV: process.env.APP_LINK_CV,
  }
};
