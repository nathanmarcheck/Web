var quantlitros, preco, desconto, result;
quantlitros = parseFloat(prompt("Digite a quantidade de litros: "));
preco = parsefloat(5.9)
if (quantlitros >= 10 && quantlitros <= 20) {
    desconto = quantlitros * preco * 0.1; 
    alert("Valor com desconto: R$ " + (quantlitros * preco - desconto).toFixed(2));
}
else{
    desconto = quantlitros * preco * 0.2; 
    alert("Valor com desconto: R$ " + (quantlitros * preco - desconto).toFixed(2));
}