/**
 * Sigma 
 * Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
 */

const sigma = (num) => {
    let numbers = [];
    let result = 0;
    for(let i = num; i >= 1; i--) {
        numbers.push(i)
    }
    numbers.map(n => result += n)
    return(result);
}

console.log(sigma(5));
console.log(sigma(3));
console.log(sigma(20));

//my first solution.
// Line 6: sigma takes an integer as an argument
// Line 7-8: when run it creates an empty array called numbers and a result variable set to 0
// Line 9: A for loop sets i equal to num arg, while it's gt or equal to 1 it will run and at the end of each cycle it will decrement the value of i by 1
// Line 10: pushes the current value of i into the numbers array
// Line 12: maps thru the numbers array, adding each value to the result variable
// Line 13: returns the result