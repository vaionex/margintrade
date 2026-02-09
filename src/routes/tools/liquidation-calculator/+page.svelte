<script>
	let entryPrice = $state(50000);
	let leverage = $state(10);
	let marginMode = $state('isolated');
	let positionSize = $state(1000);
	let direction = $state('long');
	let maintenanceRate = $state(0.5);

	let liqPrice = $derived.by(() => {
		const mmr = maintenanceRate / 100;
		if (direction === 'long') {
			return entryPrice * (1 - 1 / leverage + mmr);
		} else {
			return entryPrice * (1 + 1 / leverage - mmr);
		}
	});

	let distancePct = $derived(Math.abs((liqPrice - entryPrice) / entryPrice * 100));
	let totalPosition = $derived(positionSize * leverage);

	const breadcrumbLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [
			{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.margintrade.com" },
			{ "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.margintrade.com/tools" },
			{ "@type": "ListItem", "position": 3, "name": "Liquidation Calculator", "item": "https://www.margintrade.com/tools/liquidation-calculator" }
		]
	};
</script>

<svelte:head>
	<title>Liquidation Price Calculator — Free Margin Trading Tool | MarginTrade</title>
	<meta name="description" content="Calculate your exact liquidation price for margin trading. Enter your entry price, leverage, and margin mode to see when your position gets liquidated." />
	<link rel="canonical" href="https://www.margintrade.com/tools/liquidation-calculator" />
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>`}
</svelte:head>

<div class="container-narrow" style="padding-top: 2rem; padding-bottom: 4rem;">
	<nav class="breadcrumbs">
		<a href="/">Home</a> <span>/</span>
		<a href="/tools">Tools</a> <span>/</span>
		<span>Liquidation Calculator</span>
	</nav>

	<h1>💥 Liquidation Price Calculator</h1>
	<p>Calculate when your leveraged position will be automatically closed. Enter your trade parameters below.</p>

	<div class="calc-grid">
		<div class="calc-inputs">
			<div class="input-group">
				<label for="direction">Direction</label>
				<div class="toggle-row">
					<button class="toggle-btn" class:active={direction === 'long'} onclick={() => direction = 'long'}>📈 Long</button>
					<button class="toggle-btn" class:active={direction === 'short'} onclick={() => direction = 'short'}>📉 Short</button>
				</div>
			</div>

			<div class="input-group">
				<label for="entry">Entry Price ($)</label>
				<input id="entry" type="number" bind:value={entryPrice} min="0" step="any" />
			</div>

			<div class="input-group">
				<label for="leverage">Leverage ({leverage}x)</label>
				<input id="leverage" type="range" bind:value={leverage} min="1" max="200" step="1" />
				<div class="range-labels">
					<span>1x</span><span>50x</span><span>100x</span><span>200x</span>
				</div>
			</div>

			<div class="input-group">
				<label for="margin-mode">Margin Mode</label>
				<div class="toggle-row">
					<button class="toggle-btn" class:active={marginMode === 'isolated'} onclick={() => marginMode = 'isolated'}>🔒 Isolated</button>
					<button class="toggle-btn" class:active={marginMode === 'cross'} onclick={() => marginMode = 'cross'}>🔗 Cross</button>
				</div>
			</div>

			<div class="input-group">
				<label for="size">Margin (Position Collateral) ($)</label>
				<input id="size" type="number" bind:value={positionSize} min="0" step="any" />
			</div>

			<div class="input-group">
				<label for="mmr">Maintenance Margin Rate (%)</label>
				<input id="mmr" type="number" bind:value={maintenanceRate} min="0" max="50" step="0.1" />
			</div>
		</div>

		<div class="calc-results">
			<div class="result-card result-main">
				<span class="result-label">Liquidation Price</span>
				<span class="result-value" class:result-danger={distancePct < 5}>${liqPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
			</div>
			<div class="result-card">
				<span class="result-label">Distance to Liquidation</span>
				<span class="result-value" class:result-danger={distancePct < 5} class:result-warning={distancePct < 10 && distancePct >= 5} class:result-safe={distancePct >= 10}>{distancePct.toFixed(2)}%</span>
			</div>
			<div class="result-card">
				<span class="result-label">Total Position Size</span>
				<span class="result-value">${totalPosition.toLocaleString()}</span>
			</div>
			<div class="result-card">
				<span class="result-label">Leverage</span>
				<span class="result-value">{leverage}x</span>
			</div>

			<!-- Visual indicator -->
			<div class="liq-visual">
				<div class="liq-bar">
					<div class="liq-entry" style="left: 50%;">
						<div class="liq-marker entry-marker"></div>
						<span>Entry</span>
					</div>
					<div class="liq-point" style="left: {direction === 'long' ? Math.max(5, 50 - distancePct * 2) : Math.min(95, 50 + distancePct * 2)}%;">
						<div class="liq-marker liq-marker-danger"></div>
						<span>Liq.</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Educational Section -->
	<section style="margin-top: 3rem;">
		<h2>How Liquidation Price Is Calculated</h2>
		<p>Your liquidation price is the price at which the exchange automatically closes your position because your margin (collateral) can no longer cover the losses.</p>

		<h3>Formulas</h3>
		<div class="formula-card">
			<p><strong>Long Position:</strong></p>
			<code>Liquidation Price = Entry × (1 - 1/Leverage + Maintenance Margin Rate)</code>
		</div>
		<div class="formula-card">
			<p><strong>Short Position:</strong></p>
			<code>Liquidation Price = Entry × (1 + 1/Leverage - Maintenance Margin Rate)</code>
		</div>

		<h3>Key Takeaways</h3>
		<ul>
			<li><strong>Higher leverage = closer liquidation</strong> — At 100x, just 1% against you triggers liquidation</li>
			<li><strong>Isolated margin</strong> limits your loss to the margin allocated to that trade</li>
			<li><strong>Cross margin</strong> uses your entire balance, so liquidation is further but more is at risk</li>
			<li><strong>Always set stop-losses</strong> well before your liquidation price</li>
		</ul>
	</section>

	<div class="related-links">
		<h3>Related Tools & Guides</h3>
		<ul>
			<li><a href="/tools/margin-calculator">Margin Calculator</a></li>
			<li><a href="/tools/position-size-calculator">Position Size Calculator</a></li>
			<li><a href="/learn/liquidation-price-calculator-guide">Liquidation Guide</a></li>
			<li><a href="/learn/leverage-ratios-explained">Leverage Explained</a></li>
		</ul>
	</div>
</div>

<style>
	.calc-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin: 2rem 0;
	}
	.calc-inputs {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}
	.input-group {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.input-group label {
		font-size: 0.82rem;
		font-weight: 600;
		color: var(--text-muted);
	}
	input[type="number"] {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		padding: 0.75rem 1rem;
		color: var(--text-primary);
		font-size: 1rem;
		font-family: inherit;
	}
	input[type="number"]:focus {
		outline: none;
		border-color: var(--accent);
	}
	input[type="range"] {
		width: 100%;
		accent-color: var(--accent);
	}
	.range-labels {
		display: flex;
		justify-content: space-between;
		font-size: 0.7rem;
		color: var(--text-muted);
	}
	.toggle-row {
		display: flex;
		gap: 0.5rem;
	}
	.toggle-btn {
		flex: 1;
		padding: 0.65rem;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		color: var(--text-muted);
		font-size: 0.9rem;
		cursor: pointer;
		transition: all 0.2s;
		font-family: inherit;
	}
	.toggle-btn.active {
		background: var(--accent);
		border-color: var(--accent);
		color: white;
		font-weight: 600;
	}

	.calc-results {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.result-card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: 1rem 1.25rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.result-main {
		border-color: var(--accent);
		border-width: 2px;
	}
	.result-label {
		font-size: 0.82rem;
		color: var(--text-muted);
	}
	.result-value {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text-primary);
	}
	.result-danger { color: var(--red); }
	.result-warning { color: var(--yellow); }
	.result-safe { color: var(--green); }

	.liq-visual {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: 1.5rem;
	}
	.liq-bar {
		position: relative;
		height: 40px;
		background: linear-gradient(90deg, var(--red), var(--yellow), var(--green));
		border-radius: 20px;
		opacity: 0.3;
	}
	.liq-entry, .liq-point {
		position: absolute;
		top: -8px;
		transform: translateX(-50%);
		text-align: center;
		font-size: 0.7rem;
		color: var(--text-muted);
	}
	.liq-marker {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		margin: 0 auto 4px;
	}
	.entry-marker { background: var(--accent); }
	.liq-marker-danger { background: var(--red); }

	.formula-card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		padding: 1rem 1.25rem;
		margin-bottom: 1rem;
	}
	.formula-card code {
		font-size: 0.95rem;
		color: var(--accent-light);
	}

	@media (max-width: 700px) {
		.calc-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
