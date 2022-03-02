import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import AutoImport from 'unplugin-auto-import/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
				AutoImport({
					dts: './src/auto-imports.d.ts',
					imports: ['svelte', 'svelte/store']
				})
			]
		}
	}
};

export default config;
