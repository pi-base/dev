<h2 align="center">π-Base Dev Tools</h2>
<div align="center">

[![Audit](https://github.com/pi-base/dev/workflows/CodeQL/badge.svg?branch=main)](https://github.com/pi-base/dev/actions/workflows/codeql.yml)
[![Test](https://github.com/pi-base/dev/workflows/Test/badge.svg?branch=main)](https://github.com/pi-base/dev/actions/workflows/test.yml)
[![Release](https://github.com/pi-base/dev/actions/workflows/release.yml/badge.svg)](https://github.com/pi-base/dev/actions/workflows/release.yml)
[![NPM](https://img.shields.io/npm/v/@pi-base/dev?color=blue)](https://www.npmjs.com/package/@pi-base/dev)

Shared developer tools for π-Base packages.

</div>

# Usage

## Installation

```bash
$ npm install --save-dev @pi-base/dev
```

`pi-base-dev` does not entirely encapsulate `husky`. You will probably also want to

```bash
$ npm set-script prepare "husky install" && npm run prepare
```

See [`husky`'s documentation](https://typicode.github.io/husky/#/) for more details.

## Configuration

`@pi-base/dev` exports a number of common config files

```javascript
// .eslintrc.js
module.exports = require('@pi-base/dev').eslintConfig

// .lintstagedrc.js
module.exports = require('@pi-base/dev').lintStagedConfig

// .prettierrc.js
module.exports = require('@pi-base/dev').prettierConfig

// .tsconfig.json
{
  "extends": "@pi-base/dev/tsconfig.shared.json",
  "include": ["src/**/*.ts"]
}
```

It also includes a CLI wrapping several common tasks, intended for use as `npm run` scripts

```javascript
// package.json
{
  "scripts": {
    "fmt": "pi-base-dev fmt",
    "fmt:check": "pi-base-dev fmt:check",
    "lint": "pi-base-dev lint",
    "lint:check": "pi-base-dev lint:check"
  }
}
```

or in a `.husky/pre-commit` hook

```bash
# .husky/pre-commit
pi-base-dev lint-staged
```

# Development

## Installation

```bash
$ npm install
```

## Release

Releases to [NPM](https://www.npmjs.com/package/@pi-base/dev) are automatically triggered by creating a [Github release](https://github.com/pi-base/dev/releases) named `vX.X.X` (matching the current version in `package.json`).

Be sure to add a [`CHANGELOG`](./CHANGELOG.md) entry when updating the version.
