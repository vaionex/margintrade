import { getComparison, comparisons } from '$lib/data/comparisons.js';
import { getExchange } from '$lib/data/exchanges.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const comparison = getComparison(params.slug);
	if (!comparison) throw error(404, 'Comparison not found');
	const ex1 = getExchange(comparison.exchange1);
	const ex2 = getExchange(comparison.exchange2);
	return { comparison, ex1, ex2 };
}

export function entries() {
	return comparisons.map(c => ({ slug: c.slug }));
}
