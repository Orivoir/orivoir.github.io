import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

export default [
  { settings: { react: { version: 'detect' } } },
  { files: ['src/**/*.{ts,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      semi: ['error', 'never'],

      // minimize bundle size MUI ->  https://mui.com/material-ui/guides/minimizing-bundle-size/#development-environment
      "no-restricted-imports": [
        "error",
        {
          "patterns": ["@mui/*/*/*"]
        }
      ]

    }
  }
]
