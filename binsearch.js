//binary search folloes divide n conquer approach
//if the target=middle return middle element index
//if target<middle find in left subarray
//if target>middle find in right subarray

//q Write a js program for binary search using{ Recursive} Implementation.
// mid=(min+max)/2 =0+6/2=3 elem=6
let recursiveFunction = function (arr, x, start, end) {
    //base condition
    if (start > end) return false;
    //find middle index
    let mid = Math.floor((start + end) / 2)
    //compare mid with x
    if (arr[mid] === x) return true
    // If element at mid is greater than x,
    // search in the left half of mid
    if (arr[mid] > x)
        return recursiveFunction(arr, x, start, mid - 1)
    else {
        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid + 1, end)
    }
}
let arr = [1, 3, 5, 7, 8, 9];
x = 5;

if (recursiveFunction(arr, 5, 0, arr.length - 1))
    console.log("Element found!<br>");
else console.log("Element not found!<br>");
