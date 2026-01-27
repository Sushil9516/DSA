function CountDigit(n) {
  if (n == 0) return 1;
  if (n < 0) n = -n;
  let count = 0;
  let num = n;
  while (num > 0) {
    count++;
    num = Math.trunc(num / 10);
  }
  return count;
}
let num = -2500;
console.log(CountDigit(num));
