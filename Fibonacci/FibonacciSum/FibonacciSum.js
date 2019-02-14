//Problem based off ProjectEuler exercise
//Function will find all even fibonacci numbers and return the sum of all even numbers of the sequence.
//Test limit of 10,000

console.time("sean");
function fibonacciEvenSum(limit) {
  let x = 1;
  let y = 2;
  let sum = 0;
  let evenSum = 2;

  while (x + y < limit) {
    sum = x + y;
    x = y;
    y = sum;

    if (sum % 2 === 0) {
      evensum += sum;
      console.log(evensum);
    }
  }
}
fibonacciEvenSum(10000);
console.timeEnd("sean");
