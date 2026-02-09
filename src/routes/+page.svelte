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
			<a href="/guides/what-is-margin-trading" class="btn btn-outline btn-lg">Learn Margin Trading</a>
		</div>
		<div class="hero-trust">
			<span><span class="trust-icon">✓</span> 15 exchanges compared</span>
			<span><span class="trust-icon">✓</span> Updated daily</span>
			<span><span class="trust-icon">✓</span> 100% independent</span>
		</div>

		<!-- Animated Trading SVG Illustration -->
		<div class="hero-illustration">
			<svg viewBox="0 0 800 380" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
				<!-- Background panel -->
				<rect x="40" y="20" width="720" height="340" rx="16" fill="#111a2e" stroke="#1e293b" stroke-width="1.5"/>
				<!-- Grid lines -->
				<line x1="100" y1="60" x2="100" y2="320" stroke="#1e293b" stroke-width="0.5"/>
				<line x1="220" y1="60" x2="220" y2="320" stroke="#1e293b" stroke-width="0.5"/>
				<line x1="340" y1="60" x2="340" y2="320" stroke="#1e293b" stroke-width="0.5"/>
				<line x1="460" y1="60" x2="460" y2="320" stroke="#1e293b" stroke-width="0.5"/>
				<line x1="580" y1="60" x2="580" y2="320" stroke="#1e293b" stroke-width="0.5"/>
				<line x1="700" y1="60" x2="700" y2="320" stroke="#1e293b" stroke-width="0.5"/>
				<line x1="100" y1="100" x2="700" y2="100" stroke="#1e293b" stroke-width="0.5"/>
				<line x1="100" y1="160" x2="700" y2="160" stroke="#1e293b" stroke-width="0.5"/>
				<line x1="100" y1="220" x2="700" y2="220" stroke="#1e293b" stroke-width="0.5"/>
				<line x1="100" y1="280" x2="700" y2="280" stroke="#1e293b" stroke-width="0.5"/>

				<!-- Candlesticks - green (bullish) -->
				<g class="svg-candle-grow" style="animation-delay:0.2s">
					<line x1="130" y1="180" x2="130" y2="240" stroke="#22c55e" stroke-width="1.5"/>
					<rect x="122" y="195" width="16" height="30" rx="2" fill="#22c55e"/>
				</g>
				<g class="svg-candle-grow" style="animation-delay:0.3s">
					<line x1="165" y1="170" x2="165" y2="250" stroke="#ef4444" stroke-width="1.5"/>
					<rect x="157" y="180" width="16" height="50" rx="2" fill="#ef4444"/>
				</g>
				<g class="svg-candle-grow" style="animation-delay:0.4s">
					<line x1="200" y1="160" x2="200" y2="230" stroke="#22c55e" stroke-width="1.5"/>
					<rect x="192" y="170" width="16" height="40" rx="2" fill="#22c55e"/>
				</g>
				<g class="svg-candle-grow" style="animation-delay:0.5s">
					<line x1="235" y1="140" x2="235" y2="210" stroke="#22c55e" stroke-width="1.5"/>
					<rect x="227" y="150" width="16" height="40" rx="2" fill="#22c55e"/>
				</g>
				<g class="svg-candle-grow" style="animation-delay:0.6s">
					<line x1="270" y1="130" x2="270" y2="200" stroke="#ef4444" stroke-width="1.5"/>
					<rect x="262" y="140" width="16" height="45" rx="2" fill="#ef4444"/>
				</g>
				<g class="svg-candle-grow" style="animation-delay:0.7s">
					<line x1="305" y1="120" x2="305" y2="190" stroke="#22c55e" stroke-width="1.5"/>
					<rect x="297" y="130" width="16" height="35" rx="2" fill="#22c55e"/>
				</g>
				<g class="svg-candle-grow" style="animation-delay:0.8s">
					<line x1="340" y1="110" x2="340" y2="180" stroke="#22c55e" stroke-width="1.5"/>
					<rect x="332" y="115" width="16" height="45" rx="2" fill="#22c55e"/>
				</g>
				<g class="svg-candle-grow" style="animation-delay:0.9s">
					<line x1="375" y1="100" x2="375" y2="170" stroke="#ef4444" stroke-width="1.5"/>
					<rect x="367" y="110" width="16" height="45" rx="2" fill="#ef4444"/>
				</g>
				<g class="svg-candle-grow" style="animation-delay:1.0s">
					<line x1="410" y1="90" x2="410" y2="160" stroke="#22c55e" stroke-width="1.5"/>
					<rect x="402" y="95" width="16" height="40" rx="2" fill="#22c55e"/>
				</g>
				<g class="svg-candle-grow" style="animation-delay:1.1s">
					<line x1="445" y1="100" x2="445" y2="155" stroke="#22c55e" stroke-width="1.5"/>
					<rect x="437" y="105" width="16" height="30" rx="2" fill="#22c55e"/>
				</g>

				<!-- Price line -->
				<polyline class="chart-line-draw" points="130,210 165,200 200,185 235,165 270,155 305,145 340,130 375,125 410,110 445,115"
					stroke="url(#lineGrad)" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

				<!-- Area fill under line -->
				<path d="M130,210 L165,200 L200,185 L235,165 L270,155 L305,145 L340,130 L375,125 L410,110 L445,115 L445,320 L130,320 Z"
					fill="url(#areaGrad)" opacity="0.3"/>

				<!-- Leverage selector panel (floating) -->
				<g class="svg-float" transform="translate(500, 60)">
					<rect width="180" height="110" rx="12" fill="#162040" stroke="#334155" stroke-width="1"/>
					<text x="16" y="28" fill="#94a3b8" font-size="11" font-family="Inter, sans-serif" font-weight="600">LEVERAGE</text>
					<rect x="12" y="40" width="45" height="28" rx="6" fill="#1e293b" stroke="#334155"/>
					<text x="24" y="59" fill="#94a3b8" font-size="12" font-family="Inter, sans-serif" font-weight="600">5x</text>
					<rect x="67" y="40" width="45" height="28" rx="6" fill="url(#leverageGrad)"/>
					<text x="78" y="59" fill="white" font-size="12" font-family="Inter, sans-serif" font-weight="700">10x</text>
					<rect x="122" y="40" width="45" height="28" rx="6" fill="#1e293b" stroke="#334155"/>
					<text x="131" y="59" fill="#94a3b8" font-size="12" font-family="Inter, sans-serif" font-weight="600">25x</text>
					<text x="16" y="92" fill="#22c55e" font-size="13" font-family="Inter, sans-serif" font-weight="700">+$2,450.00</text>
					<text x="120" y="92" fill="#22c55e" font-size="11" font-family="Inter, sans-serif">+24.5%</text>
				</g>

				<!-- P&L Display panel -->
				<g class="svg-float-delayed" transform="translate(500, 190)">
					<rect width="180" height="90" rx="12" fill="#162040" stroke="#334155" stroke-width="1"/>
					<text x="16" y="26" fill="#94a3b8" font-size="10" font-family="Inter, sans-serif" font-weight="600">UNREALIZED P&L</text>
					<text x="16" y="52" fill="#22c55e" font-size="22" font-family="Inter, sans-serif" font-weight="800">+$12,480</text>
					<rect x="16" y="64" width="148" height="4" rx="2" fill="#1e293b"/>
					<rect x="16" y="64" width="108" height="4" rx="2" fill="url(#leverageGrad)"/>
					<text x="16" y="82" fill="#64748b" font-size="10" font-family="Inter, sans-serif">BTC/USDT • Long</text>
				</g>

				<!-- Exchange logos floating -->
				<g class="svg-float-slow" transform="translate(510, 300)">
					<rect width="70" height="30" rx="6" fill="#162040" stroke="#334155" stroke-width="0.5"/>
					<text x="11" y="20" fill="#f0b90b" font-size="10" font-family="Inter, sans-serif" font-weight="700">Binance</text>
				</g>
				<g class="svg-float" transform="translate(590, 305)">
					<rect width="55" height="30" rx="6" fill="#162040" stroke="#334155" stroke-width="0.5"/>
					<text x="9" y="20" fill="#f69b2c" font-size="10" font-family="Inter, sans-serif" font-weight="700">Bybit</text>
				</g>
				<g class="svg-float-delayed" transform="translate(655, 300)">
					<rect width="55" height="30" rx="6" fill="#162040" stroke="#334155" stroke-width="0.5"/>
					<text x="7" y="20" fill="#8b5cf6" font-size="10" font-family="Inter, sans-serif" font-weight="700">Kraken</text>
				</g>

				<!-- Y-axis labels -->
				<text x="60" y="104" fill="#64748b" font-size="10" font-family="Inter, sans-serif">$68k</text>
				<text x="60" y="164" fill="#64748b" font-size="10" font-family="Inter, sans-serif">$66k</text>
				<text x="60" y="224" fill="#64748b" font-size="10" font-family="Inter, sans-serif">$64k</text>
				<text x="60" y="284" fill="#64748b" font-size="10" font-family="Inter, sans-serif">$62k</text>

				<!-- Gradients -->
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
				</defs>
			</svg>
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
				<a href="/guides/{guide.slug}" class="card" style="text-decoration: none;">
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
				<a href="/guides/margin-trading-for-beginners" class="btn btn-outline btn-lg">Beginner's Guide</a>
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
