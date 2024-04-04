import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		// vitest doesn't see the global localStorage variable
		// we need to use a specific environment
		environment: 'jsdom',
	},
};

export default config;
