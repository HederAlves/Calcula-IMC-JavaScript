function calculaImc() {

    const altura = document.querySelector(".altura").value;
    const peso = document.querySelector(".peso").value;
   
    const resultadoImc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
    document.querySelector('[data-resultado-imc]').innerHTML = resultadoImc.toFixed(2);


    if (resultadoImc < 18.5) {

      var resultadoNormal = document.querySelector('[data-resultado-normal]').style;
      resultadoNormal.display = 'none';
      var resultadoSobrepeso = document.querySelector('[data-resultado-sobrepeso]').style;
      resultadoSobrepeso.display = 'none';
      var resultadoObsidade = document.querySelector('[data-resultado-obesidade]').style;
      resultadoObsidade.display = 'none';
      var resultadoObsidadeGrave = document.querySelector('[data-resultado-obesidadegrave]').style;
      resultadoObsidadeGrave.display = 'none';

    }

    if (resultadoImc >= 18.5 && resultadoImc <= 24.9) {
      

      var resultadoMagreza = document.querySelector('[data-resultado-magreza]').style;
      resultadoMagreza.display = 'none';
      var resultadoSobrepeso = document.querySelector('[data-resultado-sobrepeso]').style;
      resultadoSobrepeso.display = 'none';
      var resultadoObsidade = document.querySelector('[data-resultado-obesidade]').style;
      resultadoObsidade.display = 'none';
      var resultadoObsidadeGrave = document.querySelector('[data-resultado-obesidadegrave]').style;
      resultadoObsidadeGrave.display = 'none';

     }

     if (resultadoImc >= 25 && resultadoImc <= 29.9) {

      var resultadoMagreza = document.querySelector('[data-resultado-magreza]').style;
      resultadoMagreza.display = 'none';
      var resultadoNormal = document.querySelector('[data-resultado-normal]').style;
      resultadoNormal.display = 'none';
      var resultadoObsidade = document.querySelector('[data-resultado-obesidade]').style;
      resultadoObsidade.display = 'none';
      var resultadoObsidadeGrave = document.querySelector('[data-resultado-obesidadegrave]').style;
      resultadoObsidadeGrave.display = 'none';
      
     }

     if (resultadoImc >= 30 && resultadoImc <= 39.9) {

      var resultadoMagreza = document.querySelector('[data-resultado-magreza]').style;
      resultadoMagreza.display = 'none';
      var resultadoNormal = document.querySelector('[data-resultado-normal]').style;
      resultadoNormal.display = 'none';
      var resultadoSobrepeso = document.querySelector('[data-resultado-sobrepeso]').style;
      resultadoSobrepeso.display = 'none';
      var resultadoObsidadeGrave = document.querySelector('[data-resultado-obesidadegrave]').style;
      resultadoObsidadeGrave.display = 'none';

     }

     if (resultadoImc > 40) {

      var resultadoMagreza = document.querySelector('[data-resultado-magreza]').style;
      resultadoMagreza.display = 'none';
      var resultadoNormal = document.querySelector('[data-resultado-normal]').style;
      resultadoNormal.display = 'none';
      var resultadoSobrepeso = document.querySelector('[data-resultado-sobrepeso]').style;
      resultadoSobrepeso.display = 'none';
      var resultadoObsidade = document.querySelector('[data-resultado-obesidade]').style;
      resultadoObsidade.display = 'none';

    }
}
  
