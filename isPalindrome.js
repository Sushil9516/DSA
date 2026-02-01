function isPalindrome(x) {

  let temp = x;
  let rev = 0;
  
  if (temp < 0) temp = -temp;
  if (temp >= 0 && temp < 10) return x;
  if (!x) return "Please give me any number";
  for (let i = temp; i > 0; i = Math.trunc(i / 10)) {
    rev = rev * 10 + (i % 10);
  }
  return x == rev;
}
