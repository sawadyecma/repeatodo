<script>
	let todos = [...new Array(10)].map((_, index) => {
		const rangeStart = 1 + index * 100;
		const rangeEnd = rangeStart + 100 - 1;
		return { id: index, name: `XXX単語帳の${rangeStart}~${rangeEnd}`, count: index + 3 };
	});
</script>

<svelte:head>
	<title>TODO</title>
</svelte:head>

<div>
	TODO Page
	<div class="row">
		{#each todos as { name, count }}
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
