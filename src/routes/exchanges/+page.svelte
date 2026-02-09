<script>
	import { exchanges, getCryptoExchanges, getTraditionalExchanges } from '$lib/data/exchanges.js';

	const crypto = getCryptoExchanges();
	const traditional = getTraditionalExchanges();

	function renderStars(r) {
		return '★'.repeat(Math.floor(r)) + (r % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.floor(r) - (r % 1 >= 0.5 ? 1 : 0));
	}
</script>

<svelte:head>
	<title>Best Margin Trading Exchanges & Brokers 2026 | MarginTrade</title>
	<meta name="description" content="Compare all major margin trading exchanges and brokers. Find the best platform for crypto, stock, and forex margin trading with our expert reviews." />
	<link rel="canonical" href="https://www.margintrade.com/exchanges" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.margintrade.com" },
			{ "@type": "ListItem", "position": 2, "name": "Exchanges", "item": "https://www.margintrade.com/exchanges" }
		]
	})}</script>`}
</svelte:head>

<div class="container">
	<nav class="breadcrumbs">
		<a href="/">Home</a> <span>/</span> <span>Exchanges</span>
	</nav>

	<h1>Best Margin Trading Exchanges & Brokers 2026</h1>
	<p style="font-size: 1.1rem; max-width: 700px;">Compare the top platforms for leveraged trading across crypto and traditional markets. All exchanges are reviewed and rated by our expert team.</p>

	<div style="display: flex; gap: 1rem; margin: 2rem 0;">
		<a href="/exchanges" class="btn btn-primary" style="font-size: 0.85rem;">All Exchanges</a>
		<a href="/exchanges/crypto" class="btn btn-outline" style="font-size: 0.85rem;">Crypto Only</a>
		<a href="/exchanges/traditional" class="btn btn-outline" style="font-size: 0.85rem;">Traditional Only</a>
	</div>

	<h2>Crypto Margin Trading Exchanges</h2>
	<div class="grid-2">
		{#each crypto as ex}
			<a href="/exchanges/{ex.slug}" class="card" style="text-decoration: none;">
				<div class="exchange-card-header">
					<h3 style="margin: 0;">{ex.name}</h3>
					<span class="badge badge-green">{ex.rating}/5</span>
				</div>
				<div class="exchange-meta">
					<span>Leverage: <strong>{ex.maxLeverage}x</strong></span>
					<span>Fees: <strong>{ex.makerFee}%/{ex.takerFee}%</strong></span>
					<span>Pairs: <strong>{ex.tradingPairs}+</strong></span>
				</div>
				<p style="font-size: 0.875rem; margin: 0.5rem 0;">{ex.description.slice(0, 120)}...</p>
				<span class="btn btn-primary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; margin-top: 0.5rem;">Read Review →</span>
			</a>
		{/each}
	</div>

	<h2>Traditional Margin Trading Brokers</h2>
	<div class="grid-2">
		{#each traditional as ex}
			<a href="/exchanges/{ex.slug}" class="card" style="text-decoration: none;">
				<div class="exchange-card-header">
					<h3 style="margin: 0;">{ex.name}</h3>
					<span class="badge badge-blue">{ex.rating}/5</span>
				</div>
				<div class="exchange-meta">
					<span>Leverage: <strong>{ex.maxLeverage}x</strong></span>
					<span>Products: <strong>{ex.tradingProducts?.split(',').length || 'Multiple'}</strong></span>
				</div>
				<p style="font-size: 0.875rem; margin: 0.5rem 0;">{ex.description.slice(0, 120)}...</p>
				<span class="btn btn-primary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; margin-top: 0.5rem;">Read Review →</span>
			</a>
		{/each}
	</div>
</div>
