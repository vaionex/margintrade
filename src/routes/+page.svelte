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
		<span class="hero-label">Trusted by 50,000+ traders worldwide</span>
		<h1>Find the <span class="gradient-text">Best Margin Trading</span> Platform</h1>
		<p>Expert reviews, detailed comparisons, and educational guides to help you trade with leverage safely and profitably.</p>
		<div class="hero-actions">
			<a href="/exchanges" class="btn btn-primary btn-lg">Compare Exchanges</a>
			<a href="/learn/what-is-margin-trading" class="btn btn-outline btn-lg">Learn Margin Trading</a>
		</div>
		<div class="hero-trust">
			<span><span class="trust-icon">✓</span> 15 exchanges compared</span>
			<span><span class="trust-icon">✓</span> Updated daily</span>
			<span><span class="trust-icon">✓</span> 100% independent</span>
		</div>

		<!-- Animated Trading SVG Illustration -->
		<div class="hero-illustration" style="position: relative; max-width: 900px; margin: 2rem auto 0;">
			<!-- Main chart card -->
			<svg viewBox="0 0 560 400" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 75%; height: auto;">
				<defs>
					<linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
						<stop offset="0%" stop-color="#3b82f6"/>
						<stop offset="50%" stop-color="#6366f1"/>
						<stop offset="100%" stop-color="#8b5cf6"/>
					</linearGradient>
					<linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3"/>
						<stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
					</linearGradient>
					<linearGradient id="leverageGrad" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stop-color="#3b82f6"/>
						<stop offset="100%" stop-color="#8b5cf6"/>
					</linearGradient>
					<filter id="cardShadow"><feDropShadow dx="0" dy="4" stdDeviation="16" floodColor="#3b82f6" floodOpacity="0.08"/></filter>
					<filter id="panelGlow"><feDropShadow dx="0" dy="2" stdDeviation="10" floodColor="#6366f1" floodOpacity="0.12"/></filter>
				</defs>

				<!-- Main card background -->
				<g filter="url(#cardShadow)">
					<rect x="10" y="10" width="540" height="380" rx="16" fill="#111a2e" stroke="#1e293b" stroke-width="1"/>
				</g>

				<!-- Top toolbar -->
				<rect x="10" y="10" width="540" height="44" rx="16" fill="#0c1220"/>
				<rect x="10" y="38" width="540" height="16" fill="#0c1220"/>
				<line x1="10" y1="54" x2="550" y2="54" stroke="#1e293b" stroke-width="1"/>
				<!-- Toolbar items -->
				<circle cx="32" cy="32" r="5" fill="#22c55e" opacity="0.6"/>
				<circle cx="48" cy="32" r="5" fill="#f59e0b" opacity="0.6"/>
				<circle cx="64" cy="32" r="5" fill="#ef4444" opacity="0.6"/>
				<text x="90" y="36" fill="#94a3b8" font-size="11" font-family="Inter, system-ui, sans-serif" font-weight="600">BTC / USDT</text>
				<text x="190" y="36" fill="#22c55e" font-size="11" font-family="Inter, system-ui, sans-serif" font-weight="700">$67,842.50</text>
				<text x="290" y="36" fill="#22c55e" font-size="10" font-family="Inter, system-ui, sans-serif">▲ +4.2%</text>
				<!-- Timeframe tabs -->
				<rect x="370" y="22" width="30" height="20" rx="4" fill="#1e293b"/>
				<text x="379" y="36" fill="#64748b" font-size="9" font-family="Inter, system-ui, sans-serif" font-weight="600">1H</text>
				<rect x="405" y="22" width="30" height="20" rx="4" fill="url(#leverageGrad)"/>
				<text x="413" y="36" fill="white" font-size="9" font-family="Inter, system-ui, sans-serif" font-weight="700">4H</text>
				<rect x="440" y="22" width="30" height="20" rx="4" fill="#1e293b"/>
				<text x="449" y="36" fill="#64748b" font-size="9" font-family="Inter, system-ui, sans-serif" font-weight="600">1D</text>
				<rect x="475" y="22" width="30" height="20" rx="4" fill="#1e293b"/>
				<text x="483" y="36" fill="#64748b" font-size="9" font-family="Inter, system-ui, sans-serif" font-weight="600">1W</text>

				<!-- Grid -->
				{#each [100, 155, 210, 265, 320] as y}
					<line x1="55" y1={y} x2="530" y2={y} stroke="#1e293b" stroke-width="0.5" stroke-dasharray="4 4"/>
				{/each}
				{#each [120, 200, 280, 360, 440] as x}
					<line x1={x} y1="70" x2={x} y2="340" stroke="#1e293b" stroke-width="0.5" stroke-dasharray="4 4"/>
				{/each}

				<!-- Y-axis labels -->
				<text x="22" y="104" fill="#475569" font-size="9" font-family="Inter, system-ui, sans-serif">$69k</text>
				<text x="22" y="159" fill="#475569" font-size="9" font-family="Inter, system-ui, sans-serif">$68k</text>
				<text x="22" y="214" fill="#475569" font-size="9" font-family="Inter, system-ui, sans-serif">$67k</text>
				<text x="22" y="269" fill="#475569" font-size="9" font-family="Inter, system-ui, sans-serif">$66k</text>
				<text x="22" y="324" fill="#475569" font-size="9" font-family="Inter, system-ui, sans-serif">$65k</text>

				<!-- X-axis labels -->
				<text x="105" y="356" fill="#475569" font-size="8" font-family="Inter, system-ui, sans-serif" text-anchor="middle">09:00</text>
				<text x="185" y="356" fill="#475569" font-size="8" font-family="Inter, system-ui, sans-serif" text-anchor="middle">11:00</text>
				<text x="265" y="356" fill="#475569" font-size="8" font-family="Inter, system-ui, sans-serif" text-anchor="middle">13:00</text>
				<text x="345" y="356" fill="#475569" font-size="8" font-family="Inter, system-ui, sans-serif" text-anchor="middle">15:00</text>
				<text x="425" y="356" fill="#475569" font-size="8" font-family="Inter, system-ui, sans-serif" text-anchor="middle">17:00</text>

				<!-- Candlesticks (16 candles, more detail) -->
				{#each [
					{x:85, o:260, c:230, h:220, l:270, bull:true},
					{x:110, o:230, c:245, h:225, l:260, bull:false},
					{x:135, o:240, c:210, h:200, l:250, bull:true},
					{x:160, o:210, c:195, h:185, l:220, bull:true},
					{x:185, o:195, c:215, h:190, l:230, bull:false},
					{x:210, o:210, c:185, h:175, l:220, bull:true},
					{x:235, o:185, c:170, h:160, l:195, bull:true},
					{x:260, o:170, c:180, h:165, l:195, bull:false},
					{x:285, o:178, c:155, h:145, l:190, bull:true},
					{x:310, o:155, c:140, h:130, l:165, bull:true},
					{x:335, o:140, c:155, h:135, l:165, bull:false},
					{x:360, o:152, c:130, h:120, l:160, bull:true},
					{x:385, o:130, c:115, h:105, l:140, bull:true},
					{x:410, o:115, c:125, h:110, l:135, bull:false},
					{x:435, o:122, c:105, h:95, l:130, bull:true},
					{x:460, o:105, c:110, h:98, l:118, bull:false}
				] as candle, i}
					<g class="svg-candle-grow" style="animation-delay: {0.15 + i * 0.08}s">
						<line x1={candle.x} y1={candle.h} x2={candle.x} y2={candle.l} stroke={candle.bull ? '#22c55e' : '#ef4444'} stroke-width="1.5"/>
						<rect x={candle.x - 7} y={Math.min(candle.o, candle.c)} width="14" height={Math.abs(candle.c - candle.o) || 3} rx="1.5" fill={candle.bull ? '#22c55e' : '#ef4444'}/>
					</g>
				{/each}

				<!-- Moving average line -->
				<polyline class="chart-line-draw" points="85,255 110,240 135,225 160,210 185,205 210,195 235,182 260,178 285,168 310,155 335,150 360,142 385,128 410,122 435,112 460,108"
					stroke="url(#lineGrad)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>

				<!-- Area fill -->
				<path d="M85,255 L110,240 L135,225 L160,210 L185,205 L210,195 L235,182 L260,178 L285,168 L310,155 L335,150 L360,142 L385,128 L410,122 L435,112 L460,108 L460,340 L85,340 Z"
					fill="url(#areaGrad)" opacity="0.25"/>

				<!-- Current price line -->
				<line x1="55" y1="110" x2="530" y2="110" stroke="#3b82f6" stroke-width="1" stroke-dasharray="6 3" opacity="0.5"/>
				<rect x="490" y="102" width="48" height="16" rx="3" fill="#3b82f6"/>
				<text x="514" y="113" fill="white" font-size="8" font-family="Inter, system-ui, sans-serif" font-weight="600" text-anchor="middle">$67.8k</text>

				<!-- Volume bars at bottom -->
				{#each [18, 12, 22, 28, 15, 25, 32, 14, 30, 35, 20, 38, 42, 16, 40, 22] as vol, i}
					<rect x={78 + i * 25} y={340 - vol * 0.8} width="14" height={vol * 0.8} rx="1" fill={[true,false,true,true,false,true,true,false,true,true,false,true,true,false,true,false][i] ? 'rgba(34,197,94,0.25)' : 'rgba(239,68,68,0.25)'}/>
				{/each}

				<!-- Bottom order panel -->
				<rect x="10" y="365" width="540" height="25" rx="0" fill="#0c1220"/>
				<rect x="10" y="374" width="540" height="16" rx="16" fill="#0c1220"/>
				<rect x="30" y="370" width="70" height="18" rx="4" fill="#22c55e" opacity="0.15"/>
				<text x="65" y="383" fill="#22c55e" font-size="9" font-family="Inter, system-ui, sans-serif" font-weight="700" text-anchor="middle">Buy / Long</text>
				<rect x="110" y="370" width="70" height="18" rx="4" fill="#ef4444" opacity="0.15"/>
				<text x="145" y="383" fill="#ef4444" font-size="9" font-family="Inter, system-ui, sans-serif" font-weight="700" text-anchor="middle">Sell / Short</text>
				<text x="210" y="383" fill="#475569" font-size="8" font-family="Inter, system-ui, sans-serif">Qty: 0.5 BTC</text>
				<text x="310" y="383" fill="#475569" font-size="8" font-family="Inter, system-ui, sans-serif">Margin: $3,392</text>
			</svg>

			<!-- Floating Leverage Panel (positioned right, top) -->
			<div class="hero-float-panel" style="position: absolute; top: 5%; right: 0; width: 200px;">
				<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; filter: drop-shadow(0 4px 20px rgba(99,102,241,0.15));">
					<rect x="2" y="2" width="196" height="136" rx="14" fill="#111a2e" stroke="#334155" stroke-width="1"/>
					<text x="18" y="28" fill="#94a3b8" font-size="10" font-family="Inter, system-ui, sans-serif" font-weight="700" letter-spacing="0.08em">LEVERAGE</text>
					<!-- Leverage buttons -->
					<rect x="14" y="38" width="40" height="26" rx="6" fill="#1e293b" stroke="#334155" stroke-width="0.5"/>
					<text x="34" y="55" fill="#64748b" font-size="11" font-family="Inter, system-ui, sans-serif" font-weight="600" text-anchor="middle">3x</text>
					<rect x="60" y="38" width="40" height="26" rx="6" fill="#1e293b" stroke="#334155" stroke-width="0.5"/>
					<text x="80" y="55" fill="#64748b" font-size="11" font-family="Inter, system-ui, sans-serif" font-weight="600" text-anchor="middle">5x</text>
					<rect x="106" y="38" width="40" height="26" rx="6" fill="url(#leverageGrad2)"/>
					<text x="126" y="55" fill="white" font-size="11" font-family="Inter, system-ui, sans-serif" font-weight="700" text-anchor="middle">10x</text>
					<rect x="152" y="38" width="40" height="26" rx="6" fill="#1e293b" stroke="#334155" stroke-width="0.5"/>
					<text x="172" y="55" fill="#64748b" font-size="11" font-family="Inter, system-ui, sans-serif" font-weight="600" text-anchor="middle">25x</text>
					<!-- Leverage slider -->
					<rect x="14" y="74" width="172" height="4" rx="2" fill="#1e293b"/>
					<rect x="14" y="74" width="100" height="4" rx="2" fill="url(#leverageGrad2)"/>
					<circle cx="114" cy="76" r="7" fill="url(#leverageGrad2)" stroke="#111a2e" stroke-width="2">
						<animate attributeName="cx" values="114;118;114" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
					</circle>
					<!-- Risk indicator -->
					<text x="18" y="102" fill="#94a3b8" font-size="9" font-family="Inter, system-ui, sans-serif">Risk Level</text>
					<rect x="14" y="108" width="172" height="6" rx="3" fill="#1e293b"/>
					<rect x="14" y="108" width="85" height="6" rx="3" fill="#f59e0b"/>
					<text x="170" y="102" fill="#f59e0b" font-size="9" font-family="Inter, system-ui, sans-serif" font-weight="600" text-anchor="end">Medium</text>
					<!-- Entry/Liq prices -->
					<text x="18" y="128" fill="#64748b" font-size="8" font-family="Inter, system-ui, sans-serif">Entry: $67,842</text>
					<text x="186" y="128" fill="#ef4444" font-size="8" font-family="Inter, system-ui, sans-serif" font-weight="600" text-anchor="end">Liq: $61,058</text>
					<defs>
						<linearGradient id="leverageGrad2" x1="0" y1="0" x2="1" y2="1">
							<stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#8b5cf6"/>
						</linearGradient>
					</defs>
				</svg>
			</div>

			<!-- Floating P&L Panel (positioned right, middle) -->
			<div class="hero-float-panel" style="position: absolute; top: 42%; right: -1%; width: 210px; animation-delay: -3s;">
				<svg viewBox="0 0 210 160" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; filter: drop-shadow(0 4px 20px rgba(34,197,94,0.12));">
					<rect x="2" y="2" width="206" height="156" rx="14" fill="#111a2e" stroke="#334155" stroke-width="1"/>
					<text x="18" y="26" fill="#94a3b8" font-size="9" font-family="Inter, system-ui, sans-serif" font-weight="700" letter-spacing="0.08em">POSITION — BTC/USDT</text>
					<!-- P&L value -->
					<text x="18" y="56" fill="#22c55e" font-size="26" font-family="Inter, system-ui, sans-serif" font-weight="800">+$12,480</text>
					<text x="165" y="56" fill="#22c55e" font-size="12" font-family="Inter, system-ui, sans-serif" font-weight="600">+36.7%</text>
					<!-- Progress bar -->
					<rect x="18" y="68" width="174" height="5" rx="2.5" fill="#1e293b"/>
					<rect x="18" y="68" width="128" height="5" rx="2.5" fill="#22c55e" opacity="0.7">
						<animate attributeName="width" values="100;128;110;128" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"/>
					</rect>
					<!-- Details grid -->
					<text x="18" y="92" fill="#64748b" font-size="8" font-family="Inter, system-ui, sans-serif">Side</text>
					<text x="18" y="104" fill="#22c55e" font-size="10" font-family="Inter, system-ui, sans-serif" font-weight="600">Long 10x</text>
					<text x="90" y="92" fill="#64748b" font-size="8" font-family="Inter, system-ui, sans-serif">Size</text>
					<text x="90" y="104" fill="#f0f4f8" font-size="10" font-family="Inter, system-ui, sans-serif" font-weight="600">0.5 BTC</text>
					<text x="155" y="92" fill="#64748b" font-size="8" font-family="Inter, system-ui, sans-serif">Margin</text>
					<text x="155" y="104" fill="#f0f4f8" font-size="10" font-family="Inter, system-ui, sans-serif" font-weight="600">$3,392</text>
					<!-- Funding rate -->
					<line x1="18" y1="114" x2="192" y2="114" stroke="#1e293b" stroke-width="1"/>
					<text x="18" y="130" fill="#64748b" font-size="8" font-family="Inter, system-ui, sans-serif">Funding Rate</text>
					<text x="192" y="130" fill="#22c55e" font-size="9" font-family="Inter, system-ui, sans-serif" font-weight="600" text-anchor="end">0.012%</text>
					<text x="18" y="146" fill="#64748b" font-size="8" font-family="Inter, system-ui, sans-serif">Next Funding</text>
					<text x="192" y="146" fill="#94a3b8" font-size="9" font-family="Inter, system-ui, sans-serif" font-weight="600" text-anchor="end">2h 14m</text>
				</svg>
			</div>

			<!-- Floating Exchange Badges (bottom right) -->
			<div style="position: absolute; bottom: 8%; right: 2%; display: flex; gap: 6px;">
				<div class="hero-float-panel" style="animation-delay: -2s;">
					<svg viewBox="0 0 80 32" style="width: 80px; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));">
						<rect x="1" y="1" width="78" height="30" rx="8" fill="#111a2e" stroke="#334155" stroke-width="0.5"/>
						<text x="40" y="20" fill="#f0b90b" font-size="10" font-family="Inter, system-ui, sans-serif" font-weight="700" text-anchor="middle">Binance</text>
					</svg>
				</div>
				<div class="hero-float-panel" style="animation-delay: -5s;">
					<svg viewBox="0 0 65 32" style="width: 65px; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));">
						<rect x="1" y="1" width="63" height="30" rx="8" fill="#111a2e" stroke="#334155" stroke-width="0.5"/>
						<text x="32" y="20" fill="#f69b2c" font-size="10" font-family="Inter, system-ui, sans-serif" font-weight="700" text-anchor="middle">Bybit</text>
					</svg>
				</div>
				<div class="hero-float-panel" style="animation-delay: -8s;">
					<svg viewBox="0 0 70 32" style="width: 70px; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));">
						<rect x="1" y="1" width="68" height="30" rx="8" fill="#111a2e" stroke="#334155" stroke-width="0.5"/>
						<text x="35" y="20" fill="#8b5cf6" font-size="10" font-family="Inter, system-ui, sans-serif" font-weight="700" text-anchor="middle">Kraken</text>
					</svg>
				</div>
				<div class="hero-float-panel" style="animation-delay: -11s;">
					<svg viewBox="0 0 55 32" style="width: 55px; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));">
						<rect x="1" y="1" width="53" height="30" rx="8" fill="#111a2e" stroke="#334155" stroke-width="0.5"/>
						<text x="27" y="20" fill="#00e6a7" font-size="10" font-family="Inter, system-ui, sans-serif" font-weight="700" text-anchor="middle">OKX</text>
					</svg>
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
