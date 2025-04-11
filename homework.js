// 1

// function countBy(start, step) {
//     let result = [];
//     for (let i = 1; i <= step; i++) {
//       result.push(start * i);
//     }
//     return result;
//   }

//   console.log(countBy(1, 10));
//   console.log(countBy(2, 5));
//   console.log(countBy(3, 5));

// 2

// function myFunc(arr) {
//     return arr.filter(num => num % 2 === 0);
//   }

//   console.log(myFunc([1, 2, 3, 4, 5, 6, 7, 8]));

// 3

// function getSum(arr) {
//     let sum = 0;
//     for (let sub of arr) {
//       for (let num of sub) {
//         sum += num;
//       }
//     }
//     return sum;
//   }

//   console.log(getSum([
//     [1, 0, 0, 0],
//     [0, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 0, 0, 1],
//     [0, 0, 0, 0, 5]
//   ]));

//   console.log(getSum([[1,0],[0,1]]));

// 4

// function getMaxNumber(arr) {
//     return Math.max(...arr);
//   }

//   console.log(getMaxNumber([22, 55, 33, 130, 11, 66, 123]));

// 5

// function filterDivisible(arr) {
//     return arr.filter(num => num % 3 === 0 || num % 5 === 0);
//   }

//   console.log(filterDivisible([1, 3, 5, 10, 15, 20, 22]));

// 6

// function toUpperCaseArray(arr) {
//     return arr.map(str => str.toUpperCase());
//   }

//   console.log(toUpperCaseArray(["salom", "nima", "gap"]));

// 7

// function getTotalLetterCount(arr) {
//     return arr.reduce((sum, word) => sum + word.length, 0);
//   }

//   console.log(getTotalLetterCount(["nimdur", "gap"]));

// 8

// function sortByLength(arr) {
//     return arr.sort((a, b) => a.length - b.length);
//   }

//   console.log(sortByLength(["cat", "apple", "banana", "car"]));

// 9

// function filterLongWords(arr) {
//     return arr.filter(word => word.length > 4);
//   }

//   console.log(filterLongWords(["pear", "grape", "melon", "kiwi", "banana"]));

// 10

// function getFirstLetters(arr) {
//     return arr.map(word => word[0]).join('');
//   }

//   console.log(getFirstLetters(["animal", "needle", "run", "swim"]));
