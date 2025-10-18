import { defineProject } from 'vitest/config'

export default defineProject({
	build: {
		lib: {
			entry: new URL('src/index.ts', import.meta.url).pathname,
			formats: ['es'],
		},
	},
	define: {
		'import.meta.vitest': 'undefined',
	},
	test: {
		includeSource: ['src/**/*.{js,ts}'],
	},
})
