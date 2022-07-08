// Implement a stack. add and pop numbers 1 to 10 with for loop

class Stack{
    constructor(){
        this.array=[];
    }

    push(data) {
        this.array.push(data)
    }
    pop(){
        if(this.array.length===0){
            return "stack is empty cant pop now"
        }
        return this.array.pop()
    }
    size(){
        return this.array.length
    }
    peek(){
        return this.array[this.array.length-1]
    }
    isEmpty(){
        if(this.array.length===0){
            return true
        }
        return false
    }
    print(){
        for(let i=0;i<this.array.length;i++){
            console.log(this.array[i])
        }
    }
}
var stack=new Stack()
stack.push(1)
stack.push(2)
stack.push(3)

stack.push(4)
stack.push(5)
stack.print()
//40

stack.pop()

stack.print()
