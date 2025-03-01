export default twoSum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  if (!nums) return

  const complements = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (complements.has(nums[i])) return [complements.get(nums[i]), i]
    complements.set(target - nums[i], i)
  }
}
