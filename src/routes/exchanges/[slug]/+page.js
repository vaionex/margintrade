import { exchanges } from '$lib/data/exchanges.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const exchange = exchanges.find(e => e.slug === params.slug);
	if (!exchange) throw error(404, 'Exchange not found');
	return { exchange };
}
