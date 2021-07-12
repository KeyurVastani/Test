//Template literals(Template strings)


// for(i=1;i<=10;i++){
//     var j=2
//       //console.log(j +" * " +i + " = " +(i*j));
//       console.log(`${j}  *  ${i}  =  ${i*j}`);
// }




//-----------------------------------------------
//default parameters

// function sum(a=10,b=20){
//     return a*b
// }
// console.log(sum(5));
// console.log(sum());




//----------------------fat Arror function--------------
//fat arror func always remaining that first you define the 
//func then call the func
//This keyword is not use in fat Arrow func this  is a problem in fat arrow function




// const sum =() =>{
//     let a=4,b=5
//     return `the sum of two number ${a+b}`
// }
// console.log(sum()); //call function after define



 
// const sum = (a,b) =>{//fat func am ke 6 ke jo tamare ak j line no 
//  //code hoy ne to tema tamare return keyword lakhvani jarur nathi
//         return `the sum of two number ${a+b}`
// }
// console.log(sum(4,8));



// const sum = (a,b) =>`the sum of two number ${a+b}`
// console.log(sum(4,8));

const sum = () =>`the sum of two number ${(a=5) + (b=7)}`
console.log(sum());