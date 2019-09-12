module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  plugins: ["react"],
  rules: {
    "import/prefer-default-export": 0,
    "linebreak-style": 0,
    "react/prefer-stateless-function": 0,
    "implicit-arrow-linebreak":0,
    "react/jsx-props-no-spreading": 0,
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"]
        }
      }
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"]
        }
      }
    ]
  }
};
