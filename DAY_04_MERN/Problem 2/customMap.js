// Problem 2: Creating a Custom Higher-Order Function

// Custom implementation of map function
function customMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

// Testing custom map function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = customMap(numbers, (num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
