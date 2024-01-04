/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let flag = 0;
  let head = null, temp = null;
  while(l1 || l2){
    let sum = flag;
    if(l1){
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if(l2){
      sum = sum + l2.val;
      l2 = l2.next;
    }

    let obj = new ListNode(sum % 10);
    if(head === null){
      head = obj;
      temp = obj;
    } else {
      temp.next = obj;
      temp = obj;
    }
    flag = 0;
    if(sum >= 10){
      flag = 1;
    }
  }
  if(flag === 1){
    let obj = new ListNode(1);
    temp.next = obj;
    temp = obj;
  }
  return head;
};