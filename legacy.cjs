const rules = require("./rules");

module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		experimentalDecorators: false,
	},
	plugins: ["@typescript-eslint"],
	rules,
};
