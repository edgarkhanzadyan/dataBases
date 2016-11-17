class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
  get(i){
    let iter = this
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
  prepend(data){
    let new_node = new Node(this.data);
    this.data = data;
    let tmp = this.next;
    this.next = new_node;
    this.next.next = tmp;
  }
  append(data){
    let new_node = new Node(data);
    let iter = this;
    while (iter.next){
      iter = iter.next;
    }
    iter.next = new_node;
  }

  reverse(){
    let iter = this
    let arr = new Node(this.data);
    while(iter.next){
      iter = iter.next;
      arr.prepend(iter.data);
    }
    return arr;
  }
}
let a = new Node("A");
a.append("B");
a.append("C");
console.log(a);
console.log(a.reverse());
