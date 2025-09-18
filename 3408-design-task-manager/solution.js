import {PriorityQueue} from '@datastructures-js/priority-queue'

export default class TaskManager {
  /**
   * @param {number[][]} tasks
   */
  constructor(tasks) {
    // create priority queue containing [task_id, priority] tuples
    this.task_queue = new PriorityQueue((a, b) => {
      if (a[1] === b[1]) return b[0] - a[0] // break ties on largest `task_id`
      return b[1] - a[1] // default: order by highest `priority`
    })
    this.task_map = new Map()
    // task: [user_id, task_id,  priority]
    for (const task of tasks) this.add(task[0], task[1], task[2])
  }

  /**
   * @param {number} user_id
   * @param {number} task_id
   * @param {number} priority
   * @return {void}
   */
  add(user_id, task_id, priority) {
    this.task_queue.push([task_id, priority])
    this.task_map.set(task_id, [user_id, priority])
  }

  /**
   * @param {number} task_id
   * @param {number} new_pri
   * @return {void}
   */
  edit(task_id, new_pri) {
    const [user_id] = this.task_map.get(task_id)
    this.add(user_id, task_id, new_pri)
  }

  /**
   * @param {number} task_id
   * @return {void}
   */
  rmv(task_id) {
    this.task_map.delete(task_id)
  }

  /**
   * @return {number}
   */
  execTop() {
    if (!this.task_map.size) return -1

    while (!this.task_queue.isEmpty()) {
      const [task_id, que_pri] = this.task_queue.pop()
      const task_meta = this.task_map.get(task_id)
      if (!task_meta) continue // already deleted prior

      const [user_id, map_pri] = task_meta
      if (que_pri !== map_pri) continue // skip outdated entry

      // correct entry: delete from map & return user
      this.task_map.delete(task_id)
      return user_id
    }
    return -1
  }
}
