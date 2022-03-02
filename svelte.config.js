import { resolve } from 'path';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import AutoImport from 'unplugin-auto-import/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					'@': resolve('./src')
				}
			},
			plugins: [
				AutoImport({
					dts: './src/auto-imports.d.ts',
					imports: ['svelte', 'svelte/store']
				})
			],
			server: {
				port: 8080
			}
		}
	}
};

export default config;
