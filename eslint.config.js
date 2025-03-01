import js from '@eslint/js'
import ts from 'typescript-eslint'

const IGNORES = ['node_modules/*']
const RULES_ALL = {
  'eol-last': ['error', 'always']
, 'linebreak-style': ['error', 'unix']
}
const RULES_JS = {
  'comma-style': ['error', 'first']
, 'comma-spacing': ['error', {before: false, after: true}]
, 'quotes': ['error', 'single', {
    avoidEscape: true
  , allowTemplateLiterals: true
  }]
, 'semi': ['error', 'never']
}

const javascript = createFileTypeConfig('**/*.js')
const universal = createFileTypeConfig('**/*')

/** @type {import('eslint').Linter.Config[]} */
export default [
  {...universal}
, {...javascript}
, js.configs.recommended
, ...ts.configs.recommended
]

function createFileTypeConfig(files) {
  const common = {
    files: [`${files}`]
  , ignores: IGNORES
  }

  switch (files) {
    case '**/*': return {
      ...common
    , rules: RULES_ALL
    }
    case '**/*.js': return {
      ...common
    , rules: RULES_JS
    }
  }
}
