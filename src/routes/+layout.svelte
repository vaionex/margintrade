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
			<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo-svg">
				<rect width="32" height="32" rx="8" fill="url(#logoGrad)" />
				<path d="M8 22L12 14L16 18L20 10L24 13" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
				<path d="M20 10L24 10L24 13" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
				<defs>
					<linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32">
						<stop offset="0%" stop-color="#3b82f6" />
						<stop offset="100%" stop-color="#8b5cf6" />
					</linearGradient>
				</defs>
			</svg>
			<span class="logo-text">Margin<span class="logo-accent">Trade</span></span>
		</a>
		<button class="mobile-menu-toggle" onclick={() => menuOpen = !menuOpen}>
			{menuOpen ? '✕' : '☰'}
		</button>
		<nav class:open={menuOpen}>
			<a href="/exchanges" onclick={() => menuOpen = false}>Exchanges</a>
			<a href="/compare" onclick={() => menuOpen = false}>Compare</a>
			<a href="/guides" onclick={() => menuOpen = false}>Guides</a>
			<a href="/glossary" onclick={() => menuOpen = false}>Glossary</a>
			<a href="/about" onclick={() => menuOpen = false}>About</a>
		</nav>
	</div>
</header>

<main>
	{@render children()}
</main>

<footer class="site-footer">
	<div class="footer-grid">
		<div class="footer-about">
			<a href="/" class="logo">
				<svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo-svg">
					<rect width="32" height="32" rx="8" fill="url(#logoGradF)" />
					<path d="M8 22L12 14L16 18L20 10L24 13" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M20 10L24 10L24 13" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
					<defs>
						<linearGradient id="logoGradF" x1="0" y1="0" x2="32" y2="32">
							<stop offset="0%" stop-color="#3b82f6" />
							<stop offset="100%" stop-color="#8b5cf6" />
						</linearGradient>
					</defs>
				</svg>
				<span class="logo-text">Margin<span class="logo-accent">Trade</span></span>
			</a>
			<p>Your trusted resource for margin trading exchange reviews, comparisons, and educational guides. We help traders find the best platforms for leveraged trading.</p>
		</div>
		<div class="footer-col">
			<h4>Exchanges</h4>
			<ul>
				<li><a href="/exchanges/crypto">Crypto Exchanges</a></li>
				<li><a href="/exchanges/traditional">Traditional Brokers</a></li>
				<li><a href="/exchanges/binance">Binance Review</a></li>
				<li><a href="/exchanges/bybit">Bybit Review</a></li>
				<li><a href="/exchanges/kraken">Kraken Review</a></li>
				<li><a href="/exchanges/interactive-brokers">Interactive Brokers</a></li>
			</ul>
		</div>
		<div class="footer-col">
			<h4>Guides</h4>
			<ul>
				<li><a href="/guides/what-is-margin-trading">What Is Margin Trading?</a></li>
				<li><a href="/guides/margin-trading-for-beginners">Beginner's Guide</a></li>
				<li><a href="/guides/best-margin-trading-platforms-2026">Best Platforms 2026</a></li>
				<li><a href="/guides/margin-trading-risks">Trading Risks</a></li>
				<li><a href="/guides/margin-trading-strategies">Trading Strategies</a></li>
			</ul>
		</div>
		<div class="footer-col">
			<h4>Resources</h4>
			<ul>
				<li><a href="/compare">Compare Exchanges</a></li>
				<li><a href="/glossary">Glossary</a></li>
				<li><a href="/about">About Us</a></li>
				<li><a href="/contact">Contact</a></li>
				<li><a href="/privacy">Privacy Policy</a></li>
			</ul>
		</div>
	</div>
	<div class="footer-bottom">
		<p>&copy; {new Date().getFullYear()} MarginTrade.com — All rights reserved.</p>
		<p>Disclaimer: MarginTrade contains affiliate links. We may earn a commission at no extra cost to you. Margin trading involves risk of loss. Not financial advice.</p>
	</div>
</footer>
