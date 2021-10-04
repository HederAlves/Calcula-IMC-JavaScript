function clicar() {
    var num1 = document.querySelector(".peso").value;
    var num2 = document.querySelector(".altura").value;
   
    var resultado = (parseInt(num1) * parseInt(num2))/2;
    document.querySelector(".resultadoImc").innerHTML = resultado;
}