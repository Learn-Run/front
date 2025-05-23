// eslint.config.js (루트)
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{js,ts,jsx,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    varsIgnorePattern: '^_',
                    argsIgnorePattern: '^_',
                },
            ],
        },
    },
    {
        ignores: ['node_modules/', 'dist/', '.next/'],
    },
];
