import {
	defineConfig,
	presetAttributify,
	presetUno,
	presetWind,
	transformerVariantGroup,
} from "unocss";
import { presetForms } from "@julr/unocss-preset-forms";

export default defineConfig({
	presets: [
		presetAttributify({
			/* preset options */
		}),
		presetUno({
			dark: "class",
		}),
		presetWind({
			dark: "class",
		}),
		presetForms(), // Add preflights and new rules likes `.form-input`
	],
	transformers: [transformerVariantGroup()],
	theme: {
		breakpoints: {
			xs: "614px",
			sm: "1002px",
			md: "1022px",
			lg: "1092px",
			xl: "1280px",
		},
		colors: {
			dim: {
				50: "#5F99F7",
				100: "#5F99F7",
				200: "#38444d",
				300: "#202e3a",
				400: "#253341",
				500: "#5F99F7",
				600: "#5F99F7",
				700: "#192734",
				800: "#162d40",
				900: "#15202b",
			},
		},
	},
	// rules: [
	// 	[
	// 		/text-(red|green|blue)-(100|400)/,
	// 		([, c], { theme }) => {
	// 			return "group-hover";
	// 		},
	// 	],
	// 	[
	// 		/bg-(red|green|blue)-(100|400)/,
	// 		([, c], { theme }) => {
	// 			return "group-hover";
	// 		},
	// 	],
	// ],
});
