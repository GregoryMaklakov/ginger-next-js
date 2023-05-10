/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://ginger-beauty-zone.com",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
};
