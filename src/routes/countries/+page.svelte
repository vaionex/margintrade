<script>
	import { countries } from '$lib/data/countries.js';
</script>

<svelte:head>
	<title>Margin Trading by Country — Regulations & Platforms | MarginTrade</title>
	<meta name="description" content="Margin trading regulations, platforms, and tax implications by country. Find the best platforms available in your region." />
	<link rel="canonical" href="https://www.margintrade.com/countries" />
</svelte:head>

<div class="container" style="padding-top: 2rem; padding-bottom: 4rem;">
	<nav class="breadcrumbs">
		<a href="/">Home</a> <span>/</span> <span>Countries</span>
	</nav>

	<h1>Margin Trading by Country</h1>
	<p style="font-size: 1.1rem; max-width: 600px;">Regulations, available platforms, and tax implications for margin trading in your country.</p>

	<div class="grid-3" style="margin-top: 2rem;">
		{#each countries as country}
			<a href="/countries/{country.slug}" class="card" style="text-decoration: none; text-align: center;">
				<div style="font-size: 3rem; margin-bottom: 0.5rem;">{country.flag}</div>
				<h3 style="margin: 0 0 0.5rem; font-size: 1.15rem;">{country.name}</h3>
				<p style="font-size: 0.82rem; margin: 0 0 0.5rem;">{country.regulation.status}</p>
				<span class="badge badge-blue" style="font-size: 0.65rem;">{country.regulation.regulator.split(',')[0]}</span>
			</a>
		{/each}
	</div>
</div>
