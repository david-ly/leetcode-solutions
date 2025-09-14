export default sumZero

/**
 * @param {number} n
 * @return {number[]}
 */
function sumZero(n) {
    const res = []
    if (n % 2 !== 0) res.push(0)
    for (let i = 1; i <= n/2; i++) {
      res.push(i, -i) // iterate n/2 times, pushing symmetric vals [pos, neg]
    }
    return res
}
