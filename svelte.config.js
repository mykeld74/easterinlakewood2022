import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,

			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		})
	],

	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			entries: ['*']
		},

		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;'
					}
				}
			},
			resolve: {
				alias: {
					$css: path.resolve('./src/css'),
					$components: path.resolve('./src/components'),
					$data: path.resolve('./src/data'),
					$img: path.resolve('./src/images')
				}
			}
		}
	}
};

export default config;
