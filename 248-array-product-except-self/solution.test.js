import { test, expect } from '@jest/globals'
import { MAX, MIN } from '../utilities.js'
import productExceptSelf from './solution.js'

test('productExceptSelf should handle sane/valid inputs', () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6])
  expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0])
  expect(productExceptSelf([1, 1, 1, 1])).toEqual([1, 1, 1, 1])

  expect(productExceptSelf([1, 2, 0, 4])).toEqual([0, 0, 8, 0])
  expect(productExceptSelf([0, 2, 3, 4])).toEqual([24, 0, 0, 0])
  expect(productExceptSelf([5, 0, 3])).toEqual([0, 15, 0])

  expect(productExceptSelf([0, 0, 3, 4])).toEqual([0, 0, 0, 0])
  expect(productExceptSelf([1, 0, 3, 0])).toEqual([0, 0, 0, 0])
  expect(productExceptSelf([0, 2, 0, 4])).toEqual([0, 0, 0, 0])

  expect(productExceptSelf([-1, -2, -3, -4])).toEqual([-24, -12, -8, -6])
  expect(productExceptSelf([-1, 2, -3, 4])).toEqual([-24, 12, -8, 6])

  expect(productExceptSelf([2, 3])).toEqual([3, 2])
  expect(productExceptSelf([0, 5])).toEqual([5, 0])
  expect(productExceptSelf([-1, -1])).toEqual([-1, -1])

  const repeated = Array(10).fill(2)
  let expected = Array(10).fill(Math.pow(2, 9))
  expect(productExceptSelf(repeated)).toEqual(expected)

  const input = [10, 20, 30, 40, 50]
  expected = [1200000, 600000, 400000, 300000, 240000]
  expect(productExceptSelf(input)).toEqual(expected)
})

test('productExceptSelf should handle "edge" cases', () => {
  expect(productExceptSelf([])).toEqual([])
  expect(productExceptSelf([1])).toEqual([1])
  expect(productExceptSelf([0])).toEqual([1])

  /* Float(s) Included */
  expect(productExceptSelf([0.5, 2])).toEqual([2, 0.5])
  expect(productExceptSelf([0.5, 2, 0])).toEqual([0, 0, 1])
  expect(productExceptSelf([0.5, 2, 0, 4])).toEqual([0, 0, 4, 0])

  const extremes = [MIN, 1, MAX]
  const expected = [MAX, MIN * MAX, MIN]
  expect(productExceptSelf(extremes)).toEqual(expected)
})
