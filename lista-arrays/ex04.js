function allEquals(arr) {
    
    if (arr.length === 0) {
        return true;  
    }

    const firstElement = arr[0];

    
    for (let i = 1; i < arr.length; i++) {
       
        if (arr[i] !== firstElement) {
            return false;
        }
    }

    
    return true;
}

console.log(allEquals([1, 1, 1])); // Deve exibir: true
console.log(allEquals([1, 2, 1])); // Deve exibir: false

