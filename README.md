# `eslint-config-types`

ESLint configuration for JavaScript using stripped types, without TypeScript
runtime features

## Installation

```
npm install --save-dev eslint eslint-config-types@alpha
```

```
pnpm install --save-dev eslint eslint-config-types@alpha
```

```
yarn add --dev eslint eslint-config-types@alpha @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint
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

## Inspiration

https://x.com/sebastienlorber/status/1820497162872226062

## Thanks

- [Sébastien Lorber](https://github.com/slorber)
- [Josh Goldberg](https://github.com/JoshuaKGoldberg)
