import type * as Preset from "@docusaurus/preset-classic";
import type {Config} from "@docusaurus/types";
import {themes as prismThemes} from "prism-react-renderer";

const config: Config = {
	title: "Dicelette",
	tagline: "Un bot discord qui lance des dés dans des fils... Et bien plus !",
	favicon: "img/dicelette.png",

	// Set the production url of your site here
	url: "https://dicelette.github.io/",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "Dicelette", // Usually your GitHub org/user name.
	projectName: "dicelette.github.io", // Usually your repo name.
	trailingSlash: false,
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "fr",
		locales: ["en", "fr"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/Dicelette/docs/tree/main/docs/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "Dicelette",
			logo: {
				alt: "Dicelette logo",
				src: "img/dicelette.png",
			},
			items: [
				{
					type: "docSidebar",
					position: "left",
					sidebarId: "introduction",
					label: "Introduction",
				},
				{
					type: "docSidebar",
					position: "left",
					sidebarId: "model",
					label: "Fiches",
				},
				{
					href: "https://github.com/dicelette/docs",
					label: "GitHub",
					position: "right",
				},
				{
					href: "https://dice-roller.github.io/documentation/guide/notation/",
					label: "Dés et notation",
					position: "right",
				},
				{
					type: "localeDropdown",
					position: "right",
				},
				{
					type: "search",
					position: "right",
				}
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Liens",
					items: [
						{
							label: "GitHub",
							href: "https://github.com/Dicelette/discord-dicelette",
						},
						{
							label: "Invitation",
							href: "https://discord.com/oauth2/authorize?client_id=839830334315141120&permissions=8&scope=bot",
						}
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Dicelette, Inc. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
