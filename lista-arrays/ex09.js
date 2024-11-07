function reverseArray(arr) {
    let reversedArray = [];  

   
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);  
    }

    
    return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4])); // Deve exibir: [4, 3, 2, 1]
console.log(reverseArray(["apple", "banana"])); // Deve exibir: ["banana", "apple"]
