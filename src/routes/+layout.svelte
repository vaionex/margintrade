<script>
	import '../app.css';
	let { children } = $props();
	let menuOpen = $state(false);
</script>

<svelte:head>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://www.margintrade.com" />
</svelte:head>

<header class="site-header">
	<div class="header-inner">
		<a href="/" class="logo">
			<span class="logo-icon">📊</span> MarginTrade
		</a>
		<button class="mobile-menu-toggle" onclick={() => menuOpen = !menuOpen} aria-label="Toggle menu">
			{menuOpen ? '✕' : '☰'}
		</button>
		<nav class:open={menuOpen}>
			<a href="/exchanges" onclick={() => menuOpen = false}>Exchanges</a>
			<a href="/compare" onclick={() => menuOpen = false}>Compare</a>
			<a href="/learn" onclick={() => menuOpen = false}>Guides</a>
			<a href="/glossary" onclick={() => menuOpen = false}>Glossary</a>
			<a href="/tools" onclick={() => menuOpen = false}>Tools</a>
			<a href="/countries" onclick={() => menuOpen = false}>Countries</a>
		</nav>
	</div>
</header>

<main style="position: relative;">
	<!-- Subtle global background orbs -->
	<div class="blur-orb blur-orb-blue blur-orb-animate" style="width: 800px; height: 800px; top: 0; left: -300px; opacity: 0.3; position: fixed; z-index: -1;"></div>
	<div class="blur-orb blur-orb-violet blur-orb-animate" style="width: 600px; height: 600px; top: 40%; right: -200px; opacity: 0.25; position: fixed; z-index: -1; animation-delay: -7s;"></div>
	{@render children()}
</main>

<footer class="site-footer">
	<div class="footer-grid">
		<div class="footer-about">
			<a href="/" class="logo"><span class="logo-icon">📊</span> MarginTrade</a>
			<p>Your trusted resource for margin trading exchange reviews, comparisons, and educational guides. We help traders find the best platforms for leveraged trading.</p>
		</div>
		<div class="footer-col">
			<h4>Exchanges</h4>
			<ul>
				<li><a href="/platforms/crypto">Crypto Exchanges</a></li>
				<li><a href="/platforms/stocks">Traditional Brokers</a></li>
				<li><a href="/exchanges/binance">Binance Review</a></li>
				<li><a href="/exchanges/bybit">Bybit Review</a></li>
				<li><a href="/exchanges/kraken">Kraken Review</a></li>
				<li><a href="/exchanges/interactive-brokers">Interactive Brokers</a></li>
			</ul>
		</div>
		<div class="footer-col">
			<h4>Guides</h4>
			<ul>
				<li><a href="/learn/what-is-margin-trading">What Is Margin Trading?</a></li>
				<li><a href="/learn/margin-trading-for-beginners">Beginner's Guide</a></li>
				<li><a href="/learn/best-margin-trading-platforms-2026">Best Platforms 2026</a></li>
				<li><a href="/learn/margin-trading-risks">Trading Risks</a></li>
				<li><a href="/learn/margin-trading-strategies">Trading Strategies</a></li>
			</ul>
		</div>
		<div class="footer-col">
			<h4>Resources</h4>
			<ul>
				<li><a href="/compare">Compare Exchanges</a></li>
				<li><a href="/glossary">Glossary</a></li>
				<li><a href="/tools">Calculators</a></li>
				<li><a href="/countries">By Country</a></li>
				<li><a href="/about">About Us</a></li>
			</ul>
		</div>
	</div>
	<div class="footer-disclaimer" style="margin-left: 1.5rem; margin-right: 1.5rem;">
		<strong>⚠️ Risk Disclaimer:</strong> Margin trading involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results. The content on MarginTrade.com is for informational and educational purposes only. It should not be considered financial advice. You should consult a qualified financial advisor before making any trading decisions. We may receive compensation from partners featured on this site.
	</div>
	<div class="footer-bottom">
		<p>&copy; {new Date().getFullYear()} MarginTrade.com — All rights reserved.</p>
		<p>Independent margin trading research since 2024</p>
	</div>
</footer>
