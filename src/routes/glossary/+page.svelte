<script>
	import { glossaryTerms } from '$lib/data/glossary.js';
</script>

<svelte:head>
	<title>Margin Trading Glossary — Key Terms Explained | MarginTrade</title>
	<meta name="description" content="Complete glossary of margin trading terms. Learn about leverage, liquidation, margin calls, funding rates, and more with detailed explanations." />
	<link rel="canonical" href="https://www.margintrade.com/glossary" />
</svelte:head>

<div class="container">
	<nav class="breadcrumbs">
		<a href="/">Home</a> <span>/</span> <span>Glossary</span>
	</nav>

	<h1>Margin Trading Glossary</h1>
	<p style="font-size: 1.1rem;">Essential terms every margin trader should understand. Click any term for a detailed explanation.</p>

	<div class="grid-2" style="margin-top: 2rem;">
		{#each glossaryTerms as term}
			<a href="/glossary/{term.slug}" class="card" style="text-decoration: none;">
				<h3 style="margin: 0 0 0.5rem; font-size: 1.15rem;">{term.term}</h3>
				<p style="font-size: 0.875rem; margin: 0;">{term.shortDefinition}</p>
			</a>
		{/each}
	</div>
</div>
