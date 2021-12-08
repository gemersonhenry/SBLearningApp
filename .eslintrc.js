module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    // 'no-empty-function': 'off',
    // '@typescript-eslint/no-empty-function': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': ['off'],
    // '@typescript-eslint/no-unsafe-assignment': 'off',
    // '@typescript-eslint/no-unsafe-member-access': 'off',
    // 'react/display-name': 'off',
    // 'react/prop-types': 'off',
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
        'no-inline-styles': true
      }
    ]
  },
};
