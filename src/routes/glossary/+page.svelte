<script>
	import { glossaryTerms } from '$lib/data/glossary.js';

	const alphabet = [...new Set(glossaryTerms.map(t => t.term.charAt(0).toUpperCase()))].sort();
	const grouped = {};
	for (const t of glossaryTerms) {
		const letter = t.term.charAt(0).toUpperCase();
		if (!grouped[letter]) grouped[letter] = [];
		grouped[letter].push(t);
	}

	const breadcrumbLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.margintrade.com" },
			{ "@type": "ListItem", "position": 2, "name": "Glossary", "item": "https://www.margintrade.com/glossary" }
		]
	};
</script>

<svelte:head>
	<title>Margin Trading Glossary — Key Terms Explained | MarginTrade</title>
	<meta name="description" content="Complete glossary of margin trading terms. Learn about leverage, liquidation, margin calls, funding rates, and more with detailed explanations." />
	<link rel="canonical" href="https://www.margintrade.com/glossary" />
	<meta property="og:title" content="Margin Trading Glossary — Key Terms Explained" />
	<meta property="og:description" content="Complete glossary of margin trading terms." />
	<meta property="og:url" content="https://www.margintrade.com/glossary" />
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>`}
</svelte:head>

<div class="container" style="padding-top: 2rem; padding-bottom: 4rem;">
	<nav class="breadcrumbs">
		<a href="/">Home</a> <span>/</span> <span>Glossary</span>
	</nav>

	<h1>Margin Trading Glossary</h1>
	<p style="font-size: 1.1rem; max-width: 600px;">Essential terms every margin trader should understand. Click any term for a detailed explanation with examples.</p>

	<!-- Alphabet Navigation -->
	<nav class="alpha-nav">
		{#each 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('') as letter}
			{#if grouped[letter]}
				<a href="#letter-{letter}" class="alpha-link active">{letter}</a>
			{:else}
				<span class="alpha-link disabled">{letter}</span>
			{/if}
		{/each}
	</nav>

	<!-- Terms by Letter -->
	{#each Object.entries(grouped).sort((a, b) => a[0].localeCompare(b[0])) as [letter, terms]}
		<div id="letter-{letter}" class="letter-group">
			<h2 class="letter-heading">{letter}</h2>
			<div class="glossary-grid">
				{#each terms as term}
					<a href="/glossary/{term.slug}" class="glossary-card">
						<div class="glossary-card-top"></div>
						<h3>{term.term}</h3>
						<p>{term.shortDefinition}</p>
					</a>
				{/each}
			</div>
		</div>
	{/each}

	<div class="related-links" style="margin-top: 3rem;">
		<h3>Learn More</h3>
		<ul>
			<li><a href="/learn/what-is-margin-trading">What Is Margin Trading?</a></li>
			<li><a href="/learn/margin-trading-for-beginners">Beginner's Guide</a></li>
			<li><a href="/learn/leverage-ratios-explained">Leverage Explained</a></li>
			<li><a href="/compare">Compare Exchanges</a></li>
		</ul>
	</div>
</div>

<style>
	.alpha-nav {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
		margin: 1.5rem 0 2rem;
		padding: 1rem;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
	}
	.alpha-link {
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius);
		font-weight: 700;
		font-size: 0.85rem;
		text-decoration: none;
		transition: all 0.2s;
	}
	.alpha-link.active {
		background: var(--bg-tertiary);
		color: var(--accent-light);
	}
	.alpha-link.active:hover {
		background: var(--accent);
		color: white;
	}
	.alpha-link.disabled {
		color: var(--text-muted);
		opacity: 0.3;
		cursor: default;
	}

	.letter-group {
		margin-bottom: 2rem;
	}
	.letter-heading {
		font-size: 1.5rem;
		color: var(--accent-light);
		border-bottom: 2px solid var(--accent);
		padding-bottom: 0.4rem;
		margin-bottom: 1rem;
		display: inline-block;
	}

	.glossary-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1rem;
	}
	.glossary-card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: 0;
		text-decoration: none;
		transition: all 0.2s;
		overflow: hidden;
	}
	.glossary-card:hover {
		border-color: var(--accent);
		transform: translateY(-2px);
		box-shadow: var(--shadow);
	}
	.glossary-card-top {
		height: 4px;
		background: linear-gradient(90deg, var(--accent), #8b5cf6, #ec4899);
	}
	.glossary-card h3 {
		margin: 1rem 1.25rem 0.5rem;
		font-size: 1.05rem;
		color: var(--text-primary);
	}
	.glossary-card p {
		margin: 0 1.25rem 1.25rem;
		font-size: 0.85rem;
		color: var(--text-secondary);
		line-height: 1.5;
	}

	@media (max-width: 768px) {
		.glossary-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
