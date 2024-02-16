module.exports = {
  extends: ["eslint:recommended", "plugin:import/recommended"],
  rules: {
    // eslint
    "no-await-in-loop": "warn",
    "no-template-curly-in-string": "warn",
    "block-scoped-var": "error",
    "arrow-body-style": ["warn", "as-needed"],
    "capitalized-comments": ["error", "always", { ignoreInlineComments: true, ignoreConsecutiveComments: true }],
    curly: "error",
    "default-case": "warn",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": "warn",
    eqeqeq: "error",
    "guard-for-in": "error",
    "prefer-object-has-own": "error",
    "no-lonely-if": "error",
    "no-negated-condition": "warn",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-var": "error",
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-object-spread": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "sort-keys": [
      "error",
      "asc",
      {
        caseSensitive: false,
        natural: true,
        allowLineSeparatedGroups: true,
      },
    ],
    yoda: "error",

    // import
    "import/no-empty-named-blocks": "error",
    "import/extensions": [
      "error",
      "never",
      {
        json: "always",
        svg: "always",
        css: "always",
        png: "always",
        jpg: "always",
      },
    ],
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
          orderImportKind: "asc",
        },
      },
    ],
  },
  plugins: ["import"],
};
