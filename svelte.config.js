import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			out: 'build'
		}),
		prerender: {
			entries: ['*'],
			handleMissingId: 'ignore'
		}
	}
};

export default config;
