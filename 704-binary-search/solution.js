export default search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums: number[], target: number): number {
  let [lo, hi] = [0, nums.length - 1]
  while (lo <= hi) {
      const mid = Math.floor(lo + (hi - lo)/2)
      if (nums[mid] === target) return mid
      if (nums[mid] < target) {
          lo = mid + 1
      } else {
          hi = mid - 1
      }
  }
  return -1
}
