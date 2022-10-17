const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./docs/**/*.html'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		colors: {
			dark: '#232429',
			blue: '#00a6ec',
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
		},
		extend: {
			fontFamily: {
				sans: ['Raleway', ...defaultTheme.fontFamily.sans],
			},
		},
	},
}
