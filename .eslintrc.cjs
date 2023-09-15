/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier/skip-formatting'],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['index', 'Main'] // single-word 허용 파일
            }
        ]
    },
    env: {
        node: true,
        'vue/setup-compiler-macros': true // defineProps 자동 import
    }
}
