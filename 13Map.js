 //-------------------Map Method----------------------
 //Return a new array containing the result of calling a func 
 //on every element in this array 

// const arr=[1,2,4,6,34,23,99]
// let a =arr.filter((Element,index,arr)=> Element>18)
// console.log(arr);
// console.log(a);


//map method does't chang the original array but it return new array
// let arr=[1,2,4,6,34,23,99]
// let a =arr.map((Element,index,arr)=>{
//     return Element>18; //jetala sacha tene True
// }
// )
// console.log(arr);
// console.log(a);



//sol2:
// let arr=[1,2,4,6,34,23,99]
// let a =arr.map((Element,index,arr)=>{
//     return ` the value of ${Element}`
// }
// )
// console.log(arr);
// console.log(a);


// //map and forEach main diff is forEach update odd array
// const arr1=[1,2,4,6,34,23,99]
// let a1 =arr1.forEach((Element,index,arr)=>{
//    return `the value ${Element}`
 
// })
// console.log(arr1);
// console.log(a1);// it return undefine because it not give new array


//-----Map method contain Ability to chain other method------
//like reduce() ,sort(), filter()


// var arr1=[1,4,16,64,81]
// var b= arr1.map((ele)=>Math.sqrt(ele))
// console.log(b);


// var arr1=[1,4,16,64,81]
// var b= arr1.map((ele)=>2*ele).filter((ele)=>ele>10)
// console.log(b);




//----------------reduce Method------------------------- 
//it take four argumenrt
//Accumulator == ak sath jama karna (sum)
//current value
//current Index 
//source Array

//jayare pan array mathi single value joti hoy tayare reduce functin no use karvano


//Eg.
// var arr1=[1,4,16,64,81]
// var result= arr1.reduce((sum,ele,index,arr)=>{
//     debugger;
//     return sum+=ele
// })
// console.log(result);



//Eg.
// var arr1=[1,4,16,64,81]
// var b= arr1.map((ele)=>2*ele).filter((ele)=>ele>10).reduce((sum,ele)=>{
//     return sum+=ele
// })
// console.log(b);



//Eg. we define the Accumulator value initially
// var a=10  // have banne no sum karva
// var arr1=[1,4,16,64,81]
// var result= arr1.reduce((sum,ele,index,arr)=>{
//     return sum+=ele
// },10)
// console.log(result);



//----converting 2D and 3D array in 1D------------------
var a=[[1,2,3],[23,43,23],[34,56,78]]

let flatArr= a.reduce((accum,value)=>{
    debugger
    return accum.concat(value)

})
console.log(flatArr);