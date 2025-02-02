# `eslint-config-types`

ESLint configuration for JavaScript using stripped types, without TypeScript
runtime features

> [!WARNING]  
> This package will be deprecated in favor of
> [the `--erasableSyntaxOnly` option in TypeScript 5.8](https://devblogs.microsoft.com/typescript/announcing-typescript-5-8-beta/#the---erasablesyntaxonly-option).
> \
> If you're not already using `eslint-config-types`, I recommend trying out
> [TypeScript 5.8 beta](https://devblogs.microsoft.com/typescript/announcing-typescript-5-8-beta/)
> instead.

## Installation

```
npm install --save-dev eslint eslint-config-types
```

```
pnpm install --save-dev eslint eslint-config-types
```

```
yarn add --dev eslint eslint-config-types @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint
```

## Usage

In your `eslint.config.js` file, add:

```js
import types from "eslint-config-types";

export default [
	types,
	// existing config (if any)
];
```

In your `.eslintrc.json` file, add:

```json
"extends": "types/legacy"
```

## Environment support

This config only allows TypeScript features supported in the following
environments:

- Babel
- Bun
- Deno
- esbuild
- Node.js
- swc
- Vite

## Features to avoid

- [Experimental decorators](https://www.typescriptlang.org/tsconfig/#experimentalDecorators)
- [Namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html)
- [Parameter properties](https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties)
- Property accessibility
- [Enums](https://www.typescriptlang.org/docs/handbook/enums.html)

## Inspiration

https://x.com/sebastienlorber/status/1820497162872226062

## Thanks

- [Sébastien Lorber](https://github.com/slorber)
- [Josh Goldberg](https://github.com/JoshuaKGoldberg)
