// 1. Create a singly linked list, append some items and iterate through the list<br/>
//implementation
// 10-->16-->20.. how linked list store value
//10 16 n 20 are the nodes
// let LinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 16,
//             next: {
//                 value: 20,
//                 next: null
//             }
//         }
//     }
// }

//implemention

class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null

        }
        this.tail = this.head
        this.length = 1

    }
    append(data){
        const newNode={
            value:data,
            next:null
        }
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++


    }

}

const myList = new LinkedList(10)
myList.append(16)
myList.append(20)
console.log(myList)