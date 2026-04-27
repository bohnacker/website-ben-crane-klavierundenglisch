import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			// Falls die Seite in einem Unterordner liegt (z.B. trauteuchzutrauen.de/preview/), 
			// kann hier der Pfad eingetragen werden. Bei einer eigenen Domain bleibt es leer.
			base: process.env.NODE_ENV === 'production' ? '' : '' 
		}
	}
};

export default config;
