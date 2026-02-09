import { getGuide, guides } from '$lib/data/guides.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const guide = getGuide(params.slug);
	if (!guide) throw error(404, 'Guide not found');
	return { guide };
}

export function entries() {
	return guides.map(g => ({ slug: g.slug }));
}
