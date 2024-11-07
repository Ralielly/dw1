function sumArray(arr) {
    let soma = 0 

    for (let i = 0; i < arr.length; i ++) { 
    soma += arr[i];

}
return soma
}
console.log(sumArray([1,2,6,4]))