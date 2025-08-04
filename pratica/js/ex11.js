var n1, n2, operacao, resultado
n1 = parseFloat(prompt("Digite o primeiro número: "))
n2 = parseFloat(prompt("Digite o segundo número: "))
operacao = prompt("Digite a operação (+, -, *, /): ")
switch (operacao) {
    case '+':
        resultado = n1 + n2;
        alert("Resultado da soma: " + resultado)
        break;
    case '-':
        resultado = n1 - n2;
        alert("Resultado da subtração: " + resultado)
        break;
    case '*':
        resultado = n1 * n2;
        alert("Resultado da multiplicação: " + resultado)
        break;
    case '/':
        if (n2 !== 0) {
            resultado = n1 / n2;
            alert("Resultado da divisão: " + resultado)
        }
        else {
            alert("Divisão por zero não é permitida.")
        }
        break;
    default:
        alert("Operação inválida.")
}