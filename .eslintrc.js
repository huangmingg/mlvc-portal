module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module',
        parser: 'babel-eslint',
    },
    env: {
        // browser: true,
        "node": true,
    },
    plugins: [
        'vue'
    ],
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    rules: {
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "no-labels": 0,
        "no-await-in-loop": 0,
        "padded-blocks": 0,
        "prefer-destructuring": 0,
        "no-void": 0,
        "operator-linebreak": 0,
        "no-multiple-empty-lines": 0,
        "object-curly-spacing": ["error", "always"],
        "semi": ["error", "always"],
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "ignore"
            }
        ],
        "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "none",
                "ignoreRestSiblings": false
            }
        ],
        "no-bitwise": 0,
        "class-methods-use-this": 0,
        "no-cond-assign": [
            "error",
            "except-parens"
        ],
        "no-param-reassign": [
            "error",
            {
                "props": false
            }
        ],
        "no-lonely-if": 0,
        "no-continue": 0,
        "indent": [
            "error",
            2
        ],
        "arrow-body-style": 0,
        "max-len": [
            "error",
            140,
            {
                "ignoreTemplateLiterals": true
            }
        ],
        "quotes": [
            "error",
            "single",
            {
                "allowTemplateLiterals": true
            }
        ],
        "max-classes-per-file": 0,
        "no-use-before-define": [
            "error",
            {
                "functions": false
            }
        ],
        "no-plusplus": [
            "error",
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "no-mixed-operators": [
            "error",
            {
                "groups": [
                    [
                        "+",
                        "-"
                    ]
                ]
            }
        ]
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js','.jsx','.vue']
            }
        },
    }
}
