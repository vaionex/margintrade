<script>
	let accountSize = $state(10000);
	let riskPct = $state(1);
	let entryPrice = $state(50000);
	let stopLossPrice = $state(49000);

	let riskAmount = $derived(accountSize * riskPct / 100);
	let slDistance = $derived(Math.abs(entryPrice - stopLossPrice));
	let slDistancePct = $derived(entryPrice > 0 ? (slDistance / entryPrice * 100) : 0);
	let positionSizeUnits = $derived(slDistance > 0 ? riskAmount / slDistance : 0);
	let positionSizeUsd = $derived(positionSizeUnits * entryPrice);
	let requiredLeverage = $derived(accountSize > 0 ? positionSizeUsd / accountSize : 0);

	const breadcrumbLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.margintrade.com" },
			{ "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.margintrade.com/tools" },
			{ "@type": "ListItem", "position": 3, "name": "Position Size Calculator", "item": "https://www.margintrade.com/tools/position-size-calculator" }
		]
	};
</script>

<svelte:head>
	<title>Position Size Calculator — Risk Management Tool | MarginTrade</title>
	<meta name="description" content="Calculate the optimal position size for leveraged trades based on your account size, risk percentage, and stop loss distance." />
	<link rel="canonical" href="https://www.margintrade.com/tools/position-size-calculator" />
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>`}
</svelte:head>

<div class="container-narrow" style="padding-top: 2rem; padding-bottom: 4rem;">
	<nav class="breadcrumbs">
		<a href="/">Home</a> <span>/</span>
		<a href="/tools">Tools</a> <span>/</span>
		<span>Position Size Calculator</span>
	</nav>

	<h1>📐 Position Size Calculator</h1>
	<p>Calculate the right position size to risk only a set percentage of your account on each trade.</p>

	<div class="calc-grid">
		<div class="calc-inputs">
			<div class="input-group">
				<label for="account">Account Size ($)</label>
				<input id="account" type="number" bind:value={accountSize} min="0" step="any" />
			</div>

			<div class="input-group">
				<label for="risk">Risk Per Trade ({riskPct}%)</label>
				<input id="risk" type="range" bind:value={riskPct} min="0.1" max="10" step="0.1" />
				<div class="range-labels"><span>0.1%</span><span>2%</span><span>5%</span><span>10%</span></div>
			</div>
			<div class="quick-btns">
				{#each [0.5, 1, 2, 3, 5] as r}
					<button class="quick-btn" class:active={riskPct === r} onclick={() => riskPct = r}>{r}%</button>
				{/each}
			</div>

			<div class="input-group">
				<label for="entry">Entry Price ($)</label>
				<input id="entry" type="number" bind:value={entryPrice} min="0" step="any" />
			</div>

			<div class="input-group">
				<label for="sl">Stop Loss Price ($)</label>
				<input id="sl" type="number" bind:value={stopLossPrice} min="0" step="any" />
			</div>
		</div>

		<div class="calc-results">
			<div class="result-card result-main">
				<span class="result-label">Position Size</span>
				<span class="result-value">${positionSizeUsd.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
			</div>
			<div class="result-card">
				<span class="result-label">Position (Units)</span>
				<span class="result-value">{positionSizeUnits.toFixed(6)}</span>
			</div>
			<div class="result-card">
				<span class="result-label">Risk Amount</span>
				<span class="result-value" style="color: var(--red);">${riskAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
			</div>
			<div class="result-card">
				<span class="result-label">Stop Loss Distance</span>
				<span class="result-value">{slDistancePct.toFixed(2)}%</span>
			</div>
			<div class="result-card">
				<span class="result-label">Required Leverage</span>
				<span class="result-value" class:result-danger={requiredLeverage > 20} class:result-warning={requiredLeverage > 5 && requiredLeverage <= 20} class:result-safe={requiredLeverage <= 5}>{requiredLeverage.toFixed(1)}x</span>
			</div>

			<!-- Risk at Different Percentages -->
			<div class="lev-table">
				<h4>Position Size at Different Risk Levels</h4>
				<table>
					<thead><tr><th>Risk %</th><th>Risk ($)</th><th>Position Size</th></tr></thead>
					<tbody>
						{#each [0.5, 1, 2, 3, 5] as r}
							{@const ra = accountSize * r / 100}
							{@const ps = slDistance > 0 ? (ra / slDistance) * entryPrice : 0}
							<tr class:active-row={r === riskPct}>
								<td>{r}%</td>
								<td>${ra.toLocaleString()}</td>
								<td>${ps.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<section style="margin-top: 3rem;">
		<h2>How Position Sizing Works</h2>
		<p>Position sizing ensures you never risk more than a predetermined percentage of your account on any single trade.</p>
		<div class="formula-card">
			<p><strong>Formula:</strong></p>
			<code>Position Size = (Account × Risk %) ÷ (Entry Price − Stop Loss Price)</code>
		</div>
		<h3>The 1% Rule</h3>
		<p>Most professional traders risk no more than 1% of their account per trade. With a $10,000 account, this means risking only $100 per trade. Even after 10 consecutive losses, you'd still have $9,000 — staying in the game.</p>
		<h3>Why It Matters</h3>
		<ul>
			<li><strong>Consistent risk</strong> — Every trade risks the same percentage regardless of asset or timeframe</li>
			<li><strong>Survivable drawdowns</strong> — Even long losing streaks won't blow your account</li>
			<li><strong>Emotional control</strong> — Knowing your max loss reduces trading anxiety</li>
		</ul>
	</section>

	<div class="related-links">
		<h3>Related Tools & Guides</h3>
		<ul>
			<li><a href="/tools/liquidation-calculator">Liquidation Calculator</a></li>
			<li><a href="/tools/margin-calculator">Margin Calculator</a></li>
			<li><a href="/learn/position-sizing-for-leveraged-trades">Position Sizing Guide</a></li>
			<li><a href="/learn/margin-trading-risks">Trading Risks</a></li>
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
	.result-danger { color: var(--red); }
	.result-warning { color: var(--yellow); }
	.result-safe { color: var(--green); }
	.lev-table { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.25rem; }
	.lev-table h4 { margin: 0 0 0.75rem; font-size: 0.9rem; }
	.active-row td { color: var(--accent-light); font-weight: 600; }
	.formula-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 1rem 1.25rem; margin-bottom: 1rem; }
	.formula-card code { font-size: 0.95rem; color: var(--accent-light); }
	@media (max-width: 700px) { .calc-grid { grid-template-columns: 1fr; } }
</style>
