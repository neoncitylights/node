# TypeScript Template

This repository template makes it easier to create a new NPM library, package or application using Node.js and TypeScript. It comes with several developer tools pre-configured and ready to use, so it's easier to get started.

## Features

- [x] [Node.js](https://nodejs.org/) and latest [TypeScript](https://www.typescriptlang.org/) support
- [x] Monorepo support with [NPM workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces)
- [x] JS module resolution with [ES Modules](https://nodejs.org/api/esm.html), the official ECMAScript standard
- [x] Continuous integration with [GitHub Actions](https://github.com/features/actions)
- [x] Auto-bundled, minified source code with [Vite](https://vitejs.dev/)
- [x] Unit testing and code coverage with [Vitest](https://vitest.dev/) framework
- [x] Auto-generated API documentation with [TypeDoc](https://typedoc.org/)
- [x] Auto-linted and formatted code with [ESLint](https://eslint.org/) and [Stylistic](https://eslint.style)
- [x] Dependency updates with [Dependabot](https://github.com/dependabot)

## Getting started

### Create a new repository

Choose a method:
- **GitHub UI**: Press the "Use this template" button in the top-right corner of this page.
- **GitHub CLI**: Install [GitHub CLI](https://cli.github.com). Then run one of the following:
  ```shell
  gh repo create --template neoncitylights/node --public --clone {{repository}}  # clone as public
  gh repo create --template neoncitylights/node --private --clone {{repository}} # clone as private
  ```

### Replace placeholders

Using your text editor or IDE, find-and-replace the following placeholders:

- `@author/package`: Replace this with the author's name (e.g a user or organization) and package's name.
- `{{author}}`: Replace this with the author's name (e.g real name, GitHub username, etc).
- `{{username}}`: Replace this with your GitHub username.
- `{{repository}}`: Replace this with the name of your repository.
- `{{desc}}`: Replace this with a short description of the package.

## Publishing a package
```shell
# Enter the root directory of the package you want to publish
cd packages/pkg1

# if package is scoped, e.g "hello-world"
npm publish

# if package is non-scoped, e.g "@user123/hello-world",
# can also be published privately via `--access private` (requires npm pro plan)
npm publish --access public
```

## Configure

### NPM scripts

| Command | Description |
| ------- | ----------- |
| `npm run build`      | Build all packages |
| `npm run docs`       | Generate documentation |
| `npm run docs-watch` | Generate documentation in watch mode |
| `npm run clean`      | Remove all generated files |
| `npm run test`       | Run unit tests |
| `npm run test-ci`    | Run unit tests in CI mode |
| `npm run test-ui`    | Run unit tests in UI/browser mode |
| `npm run test-watch` | Run unit tests in watch mode |
| `npm run lint`       | Check for ESLint/publint errors |
| `npm run lint-fix`   | Fix ESLint errors (publint errors must be fixed manually) |
| `npm run eslint`     | Check for ESLint errors |
| `npm run eslint-fix` | Fix ESLint errors |
| `npm run publint`    | Check for NPM packaging errors |

### Developer tools

| Tool               | File | Documentation |
| ------------------ | ---- | ------------- |
| NPM                | [`package.json`](package.json), [`packages/*/package.json`](./packages/pkg1/package.json) | [docs](https://docs.npmjs.com/cli/v10/configuring-npm/package-json), [website](https://docs.npmjs.com/) |
| TypeScript         | [`tsconfig.json`](./tsconfig.json), [`packages/*/tsconfig.json`](packages/pkg1/tsconfig.json) | [docs](https://www.typescriptlang.org/tsconfig), [website](https://www.typescriptlang.org/) |
| TypeDoc            | [`tsconfig.json`](tsconfig.json) (`typedocOptions`) | [docs](https://typedoc.org/options/configuration/), [website](https://typedoc.org/) |
| ESLint             | [`eslint.config.js`](./eslint.config.js) | [docs](https://eslint.org/docs/latest/use/configure/), [website](https://eslint.org/) |
| Vite               | [`packages/*/vite.config.ts`](packages/pkg1/vite.config.ts) | [docs](https://vitejs.dev/config/), [website](https://vitejs.dev/) |
| Vitest             | [`vitest.config.ts`](./vitest.config.ts), [`packages/*/vite.config.ts`](packages/pkg1/vite.config.ts) (`test`) | [docs](https://vitest.dev/config/), [website](https://vitest.dev/) |
| Dependabot         | [`.github/dependabot.yml`](./.github/dependabot.yml) | [docs](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file), [website](https://github.com/dependabot) |

## License

This software is licensed under the MIT license ([`LICENSE-MIT`](./LICENSE) or <https://opensource.org/license/mit/>).

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the MIT license, shall be licensed as above, without any additional terms or conditions.
