<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const onIncrement = () => {
		confirm('TODO increment');
	};
</script>

<svelte:head>
	<title>TODO</title>
</svelte:head>

<div>
	<div class="grid grid-cols-3 gap-2">
		{#each data.todos as { name, count }}
			<div class="bg-amber-100 mt-2">
				<p class="font-bold">{name}</p>
				回数: {count}
				<button class="btn btn-blue" on:click={onIncrement}>+1</button>
				<button>edit</button>
			</div>
		{/each}
	</div>
</div>

<style>
	.btn {
		@apply py-1 px-2 rounded;
	}
	.btn-blue {
		@apply bg-blue-500 text-white;
	}
	.btn-blue:hover {
		@apply bg-blue-700;
	}
</style>
