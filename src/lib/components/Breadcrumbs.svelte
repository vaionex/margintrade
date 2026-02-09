<script>
	let { items = [] } = $props();
</script>

<nav class="breadcrumbs" aria-label="Breadcrumb">
	<a href="/">Home</a>
	{#each items as item, i}
		<span>›</span>
		{#if i < items.length - 1}
			<a href={item.href}>{item.label}</a>
		{:else}
			<span style="color: var(--text-secondary);">{item.label}</span>
		{/if}
	{/each}
</nav>
