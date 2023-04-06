<script>
  import { signIn, signOut } from "@auth/sveltekit/client"
  import { page } from "$app/stores"
  import { trpc } from '$lib/trpc';

let greeting = 'press the button to load data';
let loading = true;
const data = trpc.greeting.query({ name: 'TrpcTest' });
data.subscribe(
  (data) => ((loading = data.isLoading), (greeting = data.data ?? ''))
);
</script>

<h1>SvelteKit Auth Example</h1>
<p>
  {loading}
<p>{greeting}</p>

  {#if $page.data.session}
    {#if $page.data.session.user?.image}
      <span
        style="background-image: url('{$page.data.session.user.image}')"
        class="avatar"
      />
    {/if}
    <span class="signedInText">
      <small>Signed in as</small><br />
      <strong>{$page.data.session.user?.name ?? "User"}</strong>
    </span>
    <button on:click={() => signOut()} class="button">Sign out</button>
  {:else}
    <span class="notSignedInText">You are not signed in</span>
    <button on:click={() => signIn("github")}>Sign In with GitHub</button>
  {/if}