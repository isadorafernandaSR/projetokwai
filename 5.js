const aluno = {
    nome: "Link",
    nota1: 8,
    nota2: 9,
    nota3: 10
}

for (let chave in aluno) {
    console.log(`${chave}: ${aluno[chave]}`)
}