import { expect } from '@jest/globals'

export { expectArr }

function expectArr(arr) {
  return expect.arrayContaining(arr)
}
