import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		coverage: {
			include: ['packages/**/src'],
			provider: 'v8',
		},
		projects: ['packages/*'],
	},
})
