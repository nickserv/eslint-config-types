# `eslint-config-types`

ESLint configuration for JavaScript using stripped types, without TypeScript
runtime features

> [!WARNING]  
> This package will be deprecated in favor of [the `--erasableSyntaxOnly` option in TypeScript 5.8](https://devblogs.microsoft.com/typescript/announcing-typescript-5-8-beta/#the---erasablesyntaxonly-option). \
> If you're not already using `eslint-config-types`, I recommend trying out [TypeScript 5.8 beta](https://devblogs.microsoft.com/typescript/announcing-typescript-5-8-beta/) instead.

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

## Inspiration

https://x.com/sebastienlorber/status/1820497162872226062

## Thanks

- [Sébastien Lorber](https://github.com/slorber)
- [Josh Goldberg](https://github.com/JoshuaKGoldberg)
