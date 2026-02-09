<svelte:head>
	<title>Contact Us | MarginTrade.com</title>
	<meta name="description" content="Get in touch with the MarginTrade team. Contact us for partnership inquiries, corrections, or general questions." />
	<link rel="canonical" href="https://www.margintrade.com/contact" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "MarginTrade",
		"url": "https://www.margintrade.com",
		"email": "one@vaionex.com",
		"parentOrganization": {
			"@type": "Organization",
			"name": "Vaionex Corporation",
			"address": {
				"@type": "PostalAddress",
				"addressRegion": "Delaware",
				"addressCountry": "US"
			}
		}
	})}</script>`}
</svelte:head>

<div class="container page-content">
	<nav class="breadcrumbs"><a href="/">Home</a> <span>›</span> Contact</nav>

	<h1>Contact Us</h1>
	<p class="subtitle">Have a question, correction, or partnership inquiry? We'd love to hear from you.</p>

	<div class="contact-grid">
		<div class="contact-card">
			<div class="contact-icon">✉️</div>
			<h3>General Inquiries</h3>
			<p>For questions about our content, corrections, or general feedback.</p>
			<a href="mailto:one@vaionex.com" class="contact-link">one@vaionex.com</a>
		</div>

		<div class="contact-card">
			<div class="contact-icon">🤝</div>
			<h3>Partnerships</h3>
			<p>Interested in listing your exchange or advertising on MarginTrade?</p>
			<a href="mailto:one@vaionex.com" class="contact-link">one@vaionex.com</a>
		</div>

		<div class="contact-card">
			<div class="contact-icon">🐛</div>
			<h3>Report an Issue</h3>
			<p>Found inaccurate data or a broken page? Let us know and we'll fix it.</p>
			<a href="mailto:one@vaionex.com" class="contact-link">one@vaionex.com</a>
		</div>
	</div>

	<div class="company-info">
		<h2>Company</h2>
		<p><strong>Vaionex Corporation</strong></p>
		<p>Delaware, USA</p>
		<p>Email: <a href="mailto:one@vaionex.com">one@vaionex.com</a></p>
	</div>
</div>

<style>
	.page-content { padding: 3rem 0; }
	h1 { margin-bottom: 0.5rem; }
	.subtitle { color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 2.5rem; }

	.contact-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1.25rem;
		margin-bottom: 3rem;
	}

	.contact-card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: 1.75rem;
		transition: border-color 0.2s, transform 0.2s;
	}

	.contact-card:hover {
		border-color: var(--accent);
		transform: translateY(-2px);
	}

	.contact-icon { font-size: 1.75rem; margin-bottom: 0.75rem; }
	.contact-card h3 { margin-bottom: 0.5rem; font-size: 1.1rem; }
	.contact-card p { color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6; margin-bottom: 0.75rem; }

	.contact-link {
		color: var(--accent-light);
		font-weight: 600;
		text-decoration: none;
		font-size: 0.95rem;
	}
	.contact-link:hover { text-decoration: underline; }

	.company-info {
		border-top: 1px solid var(--border);
		padding-top: 2rem;
		max-width: 400px;
	}
	.company-info h2 { margin-bottom: 1rem; font-size: 1.25rem; }
	.company-info p { color: var(--text-secondary); margin-bottom: 0.25rem; }
	.company-info a { color: var(--accent-light); }
</style>
