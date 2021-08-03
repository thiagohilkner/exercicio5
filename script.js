function myFunction()
{
var x;

var valor1=prompt("Digite um número");
var valor2=prompt("Digite outro número");

if (valor1!=null && valor2!=null)
  {
  x=valor1 * valor2;
  document.getElementById("demo").innerHTML=x;
  } 
}