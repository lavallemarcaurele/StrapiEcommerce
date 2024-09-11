// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    semi: ['error', 'never'],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 1,
      'multiline': {
        'max': 1,
      }
    }],
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true
    }],
  },
})
