/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [
		createThemes({
			light: {
				primary: 'steelblue',
				secondary: 'darkblue',
				brand: '#F3F3F3',
			},
			custom_pink: {
				primary: 'turquoise',
				secondary: 'tomato',
				brand: '#4A4A4A',
				t:'red'
			},
			forest: {
				primary: '#2A9D8F',
				secondary: '#E9C46A',
				brand: '#264653',
			},
		}),
	],
};
