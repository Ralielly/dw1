function average(arr) {
    
    if (arr.length === 0) {
        return 0;
    }

    let sum = 0;  

    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];  
    }

    
    return sum / arr.length;  
}

console.log(average([1, 2, 3, 4])); // Deve exibir: 2.5
console.log(average([10, 20, 30])); // Deve exibir: 20