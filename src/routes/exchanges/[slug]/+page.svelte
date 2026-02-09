<script>
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { onMount } from 'svelte';

	let { data } = $props();
	const ex = data.exchange;

	let faqOpen = $state({});
	function toggleFaq(i) { faqOpen[i] = !faqOpen[i]; }

	function renderStars(rating) {
		const full = Math.floor(rating);
		const half = rating % 1 >= 0.5 ? 1 : 0;
		return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
	}

	const maxFeeRef = 0.1; // normalize fee bars against 0.1%

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
		}, { threshold: 0.1 });
		document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>{ex.name} Margin Trading Review 2026 — Fees, Leverage & Bonus | MarginTrade</title>
	<meta name="description" content="{ex.name} margin trading review: up to {ex.maxLeverage}x leverage, {ex.makerFee}%/{ex.takerFee}% fees. {ex.description.slice(0, 120)}..." />
	<link rel="canonical" href="https://www.margintrade.com/exchanges/{ex.slug}" />
</svelte:head>

<div class="container" style="padding-top: 1rem;">
	<Breadcrumbs items={[
		{ label: 'Exchanges', href: '/exchanges' },
		{ label: ex.name }
	]} />
</div>

<!-- Exchange Header SVG -->
<div class="container">
	<div class="exchange-header-svg animate-in">
		<svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;">
			<!-- Background -->
			<rect width="800" height="200" fill="#0c1220"/>
			<rect x="0" y="0" width="800" height="200" fill="url(#headerGrad)" opacity="0.5"/>

			<!-- Decorative grid -->
			{#each Array(8) as _, i}
				<line x1={100 * (i + 1)} y1="0" x2={100 * (i + 1)} y2="200" stroke="#1e293b" stroke-width="0.5" opacity="0.5"/>
			{/each}
			{#each Array(3) as _, i}
				<line x1="0" y1={50 * (i + 1)} x2="800" y2={50 * (i + 1)} stroke="#1e293b" stroke-width="0.5" opacity="0.5"/>
			{/each}

			<!-- Mini chart line -->
			<polyline class="chart-line-draw" points="50,150 120,130 190,140 260,110 330,90 400,95 470,70 540,80 610,60 680,65 750,50"
				stroke="url(#headerLineGrad)" stroke-width="2" fill="none" stroke-linecap="round"/>

			<!-- Exchange name -->
			<text x="50" y="80" fill="white" font-size="36" font-family="Inter, sans-serif" font-weight="900" letter-spacing="-1">{ex.name}</text>
			<text x="50" y="105" fill="#94a3b8" font-size="14" font-family="Inter, sans-serif">Margin Trading Review 2026</text>

			<!-- Stats boxes -->
			<g transform="translate(500, 30)">
				<rect width="120" height="55" rx="8" fill="#162040" stroke="#334155" stroke-width="0.5"/>
				<text x="12" y="22" fill="#64748b" font-size="10" font-family="Inter, sans-serif">MAX LEVERAGE</text>
				<text x="12" y="44" fill="#60a5fa" font-size="20" font-family="Inter, sans-serif" font-weight="800">{ex.maxLeverage}x</text>
			</g>
			<g transform="translate(640, 30)">
				<rect width="120" height="55" rx="8" fill="#162040" stroke="#334155" stroke-width="0.5"/>
				<text x="12" y="22" fill="#64748b" font-size="10" font-family="Inter, sans-serif">RATING</text>
				<text x="12" y="44" fill="#f59e0b" font-size="20" font-family="Inter, sans-serif" font-weight="800">{ex.rating}/5</text>
			</g>

			<defs>
				<linearGradient id="headerGrad" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#3b82f6" stop-opacity="0.1"/>
					<stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.05"/>
				</linearGradient>
				<linearGradient id="headerLineGrad" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3"/>
					<stop offset="100%" stop-color="#22c55e" stop-opacity="0.8"/>
				</linearGradient>
			</defs>
		</svg>
	</div>
</div>

<div class="container">
	<div class="review-layout">
		<!-- Main Content -->
		<div class="review-content">
			<!-- Rating & Quick Info -->
			<div class="animate-in" style="margin-bottom: 2rem;">
				<div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:1rem;">
					<span class="stars" style="font-size:1.3rem;">{renderStars(ex.rating)}</span>
					<span style="font-size:1.5rem;font-weight:800;">{ex.rating}/5</span>
					<span class="badge badge-blue">{ex.type === 'crypto' ? 'Crypto Exchange' : 'Traditional Broker'}</span>
					{#if ex.regulated}
						<span class="badge badge-green">Regulated</span>
					{/if}
				</div>
				<p style="font-size:1.05rem;line-height:1.7;">{ex.description}</p>
			</div>

			<!-- Quick Stats -->
			<div class="animate-in" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;margin-bottom:2.5rem;">
				<div class="card" style="text-align:center;padding:1.25rem;">
					<div style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin-bottom:0.25rem;">Max Leverage</div>
					<div style="font-size:1.5rem;font-weight:800;color:var(--accent-light);">{ex.maxLeverage}x</div>
				</div>
				<div class="card" style="text-align:center;padding:1.25rem;">
					<div style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin-bottom:0.25rem;">Maker Fee</div>
					<div style="font-size:1.5rem;font-weight:800;color:var(--green);">{ex.makerFee}%</div>
				</div>
				<div class="card" style="text-align:center;padding:1.25rem;">
					<div style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin-bottom:0.25rem;">Taker Fee</div>
					<div style="font-size:1.5rem;font-weight:800;color:var(--yellow);">{ex.takerFee}%</div>
				</div>
				<div class="card" style="text-align:center;padding:1.25rem;">
					<div style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin-bottom:0.25rem;">Founded</div>
					<div style="font-size:1.5rem;font-weight:800;">{ex.founded}</div>
				</div>
			</div>

			<!-- Pros & Cons -->
			<div class="animate-in">
				<h2 style="margin-top:0;">Pros & Cons</h2>
				<div class="pros-cons">
					<div class="pros-card">
						<h4>✅ Pros</h4>
						<ul>
							{#each ex.pros as pro}
								<li>{pro}</li>
							{/each}
						</ul>
					</div>
					<div class="cons-card">
						<h4>❌ Cons</h4>
						<ul>
							{#each ex.cons as con}
								<li>{con}</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>

			<!-- Fee Comparison with Visual Bars -->
			<div class="animate-in">
				<h2>Fee Structure</h2>
				<div class="card" style="padding:2rem;">
					<div style="margin-bottom:1.5rem;">
						<div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;">
							<span style="font-weight:600;">Maker Fee</span>
							<span style="color:var(--green);font-weight:700;">{ex.makerFee}%</span>
						</div>
						<div style="height:8px;background:var(--bg-tertiary);border-radius:4px;overflow:hidden;">
							<div class="fee-bar" style="width:{Math.max(4, (ex.makerFee / maxFeeRef) * 100)}%;"></div>
						</div>
					</div>
					<div style="margin-bottom:1.5rem;">
						<div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;">
							<span style="font-weight:600;">Taker Fee</span>
							<span style="color:var(--yellow);font-weight:700;">{ex.takerFee}%</span>
						</div>
						<div style="height:8px;background:var(--bg-tertiary);border-radius:4px;overflow:hidden;">
							<div class="fee-bar" style="width:{Math.max(4, (ex.takerFee / maxFeeRef) * 100)}%;"></div>
						</div>
					</div>
					<div>
						<div style="display:flex;justify-content:space-between;margin-bottom:0.5rem;">
							<span style="font-weight:600;">Interest Rate</span>
							<span style="color:var(--text-secondary);">{ex.interestRate}</span>
						</div>
					</div>
					{#if ex.liquidationFee}
						<div style="margin-top:1.5rem;">
							<div style="display:flex;justify-content:space-between;">
								<span style="font-weight:600;">Liquidation Fee</span>
								<span style="color:var(--red);">{ex.liquidationFee}</span>
							</div>
						</div>
					{/if}
				</div>
			</div>

			<!-- Margin Tiers -->
			{#if ex.marginTiers?.length}
				<div class="animate-in">
					<h2>Margin Tiers</h2>
					<div class="comparison-table">
						<table>
							<thead>
								<tr>
									<th>Tier</th>
									<th>Max Position</th>
									<th>Max Leverage</th>
									<th>Maintenance Margin</th>
								</tr>
							</thead>
							<tbody>
								{#each ex.marginTiers as tier}
									<tr>
										<td><strong>{tier.tier}</strong></td>
										<td>{tier.maxPosition}</td>
										<td><strong style="color:var(--accent-light);">{tier.maxLeverage}x</strong></td>
										<td>{tier.maintenanceMargin}</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			{/if}

			<!-- How to Sign Up -->
			{#if ex.signupSteps?.length}
				<div class="animate-in">
					<h2>How to Sign Up for {ex.name}</h2>
					<div class="signup-steps">
						{#each ex.signupSteps as step}
							<div class="signup-step">
								<span style="color:var(--text-secondary);line-height:1.6;">{step}</span>
							</div>
						{/each}
					</div>
				</div>
			{/if}

			<!-- FAQ -->
			{#if ex.faq?.length}
				<div class="animate-in">
					<h2>{ex.name} FAQ</h2>
					{#each ex.faq as faq, i}
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
			{/if}
		</div>

		<!-- Sidebar -->
		<div class="review-sidebar">
			<div class="sidebar-cta">
				<div style="font-size:2.5rem;margin-bottom:0.75rem;">🏦</div>
				<h3 style="margin:0 0 0.5rem;font-size:1.2rem;">{ex.name}</h3>
				<div class="stars">{renderStars(ex.rating)}</div>
				<p style="font-size:0.85rem;color:var(--text-muted);margin:0.75rem 0;">Up to {ex.maxLeverage}x leverage</p>
				{#if ex.referralBonus}
					<div style="background:var(--green-bg);border:1px solid var(--green-border);border-radius:var(--radius);padding:0.75rem;margin-bottom:0.5rem;">
						<span style="color:var(--green);font-weight:700;font-size:0.9rem;">🎁 {ex.referralBonus}</span>
					</div>
				{/if}
				<a href={ex.referralUrl} class="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer nofollow">
					Visit {ex.name} →
				</a>
				<p style="font-size:0.75rem;color:var(--text-muted);margin-top:0.75rem;">Affiliate link — we may earn a commission</p>
			</div>

			<!-- Quick Details -->
			<div class="card" style="margin-top:1rem;padding:1.25rem;">
				<h4 style="margin:0 0 1rem;font-size:0.95rem;">Quick Details</h4>
				<div style="font-size:0.85rem;">
					<div style="display:flex;justify-content:space-between;padding:0.5rem 0;border-bottom:1px solid var(--border);">
						<span style="color:var(--text-muted);">HQ</span>
						<span>{ex.headquarters}</span>
					</div>
					<div style="display:flex;justify-content:space-between;padding:0.5rem 0;border-bottom:1px solid var(--border);">
						<span style="color:var(--text-muted);">Founded</span>
						<span>{ex.founded}</span>
					</div>
					<div style="display:flex;justify-content:space-between;padding:0.5rem 0;border-bottom:1px solid var(--border);">
						<span style="color:var(--text-muted);">Margin Types</span>
						<span style="text-align:right;">{ex.marginTypes?.join(', ')}</span>
					</div>
					{#if ex.tradingPairs}
						<div style="display:flex;justify-content:space-between;padding:0.5rem 0;border-bottom:1px solid var(--border);">
							<span style="color:var(--text-muted);">Trading Pairs</span>
							<span>{ex.tradingPairs.toLocaleString()}+</span>
						</div>
					{/if}
					<div style="display:flex;justify-content:space-between;padding:0.5rem 0;">
						<span style="color:var(--text-muted);">Deposit Methods</span>
						<span style="text-align:right;max-width:60%;">{ex.depositMethods?.join(', ')}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Disclaimer -->
<div class="container" style="margin-top:3rem;">
	<div class="disclaimer">
		<strong>⚠️ Risk Disclaimer:</strong> Margin trading on {ex.name} involves substantial risk. You can lose more than your initial investment. This review is for informational purposes only and does not constitute financial advice. Always do your own research before trading.
	</div>
</div>

<style>
	@media (max-width: 900px) {
		.review-layout {
			grid-template-columns: 1fr !important;
		}
		
		.review-sidebar {
			position: static !important;
		}
	}

	@media (max-width: 768px) {
		/* Exchange header mobile fixes */
		.exchange-header-svg svg text {
			font-size: 24px !important;
		}

		.exchange-header-svg svg g:nth-of-type(2),
		.exchange-header-svg svg g:nth-of-type(3) {
			transform: scale(0.8);
		}

		/* Make tables scrollable */
		.comparison-table {
			overflow-x: auto;
		}

		/* Quick stats grid */
		div[style*="grid-template-columns:repeat(auto-fit,minmax(150px,1fr))"] {
			grid-template-columns: repeat(2, 1fr) !important;
			gap: 0.75rem !important;
		}

		/* Pros/cons on mobile */
		.pros-cons {
			grid-template-columns: 1fr !important;
		}

		/* Sidebar CTA button */
		.sidebar-cta .btn {
			padding: 0.75rem 1rem;
			font-size: 0.9rem;
		}

		/* Better spacing on mobile */
		.container {
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}

	@media (max-width: 480px) {
		/* Stack quick stats vertically on very small screens */
		div[style*="grid-template-columns:repeat(2, 1fr)"] {
			grid-template-columns: 1fr !important;
		}

		/* Smaller text on mobile */
		.exchange-header-svg svg text:first-of-type {
			font-size: 20px !important;
		}
		
		.exchange-header-svg svg text:nth-of-type(2) {
			font-size: 12px !important;
		}
	}
</style>
