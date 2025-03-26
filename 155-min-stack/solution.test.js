import { test, expect } from '@jest/globals'
import { MAX, MIN } from '../utilities.js'
import MinStack from './solution.js'

test('MinStack should handle basic operations', () => {
  const min_stack = new MinStack()
  min_stack.push(-2)
  min_stack.push(0)
  min_stack.push(-3) // .stack: [-2, 0, -3] | .min_stack: [-2, -2, -3]
  expect(min_stack.getMin()).toBe(-3)
  expect(min_stack.top()).toBe(-3)
  min_stack.pop() // .stack: [-2, 0] | .min_stack: [-2, -2]
  expect(min_stack.getMin()).toBe(-2)
  expect(min_stack.top()).toBe(0)
  min_stack.pop() // .stack: [-2] | .min_stack: [-2]
  expect(min_stack.getMin()).toBe(-2)
  expect(min_stack.top()).toBe(-2)

  const dup_stack = new MinStack()
  dup_stack.push(0)
  dup_stack.push(0) // .stack: [0, 0] | .min_stack: [0, 0]
  expect(dup_stack.top()).toBe(0)
  expect(dup_stack.getMin()).toBe(0)
  dup_stack.pop() // .stack [0] | .min_stack: [0]
  expect(dup_stack.top()).toBe(0)
  expect(dup_stack.getMin()).toBe(0)

  const inc_stack = new MinStack()
  inc_stack.push(1)
  inc_stack.push(2)
  inc_stack.push(3) // .stack: [1, 2, 3] | .min_stack: [1, 1, 1]
  expect(inc_stack.top()).toBe(3)
  expect(inc_stack.getMin()).toBe(1)
  inc_stack.pop() // .stack: [1, 2] | .min_stack: [1, 1]
  expect(inc_stack.top()).toBe(2)
  expect(inc_stack.getMin()).toBe(1)
  inc_stack.pop() // .stack: [1] | .min_stack: [1]
  expect(inc_stack.top()).toBe(1)
  expect(inc_stack.getMin()).toBe(1)

  const dec_stack = new MinStack()
  dec_stack.push(7)
  dec_stack.push(6)
  dec_stack.push(5) // .stack: [7, 6, 5] | .min_stack: [7, 6, 5]
  expect(dec_stack.top()).toBe(5)
  expect(dec_stack.getMin()).toBe(5)
  dec_stack.pop() // .stack: [7, 6] | .min_stack: [7, 6]
  expect(dec_stack.top()).toBe(6)
  expect(dec_stack.getMin()).toBe(6)
  dec_stack.pop() // .stack: [7] | .min_stack: [7]
  expect(dec_stack.top()).toBe(7)
  expect(dec_stack.getMin()).toBe(7)

  const neg_stack = new MinStack()
  neg_stack.push(-10)
  neg_stack.push(-5)
  neg_stack.push(-20) // .stack: [-10, -5, -20] | .min_stack: [-10, -10, -20]
  expect(neg_stack.top()).toBe(-20)
  expect(neg_stack.getMin()).toBe(-20)
  neg_stack.pop() // .stack: [-10, -5] | .min_stack: [-10, -10]
  expect(neg_stack.top()).toBe(-5)
  expect(neg_stack.getMin()).toBe(-10)
  neg_stack.pop() // .stack: [-10] | .min_stack: [-10]
  expect(neg_stack.top()).toBe(-10)
  expect(neg_stack.getMin()).toBe(-10)

  const mix_stack = new MinStack()
  mix_stack.push(10)
  mix_stack.push(5)
  mix_stack.push(15) // .stack: [10, 5, 15] | .min_stack: [10, 5, 5]
  expect(mix_stack.top()).toBe(15)
  expect(mix_stack.getMin()).toBe(5)
  mix_stack.pop() // .stack: [10, 5] | .min_stack: [10, 5]
  expect(mix_stack.top()).toBe(5)
  expect(mix_stack.getMin()).toBe(5)
  mix_stack.push(2) // .stack: [10, 5, 2] | .min_stack: [10, 5, 2]
  expect(mix_stack.top()).toBe(2)
  expect(mix_stack.getMin()).toBe(2)
  mix_stack.pop()
  mix_stack.pop() // .stack: [10] | .min_stack: [10]
  expect(mix_stack.top()).toBe(10)
  expect(mix_stack.getMin()).toBe(10)
})

test('MinStack should handle edge case(s) & many ops', () => {
  const dec_stack = new MinStack()
  const values = []

  for (let i = 1000; i > 0; i--) {
    dec_stack.push(i)
    values.push(i)
    expect(dec_stack.getMin()).toBe(i)
  }
  for (let i = 0; i < 999; i++) {
    dec_stack.pop()
    values.pop()
    expect(dec_stack.getMin()).toBe(dec_stack.top())
  }

  const ext_stack = new MinStack()
  ext_stack.push(MAX) // .stack: [MAX] | .min_stack: [MAX]
  expect(ext_stack.getMin()).toBe(MAX)
  ext_stack.push(MIN) // .stack: [MAX, MIN, MIN] | .min_stack: [MAX, MIN, MIN]
  expect(ext_stack.top()).toBe(MIN)
  expect(ext_stack.getMin()).toBe(MIN)

  const min_stack = new MinStack()
  min_stack.push(10)
  min_stack.push(5)
  min_stack.push(5)
  min_stack.push(6) // .stack: [10, 5, 5, 6] | .min_stack: [10, 5, 5, 5]
  expect(min_stack.getMin()).toBe(5)
  min_stack.pop() // .stack: [10, 5, 5] | .min_stack: [10, 5, 5]
  expect(min_stack.getMin()).toBe(5)
  min_stack.pop() // .stack: [10, 5] | .min_stack: [10, 5]
  expect(min_stack.top()).toBe(5)
  expect(min_stack.getMin()).toBe(5)
  min_stack.pop() // .stack: [10] | .min_stack: [10]
  expect(min_stack.top()).toBe(10)
  expect(min_stack.getMin()).toBe(10)

  const emp_stack = new MinStack()
  emp_stack.push(42)
  emp_stack.pop()
  emp_stack.push(99)
  expect(emp_stack.top()).toBe(99)
  expect(emp_stack.getMin()).toBe(99)
})
