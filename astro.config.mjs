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
		mermaid({ theme: "dark", autoTheme: true }),
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
							showTableOfContents: false,
							showFooter: false,
						},
						// Disabled by default; enable if you want it:
						keyboardShortcut: ["Ctrl+Shift+Z"],
						// exclude: ['some/glob/**'],
					},
				}),
			],
			title: "IEFA - CPAINT",
			defaultLocale: "pt-BR",
			customCss: ["./src/styles/custom.css"],
			components: {
				PageTitle: "./src/components/PageTitle.astro",
				PageFrame: "./src/components/PageFrame.astro",
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
					items: [
						{ label: "Visão Geral", link: "/cpaint/" },
						{ label: "PPC (ICA 38-758)", link: "/cpaint/ppc/" },
						{
							label: "Sistema de Códigos",
							link: "/cpaint/sistema-de-codigos/",
						},
					],
				},
				{
					label: "Previsão de Demanda",
					collapsed: false,
					items: [
						{ label: "Visão Geral", link: "/cpaint/previsao-demanda/" },
						{
							label: "Cronograma",
							link: "/cpaint/previsao-demanda/cronograma/",
						},
						{
							label: "Nível 100 - Introdutório",
							collapsed: false,
							items: [
								{
									label: "EXL101 - Excel e Dados",
									link: "/cpaint/previsao-demanda/exl101/",
								},
								{
									label: "STAT101 - Estatística",
									link: "/cpaint/previsao-demanda/stat101/",
								},
							],
						},
						{
							label: "Nível 200 - Intermediário",
							collapsed: false,
							items: [
								{
									label: "ANA201 - Análise de Dados",
									link: "/cpaint/previsao-demanda/ana201/",
								},
								{
									label: "FCST201 - Métodos de Previsão",
									link: "/cpaint/previsao-demanda/fcst201/",
								},
								{
									label: "LOG201 - Gestão de Estoque",
									link: "/cpaint/previsao-demanda/log201/",
								},
							],
						},
						{
							label: "Nível 300 - Avançado",
							collapsed: false,
							items: [
								{
									label: "OPT301 - Otimização",
									link: "/cpaint/previsao-demanda/opt301/",
								},
							],
						},
					],
				},
				{
					label: "Compras Públicas",
					link: "/cpaint/compras-publicas/",
				},
				{
					label: "Doutrina de Emprego",
					link: "/cpaint/doutrina/",
				},
				{
					label: "Estágio e Seminários",
					link: "/cpaint/estagio-e-seminarios/",
				},
				{
					label: "Ferramentas Operacionais",
					link: "/cpaint/ferramentas-operacionais/",
				},
				{
					label: "Gestão da Cadeia",
					link: "/cpaint/gestao-da-cadeia/",
				},
				{
					label: "Planejamento e Governança",
					link: "/cpaint/planejamento-e-governanca/",
				},
			],
		}),
	],
});
