module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/jsx-runtime",
  ],
  rules: {
    "react/hook-use-state": ["error", { allowDestructuredState: true }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
