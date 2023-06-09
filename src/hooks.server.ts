import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import type { Provider } from '@auth/core/providers';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { Adapter } from '@auth/core/adapters';
import { prisma } from './lib/server/prisma';
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';
import { loadAllLocales } from '$i18n/i18n-util.sync';
import { detectLocale, i18n, isLocale } from '$i18n/i18n-util';
import type { Handle, RequestEvent } from '@sveltejs/kit';

loadAllLocales();
const L = i18n();

export const handle: Handle = async ({ event, resolve }) => {
	// Authentication logic
	const authHandle = SvelteKitAuth({
		adapter: PrismaAdapter(prisma) as Adapter,
		session: {
			strategy: 'database',
			generateSessionToken: () => {
				return crypto.randomUUID();
			},
		},
		providers: [
			GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
		] as Provider[],
	});

	// read language slug
	const [, lang] = event.url.pathname.split('/');

	// redirect to base locale if no locale slug was found
	if (!lang) {
		const locale = getPreferredLocale(event);

		return new Response(null, {
			status: 302,
			headers: { Location: `/${locale}` },
		});
	}

	// if slug is not a locale, use base locale (e.g. api endpoints)
	const locale = isLocale(lang) ? (lang as Locales) : getPreferredLocale(event);
	const LL = L[locale];

	// bind locale and translation functions to current request
	event.locals.locale = locale;
	event.locals.LL = LL;

	// replace html lang attribute with correct language
	await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', locale),
	});

	return authHandle({ event, resolve });
};

const getPreferredLocale = ({ request }: RequestEvent) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request);

	return detectLocale(acceptLanguageDetector);
};

export const authHandle = SvelteKitAuth({
	adapter: PrismaAdapter(prisma) as Adapter,
	session: {
		strategy: 'database',
		generateSessionToken: () => {
			return crypto.randomUUID();
		},
	},
	providers: [
		GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
	] as Provider[],
});
