function countOccurrences(str, char) {
    let count = 0; // Inicializa o contador

   
    for (let i = 0; i < str.length; i++) {
       
        
        if (str[i] === char) {
            count++;
        }
    }

    return count;
}