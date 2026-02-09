import { guides } from '$lib/data/guides.js';
import { comparisons } from '$lib/data/comparisons.js';
import { glossaryTerms } from '$lib/data/glossary.js';
import { exchanges } from '$lib/data/exchanges.js';
import { countries } from '$lib/data/countries.js';

const site = 'https://www.margintrade.com';

export function GET() {
	const pages = [
		{ url: '', priority: '1.0', changefreq: 'weekly' },
		{ url: '/learn', priority: '0.9', changefreq: 'weekly' },
		{ url: '/compare', priority: '0.9', changefreq: 'weekly' },
		{ url: '/glossary', priority: '0.8', changefreq: 'monthly' },
		{ url: '/tools', priority: '0.8', changefreq: 'monthly' },
		{ url: '/tools/liquidation-calculator', priority: '0.8', changefreq: 'monthly' },
		{ url: '/tools/margin-calculator', priority: '0.8', changefreq: 'monthly' },
		{ url: '/tools/position-size-calculator', priority: '0.8', changefreq: 'monthly' },
		{ url: '/countries', priority: '0.8', changefreq: 'monthly' },
		{ url: '/exchanges', priority: '0.9', changefreq: 'weekly' },
		{ url: '/about', priority: '0.5', changefreq: 'monthly' },
		{ url: '/contact', priority: '0.4', changefreq: 'yearly' },
	];

	// Guides
	for (const g of guides) {
		pages.push({ url: `/learn/${g.slug}`, priority: '0.8', changefreq: 'monthly', lastmod: g.lastUpdated });
	}

	// Comparisons
	for (const c of comparisons) {
		pages.push({ url: `/compare/${c.slug}`, priority: '0.7', changefreq: 'monthly' });
	}

	// Glossary
	for (const t of glossaryTerms) {
		pages.push({ url: `/glossary/${t.slug}`, priority: '0.6', changefreq: 'monthly' });
	}

	// Exchanges
	for (const e of exchanges) {
		pages.push({ url: `/exchanges/${e.slug}`, priority: '0.7', changefreq: 'monthly' });
	}

	// Countries
	for (const c of countries) {
		pages.push({ url: `/countries/${c.slug}`, priority: '0.7', changefreq: 'monthly' });
	}

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${site}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>${p.lastmod ? `\n    <lastmod>${p.lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
}
