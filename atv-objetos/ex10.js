const usuarios = [
    { nome: "Bento", idade: 25, email: "bento0@email.com" },
    { nome: "Gabriel", idade: 21, email: "gabiel@email.com" },
    { nome: "Mariana", idade: 17, email: "mari@email.com" }
  ];
  
  const nomesEmails = usuarios.map(usuario => ({
    nome: usuario.nome,
    email: usuario.email
  }));
  
  console.log(nomesEmails);
