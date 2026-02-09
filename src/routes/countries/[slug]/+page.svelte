<script>
	import { countries } from '$lib/data/countries.js';
	let { data } = $props();
	const { country, platforms } = data;

	const breadcrumbLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.margintrade.com" },
			{ "@type": "ListItem", "position": 2, "name": "Countries", "item": "https://www.margintrade.com/countries" },
			{ "@type": "ListItem", "position": 3, "name": country.name, "item": `https://www.margintrade.com/countries/${country.slug}` }
		]
	};

	const otherCountries = countries.filter(c => c.slug !== country.slug).slice(0, 5);
</script>

<svelte:head>
	<title>Margin Trading in {country.name} {country.flag} — Regulations & Best Platforms | MarginTrade</title>
	<meta name="description" content={country.metaDescription} />
	<link rel="canonical" href="https://www.margintrade.com/countries/{country.slug}" />
	<meta property="og:title" content="Margin Trading in {country.name} {country.flag}" />
	<meta property="og:description" content={country.metaDescription} />
	<meta property="og:url" content="https://www.margintrade.com/countries/{country.slug}" />
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>`}
</svelte:head>

<div class="container-narrow" style="padding-top: 2rem; padding-bottom: 4rem;">
	<nav class="breadcrumbs">
		<a href="/">Home</a> <span>/</span>
		<a href="/countries">Countries</a> <span>/</span>
		<span>{country.name}</span>
	</nav>

	<!-- Header with Flag -->
	<div class="country-header">
		<span class="country-flag">{country.flag}</span>
		<div>
			<h1>Margin Trading in {country.name}</h1>
			<p style="margin:0; font-size: 1.05rem;">{country.metaDescription}</p>
		</div>
	</div>

	<!-- Regulation Overview -->
	<section class="country-section">
		<h2>📋 Regulatory Overview</h2>
		<div class="reg-card">
			<div class="reg-grid">
				<div class="reg-item">
					<span class="reg-label">Regulator</span>
					<span class="reg-value">{country.regulation.regulator}</span>
				</div>
				<div class="reg-item">
					<span class="reg-label">Status</span>
					<span class="reg-value">{country.regulation.status}</span>
				</div>
			</div>
			<p style="margin-top: 1rem;">{country.regulation.overview}</p>
		</div>
	</section>

	<!-- Top Platforms -->
	<section class="country-section">
		<h2>🏆 Top Platforms for {country.name}</h2>
		<div style="overflow-x: auto;">
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Platform</th>
						<th>Type</th>
						<th>Max Leverage</th>
						<th>Fees</th>
						<th>Rating</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{#each platforms as p, i}
						<tr>
							<td><strong>{i + 1}</strong></td>
							<td><a href="/exchanges/{p.slug}"><strong>{p.name}</strong></a></td>
							<td><span class="badge badge-blue">{p.type}</span></td>
							<td>{p.maxLeverage}x</td>
							<td>{p.makerFee}% / {p.takerFee}%</td>
							<td><span class="stars">{'★'.repeat(Math.round(p.rating))}</span> {p.rating}</td>
							<td><a href={p.referralUrl} target="_blank" rel="noopener noreferrer" class="btn btn-green" style="padding:0.35rem 0.7rem; font-size:0.78rem;">Visit →</a></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>

	<!-- Legal Restrictions -->
	<section class="country-section">
		<h2>⚠️ Legal Restrictions & Requirements</h2>
		<div class="restrictions-box">
			<ul>
				{#each country.restrictions as r}
					<li>{r}</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- Tax Implications -->
	<section class="country-section">
		<h2>💰 Tax Implications</h2>
		<div class="tax-card">
			<div class="tax-rate">
				<span class="tax-rate-label">Effective Tax Rate</span>
				<span class="tax-rate-value">{country.tax.rate}</span>
			</div>
			<p>{country.tax.summary}</p>
		</div>
	</section>

	<!-- Related Countries -->
	<div class="related-links">
		<h3>Other Countries</h3>
		<ul>
			{#each otherCountries as oc}
				<li><a href="/countries/{oc.slug}">{oc.flag} {oc.name}</a></li>
			{/each}
		</ul>
	</div>

	<div class="related-links">
		<h3>Related Guides</h3>
		<ul>
			<li><a href="/learn/margin-trading-usa-regulations">US Regulations Guide</a></li>
			<li><a href="/learn/margin-trading-tax-guide">Tax Guide</a></li>
			<li><a href="/learn/best-margin-trading-platforms-2026">Best Platforms 2026</a></li>
			<li><a href="/tools/liquidation-calculator">Liquidation Calculator</a></li>
		</ul>
	</div>

	<div class="disclaimer">
		<strong>Disclaimer:</strong> This information is for educational purposes only and should not be considered legal or tax advice. Regulations change frequently. Always consult a qualified professional in your jurisdiction.
	</div>
</div>

<style>
	.country-header {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}
	.country-flag {
		font-size: 4rem;
		line-height: 1;
	}
	.country-header h1 {
		margin-bottom: 0.25rem;
	}

	.country-section {
		margin-bottom: 2.5rem;
	}

	.reg-card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: 1.5rem;
	}
	.reg-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	.reg-item {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.reg-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-muted);
	}
	.reg-value {
		font-weight: 600;
		color: var(--text-primary);
	}

	.restrictions-box {
		background: var(--bg-card);
		border: 1px solid var(--yellow);
		border-left: 4px solid var(--yellow);
		border-radius: var(--radius-lg);
		padding: 1.5rem;
	}
	.restrictions-box ul {
		margin: 0;
		padding-left: 1.25rem;
	}
	.restrictions-box li {
		color: var(--text-secondary);
		margin-bottom: 0.5rem;
	}
	.restrictions-box li:last-child {
		margin-bottom: 0;
	}

	.tax-card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: 1.5rem;
	}
	.tax-rate {
		display: inline-flex;
		flex-direction: column;
		gap: 0.25rem;
		background: var(--bg-tertiary);
		padding: 0.75rem 1.25rem;
		border-radius: var(--radius);
		margin-bottom: 1rem;
	}
	.tax-rate-label {
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-muted);
	}
	.tax-rate-value {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--accent-light);
	}

	@media (max-width: 600px) {
		.country-header {
			flex-direction: column;
			text-align: center;
			gap: 0.75rem;
		}
		.reg-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
