module.exports = {
  root: true,
  env: {
    browser: true, // 브라우저 환경에서 실행
    node: true, // 노드 환경에서 실행
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  extends: [
    'eslint:recommended', // ESLint에서 권장 규칙 (eslint)
    'plugin:nuxt/recommended', // Nuxt.js 권장 규칙 (eslint-plugin-nuxt)
    'plugin:vue/recommended', // Vue.js 권장 규칙 (eslint-plugin-vue)
    'plugin:@typescript-eslint/recommended', // TypeScript ESLint 규칙 (@typescript-eslint/eslint-plugin)
    '@nuxtjs/eslint-config-typescript', //  Nuxt.js 프로젝트에서 TypeScript와 함께 사용되는 ESLint 규칙 (@nuxtjs/eslint-config-typescript)
    'plugin:prettier/recommended', // ESLint, Prettier 충돌방지 (eslint-config-prettier, eslint-plugin-prettier)
  ],
  rules: {
    'no-console': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        arrowSpacing: ['error', { before: true, after: true }],
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'always',
        endOfLine: 'auto',
      },
    ],
  },
};
