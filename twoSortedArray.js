function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const twoMergetsort = (list1, list2) => {
  let curr = new ListNode();
  const temp = curr;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  if (list1) {
    curr.next = list1;
  }

  if (list2) {
    curr.next = list2;
  }

  return temp.next;
};

const arr1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const arr2 = new ListNode(1, new ListNode(3, new ListNode(4)));
console.log(twoMergetsort(arr1, arr2));
