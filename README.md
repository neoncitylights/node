# Node.js & TypeScript template

This template provides a semi-minimal monorepo setup for Node.js + TypeScript projects.

## Features
- [x] ESM support (ECMAScript modules)
- [x] [TypeDoc](https://typedoc.org/) for generating API documentation
- [x] [GitHub Actions](https://github.com/features/actions) for continuous integration
- [x] [Dependabot](https://github.com/dependabot) for updating dependencies
- [x] Uses the [VoidZero](https://voidzero.dev)-based JS toolchain
  - [x] [Vite](https://vitejs.dev/) & [tsdown](https://tsdown.dev) for bundling & minifying source code
  - [x] [Vitest](https://vitest.dev/) for unit testing & code coverage
  - [x] [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) & [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) for formatting & linting code

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
```sh
# Enter the root directory of the package you want to publish
cd packages/pkg1

# if package is non-scoped, e.g "hello-world"
npm publish

# if package is scoped, e.g "@user123/hello-world"
npm publish --access public
```

## Configure

### NPM scripts
| Command | Description |
| ------- | ----------- |
| `npm run build`       | Build all packages |
| `npm run docs`        | Generate documentation |
| `npm run docs-watch`  | Generate documentation in watch mode |
| `npm run clean`       | Remove all generated files |
| `npm run test`        | Run unit tests |
| `npm run test-ci`     | Run unit tests in CI mode |
| `npm run test-ui`     | Run unit tests in UI/browser mode |
| `npm run test-html`   | View test results in browser |
| `npm run test-json`   | View test results in JSON format |
| `npm run fmt`         | Apply formatting |
| `npm run lint`        | Check for Oxlint errors |
| `npm run fix`         | Apply Oxlint fixes |

### Developer tools
| Tool               | File | Documentation |
| ------------------ | ---- | ------------- |
| NPM                | [`package.json`](package.json), [`packages/*/package.json`](./packages/pkg1/package.json) | [docs](https://docs.npmjs.com/cli/v10/configuring-npm/package-json), [website](https://docs.npmjs.com/) |
| TypeScript         | [`tsconfig.json`](./tsconfig.json), [`packages/*/tsconfig.json`](packages/pkg1/tsconfig.json) | [docs](https://www.typescriptlang.org/tsconfig), [website](https://www.typescriptlang.org/) |
| TypeDoc            | [`tsconfig.json`](tsconfig.json) (`typedocOptions`) | [docs](https://typedoc.org/options/configuration/), [website](https://typedoc.org/) |
| Oxfmt              | [`.oxfmtrc.json`](./.oxfmtrc.json) | [docs](https://oxc.rs/docs/guide/usage/formatter.html), [website](https://oxc.rs) |
| Oxlint             | [`.oxlintrc.json`](./.oxlintrc.json) | [docs](https://oxc.rs/docs/guide/usage/linter.html), [website](https://oxc.rs) |
| tsdown             | [`packages/*/tsdown.config.ts`](packages/pkg1/tsdown.config.ts) | [docs](https://tsdown.dev/options/config-file), [website](https://tsdown.dev) |
| Vite               | [`packages/*/vite.config.ts`](packages/pkg1/vite.config.ts) | [docs](https://vitejs.dev/config/), [website](https://vitejs.dev/) |
| Vitest             | [`vitest.config.ts`](./vitest.config.ts), [`packages/*/vite.config.ts`](packages/pkg1/vite.config.ts) (`test`) | [docs](https://vitest.dev/config/), [website](https://vitest.dev/) |
| Dependabot         | [`.github/dependabot.yml`](./.github/dependabot.yml) | [docs](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file), [website](https://github.com/dependabot) |

## License
This software is licensed under the MIT license ([`LICENSE`](./LICENSE) or <https://opensource.org/license/mit/>).

### Contribution
Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the MIT license, shall be licensed as above, without any additional terms or conditions.
