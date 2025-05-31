function soma(){
  var valor_a = document.getElementById('valor01').value;
  var valor_b = document.getElementById('valor02').value;
  //document.getElementById('demo').innerHTML = valor_a + valor_b;
  document.getElementById('demo').innerHTML = parseInt(valor_a) + parseInt(valor_b);
}
function subtracao(){
  var valor_a = document.getElementById('valor01').value;
  var valor_b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = parseInt(valor_a) - parseInt(valor_b);
}
function multiplicacao(){
  var valor_a = document.getElementById('valor01').value;
  var valor_b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = parseInt(valor_a) * parseInt(valor_b);
}
function divisao(){
  var valor_a = document.getElementById('valor01').value;
  var valor_b = document.getElementById('valor02').value;
  document.getElementById('demo').innerHTML = parseInt(valor_a) / parseInt(valor_b);
}
