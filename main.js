//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string,names){   
        let matchedName = names.filter(name => string.includes(name));
        
        if (matchedName.length > 0) {
            console.log("Matched " + matchedName[0]);
        } else {
            console.log("No Matches");
        }
    }
    
    findWords(dog_string, dog_names);


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

/* Given */ arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i += 2) {
            arr.splice(i, 1, "even index");
    }
        return arr;
    }
    
    console.log(replaceEvens(arr));
    
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//CodeWars Problems solved with javaScript instead of Python: 

//1 - Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
    if (number % 2 == 0){
        return 'Even'
    }else{
        return 'Odd'
    }
}
console.log(even_or_odd(1))
console.log(even_or_odd(2))

//2 - Reverse list order - In this kata you will create a function that takes in a list and returns a list with the reverse order.
function reverseList(list) {
    return list.reverse();
}
let List = [1, 2, 3, 4, 5];
let reversedList = reverseList(List);
console.log(reversedList);


//3-Define a function that removes duplicates from an array of non negative numbers and returns it as a result. The order of the sequence has to stay the same.
function distinct(seq) {
    let newSeq = [];
    for (let number of seq) {
        if (!newSeq.includes(number)) {
            newSeq.push(number);
        }
    }
    return newSeq;
}

let seq = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
let newSeq = distinct(seq);
console.log(newSeq);

//4- Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

//Please use the following function names:

//addition = add

//multiply = multiply

//division = divide (both integer and float divisions are accepted)

//modulus = mod

//exponential = exponent

//subtraction = subt

//Note: All math operations will be: a (operation) b
let a = 10;
let b = 5;

function add(a, b) {
    return a + b;
}
console.log(add(a,b))

function multiply(a, b) {
    return a * b;
}
console.log(multiply(a,b))

function divide(a, b) {
    return a / b;
}
console.log(divide(a,b))

function mod(a, b) {
    return a % b;
}
console.log(mod(a,b))

function exponent(a, b) {
    return a ** b;
}
console.log(exponent(a,b))

function subt(a, b) {
    return a - b;
}
console.log(subt(a,b))





   
    
            

