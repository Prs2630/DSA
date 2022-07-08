//que implemention
class Queue {
    constructor() {
        this.arr = []
    }
    enqueue(data) {
        this.arr.push(data)

    }
    dequeue() {
        if (this.arr.length == 0) {
            return "cannot dequeue"
        }
        return this.arr.shift()
    }
    size() {
        return this.arr.length
    }
    isEmpty() {
        if (this.arr.length === 0) {
            return true

        }
        return false;
    }
    front() {
        this.arr[0]
    }
    rear() {
        this.arr[this.arr.length - 1]
    }
    print() {
        for (let i = 0; i < this.arr.length; i++) {
            console.log(this.arr[i]);
        }
    }
}
var queue = new Queue()
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
queue.print()
console.log(queue.size())
console.log(queue.isEmpty())