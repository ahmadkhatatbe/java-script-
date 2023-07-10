// * 1. Write a JavaScript program that accept two integers and
//  * display the larger.Go to the editor */
/******* Start Your Code *********/

let number1 = 20;
let number2 = 10;
let larger;
if (number1 > number2) {
  larger = number1;
  console.log(larger);
} else if (number2 > number1) {
  larger = number2;
  console.log(larger);
}

/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
let num1 = 3;
let num2 = -7;
let num3 = 2;

if (num1 * num2 * num3 < 0) {
  console.log(window.alert("The sign is = negative"));
} else if (num1 * num2 * num3 > 0) {
  console.log(window.alert("The sign is = posetive"));
}

/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/

let n1 = 0;
let n2 = -1;
let n3 = 4;
if (n3 > n2 && n3 > n1) {
  console.log(n3,n1,n2);
} else {
    console.log(n1,n2,n3);
}

/******* End Your Code ********* */

/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
let nu1 = -5;
let nu2 = -2;
let nu3 = -6;
let nu4 = 0;
let nu5 = -1;
let max;

if (nu1 > nu2 && nu1 > nu3 && nu1 > nu4 && nu1 > nu5) {
    console.log(window.alert(nu1));}
     else if (nu2 > nu1 && nu2 > nu3 && nu2 > nu4 && nu2 > nu5) {
        console.log(window.alert(nu2));} 
    else if (nu3 > nu2 && nu3 > nu1 && nu3 > nu4 && nu3 > nu5) {
        console.log(window.alert(nu3));} 
    else if (nu4 > nu2 && nu4 > nu3 && nu4 > nu1 && nu4 > nu5) {
        console.log(window.alert(nu4))
} else if (nu5 > nu2 && nu5 > nu3 && nu5 > nu4 && nu5 > nu1) {
    console.log(window.alert(nu5));

}


/******* End Your Code ********* */

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
 let x=10;
 let y=20;

 if(x>y){
    console.log(window.alert("Hello World"))
 }else if( y>x){
    console.log(window.alert("Goodbye"))

 }

/******* End Your Code ********* */
/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
let mark = 49;

if(mark <50){
    console.log("Fail")
}else
if(mark >= 50 && mark <=59){
    console.log("E")
}else if(mark >= 60 && mark <=69){
    console.log("D")
}
else if(mark >= 70 && mark <=79){
    console.log("C")
}
else if(mark >= 80 && mark <=89){
    console.log("B")
}
else if(mark >= 90 && mark ==100){
    console.log("A")
}


// 1. Write a JS code to print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i)
    
}
/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
var arr = [13,23,12,45,22,48,66,100]
for(let i=0;i<=arr.length;i++){
  if(arr[i] % 2 ==0)
  console.log(arr[i])
}


/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/


for (var i = 1; i <= 8; i++) {
    for (var j = 1; j <= i; j++) {
      
      document.write((j));
     
      
  }
      document.write(`<br>`);
    }
   


 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/

let str = "don’t know why";

console.log(str.includes("y"));
