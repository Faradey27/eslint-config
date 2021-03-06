module.exports = {
  extends: [
    './legacy',
    './rules/es6',
    './rules/react',
    './rules/react-a11y',
    './rules/fp',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    strict: 2,
  }
};
