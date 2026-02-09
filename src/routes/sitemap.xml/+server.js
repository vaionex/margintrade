import { exchanges } from '$lib/data/exchanges.js';
import { comparisons } from '$lib/data/comparisons.js';
import { guides } from '$lib/data/guides.js';
import { glossaryTerms } from '$lib/data/glossary.js';

export function GET() {
	const base = 'https://www.margintrade.com';

	const staticPages = [
		{ loc: '', priority: '1.0', changefreq: 'weekly' },
		{ loc: '/exchanges', priority: '0.9', changefreq: 'weekly' },
		{ loc: '/exchanges/crypto', priority: '0.8', changefreq: 'weekly' },
		{ loc: '/exchanges/traditional', priority: '0.8', changefreq: 'weekly' },
		{ loc: '/compare', priority: '0.8', changefreq: 'weekly' },
		{ loc: '/guides', priority: '0.8', changefreq: 'weekly' },
		{ loc: '/glossary', priority: '0.7', changefreq: 'monthly' },
		{ loc: '/about', priority: '0.5', changefreq: 'monthly' },
		{ loc: '/contact', priority: '0.4', changefreq: 'monthly' }
	];

	const exchangePages = exchanges.map(e => ({
		loc: `/exchanges/${e.slug}`, priority: '0.9', changefreq: 'weekly'
	}));

	const comparisonPages = comparisons.map(c => ({
		loc: `/compare/${c.slug}`, priority: '0.8', changefreq: 'monthly'
	}));

	const guidePages = guides.map(g => ({
		loc: `/guides/${g.slug}`, priority: '0.8', changefreq: 'monthly'
	}));

	const glossaryPages = glossaryTerms.map(t => ({
		loc: `/glossary/${t.slug}`, priority: '0.6', changefreq: 'monthly'
	}));

	const allPages = [...staticPages, ...exchangePages, ...comparisonPages, ...guidePages, ...glossaryPages];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${base}${p.loc}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
}
