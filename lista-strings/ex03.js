function isPalindrome(str) {

    
    const normalizedStr = str.regex(/[\W_]/g, '').toLowerCase();
   
  
    const reversedStr = normalizedStr.split('').reverse().join('');
    
   
    return normalizedStr === reversedStr;
}

console.log(isPalindrome("arara")); 
console.log(isPalindrome("hello")); 