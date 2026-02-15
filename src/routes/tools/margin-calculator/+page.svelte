<script>
	let positionSize = $state(10000);
	let leverage = $state(10);

	let requiredMargin = $derived(positionSize / leverage);
	let marginPct = $derived(100 / leverage);

	const breadcrumbLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.margintrade.com" },
			{ "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.margintrade.com/tools" },
			{ "@type": "ListItem", "position": 3, "name": "Margin Calculator", "item": "https://www.margintrade.com/tools/margin-calculator" }
		]
	};
</script>

<svelte:head>
	<title>Margin Calculator — Calculate Required Margin | MarginTrade</title>
	<meta name="description" content="Calculate the required margin for any position size and leverage level. Free margin trading calculator with live results." />
	<link rel="canonical" href="https://www.margintrade.com/tools/margin-calculator" />
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>`}
</svelte:head>

<div class="container" style="padding-top: 2rem; padding-bottom: 4rem;">
	<nav class="breadcrumbs">
		<a href="/">Home</a> <span>/</span>
		<a href="/tools">Tools</a> <span>/</span>
		<span>Margin Calculator</span>
	</nav>

	<h1>🧮 Margin Calculator</h1>
	<p>Calculate how much margin (collateral) you need to open a leveraged position.</p>

	<div class="calc-grid">
		<div class="calc-inputs">
			<div class="input-group">
				<label for="position">Position Size ($)</label>
				<input id="position" type="number" bind:value={positionSize} min="0" step="any" />
			</div>

			<div class="input-group">
				<label for="lev">Leverage ({leverage}x)</label>
				<input id="lev" type="range" bind:value={leverage} min="1" max="200" step="1" />
				<div class="range-labels"><span>1x</span><span>50x</span><span>100x</span><span>200x</span></div>
			</div>

			<!-- Quick leverage buttons -->
			<div class="quick-btns">
				{#each [2, 5, 10, 20, 50, 100] as lev}
					<button class="quick-btn" class:active={leverage === lev} onclick={() => leverage = lev}>{lev}x</button>
				{/each}
			</div>
		</div>

		<div class="calc-results">
			<div class="result-card result-main">
				<span class="result-label">Required Margin</span>
				<span class="result-value">${requiredMargin.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
			</div>
			<div class="result-card">
				<span class="result-label">Margin Percentage</span>
				<span class="result-value">{marginPct.toFixed(2)}%</span>
			</div>
			<div class="result-card">
				<span class="result-label">Borrowed Amount</span>
				<span class="result-value">${(positionSize - requiredMargin).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
			</div>

			<!-- Leverage comparison -->
			<div class="lev-table">
				<h4>Margin at Different Leverage Levels</h4>
				<table>
					<thead><tr><th>Leverage</th><th>Margin Required</th><th>Margin %</th></tr></thead>
					<tbody>
						{#each [2, 5, 10, 25, 50, 100] as l}
							<tr class:active-row={l === leverage}>
								<td>{l}x</td>
								<td>${(positionSize / l).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
								<td>{(100 / l).toFixed(1)}%</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<section style="margin-top: 3rem;">
		<h2>Understanding Margin</h2>
		<p>Margin is the collateral you deposit to open a leveraged position. It acts as a security deposit — the exchange lends you the rest.</p>
		<div class="formula-card">
			<p><strong>Formula:</strong></p>
			<code>Required Margin = Position Size ÷ Leverage</code>
		</div>
		<p>For example, to open a $10,000 position with 10x leverage, you need $1,000 in margin. The exchange effectively lends you the remaining $9,000.</p>
	</section>

	<div class="related-links">
		<h3>Related Tools & Guides</h3>
		<ul>
			<li><a href="/tools/liquidation-calculator">Liquidation Calculator</a></li>
			<li><a href="/tools/position-size-calculator">Position Size Calculator</a></li>
			<li><a href="/learn/what-is-margin-trading">What Is Margin Trading?</a></li>
			<li><a href="/learn/leverage-ratios-explained">Leverage Explained</a></li>
		</ul>
	</div>
</div>

<style>
	.calc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0; }
	.calc-inputs { display: flex; flex-direction: column; gap: 1.25rem; }
	.input-group { display: flex; flex-direction: column; gap: 0.4rem; }
	.input-group label { font-size: 0.82rem; font-weight: 600; color: var(--text-muted); }
	input[type="number"] { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 0.75rem 1rem; color: var(--text-primary); font-size: 1rem; font-family: inherit; }
	input[type="number"]:focus { outline: none; border-color: var(--accent); }
	input[type="range"] { width: 100%; accent-color: var(--accent); }
	.range-labels { display: flex; justify-content: space-between; font-size: 0.7rem; color: var(--text-muted); }

	.quick-btns { display: flex; gap: 0.4rem; flex-wrap: wrap; }
	.quick-btn { padding: 0.4rem 0.8rem; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); color: var(--text-muted); font-size: 0.82rem; cursor: pointer; transition: all 0.2s; font-family: inherit; }
	.quick-btn.active, .quick-btn:hover { background: var(--accent); border-color: var(--accent); color: white; }

	.calc-results { display: flex; flex-direction: column; gap: 1rem; }
	.result-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1rem 1.25rem; display: flex; justify-content: space-between; align-items: center; }
	.result-main { border-color: var(--accent); border-width: 2px; }
	.result-label { font-size: 0.82rem; color: var(--text-muted); }
	.result-value { font-size: 1.25rem; font-weight: 700; color: var(--text-primary); }

	.lev-table { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.25rem; }
	.lev-table h4 { margin: 0 0 0.75rem; font-size: 0.9rem; }
	.active-row td { color: var(--accent-light); font-weight: 600; }

	.formula-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 1rem 1.25rem; margin-bottom: 1rem; }
	.formula-card code { font-size: 0.95rem; color: var(--accent-light); }

	@media (max-width: 700px) { .calc-grid { grid-template-columns: 1fr; } }
</style>
