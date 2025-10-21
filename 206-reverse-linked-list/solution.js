class ListNode {
  constructor(val, next) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseListIter(head) {
  let prev = null, curr = head
  while (curr !== null) {
    const {next} = curr
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}

function reverseListRcsv(head) {
  if (head === null || head.next === null) return head

  // recursively call `reverse...` on the "rest" of the list &
  // returns a ptr to the new head (prev end) of reversed list
  const reversed = reverseListRcsv(head.next)

  // pointer reversing logic
  const {next} = head
  next.next = head
  head.next = null
  return reversed
}

export { reverseListIter, reverseListRcsv }
