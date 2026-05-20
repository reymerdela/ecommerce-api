module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',     // nueva funcionalidad
                'fix',      // corrección de bug
                'docs',     // solo documentación
                'style',    // formato, sin cambio de lógica
                'refactor', // refactor sin feat ni fix
                'test',     // tests
                'chore',    // tareas de mantenimiento
                'perf',     // mejoras de performance
                'ci',       // cambios en CI/CD
                'build',    // cambios en build system
                'revert',   // revert de commit anterior
            ],
        ],
        'subject-case': [2, 'always', 'lower-case'],
        'subject-max-length': [2, 'always', 72],
        'body-max-line-length': [2, 'always', 100],
    },
};