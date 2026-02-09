<script>
	let { data } = $props();
	const guide = data.guide;
	let openFaq = $state(-1);

	// Simple markdown-like rendering for guide content
	function renderContent(content) {
		return content
			.replace(/^### (.*$)/gm, '<h3>$1</h3>')
			.replace(/^## (.*$)/gm, '<h2>$1</h2>')
			.replace(/^\*\*(.*?)\*\*/gm, '<strong>$1</strong>')
			.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
			.replace(/^\- (.*$)/gm, '<li>$1</li>')
			.replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
			.replace(/\n\n/g, '</p><p>')
			.replace(/\|(.*)\|/g, (match) => match) // leave tables as-is for now
			.replace(/^(?!<[hluop])(.*\S.*)$/gm, (match) => {
				if (match.startsWith('<') || match.startsWith('|')) return match;
				return match;
			});
	}

	const articleLd = {
		"@context": "https://schema.org",
		"@type": "Article",
		"headline": guide.title,
		"description": guide.metaDescription,
		"datePublished": guide.lastUpdated,
		"dateModified": guide.lastUpdated,
		"author": { "@type": "Organization", "name": "MarginTrade" },
		"publisher": { "@type": "Organization", "name": "MarginTrade", "url": "https://www.margintrade.com" }
	};

	const breadcrumbLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.margintrade.com" },
			{ "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://www.margintrade.com/guides" },
			{ "@type": "ListItem", "position": 3, "name": guide.title, "item": `https://www.margintrade.com/guides/${guide.slug}` }
		]
	};

	const faqLd = guide.faq?.length ? {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": guide.faq.map(f => ({
			"@type": "Question",
			"name": f.q,
			"acceptedAnswer": { "@type": "Answer", "text": f.a }
		}))
	} : null;
</script>

<svelte:head>
	<title>{guide.title} | MarginTrade</title>
	<meta name="description" content={guide.metaDescription} />
	<link rel="canonical" href="https://www.margintrade.com/guides/{guide.slug}" />
	<meta property="og:title" content={guide.title} />
	<meta property="og:description" content={guide.metaDescription} />
	<meta property="og:type" content="article" />
	{@html `<script type="application/ld+json">${JSON.stringify(articleLd)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>`}
	{#if faqLd}{@html `<script type="application/ld+json">${JSON.stringify(faqLd)}</script>`}{/if}
</svelte:head>

<article class="container-narrow">
	<nav class="breadcrumbs">
		<a href="/">Home</a> <span>/</span>
		<a href="/guides">Guides</a> <span>/</span>
		<span>{guide.title}</span>
	</nav>

	<span class="badge badge-blue">{guide.category}</span>
	<h1 style="margin-top: 0.5rem;">{guide.title}</h1>
	<div style="color: var(--text-muted); margin-bottom: 2rem; font-size: 0.9rem;">
		{guide.readTime} min read · Last updated: {guide.lastUpdated}
	</div>

	<div class="article-content">
		{@html renderContent(guide.content)}
	</div>

	<!-- FAQ -->
	{#if guide.faq?.length}
		<h2>Frequently Asked Questions</h2>
		{#each guide.faq as faq, i}
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

	<!-- Related Guides -->
	{#if guide.relatedGuides?.length}
		<div class="related-links">
			<h3>Related Guides</h3>
			<ul>
				{#each guide.relatedGuides as slug}
					<li><a href="/guides/{slug}">{slug.replace(/-/g, ' ')}</a></li>
				{/each}
			</ul>
		</div>
	{/if}

	<!-- Related Glossary -->
	{#if guide.relatedGlossary?.length}
		<div class="related-links">
			<h3>Related Terms</h3>
			<ul>
				{#each guide.relatedGlossary as slug}
					<li><a href="/glossary/{slug}">{slug.replace(/-/g, ' ')}</a></li>
				{/each}
			</ul>
		</div>
	{/if}

	<div class="disclaimer">
		<strong>Disclaimer:</strong> This content is for educational purposes only and should not be considered financial advice. Margin trading involves substantial risk of loss. Always do your own research and consider your risk tolerance before trading with leverage.
	</div>
</article>
