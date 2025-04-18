const criaUsuario = ({nome, email}) => {
    return `Usuário: ${nome} com email: ${email} foi criado com sucesso!`
}

const novoUsuario = {//Dados do novo usuario
    nome: "Raphael",
    email: "Raphael@email.com",
    idade: 27
}

console.log(criaUsuario(novoUsuario))