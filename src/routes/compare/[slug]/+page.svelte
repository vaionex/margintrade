<script>
	let { data } = $props();
	const { comparison: comp, ex1, ex2 } = data;
	let openFaq = $state(-1);

	const breadcrumbLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.margintrade.com" },
			{ "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://www.margintrade.com/compare" },
			{ "@type": "ListItem", "position": 3, "name": comp.title, "item": `https://www.margintrade.com/compare/${comp.slug}` }
		]
	};

	const faqLd = comp.faq?.length ? {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": comp.faq.map(f => ({
			"@type": "Question",
			"name": f.q,
			"acceptedAnswer": { "@type": "Answer", "text": f.a }
		}))
	} : null;
</script>

<svelte:head>
	<title>{comp.title} | MarginTrade</title>
	<meta name="description" content={comp.metaDescription} />
	<link rel="canonical" href="https://www.margintrade.com/compare/{comp.slug}" />
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>`}
	{#if faqLd}{@html `<script type="application/ld+json">${JSON.stringify(faqLd)}</script>`}{/if}
</svelte:head>

<div class="container-narrow">
	<nav class="breadcrumbs">
		<a href="/">Home</a> <span>/</span>
		<a href="/compare">Compare</a> <span>/</span>
		<span>{ex1?.name} vs {ex2?.name}</span>
	</nav>

	<h1>{comp.title}</h1>
	<p style="font-size: 1.1rem;">{comp.intro}</p>

	<!-- Quick Stats Comparison -->
	{#if ex1 && ex2}
		<div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 1rem; margin: 2rem 0;">
			<div class="card" style="text-align: center;">
				<h3 style="margin: 0 0 1rem;">{ex1.name}</h3>
				<div style="margin-bottom: 0.5rem;"><strong>{ex1.maxLeverage}x</strong> <span style="color: var(--text-muted);">leverage</span></div>
				<div style="margin-bottom: 0.5rem;"><strong>{ex1.makerFee}%/{ex1.takerFee}%</strong> <span style="color: var(--text-muted);">fees</span></div>
				<div style="margin-bottom: 0.5rem;"><strong>{ex1.rating}/5</strong> <span style="color: var(--text-muted);">rating</span></div>
				<a href="/exchanges/{ex1.slug}" class="btn btn-primary" style="margin-top: 0.5rem; font-size: 0.85rem;">Full Review →</a>
			</div>
			<div style="display: flex; align-items: center; font-size: 2rem; font-weight: 800; color: var(--text-muted);">VS</div>
			<div class="card" style="text-align: center;">
				<h3 style="margin: 0 0 1rem;">{ex2.name}</h3>
				<div style="margin-bottom: 0.5rem;"><strong>{ex2.maxLeverage}x</strong> <span style="color: var(--text-muted);">leverage</span></div>
				<div style="margin-bottom: 0.5rem;"><strong>{ex2.makerFee}%/{ex2.takerFee}%</strong> <span style="color: var(--text-muted);">fees</span></div>
				<div style="margin-bottom: 0.5rem;"><strong>{ex2.rating}/5</strong> <span style="color: var(--text-muted);">rating</span></div>
				<a href="/exchanges/{ex2.slug}" class="btn btn-primary" style="margin-top: 0.5rem; font-size: 0.85rem;">Full Review →</a>
			</div>
		</div>
	{/if}

	<!-- Category Comparison -->
	<h2>Category-by-Category Comparison</h2>
	<table>
		<thead>
			<tr>
				<th>Category</th>
				<th>Winner</th>
				<th>Details</th>
			</tr>
		</thead>
		<tbody>
			{#each comp.categories as cat}
				<tr>
					<td><strong>{cat.name}</strong></td>
					<td>
						{#if cat.winner === 'tie'}
							<span class="tie-badge">Tie</span>
						{:else}
							<span class="winner-badge">🏆 {cat.winner === comp.exchange1 ? ex1?.name : ex2?.name}</span>
						{/if}
					</td>
					<td style="font-size: 0.875rem;">{cat.details}</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<!-- Detailed Comparison -->
	<h2>Detailed Comparison</h2>

	{#if comp.comparison.fees}
		<h3>Fees</h3>
		<p>{comp.comparison.fees}</p>
	{/if}

	{#if comp.comparison.leverage}
		<h3>Leverage</h3>
		<p>{comp.comparison.leverage}</p>
	{/if}

	{#if comp.comparison.platform}
		<h3>Platform & Features</h3>
		<p>{comp.comparison.platform}</p>
	{/if}

	{#if comp.comparison.security}
		<h3>Security</h3>
		<p>{comp.comparison.security}</p>
	{/if}

	{#if comp.comparison.beginners}
		<h3>For Beginners</h3>
		<p>{comp.comparison.beginners}</p>
	{/if}

	<!-- Verdict -->
	<div class="card" style="margin: 2rem 0; border-color: var(--accent);">
		<h2 style="margin-top: 0; color: var(--accent-light);">🏆 Our Verdict</h2>
		<p style="font-size: 1.05rem; margin: 0;">{comp.verdict}</p>
	</div>

	<!-- CTA Buttons -->
	{#if ex1 && ex2}
		<div style="display: flex; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
			<a href={ex1.referralUrl} target="_blank" rel="noopener noreferrer" class="btn btn-green">
				Try {ex1.name} — {ex1.referralBonus} →
			</a>
			<a href={ex2.referralUrl} target="_blank" rel="noopener noreferrer" class="btn btn-green">
				Try {ex2.name} — {ex2.referralBonus} →
			</a>
		</div>
	{/if}

	<!-- FAQ -->
	{#if comp.faq?.length}
		<h2>Frequently Asked Questions</h2>
		{#each comp.faq as faq, i}
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

	<div class="related-links">
		<h3>Related Comparisons</h3>
		<ul>
			{#each ['/compare/binance-vs-bybit', '/compare/binance-vs-okx', '/compare/kraken-vs-binance', '/compare/etoro-vs-interactive-brokers'] as link}
				{#if link !== `/compare/${comp.slug}`}
					<li><a href={link}>{link.split('/').pop().replace(/-/g, ' ')}</a></li>
				{/if}
			{/each}
			<li><a href="/compare">All Comparisons</a></li>
		</ul>
	</div>

	<div class="disclaimer">
		<strong>Disclaimer:</strong> This comparison contains affiliate links. Rankings are based on our independent research. Margin trading involves risk of loss. Not financial advice.
	</div>
</div>
