import plugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

export default {
	languageOptions: {
		parser,
		parserOptions: {
			experimentalDecorators: false,
		},
	},
	plugins: {
		"@typescript-eslint": plugin,
	},
	rules: {
		"@typescript-eslint/no-namespace": "error",
		"@typescript-eslint/parameter-properties": "error",
		"no-restricted-syntax": [
			"error",
			"PropertyDefinition[accessibility]",
			"TSEnumDeclaration",
		],
	},
};
