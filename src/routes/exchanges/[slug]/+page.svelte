<script>
	let { data } = $props();
	const ex = data.exchange;
	let openFaq = $state(-1);

	function renderStars(r) {
		return '★'.repeat(Math.floor(r)) + (r % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.floor(r) - (r % 1 >= 0.5 ? 1 : 0));
	}

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Review",
		"itemReviewed": { "@type": "Organization", "name": ex.name },
		"reviewRating": { "@type": "Rating", "ratingValue": ex.rating, "bestRating": 5 },
		"author": { "@type": "Organization", "name": "MarginTrade" },
		"publisher": { "@type": "Organization", "name": "MarginTrade" }
	};

	const breadcrumbLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.margintrade.com" },
			{ "@type": "ListItem", "position": 2, "name": "Exchanges", "item": "https://www.margintrade.com/exchanges" },
			{ "@type": "ListItem", "position": 3, "name": ex.name, "item": `https://www.margintrade.com/exchanges/${ex.slug}` }
		]
	};

	const faqLd = ex.faq?.length ? {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": ex.faq.map(f => ({
			"@type": "Question",
			"name": f.q,
			"acceptedAnswer": { "@type": "Answer", "text": f.a }
		}))
	} : null;
</script>

<svelte:head>
	<title>{ex.name} Margin Trading Review 2026 — Fees, Leverage, Features | MarginTrade</title>
	<meta name="description" content="{ex.name} margin trading review: {ex.maxLeverage}x leverage, {ex.makerFee}%/{ex.takerFee}% fees. Is {ex.name} good for margin trading? Read our expert analysis." />
	<link rel="canonical" href="https://www.margintrade.com/exchanges/{ex.slug}" />
	<meta property="og:title" content="{ex.name} Margin Trading Review 2026 | MarginTrade" />
	<meta property="og:description" content="Expert review of {ex.name} for margin trading. {ex.maxLeverage}x leverage, detailed fee analysis, pros and cons." />
	<meta property="og:url" content="https://www.margintrade.com/exchanges/{ex.slug}" />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>`}
	{#if faqLd}{@html `<script type="application/ld+json">${JSON.stringify(faqLd)}</script>`}{/if}
</svelte:head>

<div class="container-narrow">
	<nav class="breadcrumbs">
		<a href="/">Home</a> <span>/</span>
		<a href="/exchanges">Exchanges</a> <span>/</span>
		<span>{ex.name}</span>
	</nav>

	<div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
		<div>
			<span class="badge" class:badge-green={ex.type === 'crypto'} class:badge-blue={ex.type === 'traditional'}>{ex.type}</span>
			<h1 style="margin-top: 0.5rem;">{ex.name} Margin Trading Review 2026</h1>
		</div>
		<div style="text-align: right;">
			<div class="stars" style="font-size: 1.5rem;">{renderStars(ex.rating)}</div>
			<div style="font-size: 1.25rem; font-weight: 700;">{ex.rating}/5</div>
		</div>
	</div>

	<p style="font-size: 1.1rem;">{ex.description}</p>

	<a href={ex.referralUrl} target="_blank" rel="noopener noreferrer" class="btn btn-green" style="margin: 1.5rem 0;">
		Visit {ex.name} — {ex.referralBonus} →
	</a>

	<!-- Quick Stats -->
	<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1rem; margin: 2rem 0;">
		<div class="card" style="text-align: center; padding: 1rem;">
			<div style="color: var(--text-muted); font-size: 0.8rem;">Max Leverage</div>
			<div style="font-size: 1.5rem; font-weight: 700; color: var(--accent-light);">{ex.maxLeverage}x</div>
		</div>
		<div class="card" style="text-align: center; padding: 1rem;">
			<div style="color: var(--text-muted); font-size: 0.8rem;">Maker Fee</div>
			<div style="font-size: 1.5rem; font-weight: 700;">{ex.makerFee}%</div>
		</div>
		<div class="card" style="text-align: center; padding: 1rem;">
			<div style="color: var(--text-muted); font-size: 0.8rem;">Taker Fee</div>
			<div style="font-size: 1.5rem; font-weight: 700;">{ex.takerFee}%</div>
		</div>
		<div class="card" style="text-align: center; padding: 1rem;">
			<div style="color: var(--text-muted); font-size: 0.8rem;">Founded</div>
			<div style="font-size: 1.5rem; font-weight: 700;">{ex.founded}</div>
		</div>
	</div>

	<!-- Key Details -->
	<h2>Key Details</h2>
	<table>
		<tbody>
			<tr><td><strong>Headquarters</strong></td><td>{ex.headquarters}</td></tr>
			<tr><td><strong>Margin Types</strong></td><td>{ex.marginTypes.join(', ')}</td></tr>
			{#if ex.tradingPairs}<tr><td><strong>Trading Pairs</strong></td><td>{ex.tradingPairs}+</td></tr>{/if}
			{#if ex.tradingProducts}<tr><td><strong>Products</strong></td><td>{ex.tradingProducts}</td></tr>{/if}
			<tr><td><strong>Deposit Methods</strong></td><td>{ex.depositMethods.join(', ')}</td></tr>
			<tr><td><strong>Regulators</strong></td><td>{ex.regulators.join(', ')}</td></tr>
			<tr><td><strong>Margin Assets</strong></td><td>{ex.marginAssets.join(', ')}</td></tr>
			<tr><td><strong>Interest Rate</strong></td><td>{ex.interestRate}</td></tr>
			<tr><td><strong>Min Deposit</strong></td><td>{ex.minDeposit === 0 ? 'No minimum' : '$' + ex.minDeposit}</td></tr>
		</tbody>
	</table>

	<!-- Pros & Cons -->
	<h2>Pros & Cons</h2>
	<div class="pros-cons">
		<div class="pros">
			<h4 style="color: var(--green);">✅ Pros</h4>
			<ul>
				{#each ex.pros as pro}
					<li><span>{pro}</span></li>
				{/each}
			</ul>
		</div>
		<div class="cons">
			<h4 style="color: var(--red);">❌ Cons</h4>
			<ul>
				{#each ex.cons as con}
					<li><span>{con}</span></li>
				{/each}
			</ul>
		</div>
	</div>

	<!-- Margin Tiers -->
	{#if ex.marginTiers?.length}
		<h2>Margin & Leverage Tiers</h2>
		<table>
			<thead>
				<tr>
					<th>Tier</th>
					<th>Max Position</th>
					<th>Max Leverage</th>
					<th>Maintenance Margin</th>
				</tr>
			</thead>
			<tbody>
				{#each ex.marginTiers as tier}
					<tr>
						<td>{tier.tier}</td>
						<td>{tier.maxPosition}</td>
						<td>{tier.maxLeverage}x</td>
						<td>{tier.maintenanceMargin}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}

	<!-- How to Sign Up -->
	{#if ex.signupSteps?.length}
		<h2>How to Start Margin Trading on {ex.name}</h2>
		<ol>
			{#each ex.signupSteps as step}
				<li>{step}</li>
			{/each}
		</ol>
		<a href={ex.referralUrl} target="_blank" rel="noopener noreferrer" class="btn btn-green" style="margin: 1rem 0;">
			Sign Up for {ex.name} →
		</a>
	{/if}

	<!-- Features -->
	{#if ex.features}
		<h2>Platform Features</h2>
		<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.5rem;">
			{#each Object.entries(ex.features) as [key, val]}
				<div style="padding: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
					<span style="color: {val ? 'var(--green)' : 'var(--red)'};">{val ? '✅' : '❌'}</span>
					<span style="color: var(--text-secondary);">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
				</div>
			{/each}
		</div>
	{/if}

	<!-- FAQ -->
	{#if ex.faq?.length}
		<h2>Frequently Asked Questions</h2>
		{#each ex.faq as faq, i}
			<div class="faq-item">
				<div class="faq-question" onclick={() => openFaq = openFaq === i ? -1 : i}>
					<span>{faq.q}</span>
					<span>{openFaq === i ? '−' : '+'}</span>
				</div>
				{#if openFaq === i}
					<div class="faq-answer">{faq.a}</div>
				{/if}
			</div>
		{/each}
	{/if}

	<!-- Related -->
	<div class="related-links">
		<h3>Related Pages</h3>
		<ul>
			{#if ex.type === 'crypto'}
				<li><a href="/exchanges/crypto">All Crypto Exchanges</a></li>
				<li><a href="/guides/crypto-margin-trading">Crypto Margin Guide</a></li>
				<li><a href="/guides/margin-trading-fees-compared">Fee Comparison</a></li>
			{:else}
				<li><a href="/exchanges/traditional">All Traditional Brokers</a></li>
				<li><a href="/guides/what-is-margin-trading">What Is Margin Trading?</a></li>
			{/if}
			<li><a href="/guides/best-margin-trading-platforms-2026">Best Platforms 2026</a></li>
			<li><a href="/glossary">Glossary</a></li>
		</ul>
	</div>

	<div class="disclaimer">
		<strong>Disclaimer:</strong> This review contains affiliate links. We may earn a commission when you sign up through our links at no additional cost to you. This review is based on our research and experience. Margin trading involves substantial risk of loss. This is not financial advice.
	</div>
</div>
