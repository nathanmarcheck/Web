var basemaior,basemenor, altura, area;
basemaior = parseFloat(prompt("Digite a base maior do trapézio: "));  
basemenor = parseFloat(prompt("Digite a base menor do trapézio: "));
altura = parseFloat(prompt("Digite a altura do trapézio: "));
if (basemior == 0 || basemenor == 0 || altura == 0) {
    alert("As dimensões não podem ser zero.");
}