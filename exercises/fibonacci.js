// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
// fib(4); 

function fibonacci(input) {
    if(input < 2) {
        return input 
    }
    return fibonacci(input - 1) + fibonacci(input - 2);
}
console.log(fibonacci(4));

function fibonacciCache(input, memo = {}) {
    if (input in memo) {
        return memo[input];
    }
    if (input < 2) {
        return input;
    }
    memo[input] = fibonacciCache(input - 1, memo) + fibonacciCache(input - 2, memo);
    return memo[input];
}

console.log(fibonacciCache(10));


