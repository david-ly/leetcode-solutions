import { test, expect } from '@jest/globals'
import twoSum from './solution.js'

test('twoSum should work with positive numbers (& edge cases)', () => {
  expect(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19)).toEqual([8, 9])
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
  expect(twoSum([3, 3], 6)).toEqual([0, 1])
	expect(twoSum([0, 4, 7, 3], 3)).toEqual([0, 3])

	// target is sum of first/last 2 elements
	expect(twoSum([4, 6, 8, 10], 10)).toEqual([0, 1])
  expect(twoSum([4, 6, 8, 10], 18)).toEqual([2, 3])
	expect(twoSum([2, 4, 7, 11], 6)).toEqual([0, 1])
	expect(twoSum([2, 4, 7, 11], 18)).toEqual([2, 3])
	expect(twoSum([0, 6, 8, 10], 6)).toEqual([0, 1])
	expect(twoSum([0, 4, 7, 11], 18)).toEqual([2, 3])

  expect(twoSum([5, 5, 5, 5], 10)).toEqual([0, 1]) // first pair (L2R)
})

test('twoSum should work with negative numbers', () => {
  expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4])
	expect(twoSum([-1, -2, -3, -4, -5], -3)).toEqual([0, 1])
	expect(twoSum([-1, -2, -3, -4, -5], -9)).toEqual([3, 4])
	expect(twoSum([0, -2, -3, -4, -5], -5)).toEqual([1, 2])

	expect(twoSum([0, -2, -3, -4], -2)).toEqual([0, 1])
	expect(twoSum([1, -2, -3, -4], -7)).toEqual([2, 3])
	// should short circuit [0,1]:[1,-2] even if [2,3]:[3,-4] is valid
  expect(twoSum([1, -2, 3, -4], -1)).toEqual([0, 1])

	expect(twoSum([-5, -5, -5, -5], -10)).toEqual([0, 1])
})

test('twoSum should return `undefined` when no solution exists', () => {
  expect(twoSum([1, 2, 3], 7)).toEqual(undefined)
	expect(twoSum([-1, -2, -3], 0)).toEqual(undefined)
  expect(twoSum([1, 3, 5, 7], 2)).toEqual(undefined)
	expect(twoSum([-1, -3, -5, -7], 10)).toEqual(undefined)
})

test('twoSum should handle edge case of [{arr}.length = 1]', () => {
  expect(twoSum([1], 1)).toEqual(undefined)
	expect(twoSum([-1], -1)).toEqual(undefined)
})

test('twoSum should handle edge case of null(ish) input', () => {
	expect(twoSum(undefined, 1)).toEqual(undefined)
	expect(twoSum(null, 1)).toEqual(undefined)
	expect(twoSum([], 1)).toEqual(undefined)
})
