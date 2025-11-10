/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let [low, max] = [Number.MAX_SAFE_INTEGER, 0]
  for (const price of prices) {
    if (price > low) max = Math.max(max, price - low)
    if (price < low) low = price
  }
  return max
}

export { maxProfit }
