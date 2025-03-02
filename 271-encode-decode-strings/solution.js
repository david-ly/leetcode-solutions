export {encode, decode}

/**
 * @param {string[]} strs
 * @returns {string}
 */
function encode(strs) {
  if (!strs || !strs?.length) return null

  let result = ''
  for (const str of strs) {
      result += `${str.length}#${str}`
  }
  return result
}

/**
 * @param {string} str
 * @returns {string[]}
 */
function decode(str) {
  if (!str || !str?.length) return null

  const result = []
  let idx = 0

  while (idx < str.length) {
      let cur = idx
      while (str[cur] !== '#') {
          cur++
      }
      const len = parseInt(str.slice(idx, cur))
      idx = cur + 1 // skip the '#'

      const end = idx + len
      result.push(str.slice(idx, end))
      idx = end
  }

  return result
}
