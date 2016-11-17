class Stack {
  constructor() {
    this.elements = [];
  }
  push(a){
    this.elements.push(a);
  }
  pop(){
    if(this.elements.length !== 0){
      return this.elements.pop();
    }
    throw new Error('No elements in Stack');
  }
}
let a = new Stack();
a.push(1);
a.push(2);
a.push(3);
a.push(4);
console.log(a);
console.log(a.pop());
console.log(a.pop());
console.log(a.pop());
console.log(a);
