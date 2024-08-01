// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr, total = 0, idx = 0) => {
  if (idx === arr.length) return total

  return sum(arr, total + arr[idx], idx + 1)
}

// Reverse string using recursive approach
const reverse = (str) => {
  /*
  FEEDBACK:
    Here is the algorithm of one way to answer this problem
    Step 1: Define the base case
    - Check if the current index (idx) is less than 0
    - If yes, return the reversed string as it is complete
  
    Step 2: Define the recursive case
    - Take the character at the current index (str[idx])
    - Append this character to the reversed string (reversedStr)
  
    Step 3: Call the function recursively
    - Decrease the current index by one (idx - 1)
    - Pass the updated reversed string to the next function call
  
    Step 4: Return the result of the recursive call to continue the process
  */
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
  if (n < 2) return n
  let oneBack = 1, twoBack = 0
  let curr = 0

  for (let i = 2; i <= n; i++) {
    curr = oneBack + twoBack
    twoBack = oneBack
    oneBack = curr
  }

  return curr
};

// Recursive fibonacci
const fibRec = (n) => {
  if (n < 2) return n
  return fibRec(n - 1) + fibRec(n - 2)
};


const binarySearchIn = (arr, target) => {
  let start = 0, end = arr.length - 1 // parameters
  while (start <= end) { //if start > ebd return -1 
    const mid = Math.floor((start + end) / 2)
    if (arr[mid] === target) return mid // if found item 
    if (arr[mid] > target) end = mid - 1 // rec case
    if (arr[mid] < target) start = mid + 1 // rec case
  }
  return -1
};

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  if (start > end) return -1

  const mid = Math.floor((start + end) / 2)

  if (arr[mid] === target) return mid

  if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end)
  if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1)

};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
