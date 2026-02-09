<script>
	const tools = [
		{ slug: 'liquidation-calculator', title: 'Liquidation Price Calculator', icon: '💥', desc: 'Calculate your exact liquidation price based on entry price, leverage, margin mode, and position size.' },
		{ slug: 'margin-calculator', title: 'Margin Calculator', icon: '🧮', desc: 'Calculate the required margin for any position size and leverage level.' },
		{ slug: 'position-size-calculator', title: 'Position Size Calculator', icon: '📐', desc: 'Calculate optimal position size based on your account size, risk tolerance, and stop loss distance.' },
	];
</script>

<svelte:head>
	<title>Margin Trading Calculators & Tools | MarginTrade</title>
	<meta name="description" content="Free margin trading calculators. Calculate liquidation price, required margin, and position size for leveraged trades." />
	<link rel="canonical" href="https://www.margintrade.com/tools" />
</svelte:head>

<div class="container" style="padding-top: 2rem; padding-bottom: 4rem;">
	<nav class="breadcrumbs">
		<a href="/">Home</a> <span>/</span> <span>Tools</span>
	</nav>

	<h1>Margin Trading Calculators</h1>
	<p style="font-size: 1.1rem; max-width: 600px;">Free tools to help you calculate key margin trading metrics. All calculations happen in your browser — no data is sent anywhere.</p>

	<div class="grid-3" style="margin-top: 2rem;">
		{#each tools as tool}
			<a href="/tools/{tool.slug}" class="card" style="text-decoration: none;">
				<div style="font-size: 2.5rem; margin-bottom: 0.75rem;">{tool.icon}</div>
				<h3 style="margin: 0 0 0.5rem; font-size: 1.1rem;">{tool.title}</h3>
				<p style="font-size: 0.85rem; margin: 0;">{tool.desc}</p>
			</a>
		{/each}
	</div>
</div>
