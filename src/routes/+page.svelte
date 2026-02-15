<script>
	import { exchanges, getCryptoExchanges } from '$lib/data/exchanges.js';
	import { comparisons } from '$lib/data/comparisons.js';
	import { guides } from '$lib/data/guides.js';
	import { onMount } from 'svelte';

	const cryptoExchanges = getCryptoExchanges().slice(0, 6);
	const topGuides = guides.slice(0, 4);

	let faqOpen = $state({});
	function toggleFaq(i) { faqOpen[i] = !faqOpen[i]; }

	function renderStars(rating) {
		const full = Math.floor(rating);
		const half = rating % 1 >= 0.5 ? 1 : 0;
		return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
	}

	const faqs = [
		{ q: 'What is margin trading?', a: 'Margin trading allows you to borrow funds to trade larger positions than your account balance. For example, with 10x leverage and $1,000, you can control a $10,000 position. Profits and losses are both amplified.' },
		{ q: 'Is margin trading risky?', a: 'Yes. While leverage amplifies gains, it equally amplifies losses. You can lose more than your initial investment. Always use stop-losses, start with low leverage (2-5x), and never trade more than you can afford to lose.' },
		{ q: 'What exchange is best for beginners?', a: 'For US-based beginners, Kraken offers a trusted, regulated environment. Globally, Bybit provides excellent copy trading features and a testnet for practice. eToro is great for social trading.' },
		{ q: 'What leverage should I use?', a: 'Most professional traders use 2-10x leverage. Higher leverage (50x-125x) dramatically increases liquidation risk. Start with 2-3x and increase only as you gain experience.' },
		{ q: 'How do margin trading fees work?', a: 'You pay trading fees (maker/taker) plus interest on borrowed funds. Interest is usually charged hourly or daily. Some exchanges also charge liquidation fees. Compare our exchange reviews for detailed fee breakdowns.' },
		{ q: 'Can I margin trade crypto in the USA?', a: 'Yes, but options are limited. Kraken and Coinbase offer margin/futures trading to eligible US residents. Offshore exchanges like Binance and Bybit are not available to US traders.' }
	];

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
		}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
		document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>MarginTrade — Best Margin Trading Platforms & Guides 2026</title>
	<meta name="description" content="Compare the best margin trading platforms for crypto, stocks, and forex. Expert reviews, educational guides, and exclusive referral bonuses." />
	<link rel="canonical" href="https://www.margintrade.com" />
	<meta property="og:title" content="MarginTrade — Best Margin Trading Platforms & Guides 2026" />
	<meta property="og:description" content="Compare the best margin trading platforms for crypto, stocks, and forex." />
	<meta property="og:url" content="https://www.margintrade.com" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "MarginTrade",
		"url": "https://www.margintrade.com",
		"description": "Compare the best margin trading platforms for crypto, stocks, and forex.",
		"potentialAction": {
			"@type": "SearchAction",
			"target": "https://www.margintrade.com/guides?q={search_term_string}",
			"query-input": "required name=search_term_string"
		}
	})}</script>`}
</svelte:head>

<!-- ============ HERO ============ -->
<section class="hero">
	<!-- Blur gradient orbs -->
	<div class="blur-orb blur-orb-blue blur-orb-animate" style="width: 600px; height: 600px; top: -200px; left: -100px;"></div>
	<div class="blur-orb blur-orb-violet blur-orb-animate" style="width: 500px; height: 500px; top: -100px; right: -150px; animation-delay: -5s;"></div>
	<div class="blur-orb blur-orb-indigo blur-orb-animate" style="width: 400px; height: 400px; bottom: -150px; left: 30%; animation-delay: -10s;"></div>

	<div class="container" style="position: relative; z-index: 1;">
		<div class="hero-split">
			<!-- Left: Text content -->
			<div class="hero-content">
				<span class="hero-label">Trusted by 50,000+ traders worldwide</span>
				<h1>Find the <span class="gradient-text">Best Margin Trading</span> Platform</h1>
				<p class="hero-desc">Expert reviews, detailed comparisons, and educational guides to help you trade with leverage safely and profitably.</p>
				<div class="hero-actions">
					<a href="/exchanges" class="btn btn-primary btn-lg">Compare Exchanges</a>
					<a href="/learn/what-is-margin-trading" class="btn btn-outline btn-lg">Learn Margin Trading</a>
				</div>
				<div class="hero-trust">
					<span><span class="trust-icon">✓</span> 15 exchanges reviewed</span>
					<span><span class="trust-icon">✓</span> Updated daily</span>
					<span><span class="trust-icon">✓</span> 100% independent</span>
				</div>
			</div>

			<!-- Right: Trading illustration -->
			<div class="hero-visual">
				<!-- Main chart card -->
				<div class="hero-chart-card">
					<svg viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
								<stop offset="0%" stop-color="#3b82f6"/><stop offset="50%" stop-color="#6366f1"/><stop offset="100%" stop-color="#8b5cf6"/>
							</linearGradient>
							<linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
								<stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/><stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
							</linearGradient>
							<linearGradient id="leverageGrad" x1="0" y1="0" x2="1" y2="1">
								<stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#8b5cf6"/>
							</linearGradient>
							<linearGradient id="leverageGrad2" x1="0" y1="0" x2="1" y2="1">
								<stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#8b5cf6"/>
							</linearGradient>
						</defs>

						<!-- Card bg -->
						<rect x="0" y="0" width="480" height="340" rx="16" fill="#111a2e" stroke="#1e293b" stroke-width="1"/>

						<!-- Toolbar -->
						<rect x="0" y="0" width="480" height="44" rx="16" fill="#0c1220"/>
						<rect x="0" y="28" width="480" height="16" fill="#0c1220"/>
						<line x1="0" y1="44" x2="480" y2="44" stroke="#1e293b"/>
						<circle cx="20" cy="22" r="4" fill="#22c55e" opacity="0.6"/>
						<circle cx="34" cy="22" r="4" fill="#f59e0b" opacity="0.6"/>
						<circle cx="48" cy="22" r="4" fill="#ef4444" opacity="0.6"/>
						<text x="68" y="26" fill="#94a3b8" font-size="11" font-family="Inter,sans-serif" font-weight="600">BTC / USDT</text>
						<text x="170" y="26" fill="#22c55e" font-size="11" font-family="Inter,sans-serif" font-weight="700">$67,842.50</text>
						<text x="270" y="26" fill="#22c55e" font-size="10" font-family="Inter,sans-serif">▲ +4.2%</text>
						<!-- Timeframe tabs -->
						<rect x="340" y="12" width="28" height="20" rx="4" fill="#1e293b"/>
						<text x="354" y="26" fill="#8b9bb5" font-size="9" font-family="Inter,sans-serif" font-weight="600" text-anchor="middle">1H</text>
						<rect x="372" y="12" width="28" height="20" rx="4" fill="url(#leverageGrad)"/>
						<text x="386" y="26" fill="white" font-size="9" font-family="Inter,sans-serif" font-weight="700" text-anchor="middle">4H</text>
						<rect x="404" y="12" width="28" height="20" rx="4" fill="#1e293b"/>
						<text x="418" y="26" fill="#8b9bb5" font-size="9" font-family="Inter,sans-serif" font-weight="600" text-anchor="middle">1D</text>
						<rect x="436" y="12" width="28" height="20" rx="4" fill="#1e293b"/>
						<text x="450" y="26" fill="#8b9bb5" font-size="9" font-family="Inter,sans-serif" font-weight="600" text-anchor="middle">1W</text>

						<!-- Grid -->
						{#each [90, 135, 180, 225, 270] as y}
							<line x1="45" y1={y} x2="465" y2={y} stroke="#1e293b" stroke-width="0.5" stroke-dasharray="4 4"/>
						{/each}

						<!-- Y-axis -->
						<text x="12" y="94" fill="#8b9bb5" font-size="8" font-family="Inter,sans-serif">$69k</text>
						<text x="12" y="139" fill="#8b9bb5" font-size="8" font-family="Inter,sans-serif">$68k</text>
						<text x="12" y="184" fill="#8b9bb5" font-size="8" font-family="Inter,sans-serif">$67k</text>
						<text x="12" y="229" fill="#8b9bb5" font-size="8" font-family="Inter,sans-serif">$66k</text>
						<text x="12" y="274" fill="#8b9bb5" font-size="8" font-family="Inter,sans-serif">$65k</text>

						<!-- Candlesticks -->
						{#each [
							{x:65,o:220,c:195,h:185,l:230,bull:true},{x:90,o:195,c:208,h:190,l:218,bull:false},
							{x:115,o:205,c:180,h:170,l:215,bull:true},{x:140,o:180,c:168,h:158,l:190,bull:true},
							{x:165,o:168,c:182,h:162,l:195,bull:false},{x:190,o:180,c:160,h:150,l:190,bull:true},
							{x:215,o:160,c:148,h:138,l:170,bull:true},{x:240,o:148,c:155,h:142,l:168,bull:false},
							{x:265,o:153,c:135,h:125,l:162,bull:true},{x:290,o:135,c:122,h:112,l:145,bull:true},
							{x:315,o:122,c:135,h:118,l:142,bull:false},{x:340,o:132,c:115,h:105,l:140,bull:true},
							{x:365,o:115,c:102,h:92,l:122,bull:true},{x:390,o:102,c:110,h:98,l:118,bull:false},
							{x:415,o:108,c:95,h:85,l:115,bull:true},{x:440,o:95,c:100,h:88,l:108,bull:false}
						] as c, i}
							<g class="svg-candle-grow" style="animation-delay: {0.15 + i * 0.06}s">
								<line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={c.bull ? '#22c55e' : '#ef4444'} stroke-width="1.5"/>
								<rect x={c.x - 6} y={Math.min(c.o, c.c)} width="12" height={Math.abs(c.c - c.o) || 3} rx="1.5" fill={c.bull ? '#22c55e' : '#ef4444'}/>
							</g>
						{/each}

						<!-- Moving average -->
						<polyline class="chart-line-draw" points="65,215 90,205 115,195 140,180 165,178 190,168 215,155 240,152 265,142 290,132 315,130 340,122 365,110 390,108 415,100 440,98"
							stroke="url(#lineGrad)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>
						<!-- Area fill -->
						<path d="M65,215 L90,205 L115,195 L140,180 L165,178 L190,168 L215,155 L240,152 L265,142 L290,132 L315,130 L340,122 L365,110 L390,108 L415,100 L440,98 L440,290 L65,290 Z"
							fill="url(#areaGrad)" opacity="0.3"/>

						<!-- Price line -->
						<line x1="45" y1="100" x2="465" y2="100" stroke="#3b82f6" stroke-width="1" stroke-dasharray="5 3" opacity="0.4"/>
						<rect x="430" y="92" width="44" height="16" rx="3" fill="#3b82f6"/>
						<text x="452" y="103" fill="white" font-size="8" font-family="Inter,sans-serif" font-weight="600" text-anchor="middle">$67.8k</text>

						<!-- Volume bars -->
						{#each [18,12,22,28,15,25,32,14,30,35,20,38,42,16,40,22] as vol, i}
							<rect x={59 + i * 25} y={290 - vol * 0.7} width="12" height={vol * 0.7} rx="1" fill={[true,false,true,true,false,true,true,false,true,true,false,true,true,false,true,false][i] ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'}/>
						{/each}

						<!-- Bottom bar -->
						<rect x="0" y="306" width="480" height="34" rx="0" fill="#0c1220"/>
						<rect x="0" y="324" width="480" height="16" rx="16" fill="#0c1220"/>
						<rect x="16" y="312" width="65" height="18" rx="4" fill="#22c55e" opacity="0.15"/>
						<text x="48" y="325" fill="#22c55e" font-size="9" font-family="Inter,sans-serif" font-weight="700" text-anchor="middle">Buy / Long</text>
						<rect x="88" y="312" width="65" height="18" rx="4" fill="#ef4444" opacity="0.15"/>
						<text x="120" y="325" fill="#ef4444" font-size="9" font-family="Inter,sans-serif" font-weight="700" text-anchor="middle">Sell / Short</text>
					</svg>
				</div>

				<!-- Floating Leverage Panel -->
				<div class="hero-float-panel hero-panel-leverage">
					<svg viewBox="0 0 190 100" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="1" y="1" width="188" height="98" rx="12" fill="#111a2e" stroke="#334155" stroke-width="1"/>
						<text x="14" y="22" fill="#94a3b8" font-size="9" font-family="Inter,sans-serif" font-weight="700" letter-spacing="0.08em">LEVERAGE</text>
						<rect x="12" y="32" width="36" height="22" rx="5" fill="#1e293b" stroke="#334155" stroke-width="0.5"/>
						<text x="30" y="47" fill="#8b9bb5" font-size="10" font-family="Inter,sans-serif" font-weight="600" text-anchor="middle">3x</text>
						<rect x="52" y="32" width="36" height="22" rx="5" fill="#1e293b" stroke="#334155" stroke-width="0.5"/>
						<text x="70" y="47" fill="#8b9bb5" font-size="10" font-family="Inter,sans-serif" font-weight="600" text-anchor="middle">5x</text>
						<rect x="92" y="32" width="36" height="22" rx="5" fill="url(#leverageGrad2)"/>
						<text x="110" y="47" fill="white" font-size="10" font-family="Inter,sans-serif" font-weight="700" text-anchor="middle">10x</text>
						<rect x="132" y="32" width="36" height="22" rx="5" fill="#1e293b" stroke="#334155" stroke-width="0.5"/>
						<text x="150" y="47" fill="#8b9bb5" font-size="10" font-family="Inter,sans-serif" font-weight="600" text-anchor="middle">25x</text>
						<!-- Slider -->
						<rect x="12" y="64" width="166" height="4" rx="2" fill="#1e293b"/>
						<rect x="12" y="64" width="96" height="4" rx="2" fill="url(#leverageGrad2)"/>
						<circle cx="108" cy="66" r="6" fill="url(#leverageGrad2)" stroke="#111a2e" stroke-width="2">
							<animate attributeName="cx" values="108;112;108" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
						</circle>
						<!-- Risk -->
						<text x="14" y="88" fill="#8b9bb5" font-size="8" font-family="Inter,sans-serif">Risk: </text>
						<text x="38" y="88" fill="#f59e0b" font-size="8" font-family="Inter,sans-serif" font-weight="600">Medium</text>
						<text x="178" y="88" fill="#ef4444" font-size="8" font-family="Inter,sans-serif" font-weight="600" text-anchor="end">Liq: $61,058</text>
					</svg>
				</div>

				<!-- Floating P&L Panel -->
				<div class="hero-float-panel hero-panel-pnl" style="animation-delay: -3s;">
					<svg viewBox="0 0 190 90" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="1" y="1" width="188" height="88" rx="12" fill="#111a2e" stroke="#334155" stroke-width="1"/>
						<text x="14" y="20" fill="#94a3b8" font-size="8" font-family="Inter,sans-serif" font-weight="700" letter-spacing="0.08em">POSITION — BTC/USDT</text>
						<text x="14" y="46" fill="#22c55e" font-size="22" font-family="Inter,sans-serif" font-weight="800">+$12,480</text>
						<text x="140" y="46" fill="#22c55e" font-size="11" font-family="Inter,sans-serif" font-weight="600">+36.7%</text>
						<!-- Progress bar -->
						<rect x="14" y="56" width="162" height="4" rx="2" fill="#1e293b"/>
						<rect x="14" y="56" width="118" height="4" rx="2" fill="#22c55e" opacity="0.7">
							<animate attributeName="width" values="95;118;100;118" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
						</rect>
						<!-- Details -->
						<text x="14" y="76" fill="#8b9bb5" font-size="8" font-family="Inter,sans-serif">Long 10x</text>
						<text x="75" y="76" fill="#f0f4f8" font-size="8" font-family="Inter,sans-serif" font-weight="600">0.5 BTC</text>
						<text x="130" y="76" fill="#8b9bb5" font-size="8" font-family="Inter,sans-serif">Margin: $3,392</text>
					</svg>
				</div>

				<!-- Exchange badges -->
				<div class="hero-exchanges">
					{#each [{name:'Binance',color:'#f0b90b',w:75},{name:'Bybit',color:'#f69b2c',w:60},{name:'Kraken',color:'#8b5cf6',w:65},{name:'OKX',color:'#00e6a7',w:52}] as ex, i}
						<div class="hero-float-panel" style="animation-delay: {-2 - i * 3}s;">
							<svg viewBox="0 0 {ex.w} 28" style="width: {ex.w}px;">
								<rect x="1" y="1" width={ex.w - 2} height="26" rx="7" fill="#111a2e" stroke="#334155" stroke-width="0.5"/>
								<text x={ex.w / 2} y="18" fill={ex.color} font-size="9" font-family="Inter,sans-serif" font-weight="700" text-anchor="middle">{ex.name}</text>
							</svg>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============ TOP EXCHANGES TABLE ============ -->
<section class="section">
	<div class="container">
		<div class="animate-in">
			<span class="section-label">Rankings</span>
			<h2 class="section-title" style="margin-top:0">Top Crypto Margin Trading Exchanges 2026</h2>
			<p class="section-subtitle">Ranked by our experts based on fees, features, security, and user experience</p>
		</div>

		<div class="comparison-table animate-in animate-in-delay-1">
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Exchange</th>
						<th>Rating</th>
						<th>Max Leverage</th>
						<th>Maker / Taker</th>
						<th>Pairs</th>
						<th>Bonus</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{#each cryptoExchanges as exchange, i}
						<tr>
							<td><strong style="color: var(--accent-light);">{i + 1}</strong></td>
							<td><a href="/exchanges/{exchange.slug}" style="color: var(--text-primary); font-weight: 600;">{exchange.name}</a></td>
							<td><span class="stars">{renderStars(exchange.rating)}</span> <span style="color:var(--text-muted);font-size:0.85rem">{exchange.rating}</span></td>
							<td><strong>{exchange.maxLeverage}x</strong></td>
							<td>{exchange.makerFee}% / {exchange.takerFee}%</td>
							<td>{exchange.tradingPairs.toLocaleString()}+</td>
							<td style="font-size: 0.8rem; color: var(--green);">{exchange.referralBonus}</td>
							<td><a href="/exchanges/{exchange.slug}" class="btn btn-primary" style="padding: 0.4rem 1rem; font-size: 0.8rem;">Review →</a></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<div style="text-align: center; margin-top: 2rem;" class="animate-in animate-in-delay-2">
			<a href="/exchanges" class="btn btn-outline">View All Exchanges →</a>
		</div>
	</div>
</section>

<!-- ============ HOW MARGIN TRADING WORKS ============ -->
<section class="section" style="background: var(--bg-secondary);">
	<div class="container" style="text-align: center;">
		<div class="animate-in">
			<span class="section-label">Getting Started</span>
			<h2 class="section-title" style="margin-top:0">How Margin Trading Works</h2>
			<p class="section-subtitle" style="margin-left:auto;margin-right:auto;">Start trading with leverage in three simple steps</p>
		</div>

		<div class="steps-grid animate-in animate-in-delay-1">
			<div class="step-card">
				<div class="step-number">1</div>
				<h3>Choose an Exchange</h3>
				<p>Compare fees, leverage, and features across 15+ margin trading platforms to find your perfect match.</p>
			</div>
			<div class="step-card">
				<div class="step-number">2</div>
				<h3>Deposit Collateral</h3>
				<p>Fund your margin account with crypto or fiat. Your collateral determines your maximum position size.</p>
			</div>
			<div class="step-card">
				<div class="step-number">3</div>
				<h3>Trade with Leverage</h3>
				<p>Open long or short positions with up to 125x leverage. Set stop-losses to manage your risk.</p>
			</div>
		</div>
	</div>
</section>

<!-- ============ WHY MARGINTRADE (BENTO GRID) ============ -->
<section class="section" style="position: relative; overflow: hidden;">
	<div class="blur-orb blur-orb-cyan blur-orb-animate" style="width: 500px; height: 500px; top: -200px; right: -100px; animation-delay: -3s;"></div>
	<div class="blur-orb blur-orb-violet blur-orb-animate" style="width: 400px; height: 400px; bottom: -150px; left: -100px; animation-delay: -8s;"></div>
	<div class="container">
		<div class="text-center animate-in">
			<span class="section-label">Why MarginTrade</span>
			<h2 class="section-title" style="margin-top:0">Everything You Need to Trade Smarter</h2>
			<p class="section-subtitle" style="margin-left:auto;margin-right:auto;">We've built the most comprehensive margin trading resource on the web</p>
		</div>

		<div class="bento-grid animate-in animate-in-delay-1">
			<div class="bento-card span-2">
				<span class="bento-icon">🔍</span>
				<h3>Independent & Unbiased Research</h3>
				<p>We test every platform ourselves with real money. Our reviews are based on actual trading experience — not paid placements or sponsored content. Every data point is verified.</p>
			</div>
			<div class="bento-card">
				<span class="bento-icon">📊</span>
				<h3>Data-Driven Rankings</h3>
				<p>Objective criteria: fees, security, liquidity, features, and real user experience scores.</p>
			</div>
			<div class="bento-card">
				<span class="bento-icon">⚡</span>
				<h3>Updated Daily</h3>
				<p>Fee changes, new features, regulatory updates — we track it all so you don't have to.</p>
			</div>
			<div class="bento-card">
				<span class="bento-icon">⚠️</span>
				<h3>Risk Education First</h3>
				<p>We always put risk education before promotion. Informed traders make better decisions.</p>
			</div>
			<div class="bento-card">
				<span class="bento-icon">💰</span>
				<h3>Exclusive Bonuses</h3>
				<p>Access referral bonuses and fee discounts you won't find anywhere else.</p>
			</div>
		</div>
	</div>
</section>

<!-- ============ EXCHANGE COMPARISONS ============ -->
<section class="section" style="background: var(--bg-secondary);">
	<div class="container">
		<div class="animate-in">
			<span class="section-label">Head to Head</span>
			<h2 class="section-title" style="margin-top:0">Popular Exchange Comparisons</h2>
			<p class="section-subtitle">Side-by-side comparisons of the top margin trading platforms</p>
		</div>

		<div class="grid-3 animate-in animate-in-delay-1">
			{#each comparisons.slice(0, 6) as comp}
				<a href="/compare/{comp.slug}" class="card" style="text-decoration: none;">
					<h3 style="font-size: 1.1rem; margin: 0 0 0.5rem; text-transform: capitalize;">{comp.exchange1.replace(/-/g, ' ')} vs {comp.exchange2.replace(/-/g, ' ')}</h3>
					<p style="font-size: 0.875rem; margin: 0; color: var(--text-muted);">{comp.metaDescription}</p>
				</a>
			{/each}
		</div>

		<div style="text-align: center; margin-top: 2rem;" class="animate-in animate-in-delay-2">
			<a href="/compare" class="btn btn-outline">View All Comparisons →</a>
		</div>
	</div>
</section>

<!-- ============ EXCHANGE CATEGORIES ============ -->
<section class="section">
	<div class="container">
		<div class="animate-in">
			<span class="section-label">Browse by Category</span>
			<h2 class="section-title" style="margin-top:0">Find the Right Exchange for You</h2>
			<p class="section-subtitle">Browse exchanges by asset class and trading style</p>
		</div>

		<div class="grid-3 animate-in animate-in-delay-1">
			<a href="/platforms/crypto" class="category-card">
				<span style="font-size:2.5rem;display:block;margin-bottom:1rem;">₿</span>
				<h3 style="margin:0 0 0.5rem;">Crypto Exchanges</h3>
				<p style="margin:0;color:var(--text-muted);font-size:0.9rem;">Trade BTC, ETH, and altcoins with up to 200x leverage. The most popular category for margin trading.</p>
			</a>
			<a href="/platforms/stocks" class="category-card">
				<span style="font-size:2.5rem;display:block;margin-bottom:1rem;">📈</span>
				<h3 style="margin:0 0 0.5rem;">Stock Brokers</h3>
				<p style="margin:0;color:var(--text-muted);font-size:0.9rem;">Trade stocks, ETFs, and indices on margin. Regulated platforms with portfolio margin options.</p>
			</a>
			<a href="/platforms/forex" class="category-card">
				<span style="font-size:2.5rem;display:block;margin-bottom:1rem;">💱</span>
				<h3 style="margin:0 0 0.5rem;">Forex & CFD Brokers</h3>
				<p style="margin:0;color:var(--text-muted);font-size:0.9rem;">Trade forex pairs, commodities, and CFDs with competitive spreads and leverage up to 30x.</p>
			</a>
		</div>
	</div>
</section>

<!-- ============ GUIDES ============ -->
<section class="section" style="background: var(--bg-secondary);">
	<div class="container">
		<div class="animate-in">
			<span class="section-label">Learn</span>
			<h2 class="section-title" style="margin-top:0">Margin Trading Guides</h2>
			<p class="section-subtitle">From beginner basics to advanced strategies</p>
		</div>

		<div class="grid-2 animate-in animate-in-delay-1">
			{#each topGuides as guide}
				<a href="/learn/{guide.slug}" class="card" style="text-decoration: none;">
					<span class="badge badge-blue">{guide.category}</span>
					<h3 style="font-size: 1.1rem; margin: 0.5rem 0;">{guide.title}</h3>
					<p style="font-size: 0.875rem; margin: 0; color: var(--text-muted);">{guide.readTime} min read</p>
				</a>
			{/each}
		</div>

		<div style="text-align: center; margin-top: 2rem;" class="animate-in animate-in-delay-2">
			<a href="/guides" class="btn btn-outline">View All Guides →</a>
		</div>
	</div>
</section>

<!-- ============ TESTIMONIALS ============ -->
<section class="section">
	<div class="container">
		<div class="text-center animate-in">
			<span class="section-label">Community</span>
			<h2 class="section-title" style="margin-top:0">Trusted by Traders Worldwide</h2>
		</div>

		<div class="grid-3 animate-in animate-in-delay-1">
			<div class="testimonial-card">
				<p class="testimonial-text">MarginTrade saved me from signing up with a sketchy exchange. Their comparison tools made it easy to find a regulated platform with low fees.</p>
				<p class="testimonial-author">Alex K.</p>
				<p class="testimonial-role">Crypto Trader, Germany</p>
			</div>
			<div class="testimonial-card">
				<p class="testimonial-text">The educational guides are exceptional. I went from zero knowledge to confidently using isolated margin in about a week of reading.</p>
				<p class="testimonial-author">Sarah M.</p>
				<p class="testimonial-role">Beginner Trader, UK</p>
			</div>
			<div class="testimonial-card">
				<p class="testimonial-text">Finally, an honest comparison site that actually explains the risks. The fee breakdowns alone saved me hundreds in trading costs.</p>
				<p class="testimonial-author">James T.</p>
				<p class="testimonial-role">Day Trader, Canada</p>
			</div>
		</div>
	</div>
</section>

<!-- ============ FAQ ============ -->
<section class="section" style="background: var(--bg-secondary);">
	<div class="container-narrow">
		<div class="text-center animate-in">
			<span class="section-label">FAQ</span>
			<h2 class="section-title" style="margin-top:0">Frequently Asked Questions</h2>
			<p class="section-subtitle" style="margin-left:auto;margin-right:auto;">Common questions about margin trading and our platform</p>
		</div>

		<div class="animate-in animate-in-delay-1">
			{#each faqs as faq, i}
				<div class="faq-item" class:open={faqOpen[i]}>
					<div class="faq-question" onclick={() => toggleFaq(i)} onkeydown={(e) => e.key === 'Enter' && toggleFaq(i)} role="button" tabindex="0">
						<span>{faq.q}</span>
						<span class="faq-icon">+</span>
					</div>
					<div class="faq-answer">
						<p style="margin:0">{faq.a}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- ============ BOTTOM CTA ============ -->
<section class="section" style="text-align: center; position: relative; overflow: hidden;">
	<div class="blur-orb blur-orb-blue blur-orb-animate" style="width: 500px; height: 500px; top: -150px; left: 10%; animation-delay: -4s;"></div>
	<div class="blur-orb blur-orb-indigo blur-orb-animate" style="width: 450px; height: 450px; bottom: -200px; right: 10%; animation-delay: -12s;"></div>
	<div class="container">
		<div class="animate-in">
			<h2 class="section-title" style="margin-top:0">Ready to Start <span class="text-gradient">Margin Trading</span>?</h2>
			<p class="section-subtitle" style="margin-left:auto;margin-right:auto;">Compare platforms, learn the strategies, and start trading with confidence.</p>
			<div class="hero-actions">
				<a href="/exchanges" class="btn btn-primary btn-lg">Compare Exchanges</a>
				<a href="/learn/margin-trading-for-beginners" class="btn btn-outline btn-lg">Beginner's Guide</a>
			</div>
		</div>
	</div>
</section>

<!-- ============ DISCLAIMER ============ -->
<div class="container">
	<div class="disclaimer">
		<strong>⚠️ Risk Disclaimer:</strong> Margin trading involves substantial risk of loss and is not suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade on margin, you should carefully consider your investment objectives, level of experience, and risk appetite. The content on MarginTrade.com is for educational purposes only and should not be considered financial advice. We may earn commissions from referral links at no additional cost to you.
	</div>
</div>

<style>
	/* Hero hover effects */
	.hero-illustration {
		position: relative;
	}

	.hero-illustration svg {
		transition: all var(--transition-slow);
		cursor: pointer;
	}

	.hero-illustration:hover svg {
		transform: scale(1.02);
		filter: drop-shadow(0 8px 40px rgba(59, 130, 246, 0.15));
	}

	/* Floating panel hover effects */
	.hero-float-panel {
		transition: all var(--transition-base);
		cursor: pointer;
	}

	.hero-float-panel:hover {
		transform: translateY(-4px) scale(1.05);
		filter: drop-shadow(0 8px 25px rgba(99, 102, 241, 0.2)) 
				drop-shadow(0 0 20px rgba(139, 92, 246, 0.1));
	}

	/* Crosshair effect on main chart hover */
	.hero-illustration svg:hover .chart-crosshair {
		opacity: 1;
	}

	.chart-crosshair {
		opacity: 0;
		transition: opacity var(--transition-fast);
		pointer-events: none;
	}

	/* Exchange badge hover */
	.hero-illustration .hero-float-panel:hover svg rect {
		fill: rgba(59, 130, 246, 0.1);
		stroke: rgba(59, 130, 246, 0.3);
	}

	/* Glowing border effect on chart hover */
	.hero-illustration:hover svg > g:first-child rect {
		stroke: rgba(59, 130, 246, 0.4);
		stroke-width: 2px;
		filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.2));
	}

	/* Mobile responsiveness */
	@media (max-width: 768px) {
		.hero-illustration {
			transform: translateX(0) !important;
			max-width: 100%;
		}

		/* Hide floating panels on mobile for cleaner look */
		.hero-float-panel {
			display: none;
		}

		/* Make main chart more prominent on mobile */
		.hero-illustration svg {
			width: 100%;
			max-width: 100%;
		}

		/* Ensure hero actions stack properly */
		.hero-actions {
			flex-direction: column;
			gap: 0.75rem;
		}

		.hero-actions .btn {
			width: 100%;
			justify-content: center;
		}

		/* Better hero text sizing */
		.hero h1 {
			font-size: clamp(2rem, 8vw, 2.5rem) !important;
			line-height: 1.2;
		}

		.hero p {
			font-size: 1rem;
			margin-bottom: 2rem;
		}
	}

	@media (max-width: 480px) {
		.hero {
			padding: 3rem 0 2rem;
		}
		
		.hero-label {
			font-size: 0.7rem;
		}

		.hero-trust {
			font-size: 0.8rem;
			gap: 0.75rem;
		}
	}
</style>
