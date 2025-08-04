var num 
num = parseFloat(prompt("Digite um número: "))
if( num > 0 ){
    alert("Você digitou um número positivo: " + num);
    if( num < 0 ){
    alert("Você digitou um número negativo: " + num);
    }
    else if( num == 0 ){
        alert("Você digitou zero.");
    }
}