function contarVogais(str) {

    const vogais = 'aeiouAEIOUãéíõóá';
    let contador = 0;

    for (const letra of str) {
        
        if (vogais.includes(letra)) {
            contador++;
        }
    }

    return contador;
}


const resultado = contarVogais("jose");
console.log(`Número de vogais: ${resultado}`);
