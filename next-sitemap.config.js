module.exports = {
	siteUrl: "https://olatomasiewicz.pl",
	generateRobotsTxt: true,
	sitemapSize: 7000,
	changefreq: "daily",
	priority: 0.7,
	exclude: ["/polityka-prywatnosci"],
	robotsTxtOptions: {
		policies: [
			{ userAgent: "*", allow: "/" },
			{ userAgent: "*", disallow: "/strona-wylaczona" },
		],
	},
};
