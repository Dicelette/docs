module.exports = {
	plugins: {
	  tailwindcss: {
		content: ["./src/**/*.{js,jsx,ts,tsx}", "./build/**/*.{js, jsx, ts, tsx}"],
		corePlugins: {
			preflight: false,
		},
	  },
	  autoprefixer: {},
	},
  }