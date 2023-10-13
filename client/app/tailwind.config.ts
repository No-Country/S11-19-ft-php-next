import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				Poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				navbar: "#683B11",
				"button-primary": "#104938",
				"button-secondary": "#DCBE98",
				background: "#E3F3F0",
				text: "#61B78E",
				"text-button": "",
			},
		},
	},
	plugins: [],
};
export default config;
