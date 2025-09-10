export default minimumTeachings

/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
function minimumTeachings(n, languages, friendships) {
  const cant_comm = new Set()
  for (const friends of friendships) {
    const [u, v] = friends
    let [u_langs, v_langs] = [languages[u - 1], languages[v - 1]]
    if (u_langs.length < v_langs.length) [u_langs, v_langs] = [v_langs, u_langs]
    const larger = new Set(u_langs)
    if (v_langs.some(elem => larger.has(elem))) continue

    cant_comm.add(u - 1)
    cant_comm.add(v - 1)
  }

  const lang_freq = new Map()
  for (const user of cant_comm) {
    for (const lang of languages[user]) {
      if (!lang_freq.has(lang)) lang_freq.set(lang, 0)
      lang_freq.set(lang, lang_freq.get(lang) + 1)
    }
  }
  return cant_comm.size ? cant_comm.size - Math.max(...lang_freq.values()) : 0
}

