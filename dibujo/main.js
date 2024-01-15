var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousemove", dibujarRaton);

const botonLimpiar = document.getElementById("reset");
const botonBorrar = document.getElementById("borrador");

var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var x=cuadro.width/2;
var y=cuadro.height/2;
var colorcito = document.getElementById("colorId");
var grosor = document.getElementById("grosorId");
let xAnterior = 0, yAnterior = 0, xActual = 0, yActual = 0;
const obtenerXReal = (clientX) => clientX - cuadro.getBoundingClientRect().left;
const obtenerYReal = (clientY) => clientY - cuadro.getBoundingClientRect().top;

botonLimpiar.addEventListener("click", limpiarCanvas);
botonBorrar.addEventListener("click", borrador);
dibujarLinea(colorcito, 3,x-1,y-1,x+1,y+1,papel);


function dibujarLinea(color, grosor, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.strokeStyle = color;
  lienzo.lineWidth = grosor;
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{


  var movimiento = 10;
  
  switch (evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito.value, grosor.value, x, y, x, y-movimiento, papel);
      y = y - movimiento;
    break;

    case teclas.DOWN:
      dibujarLinea(colorcito.value, grosor.value, x, y, x, y+movimiento, papel);
      y = y + movimiento;
    break;

    case teclas.LEFT:
      dibujarLinea(colorcito.value, grosor.value, x, y, x-movimiento, y, papel);
      x = x - movimiento;
    break;

    case teclas.RIGHT:
      dibujarLinea(colorcito.value, grosor.value, x, y, x+movimiento, y, papel);
      x = x + movimiento;
    break;

    default:
  }  
}

function dibujarRaton(evento)
{
  xAnterior=xActual;
  yAnterior=yActual;
  xActual = obtenerXReal(evento.clientX);
  yActual = obtenerYReal(evento.clientY);

  if(evento.buttons == 1)
  {
    dibujarLinea(colorcito.value, grosor.value,xAnterior, yAnterior , xActual, yActual, papel);
  }
}

function limpiarCanvas() //funcion para limpiar el canvas con clearRect
{
  papel.clearRect(0, 0 ,cuadro.width, cuadro.height);
  x=cuadro.width/2;
  y=cuadro.height/2;
  dibujarLinea("black", 3 ,x-1,y-1,x+1,y+1,papel);
}

function borrador()
{
  colorcito.value="#FFFFFF"
}