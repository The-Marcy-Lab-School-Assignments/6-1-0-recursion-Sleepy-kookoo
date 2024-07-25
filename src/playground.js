// const countDownFromNRecursive = n => {
//   if (n === 0) return "Kaboom!"

//   console.log(n)

//   return countDownFromNRecursive(n - 1)
// }

// console.log(countDownFromNRecursive(5))


const sum = (arr, total = 0, idx = 0) => {
  if (idx === arr.length) return total

  return sum(arr, total + arr[idx], idx + 1)
}

console.log(sum([1, 2, 3]))