//q Write a js program for binary search using{ itearative approach} Implementation.

let iterativeFunction = function (arr, x) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === x)
            return true;
        else if (arr[mid] < x)
            start = mid + 1
        else {
            end = mid - 1
        }
        return false
    }





}
let arr = [1, 3, 5, 7, 8, 9];
x = 5;

if (iterativeFunction(arr, 5, 0, arr.length - 1))
    console.log("Element found!<br>");
else console.log("Element not found!<br>");
