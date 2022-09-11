//Se cargan las imagenes de cada billete
var imagenes = [];
imagenes[100]="100.png";
imagenes[50]="50.png";
imagenes[20]="20.png";
imagenes[10]="10.png";
imagenes[5]="5.png";
imagenes[1]="1.png";

//Se llena el cajero con todos los billetes
var caja = [];
var entregado = [];
caja.push(new Billete (100, 20));
caja.push(new Billete (50, 20));
caja.push(new Billete (20, 20));
caja.push(new Billete (10, 20));
caja.push(new Billete (5, 20));
caja.push(new Billete (1, 20));

var dinero = 0;
var div = 0;
var papeles = 0;
var dinerodecaja = 0;

var resultado = document.getElementById("resultado");
var extraer = document.getElementById("extraer");
var reset = document.getElementById("borrar");
var dinerototal = document.getElementById("dinerototal");
dineroCajero();
dineroTotal();
extraer.addEventListener("click", entregarDinero);
reset.addEventListener("click", borrar);