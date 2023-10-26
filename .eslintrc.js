module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSameLine: false,
        bracketSpacing: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
