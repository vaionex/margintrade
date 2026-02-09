export function GET() {
	return new Response(`User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://www.margintrade.com/sitemap.xml

# IndexNow key: a1b2c3d4e5f6g7h8i9j0
`, { headers: { 'Content-Type': 'text/plain' } });
}
