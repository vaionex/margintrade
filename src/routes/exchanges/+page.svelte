<script>
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { exchanges, getCryptoExchanges, getTraditionalExchanges } from '$lib/data/exchanges.js';

	const crypto = getCryptoExchanges();
	const traditional = getTraditionalExchanges();

	function renderStars(rating) {
		const full = Math.floor(rating);
		const half = rating % 1 >= 0.5 ? 1 : 0;
		return '★'.repeat(full) + (half ? '<span class="half-star">★</span>' : '') + '☆'.repeat(5 - full - half);
	}
</script>

<svelte:head>
	<title>Best Margin Trading Exchanges 2026 — Compare All Platforms | MarginTrade</title>
	<meta name="description" content="Compare all margin trading exchanges ranked by fees, leverage, security, and features. Find the best platform for crypto, stocks, and forex margin trading." />
</svelte:head>

<div class="container" style="padding-top:1rem;">
	<Breadcrumbs items={[{ label: 'Exchanges' }]} />
</div>

<section class="section" style="padding-top:0;">
	<div class="container">
		<span class="section-label">All Exchanges</span>
		<h1 style="margin-top:0;">Best Margin Trading Exchanges 2026</h1>
		<p class="section-subtitle">Compare {exchanges.length} platforms side by side — ranked by our experts</p>

		<h2 style="margin-bottom:0.5rem;">Crypto Exchanges</h2>
		<div class="comparison-table" style="margin-bottom:3rem;">
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Exchange</th>
						<th>Rating</th>
						<th>Max Leverage</th>
						<th>Maker / Taker</th>
						<th>Pairs</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{#each crypto as ex, i}
						<tr>
							<td><strong style="color:var(--accent-light);">{i + 1}</strong></td>
							<td><a href="/exchanges/{ex.slug}" style="color:var(--text-primary);font-weight:600;">{ex.name}</a></td>
							<td><span class="stars">{@html renderStars(ex.rating)}</span></td>
							<td><strong>{ex.maxLeverage}x</strong></td>
							<td>{ex.makerFee}% / {ex.takerFee}%</td>
							<td>{ex.tradingPairs.toLocaleString()}+</td>
							<td><a href="/exchanges/{ex.slug}" class="btn btn-primary" style="padding:0.4rem 1rem;font-size:0.8rem;">Review →</a></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<h2 style="margin-bottom:0.5rem;">Traditional Brokers</h2>
		<div class="comparison-table">
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Broker</th>
						<th>Rating</th>
						<th>Max Leverage</th>
						<th>Products</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{#each traditional as ex, i}
						<tr>
							<td><strong style="color:var(--accent-light);">{i + 1}</strong></td>
							<td><a href="/exchanges/{ex.slug}" style="color:var(--text-primary);font-weight:600;">{ex.name}</a></td>
							<td><span class="stars">{@html renderStars(ex.rating)}</span></td>
							<td><strong>{ex.maxLeverage}x</strong></td>
							<td style="font-size:0.85rem;">{ex.tradingProducts || 'Various'}</td>
							<td><a href="/exchanges/{ex.slug}" class="btn btn-primary" style="padding:0.4rem 1rem;font-size:0.8rem;">Review →</a></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</section>
