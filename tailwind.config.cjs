/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');
import { colors } from './src/colorThemes';

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [createThemes(colors)],
};
