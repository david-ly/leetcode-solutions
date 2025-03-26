export {letterCombinationsArr, letterCombinationsStr}

const digits_map_arr = new Map([
  ['2', ['a', 'b', 'c']]
, ['3', ['d', 'e', 'f']]
, ['4', ['g', 'h', 'i']]
, ['5', ['j', 'k', 'l']]
, ['6', ['m', 'n', 'o']]
, ['7', ['p', 'q', 'r', 's']]
, ['8', ['t', 'u', 'v']]
, ['9', ['w', 'x', 'y', 'z']]
])

const digits_map_str = new Map([
  ['2', 'abc']
, ['3', 'def']
, ['4', 'ghi']
, ['5', 'jkl']
, ['6', 'mno']
, ['7', 'pqrs']
, ['8', 'tuv']
, ['9', 'wxyz']
])

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinationsArr(digits) {
  if (digits.length === 0) return []

  const result = []
  function backtrack(idx, combo) {
    if (idx === digits.length) {
      result.push(combo.join(''))
      return
    }
    const chars = digits_map_arr.get(digits[idx])
    for (const char of chars) {
      combo.push(char)
      backtrack(idx + 1, combo)
      combo.pop()
    }
  }

  backtrack(0, [])
  return result
}

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinationsStr(digits) {
  if (digits.length === 0) return []

  const result = []
  function backtrack(idx, combo) {
    if (idx === digits.length) {
      result.push(combo)
      return
    }
    const chars = digits_map_str.get(digits[idx])
    for (const char of chars) backtrack(idx + 1, combo + char)
  }

  backtrack(0, '')
  return result
}
