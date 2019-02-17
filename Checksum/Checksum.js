// Problem Statement
// The spreadsheet consists of rows of random numbers.
// Calculate the spreadsheet's checksum.
// For each row, determine the difference between the largest value and the smallest value;
// the Checksum is the sum of all of these differences.
//
// The first row's largest and smallest values are 2 and 8, their difference is 6.
// The second row's largest and smallest values are 0 and 3, their difference is 3.
// The third row's difference is 7.
// In this example, the spreadsheet's checksum would be 6 + 3 + 7 = 16.

//TODO: Add this test case
// var data = [
//   [409, 194, 207, 470, 178],
//   [454, 235, 333, 511, 103],
//   [474, 293, 525, 372, 408],
//   [428, 4321, 2786, 6683, 3921],
//   [265, 262, 6206, 2207, 5712]
// ]

function add(a, b) {
  return a + b;
}

//returns max value from each row
let maxVals = data.map(arr => {
  return Math.max.apply(null, arr);
});

//returns min value for each row
let minVals = data.map(arr => {
  return Math.min.apply(null, arr);
});

//Calculating the range, and summing the values
let range = maxVals
  .map((num, idx) => {
    return num - minVals[idx];
  })
  .reduce(add, 0);
