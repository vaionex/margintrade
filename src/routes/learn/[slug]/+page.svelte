<script>
	import { guides } from '$lib/data/guides.js';
	import { glossaryTerms } from '$lib/data/glossary.js';
	let { data } = $props();
	const guide = data.guide;
	let openFaq = $state(-1);

	// Extract headings for TOC
	const headings = [];
	const lines = guide.content.split('\n');
	for (const line of lines) {
		const m2 = line.match(/^## (.+)/);
		const m3 = line.match(/^### (.+)/);
		if (m2) headings.push({ level: 2, text: m2[1], id: m2[1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '') });
		else if (m3) headings.push({ level: 3, text: m3[1], id: m3[1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '') });
	}

	function renderContent(content) {
		return content
			.replace(/^### (.+)$/gm, (_, t) => `<h3 id="${t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}">${t}</h3>`)
			.replace(/^## (.+)$/gm, (_, t) => `<h2 id="${t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}">${t}</h2>`)
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
				return `<div class="table-wrap"><table><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
			})
			.replace(/^- (.*$)/gm, '<li>$1</li>')
			.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
			.replace(/^(\d+)\. (.*$)/gm, '<li>$2</li>')
			.replace(/\n{2,}/g, '</p><p>')
			.replace(/^(?!<)/gm, '')
	}

	const relatedGuides = (guide.relatedGuides || [])
		.map(slug => guides.find(g => g.slug === slug))
		.filter(Boolean)
		.slice(0, 4);

	const relatedTerms = (guide.relatedGlossary || [])
		.map(slug => glossaryTerms.find(t => t.slug === slug))
		.filter(Boolean);

	// Hero SVG mapping
	const heroSvgs = {
		'what-is-margin-trading': 'amplify',
		'margin-call-explained': 'decline',
		'margin-trading-for-beginners': 'steps',
		'crypto-margin-trading': 'crypto',
		'margin-vs-leverage-trading': 'scale',
		'cross-margin-vs-isolated-margin': 'shield',
		'margin-trading-risks': 'warning',
		'margin-trading-strategies': 'chart',
		'best-margin-trading-platforms-2026': 'platform',
		'margin-trading-fees-compared': 'fees',
		'margin-trading-tax-guide': 'tax',
		'short-selling-with-margin': 'short',
		'margin-trading-usa-regulations': 'law',
		'leverage-ratios-explained': 'lever',
		'liquidation-price-calculator-guide': 'calc',
		'position-sizing-for-leveraged-trades': 'sizing',
		'hedging-with-margin-trading': 'hedge',
		'crypto-futures-vs-margin-trading': 'versus',
	};
	const heroType = heroSvgs[guide.slug] || 'amplify';

	const breadcrumbLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.margintrade.com" },
			{ "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://www.margintrade.com/learn" },
			{ "@type": "ListItem", "position": 3, "name": guide.title, "item": `https://www.margintrade.com/learn/${guide.slug}` }
		]
	};

	const articleLd = {
		"@context": "https://schema.org",
		"@type": "Article",
		"headline": guide.title,
		"description": guide.metaDescription,
		"datePublished": guide.lastUpdated,
		"dateModified": guide.lastUpdated,
		"author": { "@type": "Organization", "name": "MarginTrade" },
		"publisher": { "@type": "Organization", "name": "MarginTrade", "url": "https://www.margintrade.com" },
		"mainEntityOfPage": `https://www.margintrade.com/learn/${guide.slug}`
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
	<link rel="canonical" href="https://www.margintrade.com/learn/{guide.slug}" />
	<meta property="og:title" content={guide.title} />
	<meta property="og:description" content={guide.metaDescription} />
	<meta property="og:url" content="https://www.margintrade.com/learn/{guide.slug}" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(articleLd)}</script>`}
	{#if faqLd}{@html `<script type="application/ld+json">${JSON.stringify(faqLd)}</script>`}{/if}
</svelte:head>

<!-- Hero Section -->
<section class="guide-hero">
	<div class="guide-hero-inner">
		<div class="guide-hero-text">
			<nav class="breadcrumbs" style="padding:0; margin-bottom: 1rem;">
				<a href="/">Home</a> <span>/</span>
				<a href="/learn">Guides</a> <span>/</span>
				<span>{guide.title.split(':')[0]}</span>
			</nav>
			<span class="badge badge-blue">{guide.category}</span>
			<h1>{guide.title}</h1>
			<div class="guide-meta">
				<span>📖 {guide.readTime} min read</span>
				<span>📅 Updated {guide.lastUpdated}</span>
			</div>
		</div>
		<div class="guide-hero-svg">
			{#if heroType === 'amplify'}
				<svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="40" y="160" width="60" height="60" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="2" class="svg-float">
						<animate attributeName="height" values="60;60;60" dur="3s" repeatCount="indefinite"/>
					</rect>
					<text x="70" y="196" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="Inter">$1,000</text>
					<path d="M120 190 L160 130" stroke="#3b82f6" stroke-width="2" stroke-dasharray="6 4">
						<animate attributeName="stroke-dashoffset" values="10;0" dur="1.5s" repeatCount="indefinite"/>
					</path>
					<text x="145" y="150" fill="#60a5fa" font-size="10" font-family="Inter" transform="rotate(-30 145 150)">10x</text>
					<rect x="180" y="40" width="100" height="180" rx="6" fill="#1e293b" stroke="#22c55e" stroke-width="2" class="svg-grow"/>
					<text x="230" y="140" text-anchor="middle" fill="#22c55e" font-size="14" font-weight="700" font-family="Inter">$10,000</text>
					<text x="230" y="160" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="Inter">Position</text>
					<circle cx="70" cy="140" r="4" fill="#3b82f6" class="svg-pulse"/>
					<circle cx="230" cy="30" r="4" fill="#22c55e" class="svg-pulse"/>
				</svg>
			{:else if heroType === 'decline'}
				<svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
					<polyline points="30,60 80,55 130,80 170,70 200,120 240,150 280,190" stroke="#ef4444" stroke-width="3" fill="none" stroke-linecap="round">
						<animate attributeName="stroke-dashoffset" values="400;0" dur="2s" fill="freeze"/>
						<set attributeName="stroke-dasharray" to="400"/>
					</polyline>
					<line x1="30" y1="160" x2="290" y2="160" stroke="#f59e0b" stroke-width="2" stroke-dasharray="8 4" opacity="0.7"/>
					<text x="295" y="163" fill="#f59e0b" font-size="9" font-family="Inter">Margin Call</text>
					<line x1="30" y1="190" x2="290" y2="190" stroke="#ef4444" stroke-width="2" stroke-dasharray="8 4" opacity="0.7"/>
					<text x="295" y="193" fill="#ef4444" font-size="9" font-family="Inter">Liquidation</text>
					<circle cx="240" cy="150" r="8" fill="none" stroke="#f59e0b" stroke-width="2" class="svg-pulse"/>
					<text x="240" y="140" text-anchor="middle" fill="#f59e0b" font-size="9" font-family="Inter">⚠️</text>
				</svg>
			{:else if heroType === 'steps'}
				<svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
					{#each [0,1,2,3] as i}
						<rect x={40 + i * 70} y={180 - i * 40} width="50" height={40 + i * 40} rx="4" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5" opacity={0.5 + i * 0.15}/>
						<text x={65 + i * 70} y={205 - i * 40} text-anchor="middle" fill="#60a5fa" font-size="16" font-weight="700" font-family="Inter">{i + 1}</text>
					{/each}
					<polyline points="65,170 135,130 205,90 275,50" stroke="#22c55e" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="200">
						<animate attributeName="stroke-dashoffset" values="200;0" dur="2s" fill="freeze"/>
					</polyline>
				</svg>
			{:else if heroType === 'crypto'}
				<svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="160" cy="120" r="60" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
					<text x="160" y="110" text-anchor="middle" fill="#f59e0b" font-size="36" font-weight="700" font-family="Inter">₿</text>
					<text x="160" y="140" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="Inter">MARGIN</text>
					<path d="M100 120 Q80 80 100 40" stroke="#3b82f6" stroke-width="1.5" fill="none" class="svg-float"/>
					<path d="M220 120 Q240 80 220 40" stroke="#3b82f6" stroke-width="1.5" fill="none" class="svg-float"/>
					<circle cx="100" cy="40" r="5" fill="#3b82f6" class="svg-pulse"/>
					<circle cx="220" cy="40" r="5" fill="#3b82f6" class="svg-pulse"/>
					<text x="100" y="30" text-anchor="middle" fill="#60a5fa" font-size="8" font-family="Inter">5x</text>
					<text x="220" y="30" text-anchor="middle" fill="#60a5fa" font-size="8" font-family="Inter">125x</text>
				</svg>
			{:else if heroType === 'shield'}
				<svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M110 60 L110 180 Q110 200 130 200 L130 60 Q130 40 110 40 Z" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
					<text x="120" y="125" text-anchor="middle" fill="#60a5fa" font-size="9" font-family="Inter" transform="rotate(-90 120 125)">ISOLATED</text>
					<path d="M190 60 L190 180 Q190 200 210 200 L210 60 Q210 40 190 40 Z" fill="#1e293b" stroke="#22c55e" stroke-width="2"/>
					<text x="200" y="125" text-anchor="middle" fill="#22c55e" font-size="9" font-family="Inter" transform="rotate(-90 200 125)">CROSS</text>
					<path d="M160 80 L160 160" stroke="#64748b" stroke-width="1" stroke-dasharray="4 4"/>
					<text x="160" y="210" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="Inter">VS</text>
				</svg>
			{:else}
				<svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="60" y="40" width="200" height="160" rx="12" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
					<polyline points="80,160 120,130 160,145 200,90 240,70" stroke="#22c55e" stroke-width="2.5" fill="none" stroke-linecap="round">
						<animate attributeName="stroke-dashoffset" values="300;0" dur="2s" fill="freeze"/>
						<set attributeName="stroke-dasharray" to="300"/>
					</polyline>
					<circle cx="200" cy="90" r="4" fill="#22c55e" class="svg-pulse"/>
					<text x="160" y="220" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="Inter">{guide.category}</text>
				</svg>
			{/if}
		</div>
	</div>
</section>

<!-- Main Content with TOC Sidebar -->
<div class="guide-layout">
	<!-- TOC Sidebar -->
	{#if headings.length > 2}
		<aside class="guide-toc">
			<div class="toc-sticky">
				<h4>Table of Contents</h4>
				<nav>
					{#each headings.filter(h => h.level === 2) as h}
						<a href="#{h.id}" class="toc-link">{h.text}</a>
					{/each}
				</nav>
			</div>
		</aside>
	{/if}

	<!-- Article -->
	<article class="guide-content">
		<div class="article-content">
			{@html renderContent(guide.content)}
		</div>

		<!-- FAQ -->
		{#if guide.faq?.length}
			<section class="guide-faq">
				<h2 id="faq">Frequently Asked Questions</h2>
				{#each guide.faq as faq, i}
					<div class="faq-item">
						<div class="faq-question" onclick={() => openFaq = openFaq === i ? -1 : i}>
							<span>{faq.q}</span>
							<span class="faq-toggle">{openFaq === i ? '−' : '+'}</span>
						</div>
						{#if openFaq === i}
							<div class="faq-answer">{faq.a}</div>
						{/if}
					</div>
				{/each}
			</section>
		{/if}

		<!-- Related Glossary Terms -->
		{#if relatedTerms.length}
			<div class="related-links">
				<h3>Related Terms</h3>
				<ul>
					{#each relatedTerms as term}
						<li><a href="/glossary/{term.slug}">{term.term}</a></li>
					{/each}
				</ul>
			</div>
		{/if}

		<!-- Related Guides -->
		{#if relatedGuides.length}
			<section class="related-guides">
				<h2>Related Guides</h2>
				<div class="related-guides-grid">
					{#each relatedGuides as rg}
						<a href="/learn/{rg.slug}" class="related-guide-card">
							<span class="badge badge-blue" style="font-size:0.65rem;">{rg.category}</span>
							<h4>{rg.title.split(':')[0]}</h4>
							<span class="guide-card-meta">📖 {rg.readTime} min · {rg.category}</span>
						</a>
					{/each}
				</div>
			</section>
		{/if}

		<!-- Author -->
		<div class="guide-author">
			<div class="author-avatar">MT</div>
			<div>
				<strong>MarginTrade Editorial Team</strong>
				<p style="margin:0; font-size: 0.85rem;">Our team of experienced traders and financial analysts provides expert-reviewed educational content on margin trading.</p>
			</div>
		</div>

		<div class="disclaimer">
			<strong>Disclaimer:</strong> This content is for educational purposes only and should not be considered financial advice. Margin trading involves substantial risk of loss. Always do your own research.
		</div>
	</article>
</div>

<style>
	.guide-hero {
		background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
		padding: 2rem 0 3rem;
	}
	.guide-hero-inner {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 1.5rem;
		display: grid;
		grid-template-columns: 1fr 320px;
		gap: 2rem;
		align-items: center;
	}
	.guide-hero-text h1 {
		font-size: 2.2rem;
		margin: 0.75rem 0;
		line-height: 1.2;
	}
	.guide-meta {
		display: flex;
		gap: 1.5rem;
		font-size: 0.875rem;
		color: var(--text-muted);
		margin-top: 0.75rem;
	}
	.guide-hero-svg {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.guide-hero-svg svg {
		width: 100%;
		max-width: 320px;
		height: auto;
	}

	/* Layout */
	.guide-layout {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 1.5rem;
		display: grid;
		grid-template-columns: 220px 1fr;
		gap: 3rem;
		align-items: start;
	}
	.guide-content {
		max-width: var(--max-width-narrow);
	}

	/* TOC */
	.guide-toc {
		position: relative;
	}
	.toc-sticky {
		position: sticky;
		top: 80px;
	}
	.toc-sticky h4 {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--text-muted);
		margin-bottom: 0.75rem;
	}
	.toc-link {
		display: block;
		padding: 0.35rem 0;
		font-size: 0.82rem;
		color: var(--text-muted);
		border-left: 2px solid var(--border);
		padding-left: 0.75rem;
		transition: all 0.2s;
	}
	.toc-link:hover {
		color: var(--accent-light);
		border-left-color: var(--accent);
	}

	/* Related Guides */
	.related-guides { margin: 3rem 0 2rem; }
	.related-guides-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 1rem;
	}
	.related-guide-card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: 1.25rem;
		text-decoration: none;
		transition: all 0.2s;
		display: block;
	}
	.related-guide-card:hover {
		border-color: var(--accent);
		transform: translateY(-2px);
	}
	.related-guide-card h4 {
		margin: 0.5rem 0 0.5rem;
		font-size: 0.95rem;
		color: var(--text-primary);
	}
	.guide-card-meta {
		font-size: 0.75rem;
		color: var(--text-muted);
	}

	/* Author */
	.guide-author {
		display: flex;
		gap: 1rem;
		align-items: center;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: 1.25rem;
		margin: 2rem 0;
	}
	.author-avatar {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: linear-gradient(135deg, var(--accent), #8b5cf6);
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 1rem;
		color: white;
		flex-shrink: 0;
	}

	/* SVG Animations */
	:global(.svg-pulse) {
		animation: svgPulse 2s ease-in-out infinite;
	}
	:global(.svg-float) {
		animation: svgFloat 3s ease-in-out infinite;
	}
	:global(.svg-grow) {
		animation: svgGrow 2.5s ease-in-out infinite;
	}

	@keyframes svgPulse {
		0%, 100% { opacity: 1; r: 4; }
		50% { opacity: 0.5; r: 6; }
	}
	@keyframes svgFloat {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-4px); }
	}
	@keyframes svgGrow {
		0%, 100% { opacity: 0.8; }
		50% { opacity: 1; }
	}

	.guide-faq { margin-top: 3rem; }

	@media (max-width: 900px) {
		.guide-hero-inner {
			grid-template-columns: 1fr;
		}
		.guide-hero-svg { display: none; }
		.guide-layout {
			grid-template-columns: 1fr;
		}
		.guide-toc { display: none; }
	}
</style>
