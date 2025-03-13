export default longestCommonPrefix

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (!strs || !strs.length) return ''
  if (strs.length === 1) return strs[0]

  /* Get first string arbitrarily & compare against rest */
  const [pre_cand, ...rest] = strs // prefix candidate
  let i = 0
  while (i < pre_cand.length) {
      const char = pre_cand[i]
      if (rest.some(str => i >= str.length || str[i] !== char)) break
      i++
  }
  return pre_cand.slice(0, i)
}
