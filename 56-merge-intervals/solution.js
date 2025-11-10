/** @param {number[][]} intervals | @return {number[][]} */
function merge(intervals) {
  const sorted = [...intervals].sort((a, b) => a[0] - b[0])
  const merged = []

  let curr = sorted[0]
  for (let i = 1; i < sorted.length; i++) {
    const next = sorted[i]
    if (next[0] <= curr[1]) {
      curr[1] = Math.max(curr[1], next[1])
    } else {
      merged.push(curr)
      curr = next
    }
  }

  merged.push(curr)
  return merged
}

/** @param {number[][]} intervals | @return {number[][]} */
function mergeReduce(intervals) {
  const sorted = [...intervals].sort((a, b) => a[0] - b[0])
  return sorted.reduce((acc, next) => {
    let curr = acc[acc.length - 1] // || acc.at(-1)
    if (!!curr && next[0] <= curr[1]) {
      curr[1] = Math.max(curr[1], next[1])
    } else {
      acc.push(next)
    }
    return acc
  }, [])
}

export { merge, mergeReduce }
