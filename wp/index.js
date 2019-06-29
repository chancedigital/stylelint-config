module.exports = {
  extends: '../index.js',
  rules: {
    indentation: ['tab', { ignore: ['value', 'param'] }],
    'function-parentheses-space-inside': 'always-single-line',
    'media-feature-parentheses-space-inside': 'always',
    'selector-pseudo-class-parentheses-space-inside': 'always',
  },
};
