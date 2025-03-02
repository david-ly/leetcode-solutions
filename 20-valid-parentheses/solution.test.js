import { test, expect } from '@jest/globals'
import isValid from './solution.js'

test('isValid should handle various inputs', () => {
  expect(isValid('()')).toBe(true)
  expect(isValid('[]')).toBe(true)
  expect(isValid('{}')).toBe(true)
  expect(isValid('()[]{}')).toBe(true)

  expect(isValid('([])')).toBe(true)
  expect(isValid('{[]}')).toBe(true)
  expect(isValid('{[()]}')).toBe(true)
  expect(isValid('([{}])')).toBe(true)
  expect(isValid('(()[{}])')).toBe(true)
  expect(isValid('{()[()]}')).toBe(true)
  expect(isValid('[({[()]})]')).toBe(true)

  expect(isValid('(]')).toBe(false)
  expect(isValid('([)]')).toBe(false)
  expect(isValid('((')).toBe(false)
  expect(isValid('}}')).toBe(false)
  expect(isValid('[[')).toBe(false)
  expect(isValid('[[]]()}')).toBe(false)

  expect(isValid('({[]})')).toBe(true)
  expect(isValid('()([{}])')).toBe(true)
  expect(isValid('[({()})]{()}')).toBe(true)
  expect(isValid('[({})]([]()){}')).toBe(true)

  expect(isValid('({[}])')).toBe(false)
  expect(isValid('(](')).toBe(false)
  expect(isValid('([)][]')).toBe(false)
  expect(isValid('(()')).toBe(false)

  expect(isValid('(])]')).toBe(false)
  expect(isValid('[({)]')).toBe(false)
  expect(isValid('({}))')).toBe(false)
  expect(isValid('((({}))))]')).toBe(false)
})

test('isValid should handle long/repeated patterns', () => {
  expect(isValid('()[]{}'.repeat(1000))).toBe(true)
  expect(isValid('()[]{}'.repeat(99) + '()[]')).toBe(true)
  expect(isValid('()[]{}'.repeat(99) + '(')).toBe(false)

  const nested = Array(100).fill().reduce((acc) => `(${acc})`, '')
  expect(isValid(nested)).toBe(true)

  const mixed = Array(33).fill().reduce((acc) => `{([${acc}])}`, '')
  expect(isValid(mixed)).toBe(true)
})
