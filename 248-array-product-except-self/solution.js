export default productExceptSelf

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  /* Brute force solution: O(n^2) */
  // let result = []
  // for (let i = 0; i < nums.length; i++) {
  //     const rest = nums.slice(0, i).concat(nums.slice(i + 1))
  //     result.push(rest.reduce((acc, cur) => acc * cur, 1))
  // }
  // return result

  /* Prefix & suffix product solution: (2n) -> O(n) */
  const result = Array(nums.length).fill(1)
  let [head, tail] = [1, 1]
  for (let i = 0; i < nums.length; i++) {
      result[i] = runningProduct(result[i], head)
      head *= nums[i]
  }
  for (let i = nums.length - 1; i >= 0; i--) {
      result[i] = runningProduct(result[i], tail)
      tail *= nums[i]
  }
  return result
}

// Jest interally uses `Object.is` for comparison which technically considers `-0` and `0` as distinct/different values
function runningProduct(curr, oper) {
  const product = curr * oper
  return Object.is(product, -0) ? 0 : product
}
