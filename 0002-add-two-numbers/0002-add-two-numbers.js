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

//문제
//두개의 음수가 아닌 정수를 표현하는 비어있지 않은 연결리스트가 주어진다. 하나의 숫자를 포함하고 있는 각각의 노드는 역순으로 저장되어 있다. 두 정수를 더한 결과를 연결리스트의 형태로 반환하라.
//두개의 음수가 아닌 정수는 0 그자체를 표현하는 것이 아니면, 0이 오지 못한다. 즉, 2->1->0 은 존재하지 않는다.