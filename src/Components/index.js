const arr = [1, 2, 3];

// lowest sum = 3
// possible sums: 3, 4, 5, 6
// lowest minimum: 7

const newArr = [2, 8, 1];

// lowest sum = 3
// possible sums: 3, 9, 10
// lowest minimum: 4

const newestArr = [3, 6, 2, 5, 9];

// lowest: 5
// possible sums: 9, 5, 8, 12, 11, 15, 7, 14
// ordered sums: 5, 7, 8, 9, 11, 12, 14, 15
// lowest minimum: 6

// if the lowest possible sum && the next lowest possible sum is NOT 1 more than the lowest sum
// then the lowest NOT possible sum would be that lowest possible sum +1

// example: 

const result = [1, 1, 2, 3, 5, 7, 22];

function change(arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] > sum + 1) {
      sum += 1;
    }
  }
  return sum;
}

console.log(change(result));


// 1
// 1, 1 + 1 = 2
// 2 + 1 = 3, 2 + 1 + 1 = 4
// 3, 3 + 2 = 5, 3 + 2 + 1 = 6, 3 + 2 + 1 + 1 = 7
// 7 + 1 = 8, 7 + 1 + 1 = 9, 7 + 2 + 1 = 10

// let sum = 0
// for(let coin of coins) {
//   coin > sum + 1
// } coin += sum 
