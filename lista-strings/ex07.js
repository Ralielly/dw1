function capitalizeWords(str) {
    return str
        .toLowerCase() 
        .split(' ')   
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(' ');   
}

console.log(capitalizeWords("hello world")); 
console.log(capitalizeWords("javaScript is awesome")); 