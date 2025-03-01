export default containsDuplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  let seen = new Set()
  for (const num of nums) {
      if (seen.has(num)) return true
      seen.add(num)
  }
  return false

  /* Set Initialization Comparison */
  // return nums.length !== new Set(nums).size
}
