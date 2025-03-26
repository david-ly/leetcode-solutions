import { test, expect } from '@jest/globals'
import { MAX, MIN } from '../utilities.js'
import longestConsecutive from './solution.js'

test('longestConsecutive should handle sane/valid inputs', () => {
  expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4)
  expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9)
  expect(longestConsecutive([1.5, 2.5, 3.5])).toBe(3)

  expect(longestConsecutive([1])).toBe(1)
  expect(longestConsecutive([42])).toBe(1)
  expect(longestConsecutive([-5])).toBe(1)

  expect(longestConsecutive([5, 10, 15, 20])).toBe(1)
  expect(longestConsecutive([3, 6, 9, 12])).toBe(1)
  expect(longestConsecutive([7, 49, 73, 128, 999])).toBe(1)

  expect(longestConsecutive([1, 1, 1, 1])).toBe(1)
  expect(longestConsecutive([5, 5, 5, 5, 5])).toBe(1)

  expect(longestConsecutive([1, 2, 3, 5, 6, 7])).toBe(3) // 1,2,3
  expect(longestConsecutive([1, 2, 4, 5, 8, 9, 10])).toBe(3) // 8,9,10
  expect(longestConsecutive([5, 6, 10, 11, 12, 15])).toBe(3) // 10,11,12

  expect(longestConsecutive([-3, -2, -1, 0, 1])).toBe(5) // -3,-2,-1,0,1
  expect(longestConsecutive([-10, -9, -8, 5, 6, 7])).toBe(3) // -10,-9,-8
  expect(longestConsecutive([-1, 0, 1, 2, -5, -4, -3])).toBe(4) // -1,0,1,2

  expect(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -2, 6, 2])).toBe(12)
  expect(longestConsecutive([100, 99, 98, 97, 96, 95])).toBe(6)
  expect(longestConsecutive([1, 2, 3, 100, 101, 102, 103, 104])).toBe(5)
  expect(longestConsecutive([-1000, -999, 0, 1, 2, 999, 1000, 1001])).toBe(3)

  expect(longestConsecutive([1, 2, 3, 10, 11, 12])).toBe(3) // 1,2,3 || 10,11,12
  // 5,6,7,8 || 20,21,22,23
  expect(longestConsecutive([5, 6, 7, 8, 20, 21, 22, 23])).toBe(4)

  expect(longestConsecutive([1, 3, 5, 7, 2, 4, 6, 8])).toBe(8)
  expect(longestConsecutive([10, 12, 14, 11, 13, 15])).toBe(6)
})

test('longestConsecutive should handle "edge" cases', () => {
  expect(longestConsecutive([])).toBe(0)
  expect(longestConsecutive([0, '0', false])).toBe(1)

  const large = Array.from({ length: 10000 }, () =>
    Math.floor(Math.random() * 20000) + 1
  )
  for (let i = 50000; i < 51000; i++) large.push(i)
  expect(longestConsecutive(large)).toBe(1000)

  expect(longestConsecutive([MAX, MAX - 1, MAX - 2])).toBe(3)
  expect(longestConsecutive([MIN, MIN + 1, MIN + 2])).toBe(3)
})
