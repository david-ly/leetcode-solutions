export default spellchecker

const vow_rgx = /[aeiou]/g

/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
function spellchecker(wordlist, queries) {
  const [set, low, nrm] = [new Set(wordlist), new Map(), new Map()]
  // iterate backwards to store *first* "mapping" in final `.set(...)` call(s)
  for (let i = wordlist.length - 1; i >= 0; i--) {
    const [word, lowercase] = [wordlist[i], wordlist[i].toLowerCase()]
    low.set(lowercase, word) // map `word.toLowerCase()` -> `word`

    // map normalized `word` (lowercase w/ vowels masked) -> `word`
    nrm.set(lowercase.replace(vow_rgx, '*'), word)
  }

  for (let i = 0; i < queries.length; i++) {
    const [query, lower] = [queries[i], queries[i].toLowerCase()]
    if (set.has(query)) continue // exact match

    const norml = lower.replace(vow_rgx, '*')
    queries[i] = low.has(lower) // ternary logic follows precedence
      ? low.get(lower) // case-insensitive match
      : (nrm.has(norml) ? nrm.get(norml) : '') // normalized match OR none
  }

  return queries
}
