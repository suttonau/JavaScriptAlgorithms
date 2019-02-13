//if you dont use an array, you don't have to .push to memory
//TO-DO: Format and add testing

console.time("start");
function fibonacci(n) {
  var a = 0,
    b = 1,
    c;
  if (n < 3) {
    if (n < 0) return fibonacci(-n);
    if (n === 0) return 0;
    return 1;
  }
  while (--n) (c = a + b), (a = b), (b = c);
  return c;
}
console.timeEnd("start");
fibonacci(10);
