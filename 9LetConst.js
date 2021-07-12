// this is a morden javascript ECMA Script(ES6_)

// Let vs  Const  vs   Var
// let and const = block scope
//let = function scope
//let and var update karva de 6
//pan const update karva nathi daeto

//--------------------------var-----------------------------
//this is a example oflet variable
// function call(){
//     var n="keyur"
//     console.log(n);
//     if(true){
//         var m=32;
//         console.log(n);
//         console.log(m);
//     }
//     console.log(n);
// }

// call();

//-------------------------let-----------------------------
// function call(){
//     let n="keyur"
//     console.log(n);
//     if(true){
//        let m=32;
//         console.log(n);
//         console.log(m);
//     }
//     console.log(m);// here give the error because  let is block scope 
//                    // and outside the block we can't call
// }

// call();

//-------------------------let-----------------------------

// function call(){
//     let n="keyur"
//     console.log(n);
//     if(true){
//        let m=32;
//         console.log(n);
//         console.log(m);
//     }
//     m=8          
//     console.log(m);
// }

// call();


//-------------------------const--------------------------
function call(){
    const n="keyur"
    console.log(n);
    if(true){
       const m=32;
        console.log(n);
        console.log(m);
    }        
    console.log(m);
}

call();

//-------------------------const--------------------------
function call(){
    const n="keyur"
   
}

console.log(n);

