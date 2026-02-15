import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	preview: {
		allowedHosts: ['margintrade.com', 'www.margintrade.com']
	},
	server: {
		allowedHosts: ['margintrade.com', 'www.margintrade.com']
	}
});
