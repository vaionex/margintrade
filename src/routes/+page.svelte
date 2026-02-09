<script>
	import { exchanges, getCryptoExchanges, getTraditionalExchanges } from '$lib/data/exchanges.js';
	import { comparisons } from '$lib/data/comparisons.js';
	import { guides } from '$lib/data/guides.js';

	const cryptoExchanges = getCryptoExchanges().slice(0, 6);
	const topGuides = guides.slice(0, 4);

	function renderStars(rating) {
		const full = Math.floor(rating);
		const half = rating % 1 >= 0.5 ? 1 : 0;
		return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
	}
</script>

<svelte:head>
	<title>MarginTrade — Best Margin Trading Platforms & Guides 2026</title>
	<meta name="description" content="Compare the best margin trading platforms for crypto, stocks, and forex. Expert reviews, educational guides, and exclusive referral bonuses." />
	<link rel="canonical" href="https://www.margintrade.com" />
	<meta property="og:title" content="MarginTrade — Best Margin Trading Platforms & Guides 2026" />
	<meta property="og:description" content="Compare the best margin trading platforms for crypto, stocks, and forex." />
	<meta property="og:url" content="https://www.margintrade.com" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "MarginTrade",
		"url": "https://www.margintrade.com",
		"description": "Compare the best margin trading platforms for crypto, stocks, and forex.",
		"potentialAction": {
			"@type": "SearchAction",
			"target": "https://www.margintrade.com/guides?q={search_term_string}",
			"query-input": "required name=search_term_string"
		}
	})}</script>`}
</svelte:head>

<section class="hero">
	<div class="container">
		<h1>Find the Best Margin Trading Platform</h1>
		<p>Expert reviews, detailed comparisons, and educational guides to help you trade with leverage safely and profitably.</p>
		<div class="hero-actions">
			<a href="/exchanges" class="btn btn-primary">🏦 Compare Exchanges</a>
			<a href="/guides/what-is-margin-trading" class="btn btn-outline">📚 Learn Margin Trading</a>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<h2 class="section-title">Top Crypto Margin Trading Exchanges 2026</h2>
		<p class="section-subtitle">Ranked by our experts based on fees, features, security, and user experience</p>

		<div style="overflow-x: auto;">
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Exchange</th>
						<th>Rating</th>
						<th>Max Leverage</th>
						<th>Maker/Taker Fee</th>
						<th>Trading Pairs</th>
						<th>Bonus</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{#each cryptoExchanges as exchange, i}
						<tr>
							<td><strong>{i + 1}</strong></td>
							<td><a href="/exchanges/{exchange.slug}"><strong>{exchange.name}</strong></a></td>
							<td><span class="stars">{renderStars(exchange.rating)}</span> {exchange.rating}</td>
							<td>{exchange.maxLeverage}x</td>
							<td>{exchange.makerFee}% / {exchange.takerFee}%</td>
							<td>{exchange.tradingPairs.toLocaleString()}+</td>
							<td style="font-size: 0.85rem">{exchange.referralBonus}</td>
							<td><a href="/exchanges/{exchange.slug}" class="btn btn-primary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Review →</a></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<div style="text-align: center; margin-top: 1.5rem;">
			<a href="/exchanges" class="btn btn-outline">View All Exchanges →</a>
		</div>
	</div>
</section>

<section class="section" style="background: var(--bg-secondary);">
	<div class="container">
		<h2 class="section-title">Popular Exchange Comparisons</h2>
		<p class="section-subtitle">Head-to-head comparisons of the top margin trading platforms</p>

		<div class="grid-3">
			{#each comparisons.slice(0, 6) as comp}
				<a href="/compare/{comp.slug}" class="card" style="text-decoration: none;">
					<h3 style="font-size: 1.1rem; margin: 0 0 0.5rem;">{comp.exchange1.replace(/-/g, ' ')} vs {comp.exchange2.replace(/-/g, ' ')}</h3>
					<p style="font-size: 0.875rem; margin: 0;">{comp.metaDescription}</p>
				</a>
			{/each}
		</div>

		<div style="text-align: center; margin-top: 1.5rem;">
			<a href="/compare" class="btn btn-outline">View All Comparisons →</a>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<h2 class="section-title">Margin Trading Guides</h2>
		<p class="section-subtitle">Learn everything about margin trading from beginner basics to advanced strategies</p>

		<div class="grid-2">
			{#each topGuides as guide}
				<a href="/guides/{guide.slug}" class="card" style="text-decoration: none;">
					<span class="badge badge-blue">{guide.category}</span>
					<h3 style="font-size: 1.1rem; margin: 0.5rem 0;">{guide.title}</h3>
					<p style="font-size: 0.875rem; margin: 0; color: var(--text-muted);">{guide.readTime} min read</p>
				</a>
			{/each}
		</div>

		<div style="text-align: center; margin-top: 1.5rem;">
			<a href="/guides" class="btn btn-outline">View All Guides →</a>
		</div>
	</div>
</section>

<section class="section" style="background: var(--bg-secondary);">
	<div class="container" style="text-align: center;">
		<h2 class="section-title">Why Trust MarginTrade?</h2>
		<div class="grid-3" style="text-align: left; margin-top: 2rem;">
			<div class="card">
				<h3 style="margin-top: 0;">🔍 Independent Research</h3>
				<p style="margin: 0;">We test every platform ourselves. Our reviews are based on real trading experience, not paid placements.</p>
			</div>
			<div class="card">
				<h3 style="margin-top: 0;">📊 Data-Driven Rankings</h3>
				<p style="margin: 0;">Our rankings are based on objective criteria: fees, security, features, liquidity, and user experience.</p>
			</div>
			<div class="card">
				<h3 style="margin-top: 0;">⚠️ Risk First</h3>
				<p style="margin: 0;">We always put risk education first. We believe informed traders make better decisions.</p>
			</div>
		</div>
	</div>
</section>

<div class="container">
	<div class="disclaimer">
		<strong>Risk Disclaimer:</strong> Margin trading involves substantial risk of loss and is not suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade on margin, you should carefully consider your investment objectives, level of experience, and risk appetite. The content on MarginTrade.com is for educational purposes only and should not be considered financial advice. We may earn commissions from referral links at no additional cost to you.
	</div>
</div>
