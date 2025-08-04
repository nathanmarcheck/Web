var estado, valor, precofinal
estado = prompt("Digite o estado (MG, SP, RJ, MS): ").toUpperCase();
valor = parseFloat(prompt("Digite o valor do produto: "));
if (estado === "MG") {
    precofinal = valor +(valor *0.07)
    precofinal = precofinal.toFixed(2);
    alert("O valor final do produto em MG é: R$ " + precofinal);
}
if (estado === "SP") {
    precofinal = valor +(valor *0.12)
    precofinal = precofinal.toFixed(2);
    alert("O valor final do produto em SP é: R$ " + precofinal);
}
if (estado === "RJ") {
    precofinal = valor +(valor *0.15)
    precofinal = precofinal.toFixed(2);
    alert("O valor final do produto em RJ é: R$ " + precofinal);
}
if (estado === "MS") {
    precofinal = valor +(valor *0.08)
    precofinal = precofinal.toFixed(2);
    alert("O valor final do produto em MS é: R$ " + precofinal);
}
else {
    alert("Estado inválido. Por favor, digite MG, SP, RJ ou MS.");
}

