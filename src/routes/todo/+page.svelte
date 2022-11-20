<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>TODO</title>
</svelte:head>

<div>
	TODO Page
	<div class="row">
		{#each data.todos as { name, count }}
			<div class="card">
				<h3>{name}</h3>
				<div>count: {count}</div>
				<button>+</button>
				<button>edit</button>
			</div>
		{/each}
	</div>
</div>

<style>
	.card {
		min-width: 400px;
		min-height: 100px;
		background-color: aliceblue;
	}
</style>
