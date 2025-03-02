export default isValid

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(str) {
  const pairs = new Map([
    ['(', ')']
  , ['{', '}']
  , ['[', ']']
  ])

  const stack = []
  for (const char of str) {
    if (!pairs.has(char)) {
        const top = stack.pop()
        if (char !== top) return false
        continue
    }
    stack.push(pairs.get(char))
  }
  return stack.length === 0
}
