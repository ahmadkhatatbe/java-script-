/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(jobtitle, location, partnerName , children ) {
    console.log("You will be a " + jobtitle +" in " + location + ", and married to " + partnerName + " with " +children+" kids.")
    }
    tellFortune('software engineer', 'Jordan', 'Alice', 3);


    /*
    2
    Write a function named calculateDogAge that:
    takes 1 argument: your puppy's age.
    calculates your dog's age based on the conversion
    rate of 1 human year to 7 dog years.
    outputs the result to the screen like so:
    "Your doggie is NN years old in dog years!"
    
    Ex: calculateDogAge(1);
    => "Your doggie is 7 years old in dog years!"
    */
    function calculateDogAge(age) {
        console.log( "Your doggie is " + (age * 7) + " years old in dog years!" );
    }
    calculateDogAge(7) 
    /*
    3
    Write a function named calculateSupply that:
    takes 2 arguments: age, amount per day.
    calculates the amount consumed for rest of the life (based on a constant max age 100).
    outputs the result to the screen like so:
    "You will need NN to last you until the ripe old age of X"
    
    Ex: calculateSupply(30, 3);
    => 'You will need 76650 cups of tea to last you until the ripe old age of 100;
    */
    function calculateSupply( age , amount) {
    let result = ((100-age)*365)*3;
        console.log("You will need "+ result + "cups of tea to last you until the ripe old age of 100;");
    }
    calculateSupply(23, 3);
    /*
    4
    Write a function called greet that:
    takes 1 argument: name.
    and it will return hello + name
    
    Ex: greet("Adam")
    => "Hello Adam"
    */
    function greet(name) {
        return console.log(`hello ${name}` )
    }
    greet("Adam");

    /*
    5
    what is the error:
    function double(cat) {
      return 2 * x;
    }
    
    
    function double(7) {
      return 2 * 7;
    }
    
    function double('7') {
      return 2 * 'x';
    }
    */
    function double(x) {
        return 2 * x;
      }
      function double() {
        return 2 * 7;
      }
      function double(x) {
        return 2 * x;
      }
    
    /*
    6
    fix these functions:
    func double1(x {
      return 2 * x ;
    }
    
    functiondouble2 x)
    return 2 * x;
    }
    
    function (x) double3 {
      return 2 * x;
    
    */
      function double1(x) {
        return 2 * x ;
      }

      function double2 (x){
    return 2 * x;
    }
    function double3 (x) {
        return 2 * x;
    }
    /*
    7
    Write a function called cube that:
    accept 1 parameter and calculate the cube of this number
    
    Ex: cube(4)
    => 64
    */
    function cube(x) {
        return x**3
    }
    console.log(cube(4));
    /*
    8
    Write a function called multiply that:
    accept 2 parameters and calculate the multiply of these 2 numbers
    
    Ex: multiply(3,4)
    => 12
    Ex: multiply(5,4)
    => 20
    */
    function  multiply(num1,num2) {
        return num1 * num2;
    }
    
    console.log(multiply(5,6));
    /*
    9
    Write a function called canIGetADrivingLicense that:
    accept 1 parameter represent the age
    and if the age greater than or equal to 20 return "yes you can"
    otherwise return "please come back after X years to get one"
    
    Ex: canIGetADrivingLicense(21)
    => "yes you can"
    
    Ex: canIGetADrivingLicense(17)
    => "please come back after 3 years to get one"
    
    Ex: canIGetADrivingLicense(20)
    => "yes you can"
    
    */
    function canIGetADrivingLicense(age) {
        let result = 20 -age;
        if(age >=20){
            console.log("yes you can")
        }else{
            console.log(`please come back after ${result} years to get one`)
        }
    }
    canIGetADrivingLicense(10)
    /*
    10
    Write a function called sameLength
    that accepts two strings as arguments,
    and returns true if those strings have the same length, and false otherwise.
    
    **hint: how we can know string length   Ex: : "tree".length   => 4
    
    Ex: sameLength("tree","clue")
    => true
    
    Ex: sameLength("tree","car")
    => false
    */
    
