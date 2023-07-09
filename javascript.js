/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/
// let x =250;
// console.log( x * 0.025);

/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
//solution:
arr=[[1,7,9,45],["Str" , "fox" , "moh","the","fox","over","lazy","dog"]]
//#############################################
/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
//solution:
var fruits=["Tomato","Banana","Watermelon"]
console.log(fruits[0])//tomato
console.log(fruits[1])//banana
//#############################################
/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
let favorites = ["mansaf","mashay","video games","racing","running","mark zuckerberg","the hacker movie"]
console.log(favorites);

/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
let firstOfArray = [1,4,5]
console.log(firstOfArray[0])
let firstOfArray2 = ["t","u","g","x"]
console.log(firstOfArray2[0])


/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
let lastOfArray = [1,4,5]
let last = lastOfArray [lastOfArray.length - 1];
console.log(last);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9]
array.shift(0);
array.push(10);
array.unshift(6)
array.unshift(4)
array.unshift(3)
array.unshift(1)
console.log(array);


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
array.shift(1)
array.shift(3)
array.shift(4)
array.shift(6)
array.shift(5)
array.shift(7)
array.unshift(5)
array.pop(10)
array.push(-7)
array.push(3.5)
console.log(array);

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
arr1.sort;
console.log(arr1);
