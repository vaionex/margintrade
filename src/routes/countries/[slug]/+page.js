import { getCountry, countries } from '$lib/data/countries.js';
import { getExchange } from '$lib/data/exchanges.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const country = getCountry(params.slug);
	if (!country) throw error(404, 'Country not found');
	const platforms = country.topPlatforms.map(slug => getExchange(slug)).filter(Boolean);
	return { country, platforms };
}

export function entries() {
	return countries.map(c => ({ slug: c.slug }));
}
