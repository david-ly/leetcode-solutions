import { test, expect } from '@jest/globals'
import longestCommonPrefix from './solution.js'

test('longestCommonPrefix should find common prefixes in basic cases', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
  expect(longestCommonPrefix(['apple', 'app', 'application'])).toBe('app')
  expect(longestCommonPrefix(['interstellar', 'interview', 'interest']))
    .toBe('inter')
  expect(longestCommonPrefix(['programming', 'progress', 'progressive']))
    .toBe('progr')
})

test('longestCommonPrefix should handle edge cases with empty strings', () => {
  expect(longestCommonPrefix(['', 'flow', 'flight'])).toBe('')
  expect(longestCommonPrefix(['flower', '', 'flight'])).toBe('')
  expect(longestCommonPrefix(['flower', 'flow', ''])).toBe('')
  expect(longestCommonPrefix(['', '', ''])).toBe('')
})

test('longestCommonPrefix should handle single string arrays', () => {
  expect(longestCommonPrefix(['single'])).toBe('single')
  expect(longestCommonPrefix([''])).toBe('')
})

test('longestCommonPrefix should handle identical strings', () => {
  expect(longestCommonPrefix(['same', 'same', 'same'])).toBe('same')
  expect(longestCommonPrefix(['a', 'a', 'a'])).toBe('a')
})

test('longestCommonPrefix should handle varying string lengths', () => {
  expect(longestCommonPrefix(['a', 'ab', 'abc', 'abcd'])).toBe('a')
  expect(longestCommonPrefix(['abcd', 'abc', 'ab', 'a'])).toBe('a')
  expect(longestCommonPrefix(['long', 'longer', 'longest'])).toBe('long')
})

test('longestCommonPrefix should handle special characters', () => {
  expect(longestCommonPrefix(['123abc', '123def', '123ghi'])).toBe('123')
  expect(longestCommonPrefix(['!@#', '!@#$', '!@#%'])).toBe('!@#')
  expect(longestCommonPrefix(['app-store', 'app-le', 'app-rentice'])).toBe('app-')
})

test('longestCommonPrefix should handle case sensitivity', () => {
  expect(longestCommonPrefix(['Apple', 'app', 'application'])).toBe('')
  expect(longestCommonPrefix(['HELLO', 'HELP', 'HELMET'])).toBe('HEL')
  expect(longestCommonPrefix(['JavaScript', 'javascript'])).toBe('')
})

test('longestCommonPrefix should handle no common prefix', () => {
  expect(longestCommonPrefix(['abc', 'def', 'ghi'])).toBe('')
  expect(longestCommonPrefix(['cat', 'dog', 'rabbit'])).toBe('')
  expect(longestCommonPrefix(['12345', '54321'])).toBe('')
})

test('longestCommonPrefix should handle Unicode characters', () => {
  expect(longestCommonPrefix(['café', 'café-au-lait'])).toBe('café')
  expect(longestCommonPrefix(['résumé', 'résultat'])).toBe('résu')
  expect(longestCommonPrefix(['🍎apple', '🍎app', '🍎application'])).toBe('🍎app')
})

test('longestCommonPrefix should handle large input strings', () => {
  const lng_pre = 'a'.repeat(1000)
  const str1 = lng_pre + 'xyz'
  const str2 = lng_pre + '123'
  const str3 = lng_pre + 'abc'
  expect(longestCommonPrefix([str1, str2, str3])).toBe(lng_pre)
})
