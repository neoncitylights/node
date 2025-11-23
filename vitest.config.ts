import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		coverage: {
			include: ['packages/**/src'],
			provider: 'v8',
			reportsDirectory: 'dist/vitest/coverage',
		},
		projects: ['packages/*'],
		outputFile: {
			html: 'dist/vitest/report/index.html',
			json: 'dist/vitest/report/index.json',
			clover: 'dist/vitest/report/index.xml',
		},
	},
})
