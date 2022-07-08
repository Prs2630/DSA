//queue implemntion
class queue{
    constructor(){
    this.arr = [];
    }
     
    enqueue(data){
    this.arr.push(data);
    }
     
    dequeue(){
    if(this.arr.length === 0){
    return "cannot do dequeue";
    }
    return this.arr.shift();
    }
     
    size(){
    this.arr.length;
    }
     
    isEmpty(){
    if(this.arr.length === 0){
    return true;
    }else{
    return false;
    }
    }
     
    front(){
    return this.arr[0];
    }
     
    rear(){
    return this.arr[this.arr.length-1];
    }
     
    print(){
    for(let i =0;i<this.arr.length;i++){
    console.log(this.arr[i]);
    }
    }
    }
     
    
    var Queue = new queue();
    Queue.enqueue(10);
    Queue.enqueue(20);
    Queue.enqueue(30);
    Queue.enqueue(40);
    Queue.enqueue(50);
    Queue.enqueue(60);
    console.log("1st Dequeue"+ Queue.dequeue());  //10
    console.log("1st Rear"+ Queue.rear());  //60
    console.log("1st front"+ Queue.front());  //20
    console.log("2nd Dequeue"+ Queue.dequeue());  //20
    console.log("1st Size"+ Queue.size());  //5
    console.log( Queue.isEmpty());  //false
    console.log("3rd Dequeue"+ Queue.dequeue());  //30
    console.log("2nd Rear"+ Queue.rear());  //60
    console.log("4th Dequeue"+ Queue.dequeue());  //40
    console.log("2nd Front"+ Queue.front());  //50
    console.log("5th Dequeue"+ Queue.dequeue());  //50
    console.log("6th Dequeue"+ Queue.dequeue());  //60
    console.log(Queue.print());  