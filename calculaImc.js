function calculaImc() {
    var altura = document.querySelector(".altura").value;
    var peso = document.querySelector(".peso").value;
   
    var resultadoImc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
    document.querySelector(".resultadoImc").innerHTML = resultadoImc.toFixed(2);
}