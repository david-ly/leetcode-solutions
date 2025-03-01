export default isAnagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (!s || !t || s.length !== t.length) return false

  const freq = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    // initially thought I could get away with *purely* incrementing then checking whether final freq vals were all even {% 2 === 0} but that fails for cases like 'xx'/'bb'
    freq[getCharIndex(s[i])]++
    freq[getCharIndex(t[i])]-- // this satisfies *same* char constraint
  }
  return freq.every(v => v === 0)
}

function getCharIndex(ch) {
  return ch.charCodeAt(0) - 97
}

/* Character <Map> Solution */

// function isAnagram(s, t) {
//   if (!s || !t || s.length !== t.length) return false

  // const freq = initCharFreqMap()
  // for (let i = 0; i < s.length; i++) {
  //   freq.set(s[i], freq.get(s[i]) + 1)
  //   freq.set(t[i], freq.get(t[i]) - 1)
  // }
  // return [...freq.values()].every(v => v === 0)
// }

// function initCharFreqMap() {
//   const freq = new Map()
//   for (let i = 0; i < 26; i++) {
//     freq.set(String.fromCharCode(97 + i), 0)
//   }
//   return freq
// }
