export default {
  arrowParens: 'always',
  bracketSameLine: true,
  bracketSpacing: true,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  quoteProps: 'preserve',
  trailingComma: 'es5',
  singleAttributePerLine: false,
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  proseWrap: 'always',
  insertPragma: false,
  printWidth: 180,
  requirePragma: false,
  tabWidth: 2,
  useTabs: false,
  embeddedLanguageFormatting: 'auto',
  overrides: [
    {
      files: '*.json5',
      options: {
        parser: 'json',
      },
    },
  ],
}
