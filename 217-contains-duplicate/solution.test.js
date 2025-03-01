import { test, expect } from '@jest/globals'
import containsDuplicate from './solution.js'

const MAX_INT = Number.MAX_SAFE_INTEGER
const MIN_INT = Number.MIN_SAFE_INTEGER

test('containsDuplicate should handle sane/valid inputs', () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true)
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true)
  expect(containsDuplicate([0, 0])).toBe(true)
  expect(containsDuplicate([-1, -1])).toBe(true)
  expect(containsDuplicate([1, 2, 3, 4, 5, 1])).toBe(true)

  expect(containsDuplicate([1, 2, 3, 4])).toBe(false)
  expect(containsDuplicate([0])).toBe(false)
  expect(containsDuplicate([])).toBe(false)
  expect(containsDuplicate([-1, 0, 1])).toBe(false)
  expect(containsDuplicate([1, 2, 3, 4, 5])).toBe(false)
})

test('containsDuplicate should handle edge cases', () => {
  expect(containsDuplicate([MAX_INT, MAX_INT])).toBe(true)
  expect(containsDuplicate([MIN_INT, MIN_INT])).toBe(true)
  // apparently 0/-0 are considered equal aside from Object.is()
  expect(containsDuplicate([0, -0])).toBe(true)
  expect(containsDuplicate([NaN, NaN])).toBe(true)
})

  // not strictly necessary as LC problem assumes numeric types afaik
test('containsDuplicate should handle arrays with mixed types', () => {
  expect(containsDuplicate(['1', 1])).toBe(false)
  expect(containsDuplicate([false, 0])).toBe(false)
  expect(containsDuplicate([null, undefined])).toBe(false)
  expect(containsDuplicate(['a', 97])).toBe(false)
})

test('containsDuplicate should handle large arrays (efficiently)', () => {
  const large_arr = [...Array(99999).keys()].concat(42)
  expect(containsDuplicate(large_arr)).toBe(true)

  const uniq_arr = [...Array(100000).keys()]
  expect(containsDuplicate(uniq_arr)).toBe(false)
})
