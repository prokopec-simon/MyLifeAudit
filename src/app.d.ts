/// <reference types="@sveltejs/kit" />
/// <reference types="@cloudflare/workers-types" />
/// <reference types="unplugin-icons/types/svelte" />

declare namespace App {
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
