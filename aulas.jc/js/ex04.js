var nome, idade
nome = prompt("Digite seu nome: ")
idade = parseInt(prompt("Digite sua idade: "))
if (idade >= 18) {
    alert(nome + ", você é maior de idade.")
} else {
    alert(nome + ", você é menor de idade.")
}