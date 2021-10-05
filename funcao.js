function clicar() {
    var num1 = document.querySelector(".altura").value;
    var num2 = document.querySelector(".peso").value;
   
    var resultado = ((parseInt(num1) * parseInt(num1)) / parseInt(num2));
    document.querySelector(".resultadoImc").innerHTML = resultado;
}
