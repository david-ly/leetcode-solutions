import { test, expect } from '@jest/globals'
import { expectArr } from '../utilities.js'
import topKFrequent from './solution.js'

test('topKFrequent should handle sane/valid inputs', () => {
  expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2])
  expect(topKFrequent([1, 1, 2, 2, 3, 3], 2)).toEqual([1, 2])
  expect(topKFrequent([1, 1, 1, 2, 2, 3], 1)).toEqual([1])
  expect(topKFrequent([1, 2, 3, 4], 2)).toEqual([1, 2])
  expect(topKFrequent([5], 1)).toEqual([5])

  expect(topKFrequent([-1, -1, -2, -2, -2, -3], 2)).toEqual([-2, -1])
  expect(topKFrequent([1, 1, -1, -1, -1, 2, 2, 2, 3], 2))
    .toEqual(expectArr([-1, 2]))
  expect(topKFrequent([0, 0, 0, 1, 1, 2], 2)).toEqual([0, 1])
  expect(topKFrequent([5, 5, 3, 3, 1, 6], 4)).toEqual(expectArr([5, 3, 1, 6]))

  const arr = [5, 2, 5, 3, 5, 3, 1, 1, 1]
  const set = new Set(arr)
  expect(topKFrequent(arr, set.size)).toEqual(expectArr([...set]))

  const large_arr = Array.from({length: 100}, (_, i) => i + 1)
    .flatMap(num => Array(num).fill(num))
  expect(topKFrequent(large_arr, 5)).toEqual([100, 99, 98, 97, 96])
})

test('topKFrequent should handle edge cases', () => {
  expect(topKFrequent(null, 1)).toEqual(null)
  expect(topKFrequent([], 1)).toEqual(null)
  expect(topKFrequent([], 2)).toEqual(null)
  expect(topKFrequent([1], 0)).toEqual(null)
  expect(topKFrequent([1, 2], 0)).toEqual(null)
  expect(topKFrequent([1], 2)).toEqual(null)

  expect(topKFrequent([1], 1)).toEqual([1])
  expect(topKFrequent([1, 1], 0)).toEqual(null)
  expect(topKFrequent([1, 1], 1)).toEqual([1])
  expect(topKFrequent([1, 1], 2)).toEqual(null)

  expect(topKFrequent([1, 2], 1)).toEqual([1])
  expect(topKFrequent([1, 2], 2)).toEqual([1, 2])

  expect(topKFrequent([1, 2, 3], 1)).toEqual([1])
  expect(topKFrequent([1, 2, 3], 2)).toEqual([1, 2])
  expect(topKFrequent([1, 2, 3], 3)).toEqual([1, 2, 3])
})
