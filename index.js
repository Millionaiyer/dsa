// 1) write a function that searches for the array in an element
// and return the index if it exists else return -1

// function searchElement(num) {
//   let arr = [2, 4, 5, 7, 9, 0];

//   for (let i = 0; i < arr.length; i++) {
//     if (num == arr[i]) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(searchElement(9));

// 2) write a function that returns the number of negative numbers in an array

// function findNegativeNumber(arr) {
//   var count = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(findNegativeNumber([1, -3, -4, -2, 5, 4, 0]));

// 3) write a function that returns the largest number

// function LargestNumber(arr) {
//   //   let largestNumber = arr[0];
//   let largestNumber = -Infinity;

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > largestNumber) {
//       largestNumber = arr[i];
//     }
//   }
//   return largestNumber;
// }

// console.log(LargestNumber([-7, -4, -78, -3, -4, -7]), "test");

// 3) write a function that returns the smallest number

// function smallestNumber(arr) {
//   let smallestNumber = Infinity;
//   //   let SmallestNumber = -infinity;

//   for (let i = arr.length - 1; i > 0; i--) {
//     if (arr[i] < smallestNumber) {
//       smallestNumber = arr[i];
//     }
//   }
//   return smallestNumber;
// }

// console.log(smallestNumber([-7, -4, -78, -3, -4, -7]), "test");
