var num
num = parseInt(prompt("Digite um número de 0 a 9: "))
switch (num){
    case 0:
        alert("Você digitou zero.");
        break;
    case 1:
        alert("Você digitou um.");
        break;
    case 2:
        alert("Você digitou dois.");
        break;
    case 3:
        alert("Você digitou três.");
        break;
    case 4:
        alert("Você digitou quatro.");
        break;
    case 5:
        alert("Você digitou cinco.");     
        break;
    case 6:
        alert("Você digitou seis.");
        break;
    case 7:
        alert("Você digitou sete.");
        break;
    case 8:
        alert("Você digitou oito.");
        break;
    case 9:
        alert("Você digitou nove.");
        break;
    default:
        alert("Número fora do intervalo de 0 a 9.");
        break;
}