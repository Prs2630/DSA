//reverse each word in string
function firstReverse(str){
    let backwordString="";
    let splitstring=str.split("")
    for(var i=splitstring.length-1;i>=0;i--){
        backwordString+=splitstring[i]
    }
    return backwordString;
    
}
console.log(firstReverse("hello world"))