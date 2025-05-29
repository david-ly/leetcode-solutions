class Node {
  val: number
  next: Node | null
  constructor(val, next = null) {
      this.val = val
      this.next = next
  }
}

export default class LinkedList {
  head: Node | null
  tail: Node | null
  length: number

  // Helper Methods
  init(ret = null) {
      this.head = null
      this.tail = null
      this.length = 0

      if (ret) return true
  }

  initList(val) {
      this.head = new Node(val)
      this.tail = this.head
      this.length = 1
  }

  removeHead() {
      this.head = this.head.next
      this.length--
      return true
  }

  // Implement Required Methods
  constructor() { this.init({}) }

  get(index) { // assume `index` >= 0
      if (index > this.length - 1) return -1

      let curr = this.head!
      for (let i = 0; i < index; i++) {
          curr = curr.next!
      }
      return curr.val
  }

  insertHead(val) {
      if (this.length === 0) return this.initList(val)

      const head = new Node(val, this.head)
      this.head = head
      this.length++
  }

  insertTail(val) {
      if (this.length === 0) return this.initList(val)

      if (!this.tail) return false
      this.tail.next = new Node(val)
      this.tail = this.tail.next
      this.length++
  }

  remove(index) {
      if (index >= this.length) return false // out of bounds check
      if (this.length === 1) return this.init(1) // remove head/tail (LL has only 1 node)
      if (index === 0) return this.removeHead() // remove head "pointer"

      let curr = this.head
      for (let i = 0; i < index - 1; i++) {
          curr = curr.next
      }

      if (curr.next === this.tail) { // remove tail - edge case
          curr.next = null
          this.tail = curr
          this.length--
          return true
      }

      const next = curr.next.next
      curr.next = next
      this.length--
      return true
  }

  getValues() {
      const vals = []
      let curr = this.head
      while (curr) {
          vals.push(curr.val)
          curr = curr.next
      }
      return vals
  }
}
