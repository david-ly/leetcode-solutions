import { test, expect } from '@jest/globals'
import isAnagram from './solution.js'

test('isAnagram should handle valid anagrams', () => {
  expect(isAnagram('anagram', 'nagaram')).toBe(true)
  expect(isAnagram('listen', 'silent')).toBe(true)
  expect(isAnagram('rail safety', 'fairy tales')).toBe(true)
  expect(isAnagram('rat', 'tar')).toBe(true)
  expect(isAnagram('hello', 'olleh')).toBe(true)
  expect(isAnagram('a', 'a')).toBe(true)
  expect(isAnagram('ab', 'ba')).toBe(true)
})

test('isAnagram should fail with invalid anagrams', () => {
  expect(isAnagram('cat', 'rat')).toBe(false)
  expect(isAnagram('cat', ' cat')).toBe(false)
  expect(isAnagram('car', 'arc ')).toBe(false)
  expect(isAnagram('aabb', 'abcd')).toBe(false)
  expect(isAnagram('xx', 'bb')).toBe(false)
  expect(isAnagram('ab', 'cd')).toBe(false)
})

test('isAnagram should fail with edge/null cases', () => {
  expect(isAnagram('', '')).toBe(false)
  expect(isAnagram(null, 'hello')).toBe(false)
  expect(isAnagram('hello', null)).toBe(false)
  expect(isAnagram(null, null)).toBe(false)
  expect(isAnagram('hello', 'hell')).toBe(false)
  expect(isAnagram('a', 'ab')).toBe(false)
})

test('isAnagram should handle repeated characters', () => {
  expect(isAnagram('aacc', 'ccaa')).toBe(true)
  expect(isAnagram('aaaaaa', 'aaaaaa')).toBe(true)
  expect(isAnagram('abcabc', 'cbacba')).toBe(true)
  expect(isAnagram('aabccc', 'abcacc')).toBe(true)
  expect(isAnagram('abbbcc', 'bbacbc')).toBe(true)
})

test('isAnagram should handle (certain) special characters', () => {
  expect(isAnagram('ab1c', '1abc')).toBe(true)
  expect(isAnagram('a!bc', 'c!ba')).toBe(true)
  expect(isAnagram('a&bc', 'abc&')).toBe(true)
})

test('isAnagram should handle uppercase characters', () => {
  expect(isAnagram('Abc', 'bca')).toBe(false)
  expect(isAnagram('ABC', 'CBA')).toBe(true)
})

test('isAnagram should fail with Unicode characters', () => {
  expect(isAnagram('café', 'facé')).toBe(false)
  expect(isAnagram('résumé', 'éesumr')).toBe(false)
})
