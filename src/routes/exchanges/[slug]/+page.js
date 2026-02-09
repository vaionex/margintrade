import { getExchange, exchanges } from '$lib/data/exchanges.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const exchange = getExchange(params.slug);
	if (!exchange) throw error(404, 'Exchange not found');
	return { exchange };
}

export function entries() {
	return exchanges.map(e => ({ slug: e.slug }));
}
