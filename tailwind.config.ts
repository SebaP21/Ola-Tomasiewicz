import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				light: "var(--light-color)",
				dark: "var(--dark-color)",
				accent: "var(--accent-color)",
				text: "var(--text-color)",
			},
			fontFamily: {
				oswald: ["Oswald", "sans-serif"],
				didact: ["Didact Gothic", "sans-serif"],
			},
			keyframes: {
				"fade-left": {
					"0%": { opacity: "0", transform: "translateX(100%)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				"fade-right": {
					"0%": { opacity: "0", transform: "translateX(-200%)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				"fade-up": {
					"0%": { opacity: "0", transform: "translateY(100%)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-down": {
					"0%": { opacity: "0", transform: "translateY(-100%)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"scale-in-center": {
					"0%": { scale: "0", opacity: "0" },
					"100%": { scale: "1", opacity: "1" },
				},
				scale: {
					"0%": { transform: "scale(1)" },
					"100%": { transform: "scale(1.05)" },
				},
			},
			animation: {
				"fade-left": "fade-left 0.5s ease-out",
				"fade-right": "fade-right 1s ease-out",
				"fade-up": "fade-up 0.5s ease-out",
				"fade-down": "fade-down 0.5s ease-out",
				"scale-in-center": "scale-in-center 0.3s ease-out",
				"scale-up": "scale 0.5s ease-in-out forwards",
			},
		},
	},
	plugins: [],
};
export default config;
