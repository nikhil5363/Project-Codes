let myArray1 = [1, 2, 3, 4];

// myArray1.forEach((val,i)=>{
//     myArray1[i]= Math.pow(val,4)
// })
//console.log(myArray1)

let r = myArray1.forEach((val,i)=>{
    myArray1[i]= Math.pow(val,4)
})
console.log(r)


let myArray2 = [1, 2, 3, 4];
myArray2.map((val,i)=>{
    myArray2[i]=val*5
})
console.log(myArray2)