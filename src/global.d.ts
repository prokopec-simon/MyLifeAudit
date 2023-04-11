/// <reference types="@sveltejs/kit" />

type Locales = import('../src/i18n/i18n-types').Locales;
type TranslationFunctions =
	import('../src/i18n/i18n-types').TranslationFunctions;

declare namespace App {
	interface Locals {
		locale: Locales;
		LL: TranslationFunctions;
	}
	interface Platform {
		env: {
			// KV: KVNamespace;
		};
		context: ExecutionContext;
	}

	// interface Locals {}
	// interface Error {}
	// interface Session {}
	// interface Stuff {}
}
