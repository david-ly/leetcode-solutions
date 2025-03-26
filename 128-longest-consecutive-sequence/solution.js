export default longestConsecutive

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  if (nums.length <= 1) return nums.length

  let nums_set = new Set(nums), max = 0
  for (const num of nums_set) {
    if (nums_set.has(num - 1)) continue // `num` cannot be start of consecutive sequence

    let seq_len = 1
    while (nums_set.has(num + seq_len)) seq_len++
    max = Math.max(max, seq_len)
  }
  return max
}
