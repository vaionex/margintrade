<script>
	import { guides } from '$lib/data/guides.js';

	const categories = [...new Set(guides.map(g => g.category))];
</script>

<svelte:head>
	<title>Margin Trading Guides — Learn Leveraged Trading | MarginTrade</title>
	<meta name="description" content="Comprehensive margin trading guides covering everything from basics to advanced strategies. Learn about leverage, risk management, and profitable trading." />
	<link rel="canonical" href="https://www.margintrade.com/guides" />
</svelte:head>

<div class="container">
	<nav class="breadcrumbs">
		<a href="/">Home</a> <span>/</span> <span>Guides</span>
	</nav>

	<h1>Margin Trading Guides</h1>
	<p style="font-size: 1.1rem;">Everything you need to know about margin trading, from beginner basics to advanced strategies.</p>

	{#each categories as category}
		<h2>{category}</h2>
		<div class="grid-2" style="margin-bottom: 2rem;">
			{#each guides.filter(g => g.category === category) as guide}
				<a href="/guides/{guide.slug}" class="card" style="text-decoration: none;">
					<span class="badge badge-blue">{guide.category}</span>
					<h3 style="font-size: 1.05rem; margin: 0.5rem 0 0.25rem;">{guide.title}</h3>
					<p style="font-size: 0.85rem; margin: 0; color: var(--text-muted);">{guide.readTime} min read · Updated {guide.lastUpdated}</p>
					<p style="font-size: 0.875rem; margin: 0.5rem 0 0;">{guide.metaDescription}</p>
				</a>
			{/each}
		</div>
	{/each}
</div>
