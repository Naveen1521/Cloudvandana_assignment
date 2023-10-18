let a = "Anil is Good Boy".split(" ")
let res = ""
for(let i=0; i<a.length ; i++){
    for(let j =a[i].length - 1 ; j>= 0 ; j--){
        res += a[i][j]
    }
    res+=" "
}
console.log(res)