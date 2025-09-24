export { compareVersionSplit, compareVersionSlice, compareVersionTwoPointer }

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
function compareVersionSplit(version1, version2) {
  const v1_segs = version1.split('.')
  const v2_segs = version2.split('.')
  const num_seg = Math.max(v1_segs.length, v2_segs.length)

  for (let i = 0; i < num_seg; i++) {
    const [v1_seg, v2_seg] = [v1_segs[i], v2_segs[i]]
    const v1_int = v1_seg ? parseInt(v1_seg) : 0
    const v2_int = v2_seg ? parseInt(v2_seg) : 0
    if (v1_int < v2_int) return -1
    if (v1_int > v2_int) return 1
  }
  return 0
}

/**
 * Slice approach: uses helper function to build segments, then parses them
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
function compareVersionSlice(version1, version2) {
  let [v1_cur, v2_cur] = [0, 0]
  const [v1_len, v2_len] = [version1.length, version2.length]

  while (v1_cur < v1_len || v2_cur < v2_len) {
    const [v1_seg, v1_upd] = buildSegment(version1, v1_cur)
    v1_cur = v1_upd
    const [v2_seg, v2_upd] = buildSegment(version2, v2_cur)
    v2_cur = v2_upd

    const v1_int = v1_seg ? parseInt(v1_seg) : 0
    const v2_int = v2_seg ? parseInt(v2_seg) : 0
    if (v1_int < v2_int) return -1
    if (v1_int > v2_int) return 1
  }
  return 0
}

/**
 * Helper function: builds a version segment string from start position
 * @param {string} ver_str - version string
 * @param {number} head - starting position
 * @return {[string, number]} - [segment_string, next_position]
 */
function buildSegment(ver_str, head) {
  if (head >= ver_str.length) return ['', head]

  let [curr, tail] = [ver_str[head], head + 1]
  while (tail < ver_str.length && ver_str[tail] !== '.') {
    curr += ver_str[tail]
    tail++
  }
  return [curr, tail + 1]
}

/**
 * Two-pointer approach: compares version segments individually using direct number building
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
function compareVersionTwoPointer(version1, version2) {
  let [v1_ptr, v2_ptr] = [0, 0]
  const [v1_len, v2_len] = [version1.length, version2.length]

  while (v1_ptr < v1_len || v2_ptr < v2_len) {
    let [num1, num2] = [0, 0]
    while (v1_ptr < v1_len && version1[v1_ptr] !== '.') {
      num1 = num1 * 10 + parseInt(version1[v1_ptr])
      v1_ptr++
    }
    while (v2_ptr < v2_len && version2[v2_ptr] !== '.') {
      num2 = num2 * 10 + parseInt(version2[v2_ptr])
      v2_ptr++
    }
    if (num1 < num2) return -1
    if (num1 > num2) return 1
    v1_ptr++; v2_ptr++
  }
  return 0
}
