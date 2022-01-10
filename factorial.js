/**
 * Factorial
 * Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
 */

const factorial = (num) => {
    let numbers = [];
    let result = 1;
    for (let i = num; i >= 1; i--) {
        numbers.push(i);
    }
    numbers.map(n => result *= n);
    return(result)
}

console.log(factorial(3))
console.log(factorial(5))

//my first solution.
// Line 6: factorial takes an integer as an argument
// Line 7-8: when called it creates an empty array called numbers and a result variable set to 1
// Line 9: A for loop sets i equal to num arg, while it's gt or equal to 1 it will run and at the end of each cycle it will decrement the value of i by 1
// Line 10: pushes the current value of i into the numbers array
// Line 12: maps thru the numbers array, multiplying each value to the result variable
// Line 13: returns the result