function mergeArrays(arr1, arr2) {
   
    let mergedArray = [];

    
    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push(arr1[i]);
    }

   
    for (let i = 0; i < arr2.length; i++) {
        mergedArray.push(arr2[i]);
    }

    
    return mergedArray;
}

console.log(mergeArrays([1, 2], [3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(mergeArrays(["apple"], ["banana", "cherry"])); // Deve exibir: ["apple", "banana", "cherry"]
