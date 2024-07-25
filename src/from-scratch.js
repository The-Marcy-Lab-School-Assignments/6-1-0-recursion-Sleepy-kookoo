// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr, total = 0, idx = 0) => {
  if (idx === arr.length) return total

  return sum(arr, total + arr[idx], idx + 1)
}

// Reverse string using recursive approach
const reverse = (str) => { };

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => { };

// Recursive fibonacci
const fibRec = (n) => { };

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => { };

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