function sameLength(str1,str2) {
    if (str1.length === str2.length ) {
        return true;
    }else{
        return false;
    }
}

console.log(sameLength("sdfsdf","ahmed"))

    /*
    11
    Write a function called largerNubmer
    that accept two numbers as arguments,
    and return the first larger numbers
    
    Ex: largerNubmer(5,6)
    => 6
    
    Ex: largerNubmer(5,3)
    => 5
    */
    function largerNubmer(number1,number2) {
        if ( number1 > number2 ) {
            return number1
        }else{
            return number2
        }
    }
    console.log(largerNubmer(10,20));
    /*
    12
    Write a function called smallerNubmer
    that accept three numbers as arguments,
    and return the first smaller number
    
    Ex: smallerNubmer(8,6,7)
    => 6
    
    Ex: smallerNubmer(5,99,34)
    => 5
    
    Ex: smallerNubmer(5,99,3)
    => 3
    
    Ex: smallerNubmer(5,3,3)
    => 3
    
    */
    function smallerNubmer(n1,n2,n3) {
        if ( n1< n2 && n1<n3 ) {
            return n1
        }else if ( n2< n1 && n2<n3 ){
            return n2
        }else if ( n3< n2 && n3<n1 ){
            return n3
        }
    }
    console.log(smallerNubmer(10,0,6));
    /*
    13
    Write a function called shorterString
    that accept five string as an arguments,
    and return the first shorter string
    
    Ex: shorterString("air","school","car","by","github")
    => by
    
    Ex: shorterString("air","tr","car","by","github")
    => tr
    
    Ex: shorterString("by","tr","car","air","github")
    => by
    
    Ex: shorterString("air","by","car","school","github")
    => by
    
    Ex: shorterString("air","tr","by","car","github")
    => by
    
    Ex: shorterString("air","tr","car","github","by")
    => by
    
    */
    
    
    function shorterString(...arge) {
        var shorterString = arge[0]
       for (let i = 0 ; i < arge.length ; i++) {
        if (shorterString.length > arge[i].length) {
            shorterString = arge[i]
           
        }
        
          }
          return shorterString 
    }
   console.log(shorterString("air","tr","by","car","github")); 
   console.log(shorterString("air","school","car","by","github"));
   console.log(shorterString("by","tr","car","air","github"));
   
    /*
    14
    Write a function called longerString
    that accept four string as an arguments,
    and return the first longer string
    
    Ex: longerString("air","school","car","github")
    => school
    
    Ex: longerString("air","schoo","car","github")
    => github
    
    try all the cases (change the order of the longestString)
    */
    function longerString(...arge) {
        var shorterString = arge[0]
       for (let i = 0 ; i < arge.length ; i++) {
        if (arge[i].length > shorterString.length) {
            shorterString = arge[i]
           
        }
        
          }
          return shorterString 
    }
    console.log( longerString("air","school","car","github")); 
    /*
    15
    Write a function called isEven
    that accept 1 argument as a number,
    and return true if this number is even
    and false if this number is odd
    
    Ex: isEven(1)
    => false
    Ex: isEven(2)
    => true
    
    */
    function isEven(nu) {
        if(nu % 2 == 0){
          return  console.log("true this number is even"); 
        }else{
         return  console.log("false this number is odd"); 
        }
    }
    isEven(1)
    /*
    16
    Write a function called isOdd
    that accept 1 argument as a number,
    and return true if this number is Odd
    and false if this number is Even
    
    Ex: isOdd(4)
    => false
    Ex: isOdd(5)
    => true
    
    */
    
    function isOdd(nu) {
        if(nu % 2 != 0){
          return  console.log("true this number is odd"); 
        }else{
         return  console.log("false this number is even"); 
        }
    }
    isOdd(8)
    /*
    17
    Write a function called positive
    that accept 1 argument as a number,
    and return the positive version of the number passed
    
    Ex: positive(4)
    => 4
    Ex: positive(-5)
    => 5
    
    */
    function positive(posit) {
        if(posit>0){
        return    console.log( posit)
        }else{
         return   console.log("the positive version of the number passed" + -1*posit)
        }
    }
    positive(-8)
    /*
    18
    Write a function called fullName
    that accept two parameters, firstName and lastName,
    and returns the firstName and lastName concatenated
    together with a space in between.
    
    Ex: fullName("Adam","McCallen")
    => "Adam McCallen"
    Ex: fullName("Alex", "Mercer")
    => "Alex Mercer"
    */
    function fullName(firstName,lastName) {
        console.log(`the ${firstName} ${lastName}`)
    }
    fullName("Adam","McCallen")
    fullName("Alex", "Mercer")
    /*
    19
    Write a function called average
    that takes five numbers as inputs
    and returns the average of those numbers.
    
    Ex: average(1,2,3,4,5)
    => 3
    
    Ex: average(5,7,9,3,5)
    => 5.8
    
    */
    
    function average(...arge) {
let avge=0;
let result;
       for (let i = 0; i < arge.length; i++) {
           avge+=arge[i]
           result= avge/arge.length
       }
       return result
    }
   console.log(average(1,2,3,4,5)); 
   console.log(average(5,7,9,3,5));
    /*
    20
    Write a function called randomNumber
    that didnt takes any parameter
    and returns a random number between 0-1
    ** hint: you can seacrh using MDN
    
    Ex: randomNumber()
    => 0.2278
    
    Ex: randomNumber()
    => 0.475
    
    */
    function randomNumber() {
        console.log(Math.random());
    }
    randomNumber()
    /*
    21
    Write a function called randomBetweenNumbers
    that takes 2 parameters
    and returns a random number between them
    ** hint: you can seacrh using MDN
    
    Ex: randomBetweenNumbers(1,8)
    => 7.5412
    
    Ex: randomBetweenNumbers(3,100)
    => 23
    
    */
   function randomBetweenNumbers(max,min) {
     return Math.random() * (max - min) + min;
   }
   console.log(randomBetweenNumbers(1,8))
   console.log(randomBetweenNumbers(3,100))
    /*
    22
    Write a function called scoreInUniversty
    that takes 1 parameters
    and returns the alpabet in the unevirsty
    A => 95-100
    B => 85-94
    C => 70-84
    D=> 50-69
    F=> 0-49
    
    Ex: scoreInUniversty(96)
    => "A"
    
    Ex: scoreInUniversty(3)
    => "F"
    
    Ex: scoreInUniversty(71)
    => "C"
    */
    function scoreInUniversty(mark) {
        if (mark>=95 && mark <= 100) {
            console.log("A")
        }
        else if (mark>=85 && mark <= 94) {
            console.log("B")
        }
        else if (mark>=70 && mark <= 84) {
            console.log("C")
        }
        else if (mark>=50 && mark <= 69) {
            console.log("D")
        }
        else if (mark>=0 && mark <= 49) {
            console.log("F")
        }
    }
     console.log(scoreInUniversty(3));
    console.log(scoreInUniversty(71));
    /*
    23
    Write a function called counter
    that will returns a number bigger
    than the one that returned before
    and start from 0
    
    Ex: counter()
    => 1
    
    Ex: counter()
    => 2
    
    Ex: counter()
    => 3
    
    */
   let count=0;
    function counter() {
        
       return ++count
    }

console.log(counter())
console.log(counter())
console.log(counter())
    
    /*
    24
    Write a function called resetCounter
    that will reset the previuos function
    and return the number before reset and
    a string say that the counter reset
    
    Ex: counter()
    => 1
    
    Ex: counter()
    => 2
    
    Ex: counter()
    => 3
    
    Ex: resetCounter()
    => 3 and the counter reset now
    
    Ex: counter()
    => 1
    
    Ex: counter()
    => 2
    
    Ex: resetCounter()
    => 2 and the counter reset now
    
    Ex: counter()
    => 1
    */
   ////////////////
   
   function resetcounter() {
    console.log(count + " the counter reset now")
     return count=0
   }

    resetcounter()
  
    console.log(counter())
    console.log(counter())

    resetcounter()
    console.log(counter())