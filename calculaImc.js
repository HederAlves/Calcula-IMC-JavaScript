function calculaImc() {

    const altura = document.querySelector(".altura").value;
    const peso = document.querySelector(".peso").value;
   
    const resultadoImc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
    document.querySelector('[data-resultado-imc]').innerHTML = resultadoImc.toFixed(2);


    if (resultadoImc < 18.5) {

      alert("Cuidado!! você está abaixo do recomendado");
    }

    if (resultadoImc >= 18.5 && resultadoImc <= 24.9) {

      alert("Ótimo!! você está na média recomendada");
     }

     if (resultadoImc >= 25 && resultadoImc <= 29.9) {

      alert("Cuidado!! você está um pouco acima do recomendado");
     }

     if (resultadoImc >= 30 && resultadoImc <= 39.9) {

       alert("Perigo!! você está acima do recomendado");
     }

     if (resultadoImc > 40) {

      alert("Perigo extremo!! você está muito acima do recomendado")
     }



}
  
