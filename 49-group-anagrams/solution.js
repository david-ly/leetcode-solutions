export default groupAnagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  if (!strs || !strs?.length) return []

  const groups = new Map()
  for (const str of strs) {
      const str_id = getFreqId(str)
      if (!groups.has(str_id)) groups.set(str_id, [])
      groups.get(str_id).push(str)
  }
  return [...groups.values()]
}

function getFreqId(str) {
  const freq = new Array(26).fill(0)
  for (const char of str) {
    freq[getCharIndex(char)]++
  }
  return freq.join('.') // delimiter required for distinct freq vals (ex: >= 10)
}

function getCharIndex(c) {
  return c.charCodeAt(0) - 97
}
