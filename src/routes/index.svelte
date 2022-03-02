<script lang="ts">
	import Component from './Component.svelte';
	function log() {
		console.log('loaded');
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Component on:load={log} />
