let array = [1,2,3,4,5,6,7]
for(let i=0; i<array.length ; i++){
    for(let j=0 ; j< array.length ; j++){
        if(array[j]<array[j+1]){
            temp=array[j]
            array[j]=array[j+1]
            array[j+1] = temp
        }
    }
}
console.log(array)