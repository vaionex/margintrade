<script>
	import { glossaryTerms } from '$lib/data/glossary.js';
	let { data } = $props();
	const term = data.term;
	let openFaq = $state(-1);

	function renderContent(content) {
		return content
			.replace(/^### (.*$)/gm, '<h3>$1</h3>')
			.replace(/^## (.*$)/gm, '<h2>$1</h2>')
			.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
			.replace(/^\|(.+)\|$/gm, (match) => {
				const cells = match.split('|').filter(c => c.trim());
				return '<tr>' + cells.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
			})
			.replace(/(<tr>.*<\/tr>\n?)+/g, (match) => {
				const rows = match.trim().split('\n').filter(r => r.trim());
				if (rows.length < 2) return match;
				const header = rows[0].replace(/<td>/g, '<th>').replace(/<\/td>/g, '</th>');
				const sep = rows[1];
				const isSep = sep && /^<tr>(<td>\s*[-:]+\s*<\/td>)+<\/tr>$/.test(sep);
				const body = isSep ? rows.slice(2).join('\n') : rows.slice(1).join('\n');
				return `<div style="overflow-x:auto"><table><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
			})
			.replace(/^- (.*$)/gm, '<li>$1</li>')
			.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
			.replace(/\n{2,}/g, '</p><p>');
	}

	const relatedTerms = (term.relatedTerms || [])
		.map(slug => glossaryTerms.find(t => t.slug === slug))
		.filter(Boolean);

	const definedTermLd = {
		"@context": "https://schema.org",
		"@type": "DefinedTerm",
		"name": term.term,
		"description": term.shortDefinition
	};

	const breadcrumbLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.margintrade.com" },
			{ "@type": "ListItem", "position": 2, "name": "Glossary", "item": "https://www.margintrade.com/glossary" },
			{ "@type": "ListItem", "position": 3, "name": term.term, "item": `https://www.margintrade.com/glossary/${term.slug}` }
		]
	};

	const faqLd = term.faq?.length ? {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": term.faq.map(f => ({
			"@type": "Question",
			"name": f.q,
			"acceptedAnswer": { "@type": "Answer", "text": f.a }
		}))
	} : null;
</script>

<svelte:head>
	<title>{term.term} — Margin Trading Definition | MarginTrade</title>
	<meta name="description" content={term.shortDefinition} />
	<link rel="canonical" href="https://www.margintrade.com/glossary/{term.slug}" />
	<meta property="og:title" content="{term.term} — Margin Trading Definition" />
	<meta property="og:description" content={term.shortDefinition} />
	<meta property="og:url" content="https://www.margintrade.com/glossary/{term.slug}" />
	{@html `<script type="application/ld+json">${JSON.stringify(definedTermLd)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>`}
	{#if faqLd}{@html `<script type="application/ld+json">${JSON.stringify(faqLd)}</script>`}{/if}
</svelte:head>

<article class="container-narrow" style="padding-top: 2rem; padding-bottom: 4rem;">
	<nav class="breadcrumbs">
		<a href="/">Home</a> <span>/</span>
		<a href="/glossary">Glossary</a> <span>/</span>
		<span>{term.term}</span>
	</nav>

	<!-- Definition Card -->
	<div class="def-card">
		<div class="def-card-top"></div>
		<div class="def-card-inner">
			<h1>{term.term}</h1>
			<p class="def-short">{term.shortDefinition}</p>
		</div>
	</div>

	<!-- Full Definition -->
	<div class="article-content">
		{@html renderContent(term.fullDefinition)}
	</div>

	<!-- FAQ -->
	{#if term.faq?.length}
		<h2>Frequently Asked Questions</h2>
		{#each term.faq as faq, i}
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

	<!-- Related Terms as Pills -->
	{#if relatedTerms.length}
		<div class="related-pills">
			<h3>Related Terms</h3>
			<div class="pills">
				{#each relatedTerms as rt}
					<a href="/glossary/{rt.slug}" class="pill">{rt.term}</a>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Learn More -->
	<div class="related-links">
		<h3>Learn More</h3>
		<ul>
			<li><a href="/learn/what-is-margin-trading">What Is Margin Trading?</a></li>
			<li><a href="/learn/margin-trading-for-beginners">Beginner's Guide</a></li>
			<li><a href="/learn/margin-trading-risks">Trading Risks</a></li>
			<li><a href="/glossary">All Glossary Terms</a></li>
		</ul>
	</div>
</article>

<style>
	.def-card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		overflow: hidden;
		margin-bottom: 2rem;
	}
	.def-card-top {
		height: 4px;
		background: linear-gradient(90deg, var(--accent), #8b5cf6, #ec4899, #f59e0b);
	}
	.def-card-inner {
		padding: 2rem;
	}
	.def-card h1 {
		margin-bottom: 0.75rem;
	}
	.def-short {
		font-size: 1.15rem;
		font-weight: 500;
		color: var(--text-primary);
		line-height: 1.6;
		margin: 0;
		border-left: 3px solid var(--accent);
		padding-left: 1rem;
	}

	.related-pills {
		margin: 2rem 0;
	}
	.related-pills h3 {
		margin-bottom: 0.75rem;
	}
	.pills {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.pill {
		display: inline-block;
		padding: 0.4rem 0.9rem;
		background: var(--bg-tertiary);
		border: 1px solid var(--border);
		border-radius: 9999px;
		font-size: 0.85rem;
		color: var(--accent-light);
		text-decoration: none;
		transition: all 0.2s;
	}
	.pill:hover {
		background: var(--accent);
		color: white;
		border-color: var(--accent);
	}
</style>
