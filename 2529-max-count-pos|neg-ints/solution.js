export default maximumCount

/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumCount(nums: number[]): number {
  const len = nums.length
  let [lo, hi] = [0, len - 1]
  if (nums[lo] > 0 || nums[hi] < 0) return len // all elems (pos || neg)

  let [neg, idx] = [0, -1]
  while (lo <= hi) { // find idx of first non-neg elem
      const mid = Math.floor(lo + (hi - lo) / 2)
      if (nums[mid] < 0) {
          lo = mid + 1
      } else {
          idx = mid
          hi = mid - 1
      }
  }
  neg = idx

  let pos = len - idx
  if (nums[idx] === 0) { // skip 0s (if present) to find real # of pos elems
      while (nums[idx] === 0) idx++, pos--
  }
  return Math.max(neg, pos)
}

function maxCountBrute(nums: number[]): number {
    let [pos, neg] = [0, 0]
    for (const num of nums) {
        if (num > 0) pos++
        if (num < 0) neg++
    }
    return Math.max(pos, neg)
}
