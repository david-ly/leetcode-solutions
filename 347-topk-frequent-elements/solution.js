export default topKFrequent

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  /* Count frequencies > sort by frequency > return top K */
  /* Init num:freq map > make arr of [freq, num] tuples > sort arr on each [0]th (freq) elem > return slice of first/top K elems */
  // const freqs = new Map()
  // for (const num of nums) {
  //   if (!freqs.has(num)) freqs.set(num, 0)
  //   freqs.set(num, freqs.get(num) + 1)
  // }

  // const sorted = [...freqs.entries()].map(([num, freq]) => [freq, num])
  // sorted.sort((a, b) => b[0] - a[0])
  // return sorted.slice(0, k).map(tuple => tuple[1])

  /* Bucket Sort Algorithm Implementation */
  const cnts = {}
  for (const num of nums) {
    cnts[num] = (cnts[num] ?? 0) + 1
  }

  const freq = Array(nums.length + 1).fill().map(() => [])
  for (const [num, cnt] of Object.entries(cnts)) {
    freq[cnt].push(parseInt(num))
  }

  const result = []
  for (let i = freq.length - 1; i > 0; i--) {
    for (const num of freq[i]) {
        result.push(num)
        if (result.length === k) return result
    }
  }
}
