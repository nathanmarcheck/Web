var n1, n2, n3, n4, media;
n1 = parseFloat(prompt("Digite a primeira nota: "));
n2 = parseFloat(prompt("Digite a segunda nota: ")); 
n3 = parseFloat(prompt("Digite a terceira nota: "));
n4 = parseFloat(prompt("Digite a quarta nota: "));
media = (n1 + n2 + n3 + n4) / 4;
if (media >= 7) {
    alert("Aprovado com média: " + media);
}
else {
    alert("Reprovado com média: " + media);
}