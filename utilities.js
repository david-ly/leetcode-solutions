import { expect } from '@jest/globals'

const [MAX, MIN] = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]

export { MAX, MIN, expectArr }

function expectArr(arr) {
  return expect.arrayContaining(arr)
}
