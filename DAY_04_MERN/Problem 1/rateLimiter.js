// Function to create a rate limiter using closure
function createRateLimiter(limit) {
    let count = 0;

    // Returning a function that checks if the limit has been reached
    return function() {
        if (count < limit) {
            count++;
            return true; 
        } else {
            return false; 
        }
    };
}

// Testing rate limiter
const limiter = createRateLimiter(2);
console.log(limiter()); // Output: true 
console.log(limiter()); // Output: true 
console.log(limiter()); // Output: false 
