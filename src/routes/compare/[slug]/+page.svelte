<script>
	import { comparisons } from '$lib/data/comparisons.js';
	let { data } = $props();
	const { comparison: comp, ex1, ex2 } = data;
	let openFaq = $state(-1);

	const totalCats = comp.categories.length;
	const ex1Wins = comp.categories.filter(c => c.winner === comp.exchange1).length;
	const ex2Wins = comp.categories.filter(c => c.winner === comp.exchange2).length;
	const ties = comp.categories.filter(c => c.winner === 'tie').length;

	// Score bars (0-100)
	function catScore(cat) {
		if (cat.winner === comp.exchange1) return { s1: 85, s2: 60 };
		if (cat.winner === comp.exchange2) return { s1: 60, s2: 85 };
		return { s1: 75, s2: 75 };
	}

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

	const otherComps = comparisons.filter(c => c.slug !== comp.slug).slice(0, 4);
</script>

<svelte:head>
	<title>{comp.title} | MarginTrade</title>
	<meta name="description" content={comp.metaDescription} />
	<link rel="canonical" href="https://www.margintrade.com/compare/{comp.slug}" />
	<meta property="og:title" content={comp.title} />
	<meta property="og:description" content={comp.metaDescription} />
	<meta property="og:url" content="https://www.margintrade.com/compare/{comp.slug}" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>`}
	{#if faqLd}{@html `<script type="application/ld+json">${JSON.stringify(faqLd)}</script>`}{/if}
</svelte:head>

<!-- Animated VS Hero -->
<section class="vs-hero">
	<div class="vs-hero-inner">
		<nav class="breadcrumbs" style="padding:0; margin-bottom: 1rem; justify-content: center;">
			<a href="/">Home</a> <span>/</span>
			<a href="/compare">Compare</a> <span>/</span>
			<span>{ex1?.name} vs {ex2?.name}</span>
		</nav>
		<div class="vs-matchup">
			<div class="vs-fighter">
				<div class="vs-fighter-icon">{ex1?.name?.charAt(0) || '?'}</div>
				<h2>{ex1?.name || comp.exchange1}</h2>
				<div class="vs-stat">{ex1?.rating}/5 ★</div>
				<div class="vs-stat">{ex1?.maxLeverage}x leverage</div>
			</div>
			<div class="vs-badge">
				<span class="vs-text">VS</span>
				<svg class="vs-ring" viewBox="0 0 100 100">
					<circle cx="50" cy="50" r="45" fill="none" stroke="var(--border)" stroke-width="2"/>
					<circle cx="50" cy="50" r="45" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="283" stroke-dashoffset="283" stroke-linecap="round">
						<animate attributeName="stroke-dashoffset" values="283;0" dur="1.5s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1"/>
					</circle>
				</svg>
			</div>
			<div class="vs-fighter">
				<div class="vs-fighter-icon" style="background: linear-gradient(135deg, #8b5cf6, #ec4899);">{ex2?.name?.charAt(0) || '?'}</div>
				<h2>{ex2?.name || comp.exchange2}</h2>
				<div class="vs-stat">{ex2?.rating}/5 ★</div>
				<div class="vs-stat">{ex2?.maxLeverage}x leverage</div>
			</div>
		</div>
		<p class="vs-summary">{comp.intro.split('.')[0]}.</p>
	</div>
</section>

<div class="container-narrow" style="padding-top: 2rem; padding-bottom: 4rem;">

	<!-- Score Summary -->
	<div class="score-summary">
		<div class="score-box" style="border-color: var(--accent);">
			<div class="score-num">{ex1Wins}</div>
			<div class="score-label">{ex1?.name} wins</div>
		</div>
		<div class="score-box" style="border-color: var(--yellow);">
			<div class="score-num">{ties}</div>
			<div class="score-label">Ties</div>
		</div>
		<div class="score-box" style="border-color: #8b5cf6;">
			<div class="score-num">{ex2Wins}</div>
			<div class="score-label">{ex2?.name} wins</div>
		</div>
	</div>

	<!-- Category Cards with Score Bars -->
	<h2>Category Breakdown</h2>
	<div class="cat-cards">
		{#each comp.categories as cat}
			{@const scores = catScore(cat)}
			<div class="cat-card">
				<div class="cat-header">
					<h3>{cat.name}</h3>
					{#if cat.winner === 'tie'}
						<span class="tie-badge">Tie</span>
					{:else}
						<span class="winner-badge">🏆 {cat.winner === comp.exchange1 ? ex1?.name : ex2?.name}</span>
					{/if}
				</div>
				<div class="score-bars">
					<div class="score-bar-row">
						<span class="sb-label">{ex1?.name}</span>
						<div class="sb-track">
							<div class="sb-fill sb-fill-1" style="width: {scores.s1}%;"></div>
						</div>
					</div>
					<div class="score-bar-row">
						<span class="sb-label">{ex2?.name}</span>
						<div class="sb-track">
							<div class="sb-fill sb-fill-2" style="width: {scores.s2}%;"></div>
						</div>
					</div>
				</div>
				<p class="cat-detail">{cat.details}</p>
			</div>
		{/each}
	</div>

	<!-- Gradient Divider -->
	<div class="gradient-divider"></div>

	<!-- Detailed Comparison -->
	<h2>Detailed Analysis</h2>
	{#if comp.comparison.fees}
		<div class="detail-section">
			<h3>💰 Fees</h3>
			<p>{comp.comparison.fees}</p>
		</div>
	{/if}
	{#if comp.comparison.leverage}
		<div class="detail-section">
			<h3>⚡ Leverage</h3>
			<p>{comp.comparison.leverage}</p>
		</div>
	{/if}
	{#if comp.comparison.platform}
		<div class="detail-section">
			<h3>🖥️ Platform & Features</h3>
			<p>{comp.comparison.platform}</p>
		</div>
	{/if}
	{#if comp.comparison.security}
		<div class="detail-section">
			<h3>🔒 Security</h3>
			<p>{comp.comparison.security}</p>
		</div>
	{/if}
	{#if comp.comparison.beginners}
		<div class="detail-section">
			<h3>🎓 For Beginners</h3>
			<p>{comp.comparison.beginners}</p>
		</div>
	{/if}

	<!-- Verdict -->
	<div class="verdict-card">
		<h2 style="margin-top: 0;">🏆 Our Verdict</h2>
		<p style="font-size: 1.05rem; margin: 0; line-height: 1.7;">{comp.verdict}</p>
	</div>

	<!-- CTA -->
	{#if ex1 && ex2}
		<div class="cta-row">
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

	<!-- Related Comparisons -->
	<div class="related-links">
		<h3>Related Comparisons</h3>
		<ul>
			{#each otherComps as rc}
				<li><a href="/compare/{rc.slug}">{rc.title.split(':')[0]}</a></li>
			{/each}
		</ul>
	</div>

	<div class="related-links">
		<h3>Learn More</h3>
		<ul>
			<li><a href="/learn/what-is-margin-trading">What Is Margin Trading?</a></li>
			<li><a href="/learn/best-margin-trading-platforms-2026">Best Platforms 2026</a></li>
			<li><a href="/learn/margin-trading-fees-compared">Fee Comparison Guide</a></li>
			<li><a href="/tools/liquidation-calculator">Liquidation Calculator</a></li>
		</ul>
	</div>

	<div class="disclaimer">
		<strong>Disclaimer:</strong> This comparison contains affiliate links. Rankings are based on our independent research. Margin trading involves risk of loss. Not financial advice.
	</div>
</div>

<style>
	/* VS Hero */
	.vs-hero {
		background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
		padding: 2rem 0 3rem;
		text-align: center;
	}
	.vs-hero-inner {
		max-width: var(--max-width-narrow);
		margin: 0 auto;
		padding: 0 1.5rem;
	}
	.vs-matchup {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		margin: 1.5rem 0;
	}
	.vs-fighter {
		text-align: center;
		flex: 1;
		max-width: 200px;
	}
	.vs-fighter h2 {
		font-size: 1.5rem;
		margin: 0.75rem 0 0.25rem;
	}
	.vs-fighter-icon {
		width: 64px;
		height: 64px;
		border-radius: 16px;
		background: linear-gradient(135deg, var(--accent), #06b6d4);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		font-weight: 800;
		color: white;
		margin: 0 auto;
		animation: floatIn 0.6s ease-out;
	}
	.vs-stat {
		font-size: 0.82rem;
		color: var(--text-muted);
	}
	.vs-badge {
		position: relative;
		width: 80px;
		height: 80px;
		flex-shrink: 0;
	}
	.vs-ring {
		width: 80px;
		height: 80px;
	}
	.vs-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 1.5rem;
		font-weight: 900;
		background: linear-gradient(135deg, var(--accent-light), #f59e0b);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
	.vs-summary {
		color: var(--text-muted);
		max-width: 500px;
		margin: 0 auto;
	}

	@keyframes floatIn {
		from { transform: translateY(20px); opacity: 0; }
		to { transform: translateY(0); opacity: 1; }
	}

	/* Score Summary */
	.score-summary {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
		margin: 2rem 0;
	}
	.score-box {
		text-align: center;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-top: 3px solid;
		border-radius: var(--radius-lg);
		padding: 1.25rem;
	}
	.score-num {
		font-size: 2rem;
		font-weight: 800;
		color: var(--text-primary);
	}
	.score-label {
		font-size: 0.82rem;
		color: var(--text-muted);
	}

	/* Category Cards */
	.cat-cards {
		display: grid;
		gap: 1rem;
		margin: 1.5rem 0 2rem;
	}
	.cat-card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: 1.25rem;
	}
	.cat-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.75rem;
	}
	.cat-header h3 {
		margin: 0;
		font-size: 1rem;
	}
	.score-bars {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.score-bar-row {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
	.sb-label {
		font-size: 0.75rem;
		color: var(--text-muted);
		width: 80px;
		flex-shrink: 0;
		text-align: right;
	}
	.sb-track {
		flex: 1;
		height: 8px;
		background: var(--bg-tertiary);
		border-radius: 4px;
		overflow: hidden;
	}
	.sb-fill {
		height: 100%;
		border-radius: 4px;
		transition: width 1s ease-out;
	}
	.sb-fill-1 { background: linear-gradient(90deg, var(--accent), #06b6d4); }
	.sb-fill-2 { background: linear-gradient(90deg, #8b5cf6, #ec4899); }
	.cat-detail {
		font-size: 0.82rem;
		color: var(--text-muted);
		margin: 0.5rem 0 0;
	}

	/* Gradient Divider */
	.gradient-divider {
		height: 2px;
		background: linear-gradient(90deg, transparent, var(--accent), #8b5cf6, var(--accent), transparent);
		margin: 3rem 0;
		border-radius: 1px;
		animation: shimmer 3s ease-in-out infinite;
	}
	@keyframes shimmer {
		0%, 100% { opacity: 0.5; }
		50% { opacity: 1; }
	}

	/* Detail Sections */
	.detail-section {
		margin-bottom: 2rem;
	}
	.detail-section h3 {
		font-size: 1.15rem;
		margin-bottom: 0.5rem;
	}

	/* Verdict */
	.verdict-card {
		background: var(--bg-card);
		border: 2px solid var(--accent);
		border-radius: var(--radius-lg);
		padding: 2rem;
		margin: 2rem 0;
	}

	.cta-row {
		display: flex;
		gap: 1rem;
		margin: 2rem 0;
		flex-wrap: wrap;
	}

	@media (max-width: 768px) {
		.vs-matchup {
			flex-direction: column;
			gap: 1rem;
		}
		.score-summary {
			grid-template-columns: 1fr;
		}
		
		.cta-row {
			flex-direction: column;
		}
		
		.cta-row .btn {
			width: 100%;
			justify-content: center;
		}
		
		/* Better spacing for mobile */
		.container-narrow {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		
		.vs-hero-inner {
			padding: 0 1rem;
		}
		
		/* Score bar improvements */
		.sb-label {
			width: 60px;
			font-size: 0.7rem;
		}
	}
	
	@media (max-width: 480px) {
		.vs-fighter h2 {
			font-size: 1.2rem;
		}
		
		.vs-fighter-icon {
			width: 48px;
			height: 48px;
			font-size: 1.2rem;
		}
		
		.vs-badge {
			width: 60px;
			height: 60px;
		}
		
		.vs-ring {
			width: 60px;
			height: 60px;
		}
		
		.vs-text {
			font-size: 1.2rem;
		}
	}
</style>
