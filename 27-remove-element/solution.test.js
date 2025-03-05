import { test, expect } from '@jest/globals'
import { expectArr } from '../utilities.js'
import removeElement from './solution.js'

test('removeElement should handle basic cases', () => {
  testRemoveElement([3, 2, 2, 3], 3, {exp_k: 2, exp_nums: [2, 2]})
  testRemoveElement([0, 1, 2, 2, 3, 0, 4, 2], 2
    , {exp_k: 5, exp_nums: [0, 1, 3, 0, 4]})

  testRemoveElement([3, 3, 3], 3, {exp_k: 0, exp_nums: []})
  testRemoveElement([5], 5, {exp_k: 0, exp_nums: []})
  testRemoveElement([1, 2, 2, 2, 3, 4], 2, {exp_k: 3, exp_nums: [1, 3, 4]})

  testRemoveElement([1, 2, 3, 4], 5, {exp_k: 4, exp_nums: [1, 2, 3, 4]})
  testRemoveElement([0], 1, {exp_k: 1, exp_nums: [0]})

  testRemoveElement([1, 2, 1, 2, 1, 2], 1, {exp_k: 3, exp_nums: [2, 2, 2]})
  testRemoveElement([1, 1, 2, 2, 3, 3], 2, {exp_k: 4, exp_nums: [1, 1, 3, 3]})

  testRemoveElement([-1, -2, -3, -4], -2, {exp_k: 3, exp_nums: [-1, -3, -4]})
  testRemoveElement([-5, -5, -5, 0, 5, 5, 5], -5
    , {exp_k: 4, exp_nums: [0, 5, 5, 5]})

  const lrg_rptd = Array(1000).fill(7).concat([8])
  testRemoveElement(lrg_rptd, 7, {exp_k: 1, exp_nums: [8]})
  // `k` *should* be 1000, but since the passed in array is modified in-place, `8` was shifted to the front and overwrites 1 of the 1000 filled `7` elems
  testRemoveElement(lrg_rptd, 8, {exp_k: 999, exp_nums: Array(999).fill(7)})

  // preserve original ordering of remaining elements
  testRemoveElement([9, 8, 7, 6, 5], 6, {exp_k: 4, exp_nums: [9, 8, 7, 5]})
  testRemoveElement([5, 10, 15, 20], 10, {exp_k: 3, exp_nums: [5, 15, 20]})
})

test('removeElement should handle empty/null(ish) value(s)', () => {
  testRemoveElement([], 0, {exp_k: 0, exp_nums: []})
  testRemoveElement([], 1, {exp_k: 0, exp_nums: []})
  testRemoveElement([0], 0, {exp_k: 0, exp_nums: []})
  testRemoveElement([0], 1, {exp_k: 1, exp_nums: [0]})
  testRemoveElement([1], 0, {exp_k: 1, exp_nums: [1]})

  testRemoveElement([0, 1, 0, 2, 0, 3], 0, {exp_k: 3, exp_nums: [1, 2, 3]})
})

// Helper function to check `k` value & array modification
function testRemoveElement(nums, val, exps) {
  const {exp_k, exp_nums} = exps
  const k = removeElement(nums, val)
  expect(nums.slice(0, k)).toEqual(expectArr(exp_nums))
  expect(k).toBe(exp_k)
  for (let i = 0; i < k; i++) expect(nums[i]).not.toBe(val)
}
