export default isPalindrome

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(str) {
  let s = 0, t = str.length - 1
  while (s < t) {
      while (s < t && !isAlphaNum(str[s])) s++
      while (t > s && !isAlphaNum(str[t])) t--

      if (str[s].toLowerCase() !== str[t].toLowerCase()) return false
      s++, t--
  }
  return true
}

function isAlphaNum(char) {
  return (char >= 'A' && char <= 'Z')
    || (char >= 'a' && char <= 'z')
    || (char >= '0' && char <= '9')
}
