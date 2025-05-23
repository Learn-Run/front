export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'build',
                'ci',
                'docs',
                'style',
                'refactor',
                'test',
                'chore',
            ],
        ],
        'subject-empty': [2, 'never'],
        'header-max-length': [2, 'always', 100],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [0, 'never'],
    },
};
