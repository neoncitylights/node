import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		coverage: {
			include: ['packages/**/src'],
			provider: 'v8',
		},
		projects: ['packages/*'],
		outputFile: {
			html: 'dist/vitest/index.html',
			json: 'dist/vitest/index.json',
			clover: 'dist/vitest/index.xml',
		}
	},
})
