function isPalindrome(string) {
  const splitString = string.split("");
  const reverseString = splitString.reverse();
  const joinString = reverseString.join("");
  if (joinString === string) {
    return "true"
  } else {
    return "false"
  }
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false