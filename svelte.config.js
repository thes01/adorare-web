import adapter from '@sveltejs/adapter-auto';
import adapterNode from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import 'dotenv/config'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: process.env.VITE_NODE === 'node' ? adapterNode() : adapter()
	}
};

export default config;



{/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600&display=swap" rel="stylesheet"></link> */}