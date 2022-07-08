// Implement a stack. add and pop numbers 1 to 10 with for loop
//implemention of stack
class Stack {
    constructor() {
        this.array = [];
    }

    push(data) {
        
        this.array.push(data);
    }

    pop() {
        if (this.array.length === 0) {
            return "Stack is empty, can't pop now";
        }
        return this.array.pop();
    }

    size() {
        return this.array.length;
    }


    peek() {
        return this.array[this.array.length - 1];
    }


    isEmpty() {
        if (this.array.length === 0) {
            return true;
        }
        return false;
        /* return (this.array.length === 0);*/
    }


    print() {
        for (let i = 0; i < this.array.length; i++) {
            console.log(this.array[i]);
        }
    }


}


var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();
stack.pop();
stack.print()//50
stack.peek();  //40
stack.isEmpty();  //false
stack.size(); // 4
stack.pop();   //40
stack.pop();//30
stack.size();//2
stack.peek();//20
stack.print(); //10 20 