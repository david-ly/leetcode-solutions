// #ref: https://neetcode.io/problems/dijkstra

import { PriorityQueue } from '@datastructures-js/priority-queue'

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        const graph = new Map()
        for (const [src, dst, cost] of edges) {
            if (!graph.has(src)) graph.set(src, [])
            graph.get(src).push({vrtx: dst, cost})
        }

        const dists = {}
        for (let i = 0; i < n; i++) dists[i] = i === src ? 0 : Infinity
        
        const prque = new PriorityQueue((a, b) => a.cost < b.cost ? 1 : -1)
        prque.enqueue({vrtx: src, dist: 0})
        while (!prque.isEmpty()) {
            const {vrtx: curr} = prque.dequeue()
            for (const {vrtx: next, cost} of graph.get(curr) || []) {
                const dist = dists[curr] + cost
                if (dist < dists[next]) {
                    dists[next] = dist
                    prque.enqueue({vrtx: next, dist})
                }
            }
        }

        return Object.fromEntries(Object.entries(dists).map(([vrtx, dist]) => {
            return [vrtx, dist === Infinity ? -1 : dist]
        }))
    }
}
