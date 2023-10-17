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
				primary: "#104938",
				secondary: "#61B78E",
				"marron-claro": "#DCBE98",
				"marron-oscuro": "#683B11",
				background: "#E3F3F0",
			},
		},
	},
	plugins: [],
};
export default config;
