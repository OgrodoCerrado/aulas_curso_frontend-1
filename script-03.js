function parImpar(){
  var a = parseInt(document.getElementById('valor01').value);
 
  /*if(a % 2 == 0){
    document.getElementById('demo').innerHTML = "É um número par.";
  }else{
    document.getElementById('demo').innerHTML = "É um número ímpar.";
    alert('É IMPAR SEU BURRO');
  } 
}*/

if(a % 2 == 1){
  document.getElementById('demo').innerHTML = "É um número ímpar.";
  }else{
    document.getElementById('demo').innerHTML = "É um número par.";
    alert('É PAR SEU BURRO');
  } 
}
