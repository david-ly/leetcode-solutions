class LRUCache {
	constructor(capacity) {
		this.cache = new Map()
		this.capacity = capacity
	}

	refresh(key, val) { // use preserved/stable insertion order of `Map` to delete used key/val then re-insert it as most recent element
		this.cache.delete(key)
		this.cache.set(key, val)
	}

	get(key) {
		if (!this.cache.has(key)) return -1

		const val = this.cache.get(key)
		this.refresh(key, val)
		return val
	}

	put(key, val) {
		this.refresh(key, val)
		if (this.cache.size > this.capacity) {
			const evict = this.cache.keys().next().val
			if (evict !== undefined) this.cache.delete(evict)
		}
	}

	delete(key) {
		this.cache.delete(key)
	}

	clear() {
		this.cache.clear()
	}
}
