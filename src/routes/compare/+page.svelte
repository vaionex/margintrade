<script>
	import { comparisons } from '$lib/data/comparisons.js';
	import { getExchange } from '$lib/data/exchanges.js';
</script>

<svelte:head>
	<title>Compare Margin Trading Exchanges — Head-to-Head Comparisons | MarginTrade</title>
	<meta name="description" content="Detailed head-to-head comparisons of the best margin trading platforms. Compare fees, leverage, features, and more to find your ideal exchange." />
	<link rel="canonical" href="https://www.margintrade.com/compare" />
</svelte:head>

<div class="container" style="padding-bottom: 4rem;">
	<nav class="breadcrumbs">
		<a href="/">Home</a> <span>/</span> <span>Compare</span>
	</nav>

	<h1>Compare Margin Trading Exchanges</h1>
	<p style="font-size: 1.1rem;">Detailed head-to-head comparisons to help you choose the right platform for your trading needs.</p>

	<div class="grid-2" style="margin-top: 2rem;">
		{#each comparisons as comp}
			{@const ex1 = getExchange(comp.exchange1)}
			{@const ex2 = getExchange(comp.exchange2)}
			<a href="/compare/{comp.slug}" class="card" style="text-decoration: none;">
				<div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 1rem;">
					<div style="text-align: center;">
						<div style="font-size: 1.25rem; font-weight: 700;">{ex1?.name || comp.exchange1}</div>
						<div style="font-size: 0.85rem; color: var(--text-muted);">{ex1?.rating}/5</div>
					</div>
					<div style="font-size: 1.5rem; color: var(--text-muted); font-weight: 700;">VS</div>
					<div style="text-align: center;">
						<div style="font-size: 1.25rem; font-weight: 700;">{ex2?.name || comp.exchange2}</div>
						<div style="font-size: 0.85rem; color: var(--text-muted);">{ex2?.rating}/5</div>
					</div>
				</div>
				<p style="font-size: 0.875rem; margin: 0; text-align: center; color: var(--text-muted);">{comp.metaDescription}</p>
			</a>
		{/each}
	</div>
</div>
