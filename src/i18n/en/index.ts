import type { BaseTranslation } from '../i18n-types';

const en: BaseTranslation = {
	title: 'typesafe-i18n - Svelte Fall Summit {year:number}',
	welcome: 'Welcome to Svelte Fall Summit {year:number}',
	spectators: '{0} live spectator{{s}}',
	NAV_ABOUT: 'About',
	NAV_CONTACT: 'Contact',
	NAV_RESOURCES: 'Sources',
	NAV_JOIN_US: 'Join us',
	summit: {
		schedule: '{0:Date|simpleDate}',
	},
	log: `This log was called from '{fileName:string}'`,
};

export default en;
