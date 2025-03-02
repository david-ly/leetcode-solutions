import { test, expect } from '@jest/globals'
import { encode, decode } from './solution.js'

test('encode/decode handles sane/valid inputs', () => {
  const input = ['Hello', 'World']
  const encoded = '5#Hello5#World'
  expect(encode(input)).toBe(encoded)
  expect(decode(encoded)).toEqual(input)
  expect(decode(encode(input))).toEqual(input)

  const spec = ['a#b', 'c##d', '#start', 'end#', '#middle#']
  const spec_encoded = '3#a#b4#c##d6##start4#end#8##middle#'
  expect(encode(spec)).toBe(spec_encoded)
  expect(decode(spec_encoded)).toEqual(spec)
  expect(decode(encode(spec))).toEqual(spec)

  const nums = ['123', '456', '789']
  const nums_encoded = '3#1233#4563#789'
  expect(encode(nums)).toBe(nums_encoded)
  expect(decode(nums_encoded)).toEqual(nums)
  expect(decode(encode(nums))).toEqual(nums)

  const mixd = ['1#23', '45#6', '7#8#9']
  const mixd_encoded = '4#1#234#45#65#7#8#9'
  expect(encode(mixd)).toBe(mixd_encoded)
  expect(decode(mixd_encoded)).toEqual(mixd)
  expect(decode(encode(mixd))).toEqual(mixd)

  const lrge = ['a'.repeat(10), 'b'.repeat(20), 'c'.repeat(40)]
  const substr_ab = '10#aaaaaaaaaa20#bbbbbbbbbbbbbbbbbbbb'
  const substr_c = '40#cccccccccccccccccccccccccccccccccccccccc'
  const lrge_encoded = `${substr_ab}${substr_c}`
  expect(encode(lrge)).toBe(lrge_encoded)
  expect(decode(lrge_encoded)).toEqual(lrge)
  expect(decode(encode(lrge))).toEqual(lrge)

  const unic = ['😀', '你好', 'こんにちは', '안녕하세요', 'مرحبا']
  const unic_encoded = '2#😀2#你好5#こんにちは5#안녕하세요5#مرحبا'
  expect(encode(unic)).toBe(unic_encoded)
  expect(decode(unic_encoded)).toEqual(unic)
  expect(decode(encode(unic))).toEqual(unic)

  const strs = ['', 'Hello World', '123#456', '#hashtag']
  const uniq = ['😀 emoji', 'a'.repeat(10), '#####@']
  const mult = [...strs, ...uniq]
  const mult_encoded = '0#11#Hello World7#123#4568##hashtag'
    + '8#😀 emoji10#aaaaaaaaaa6######@'
  expect(encode(mult)).toBe(mult_encoded)
  expect(decode(mult_encoded)).toEqual(mult)
  expect(decode(encode(mult))).toEqual(mult)
})

test('encode/decode handles various edge cases', () => {
  const input = Array(1000).fill().map((_, i) => `string${i}`)
  const encoded = getLrgEncoded()
  expect(encode(input)).toBe(encoded)
  expect(decode(encoded)).toEqual(input)
  expect(decode(encode(input))).toEqual(input)

  const long = 'x'.repeat(1234)
  const long_encoded = `1234#${long}`
  expect(encode([long])).toBe(long_encoded)
  // expect(encode(input)).toMatch(/^1234#x{1234}$/)
  expect(decode(long_encoded)).toEqual([long])
  expect(decode(encode([long]))).toEqual([long])

  const delm = ['#', '##', '###']
  const delm_encoded = '1##2###3####'
  expect(encode(delm)).toBe(delm_encoded)
  expect(decode(delm_encoded)).toEqual(delm)
  expect(decode(encode(delm))).toEqual(delm)
})

test('encode/decode handles empty/null(ish) cases', () => {
  expect(encode(undefined)).toBe(null)
  expect(encode(null)).toBe(null)
  expect(encode([])).toBe(null)
  expect(encode([''])).toBe('0#')
  expect(encode([' '])).toBe('1# ')
  expect(encode(['', ''])).toBe('0#0#')
  expect(encode(['', ' '])).toBe('0#1# ')
  expect(encode([' ', ''])).toBe('1# 0#')
  expect(encode([' ', ' '])).toBe('1# 1# ')

  expect(decode(undefined)).toEqual(null)
  expect(decode(null)).toEqual(null)
  expect(decode('')).toEqual(null)
  expect(decode('0#')).toEqual([''])
  expect(decode('0#0#')).toEqual(['', ''])

  expect(decode(encode([]))).toEqual(null)
  expect(decode(encode(['']))).toEqual([''])
  expect(decode(encode(['', '']))).toEqual(['', ''])
})

function getLrgEncoded(prefix = 'string', num = 1000) {
  let result = ''
  for (let i = 0; i < num; i++) {
    const str = `${prefix}${i}`
    result += `${str.length}#${str}`
  }
  return result
}
