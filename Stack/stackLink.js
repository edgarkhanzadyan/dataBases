class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
  get(i){
    let iter = this;
    while(i > 0){
      iter = iter.next;
      --i;
    }
    return iter;

  }
  length(){
    let i = 1;
    let iter = this;
    while(iter.next){
      iter = iter.next;
      ++i;
    }
    return i;
  }
  reverse(){
    let iter = this;
    let arr = new Node(this.data);
    while(iter.next){
      iter = iter.next;
      arr.prepend(iter.data);
    }
    return arr;
  }

  push(data){
    let new_node = new Node(data);
    let iter = this;
    while (iter.next){
      iter = iter.next;
    }
    iter.next = new_node;
  }
  pop(){
    let iter = this;
    if(!iter.next){
      throw new Error('No elements in Stack');
    }
    let newOne = this;
    let tmp = this;
    while (iter.next){
      tmp = iter;
      iter = iter.next;
      newOne = iter;
    }
    tmp.next = null;
    return newOne;
  }
}
let a = new Node('A');
a.push('b');
a.push('c');
console.log(a);
console.log(a.pop());
console.log(a);
