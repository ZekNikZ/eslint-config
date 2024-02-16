module.exports = {
  extends: ["plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/stylistic", "plugin:import/typescript"],
  rules: {
    "no-undef": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
};
