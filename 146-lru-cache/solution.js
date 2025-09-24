import { DoublyLinkedList } from '@data-structures/linked-list'

class LRUCache {
  /** @param {number} capacity */
	constructor(capacity) {
		this.cache = new Map()
		this.capacity = capacity
	}

  /** @param {number} key @return {number} */
	get(key) {
		if (!this.cache.has(key)) return -1

		const val = this.cache.get(key)
		this.refresh(key, val)
		return val
	}

  /** @param {number} key @param {number} val @return {void} */
	put(key, val) {
		this.refresh(key, val)
		if (this.cache.size > this.capacity) {
			const evict = this.cache.keys().next().value
			this.cache.delete(evict)
		}
	}
  /** @param {number} key @param {number} val @return {void} @private */
	refresh(key, val) { // use preserved/stable insertion order of `Map` to refresh "used" key/val via deletion then re-insert as most recent element
		this.cache.delete(key)
		this.cache.set(key, val)
	}
}

class LRUCachePkg { // Using DLL from `@datastructures-js/linked-list`
	/** @param {number} capacity */
	constructor(capacity) {
    this.capacity = capacity
		this.cache = new Map()
		this.doubll = new DoublyLinkedList()
	}

  /** @param {number} key @return {number} */
	get(key) {
		if (!this.cache.has(key)) return -1

		const node = this.cache.get(key)
		this.refresh(node)
		return node.getValue().val
	}

  /** @param {number} key @param {number} val @return {void} */
	put(key, val) {
		if (!this.cache.has(key)) {
      this.cache.set(key, this.doubll.insertFirst({key, val}))
    } else {
      const node = this.cache.get(key)
      node.setValue({key, val})
      this.refresh(node)
    }

		if (this.cache.size > this.capacity) {
			const evict = this.doubll.removeLast()
			this.cache.delete(evict.getValue().key)
		}
	}

	/** @param {DoublyLinkedListNode} node @private */
	refresh(node) {
		this.doubll.remove(node)
		this.doubll.insertFirst(node)
	}
}

class Node { // Node class for doubly linked list
  constructor(key, val) {
    this.key = key
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DLL {
  constructor() { // Custom Doubly Linked List implementation
    this.head = null
    this.tail = null
    this.size = 0
  }

  insert(node) { // insert node to front of the list
    if (this.head === null) {
      this.head = node; this.tail = node
      node.prev = null; node.next = null
    } else {
      node.prev = null
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
    this.size++
    return node
  }

  remove(node) {
    if (this.size === 0 || !node) return null

    if (this.size === 1) {
      this.head = null; this.tail = null
    } else if (node === this.head) { // remove head node
      this.head = node.next
      this.head.prev = null
    } else if (node === this.tail) { // remove tail node
      this.tail = node.prev
      this.tail.next = null
    } else { // remove middle node
      const {prev, next} = node
      prev.next = next; next.prev = prev
    }

    this.size--
    return node
  }
}

class LRUCacheDll {
  /** @param {number} capacity */
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()
    this.dll = new DLL()
  }

  /** @param {number} key @return {number} */
  get(key) {
    if (!this.cache.has(key)) return -1
    const node = this.cache.get(key)
    this.refresh(node)
    return node.val
  }

  /** @param {number} key @param {number} val @return {void} */
  put(key, val) {
    if (!this.cache.has(key)) {
      this.cache.set(key, this.dll.insert(new Node(key, val)))
    } else {
      const node = this.cache.get(key)
      node.val = val
      this.refresh(node)
    }

    if (this.cache.size > this.capacity) {
      const evict = this.dll.remove(this.dll.tail)
      this.cache.delete(evict.key)
    }
  }

  /** @param {Node} node @private */
  refresh(node) {
    this.dll.remove(node)
    this.dll.insert(node)
  }
}

export { LRUCache, LRUCachePkg, LRUCacheDll }
