import { getGlossaryTerm, glossaryTerms } from '$lib/data/glossary.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const term = getGlossaryTerm(params.slug);
	if (!term) throw error(404, 'Term not found');
	return { term };
}

export function entries() {
	return glossaryTerms.map(t => ({ slug: t.slug }));
}
