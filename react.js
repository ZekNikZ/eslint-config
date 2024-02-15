module.exports = {
  extends: [
    "@zeknikz/eslint-config",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  rules: {
    "react/hook-use-state": ["warn", { allowDestructuredState: true }],
  },
};
