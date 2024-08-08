# `eslint-config-types`

ESLint configuration for JavaScript using stripped types, without TypeScript
runtime features

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

- @slorber
- @JoshuaKGoldberg
