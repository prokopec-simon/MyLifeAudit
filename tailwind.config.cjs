/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');
import { colors } from './src/colorThemes';

console.log(colors);
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [createThemes(colors)],
};
