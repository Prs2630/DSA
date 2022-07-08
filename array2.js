//program to find the largest number in a list
const arr=[1,2,3,4,5,6]
function getLargest(arr){
    let num=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            num=arr[i]
        }
    }
    return num

}
console.log(getLargest(arr))