// @ts-check

import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import mermaid from "astro-mermaid";
import starlightThemeBlack from "starlight-theme-black";
import starlightViewModes from "starlight-view-modes";

// https://astro.build/config
export default defineConfig({
	site: "https://cpaint.iefa.com.br",
	integrations: [
		mermaid({ theme: "dark" }),
		starlight({
			plugins: [
				starlightThemeBlack({
					navLinks: [
						{
							label: "CPAINT",
							link: "/cpaint/",
						},
					],
					footerText: "IEFA - CPAINT",
				}),
				starlightViewModes({
					zenModeSettings: {
						enabled: true,
						// Defaults shown in the plugin docs; tweak as desired:
						displayOptions: {
							showHeader: false,
							showSidebar: false,
							showTableOfContents: true,
							showFooter: true,
						},
						// Disabled by default; enable if you want it:
						keyboardShortcut: ["Ctrl+Shift+Z"],
						// exclude: ['some/glob/**'],
					},
				}),
			],
			title: "IEFA - CPAINT",
			customCss: ["./src/styles/custom.css"],
			components: {
				PageTitle: "./src/components/PageTitle.astro",
			},
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/userNanni/iefa-classes",
				},
			],
			sidebar: [
				{
					label: "CPAINT",
					autogenerate: { directory: "cpaint" },
				},
			],
		}),
	],
});
