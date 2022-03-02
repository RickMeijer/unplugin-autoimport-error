<script lang="ts">
	let dispatch = createEventDispatcher();
	onMount(() => {
		dispatch('load');
	});
</script>
