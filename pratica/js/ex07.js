var n1, n2, soma
n1 = parseFloat(prompt("Digite o primeiro número: "));
n2 = parseFloat(prompt("Digite o segundo número: "));
soma = n1 + n2;
if (soma > 20) {
    soma += 8
    alert("A soma aumentada é: " + soma)
}
else {  
    soma -= 5
    alert("A soma diminuída é: " + soma)
}