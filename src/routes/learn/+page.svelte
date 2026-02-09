<script>
	import { guides } from '$lib/data/guides.js';
	const categories = [...new Set(guides.map(g => g.category))];
</script>

<svelte:head>
	<title>Margin Trading Guides — Learn Leveraged Trading | MarginTrade</title>
	<meta name="description" content="Free educational guides on margin trading. Learn about leverage, liquidation, risk management, strategies, and the best platforms for 2026." />
	<link rel="canonical" href="https://www.margintrade.com/learn" />
	<meta property="og:title" content="Margin Trading Guides — Learn Leveraged Trading" />
	<meta property="og:description" content="Free educational guides on margin trading." />
	<meta property="og:url" content="https://www.margintrade.com/learn" />
</svelte:head>

<div class="container" style="padding-top: 2rem; padding-bottom: 4rem;">
	<nav class="breadcrumbs">
		<a href="/">Home</a> <span>/</span> <span>Guides</span>
	</nav>

	<h1>Margin Trading Guides</h1>
	<p style="font-size: 1.1rem; max-width: 600px;">Expert-written educational content covering everything from the basics of margin trading to advanced strategies and risk management.</p>

	{#each categories as cat}
		<h2 style="margin-top: 3rem;">{cat}</h2>
		<div class="grid-2" style="margin-top: 1rem;">
			{#each guides.filter(g => g.category === cat) as guide}
				<a href="/learn/{guide.slug}" class="card" style="text-decoration:none;">
					<span class="badge badge-blue" style="font-size:0.65rem;">{guide.category}</span>
					<h3 style="font-size: 1.05rem; margin: 0.5rem 0;">{guide.title}</h3>
					<p style="font-size: 0.85rem; margin: 0;">{guide.metaDescription}</p>
					<div style="margin-top: 0.75rem; font-size: 0.78rem; color: var(--text-muted);">📖 {guide.readTime} min · Updated {guide.lastUpdated}</div>
				</a>
			{/each}
		</div>
	{/each}
</div>
