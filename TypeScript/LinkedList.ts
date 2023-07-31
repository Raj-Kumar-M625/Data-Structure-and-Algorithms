 class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }


function reverseList(head: ListNode | null): ListNode | null {
      let temp = head
      let prev:ListNode|null = null
      
      while(temp != null){
          let next = temp.next
          temp.next = prev
          prev = temp
          temp = next
      }
    
    head = prev
     return head
};

function middleNode(head: ListNode | null): ListNode | null {
      let slow:ListNode|null = head;
      let fast:ListNode|null = head;
    
      while(fast && fast.next){
         slow = slow?.next
         fast = fast.next.next
      }
    return slow
};

function deleteNode(node: ListNode | null): void {
        let temp:ListNode | null = node
        temp?.val = temp?.next?.val
        temp?.next = temp?.next?.next
};