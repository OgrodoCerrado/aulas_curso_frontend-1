 //Função para receber notas
function Comparação(){
    var a = parseFloat(document.getElementById('valor01').value);
    var b = parseFloat(document.getElementById('valor02').value);
    var c = parseFloat(document.getElementById('valor03').value);
    
    if(a > b && a > c){
    document.getElementById('demo').innerHTML = "O número A é o maior valor apresentado. ("+ a.toString() + ")";
  } else if(b > a && b > c) {
    document.getElementById('demo').innerHTML = "O número B é o maior valor apresentado. ("+ b.toString() + ")";
  } else if(c > a && c > b) {
    document.getElementById('demo').innerHTML = "O número C é o maior valor apresentado ("+ c.toString() + ")";
  } else {
    document.getElementById('demo').innerHTML = "Não é possível determinar um número que é maior que os outros dois.";
}
}