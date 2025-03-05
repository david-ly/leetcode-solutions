export default longestCommonPrefix

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (!strs || !strs.length) return ''
  if (strs.length === 1) return strs[0]

  /* Get first string arbitrarily & compare against rest via horizontal scan */
  const [pre_cand, ...rest] = strs // prefix candidate
  let common = ''
  for (let i = 0; i < pre_cand.length; i++) {
      const char = pre_cand[i]
      const curr = common + char
      for (const str of rest) {
          if (str.substring(0, i + 1) !== curr) return common
      }
      common += char
  }
  return common
}
