function toSnakeCase(str) {
    return str
        .trim()                    
        .toLowerCase()              
        .replace(/[^\w\s]/g, '')    
        .replace(/\s+/g, '_');     
}

console.log(toSnakeCase("Hello World"));
console.log(toSnakeCase("JavaScript is fun")); 