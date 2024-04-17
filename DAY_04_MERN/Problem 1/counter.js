// Problem 1: Implementing Functions Demonstrating Closures

// Function to create a counter using closure
function createCounter() {
    let count = 0;

    // Returning a function that increments the counter
    return function() {
        return ++count;
    };
}

// Testing counter
const counter1 = createCounter();
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2

const counter2 = createCounter();
console.log(counter2()); // Output: 1 
