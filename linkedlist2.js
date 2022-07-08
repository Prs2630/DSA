//find middle of linked list
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
var middleNode = function(head) {
    const arr=[];
    function traverse(node){
        if(node===null){
            return;
        }
        arr.push(node)
        traverse(node.next)

    }
    traverse(head)
    return arr[(arr.length-1)/2]
    
    
    
    
};

