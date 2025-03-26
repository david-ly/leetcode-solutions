import { test, expect } from '@jest/globals'
import isPalindrome from './solution.js'

test('isPalindrome should handle sane/valid inputs', () => {
  expect(isPalindrome('level')).toBe(true)
  expect(isPalindrome('deified')).toBe(true)
  expect(isPalindrome('racecar')).toBe(true)
  expect(isPalindrome('madam')).toBe(true)
  expect(isPalindrome('radar')).toBe(true)

  expect(isPalindrome('hello')).toBe(false)
  expect(isPalindrome('world')).toBe(false)
  expect(isPalindrome('leetcode')).toBe(false)

  expect(isPalindrome('Level')).toBe(true)
  expect(isPalindrome('Racecar')).toBe(true)
  expect(isPalindrome('RaceCar')).toBe(true)
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)

  expect(isPalindrome('LeetCode')).toBe(false)
  expect(isPalindrome('Hello World')).toBe(false)

  expect(isPalindrome('a1b1a')).toBe(true)
  expect(isPalindrome('12321')).toBe(true)
  expect(isPalindrome('A1b1A')).toBe(true)
  expect(isPalindrome('123a321')).toBe(true)

  expect(isPalindrome('a1b2a')).toBe(false)
  expect(isPalindrome('12345')).toBe(false)
})

test('isPalindrome should handle edge/special cases', () => {
  expect(isPalindrome('')).toBe(true)
  expect(isPalindrome(' ')).toBe(true)
  expect(isPalindrome('a')).toBe(true)
  expect(isPalindrome('5')).toBe(true)
  expect(isPalindrome('!')).toBe(true)
  expect(isPalindrome('!@#$%^&*()')).toBe(true)  // Empty after filtering
  expect(isPalindrome('A,!,@,#,$,%,^,&,*,(,),a')).toBe(true) // 'Aa'
  expect(isPalindrome('1,!,@,#,$,%,^,&,*,(,),2')).toBe(false) // '1,2'

  expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
  expect(isPalindrome('race a car')).toBe(false)

  expect(isPalindrome("No 'x' in Nixon")).toBe(true)
  expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true)
  expect(isPalindrome('Eva, can I see bees in a cave?')).toBe(true)
  expect(isPalindrome('Mr. Owl ate my metal worm.')).toBe(true)

  expect(isPalindrome('a'.repeat(10000))).toBe(true)
  const prefix = 'abcdefghijklmnopqrstuvwxyz0123456789'.repeat(100)
  const reversed = prefix.split('').reverse().join('')
  expect(isPalindrome(prefix + reversed)).toBe(true)
  expect(isPalindrome('a'.repeat(5000) + 'b' + 'a'.repeat(4999))).toBe(false)
})
