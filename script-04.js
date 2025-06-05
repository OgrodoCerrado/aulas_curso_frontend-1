//Função para receber notas
function media(){
  var a = parseFloat(document.getElementById('valor01').value);
  var b = parseFloat(document.getElementById('valor02').value);
  var c = parseFloat(document.getElementById('valor03').value);
  
  //Cálculo das médias

  var m = (a+b+c)/3;

  //Verificação de notas
  if(m == 10){
    document.getElementById('demo').innerHTML = "Média = "+ m.toString() + "(Aprovado com Distinção)";
  } else if (m>=7) {
    document.getElementById('demo').innerHTML = "Média = "+ m.toString() + "(Aprovado)";
  }else if (m>=5) {
    document.getElementById('demo').innerHTML = "Média = "+ m.toString() + "(Quase, mas reprovado)";
  } else     document.getElementById('demo').innerHTML = "Média = "+ m.toString() + "(Reprovado)";

}