module.exports = {
	siteUrl: "https://olatomasiewicz.pl",
	generateRobotsTxt: true,
	sitemapSize: 7000,
	changefreq: "daily",
	exclude: ["/polityka-prywatnosci"],
	robotsTxtOptions: {
		policies: [
			{ userAgent: "*", allow: "/" },
			{ userAgent: "*", disallow: "/polityka-prywatnosci" },
		],
	},
	transform: async (config, path) => {
		const priority = path === "/" ? 1 : 0.7;
		return {
			loc: path,
			changefreq: config.changefreq,
			priority: priority,
			lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
		};
	},
};
