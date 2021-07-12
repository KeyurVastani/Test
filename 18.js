//convert the dd/mm/yyyy into yyyymmdd


// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// console.log(dd);
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// console.log(mm);
// var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;

// console.log(today);
// var yourdate = today.split("/").reverse().join("")
// console.log(yourdate);



//---------------------------------------------
// program to find the HCF or GCD of two integers

// program to find the factors of an integer

// take input
const num = prompt('Enter a positive number: ');

console.log(`The factors of ${num} is:`);

// looping through 1 to num
for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        console.log(i);
    }
}