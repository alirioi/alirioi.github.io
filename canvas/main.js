var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("b_inicio");
const botonBorrar = document.getElementById("reset");
boton.addEventListener("click", dibujoPorClick);
texto.addEventListener("keyup", enter);
botonBorrar.addEventListener("click", limpiarCanvas);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var x, y;
  var i = 0;
  var espacio = ancho/lineas;

  for(i=0; i <= lineas; i++)
  {
    y=espacio*i;
    x=espacio*(i+1);
    dibujarLinea("grey", 0, x, y, ancho); //izquierda abajo
    dibujarLinea("green", x, 0, ancho, y); //derecha arriba
  }


  for(i=0; i <= lineas; i++)
  {
    x=espacio*i;
    dibujarLinea("blue", 0, y, x, 0);
    dibujarLinea("red", ancho, x, y, ancho);
    y=y-espacio;
  }
  document.getElementById("titulo_dibujo").innerHTML="<strong>Este es tu dibujo<br></strong>";
}

function enter(evento) //funcion para guardar info de cuadro de texto con boton enter
{
  if (evento.keyCode == 13)
  {
    dibujoPorClick();
  }
}

function limpiarCanvas() //funcion para limpiar el canvas con clearRect
{
  lienzo.clearRect(0, 0 ,d.width, d.height);
  document.getElementById("titulo_dibujo").innerHTML="";
}
