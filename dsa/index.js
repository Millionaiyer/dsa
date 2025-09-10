// find the 2nd largest number in an array

function secondLargest(arr) {
  let largest = -Infinity;
  let second = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    }
  }
  return second;
}

console.log(secondLargest([2, 1, 6, 82, 1]));
