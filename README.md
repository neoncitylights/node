# Node.js & TypeScript template

This template provides a semi-minimal monorepo setup for Node.js + TypeScript projects.

## Features

- [x] ESM support (ECMAScript modules)
- [x] [TypeDoc](https://typedoc.org/) for generating API documentation
- [x] [GitHub Actions](https://github.com/features/actions) for continuous integration
- [x] [Dependabot](https://github.com/dependabot) for updating dependencies
- [x] [node-modules-inspector](https://github.com/antfu/node-modules-inspector) for deep insights on dependency graph
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
  gh repo create --template neoncitylights/node --public --clone _repository_  # clone as public
  gh repo create --template neoncitylights/node --private --clone _repository_ # clone as private
  ```

### Replace placeholders

Using your text editor or IDE, find-and-replace the following placeholders:

- `@author/package`: Replace this with the author's name (e.g a user or organization) and package's name.
- `_author_`: Replace this with the author's name (e.g real name, GitHub username, etc).
- `_username_`: Replace this with your GitHub username.
- `_repository_`: Replace this with the name of your repository.
- `_desc_`: Replace this with a short description of the package.

## Publishing a package

```sh
# Enter the root directory of the package you want to publish
cd packages/pkg1

# if package is non-scoped, e.g "hello-world"
pnpm publish

# if package is scoped, e.g "@user123/hello-world"
pnpm publish --access public
```

## Configure

### PNPM scripts

| Command               | Description                               |
| --------------------- | ----------------------------------------- |
| `pnpm run build`      | Build all packages                        |
| `pnpm run docs`       | Generate documentation                    |
| `pnpm run docs-watch` | Generate documentation in watch mode      |
| `pnpm run clean`      | Remove all generated files                |
| `pnpm run test`       | Run unit tests                            |
| `pnpm run test-ci`    | Run unit tests in CI mode                 |
| `pnpm run test-ui`    | Run unit tests in UI/browser mode         |
| `pnpm run test-html`  | View test results in browser              |
| `pnpm run test-json`  | View test results in JSON format          |
| `pnpm run fmt`        | Apply formatting fixes                    |
| `pnpm run fmt-ci`     | Check for formatting issues (used for CI) |
| `pnpm run lint`       | Check for Oxlint issues                   |
| `pnpm run fix`        | Apply Oxlint fixes                        |
| `pnpm run inspect`    | Run node-modules-inspector server         |

### Developer tools

| Tool       | File                                                                                                           | Documentation                                                                                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PNPM       | [`package.json`](package.json), [`packages/*/package.json`](./packages/pkg1/package.json)                      | [docs](https://pnpm.io/package_json), [website](https://pnpm.io/)                                                                                                                  |
| TypeScript | [`tsconfig.json`](./tsconfig.json), [`packages/*/tsconfig.json`](packages/pkg1/tsconfig.json)                  | [docs](https://www.typescriptlang.org/tsconfig), [website](https://www.typescriptlang.org/)                                                                                        |
| TypeDoc    | [`tsconfig.json`](tsconfig.json) (`typedocOptions`)                                                            | [docs](https://typedoc.org/options/configuration/), [website](https://typedoc.org/)                                                                                                |
| Oxfmt      | [`.oxfmtrc.json`](./.oxfmtrc.json)                                                                             | [docs](https://oxc.rs/docs/guide/usage/formatter.html), [website](https://oxc.rs)                                                                                                  |
| Oxlint     | [`.oxlintrc.json`](./.oxlintrc.json)                                                                           | [docs](https://oxc.rs/docs/guide/usage/linter.html), [website](https://oxc.rs)                                                                                                     |
| tsdown     | [`packages/*/tsdown.config.ts`](packages/pkg1/tsdown.config.ts)                                                | [docs](https://tsdown.dev/options/config-file), [website](https://tsdown.dev)                                                                                                      |
| Vite       | [`packages/*/vite.config.ts`](packages/pkg1/vite.config.ts)                                                    | [docs](https://vitejs.dev/config/), [website](https://vitejs.dev/)                                                                                                                 |
| Vitest     | [`vitest.config.ts`](./vitest.config.ts), [`packages/*/vite.config.ts`](packages/pkg1/vite.config.ts) (`test`) | [docs](https://vitest.dev/config/), [website](https://vitest.dev/)                                                                                                                 |
| Dependabot | [`.github/dependabot.yml`](./.github/dependabot.yml)                                                           | [docs](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file), [website](https://github.com/dependabot) |

## License

This software is licensed under the MIT license ([`LICENSE`](./LICENSE) or <https://opensource.org/license/mit/>).

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the MIT license, shall be licensed as above, without any additional terms or conditions.
