import plugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import rules from "./rules.json" with { type: "json" };

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
	rules,
};
