/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://yourdomain.com", // Replace with your actual URL
  generateRobotsTxt: true,           // Generate robots.txt as well
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
};

module.exports = config;
