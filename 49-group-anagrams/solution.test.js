import { test, expect } from '@jest/globals'
import groupAnagrams from './solution.js'

test('groupAnagrams should handle sane/valid inputs', () => {
  expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
    .toEqual([
      ['eat', 'tea', 'ate']
    , ['tan', 'nat']
    , ['bat']
    ])

  expect(groupAnagrams(['aab', 'aba', 'baa', 'abc']))
    .toEqual([
      ['aab', 'aba', 'baa']
    , ['abc']
    ])

  expect(groupAnagrams(['a', 'b', 'c', 'a']))
    .toEqual([
      ['a', 'a']
    , ['b']
    , ['c']
    ])

  expect(groupAnagrams(['a'])).toEqual([['a']])

  expect(groupAnagrams(['algorithm', 'logarithm', 'logarithm', 'calculator']))
    .toEqual([
      ['algorithm', 'logarithm', 'logarithm']
    , ['calculator']
    ])

  expect(groupAnagrams(['ab', 'ba', 'abc', 'cab', 'bca']))
    .toEqual([
      ['ab', 'ba']
    , ['abc', 'cab', 'bca']
    ])

  expect(groupAnagrams(['cat', 'dog', 'bird', 'fish']))
    .toEqual([
      ['cat']
    , ['dog']
    , ['bird']
    , ['fish']
    ])

  const input = Array(100).fill('abcde').map(s => shuffle(s.split('')).join(''))
  const result = groupAnagrams(input)
  expect(result.length).toBe(1)
  expect(result[0].length).toBe(100)
})

test('groupAnagrams should handle empty/null(ish) inputs', () => {
  expect(groupAnagrams([''])).toEqual([['']])
  expect(groupAnagrams([])).toEqual([])
  expect(groupAnagrams(null)).toEqual([])
  expect(groupAnagrams(undefined)).toEqual([])
})

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
  return arr
}
