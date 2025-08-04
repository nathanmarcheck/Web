var km, l, consumo;
km = parseFloat(prompt("Digite a quantidade de quilômetros percorridos: "));
l = parseFloat(prompt("Digite a quantidade de litros de combustível consumidos: "));
consumo = km / l
if (consumo < 8){
    alert("Venda o carro!");
}
if (consumo >= 8 && consumo <= 14){
    alert("Econômico!");
}
else {
    alert("Super econômico!");
}