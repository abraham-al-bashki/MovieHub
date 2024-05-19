import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue, { rules } from 'eslint-plugin-vue';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    extends: [
      'eslint:recommended',
      'plugin:vue/base',
      'plugin:vue/vue3-essential',
      'plugin:vue/vue3-strongly-recommended',
    ],
    rules: {
      'vue/html-closing-bracket-newline': 'off',
      'vue/html-indent': 'off',
      'vue/html-self-closing': [
        'warn',
        {
          html: {
            component: 'always',
            normal: 'always',
            void: 'always',
          },
        },
      ],
      'vue/max-attributes-per-line': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/singleline-html-element-content-newline': 'off',
    },
  },
];
