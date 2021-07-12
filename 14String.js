// var s="this is a world "
// s1=s.indexOf("is",4)//
// console.log(s1);


// s.lastIndexOf("is" ,5)//backward ma check karse atlr "this i"  atla j check karse 

//--------method in String-------------------------------
//---------slice(starting position , ending position)


// var s="this is a world"
// var s1=s.slice(0,6)
// var s2=s.slice(5,-2)
// console.log(s1);
// console.log(s2);

//---s.substring()
//substring() is similar to slice().
//The difference is that substring() cannot accept negative indexes.


//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.

// var d=s.substr(6,6)
// console.log(d);


//------------------replace() method does not change the string it is called on. It returns a new string.
//By default, the replace() method replaces only the first match:
//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
//To replace case insensitive, use a regular expression with an /i flag (insensitive):
//let newText = text.replace(/MICROSOFT/i, "W3Schools"); 




//-----------------------------------------------
var s="this ,iz , a world"
console.log(s.charAt(6)); //given character
console.log(s.charCodeAt(6));// given unicode of the character 
console.log(s[5]);// this is a property excess
s.toUpperCase()
s.toLowerCase()

// s.trim()
//The trim() method removes whitespace from both sides of a string.

s.split( ", ")//convert the string into array
console.log(s.split(" , "));