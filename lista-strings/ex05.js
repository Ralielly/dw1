function getInitials(name) {
    // Divide o nome em partes (palavras) usando o espaço como delimitador
    const partes = name.split(' ');
    
   
    const iniciais = partes.map(part => part.charAt(0).toUpperCase());
    
    
    
    return iniciais.join('');
}

console.log(getInitials("João Silva")); 
console.log(getInitials("Maria Oliveira"));