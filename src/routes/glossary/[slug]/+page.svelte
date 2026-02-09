<script>
	let { data } = $props();
	const term = data.term;
	let openFaq = $state(-1);

	function renderContent(content) {
		return content
			.replace(/^### (.*$)/gm, '<h3>$1</h3>')
			.replace(/^## (.*$)/gm, '<h2>$1</h2>')
			.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
			.replace(/\n\n/g, '</p><p>');
	}

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
	<meta name="description" content="{term.shortDefinition}" />
	<link rel="canonical" href="https://www.margintrade.com/glossary/{term.slug}" />
	{@html `<script type="application/ld+json">${JSON.stringify(definedTermLd)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>`}
	{#if faqLd}{@html `<script type="application/ld+json">${JSON.stringify(faqLd)}</script>`}{/if}
</svelte:head>

<article class="container-narrow">
	<nav class="breadcrumbs">
		<a href="/">Home</a> <span>/</span>
		<a href="/glossary">Glossary</a> <span>/</span>
		<span>{term.term}</span>
	</nav>

	<h1>{term.term}</h1>
	<p style="font-size: 1.15rem; font-weight: 500; color: var(--text-primary); border-left: 3px solid var(--accent); padding-left: 1rem;">{term.shortDefinition}</p>

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

	<!-- Related Terms -->
	{#if term.relatedTerms?.length}
		<div class="related-links">
			<h3>Related Terms</h3>
			<ul>
				{#each term.relatedTerms as slug}
					<li><a href="/glossary/{slug}">{slug.replace(/-/g, ' ')}</a></li>
				{/each}
			</ul>
		</div>
	{/if}

	<div class="related-links">
		<h3>Learn More</h3>
		<ul>
			<li><a href="/guides/what-is-margin-trading">What Is Margin Trading?</a></li>
			<li><a href="/guides/margin-trading-for-beginners">Beginner's Guide</a></li>
			<li><a href="/glossary">All Glossary Terms</a></li>
		</ul>
	</div>
</article>
