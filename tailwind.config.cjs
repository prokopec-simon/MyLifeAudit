/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundColor: {
				primary: '#007bff', // blue
				secondary: '#6c757d', // gray
				accent: '#ffc107', // yellow
			},
		},
	},
	plugins: [],
};
