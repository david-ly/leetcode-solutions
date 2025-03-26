import { MAX } from '../utilities.js'

export default class MinStack {
    constructor() {
        this.stack = []
        this.min_stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        const min_val = Math.min(val, this.getMin() ?? MAX)
        this.min_stack.push(min_val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.min_stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min_stack[this.min_stack.length - 1]
    }
}
