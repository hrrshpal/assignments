/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // filtering string
  let filteredString = ""
  for(let i=0; i<str.length; i++){
    if((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= '0' && str[i] <= '9')){
      filteredString += str[i]
    }
  }

  //checking palindrome
 let original = filteredString.toLowerCase()
 let reversed = original.split("").reverse().join("")

 if(original === reversed) return true
 return false
}

module.exports = isPalindrome;
