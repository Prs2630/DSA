// Print the following number pattern<br/>
// 1 1 1 1 1 <br/>
// 2 2 2 2 <br/>
// 3 3 3 <br/>
// 4 4 <br/>
// 5<br/>



var m, n;
for (m = 1; m <= 5; m++) {
    for (n = 5; n >= m; n--) {
        document.write(m)
    }
    
    document.write("<br/>")
}