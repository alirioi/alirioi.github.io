var g_mercurio = 3.7;
var g_venus = 8.87;
var g_saturno = 10.4;
var g_urano = 8.7;
var g_neptuno = 11.15;
var g_pluton = 0.6;
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var g_luna = 1.62;
var peso_final;
var nombre;


const guardarDatos = () =>
{
  let peso = parseInt(document.getElementById("textoPeso").value);
  let planeta = parseInt(document.getElementById("planetaId").value);
  console.log(peso);


  switch (planeta)
  {
    case 1:
      peso_final = peso * g_mercurio / g_tierra;
      nombre = "Mercurio";
    break;

    case 2:
      peso_final = peso * g_venus / g_tierra;
      nombre = "Venus";
    break;

    case 3:
      peso_final = peso * g_luna / g_tierra;
      nombre = "la Luna";
    break;

    case 4:
      peso_final = peso * g_marte / g_tierra;
      nombre = "Marte";
    break;

    case 5:
      peso_final = peso * g_jupiter / g_tierra;
      nombre = "Jupiter";
    break;

    case 6:
      peso_final = peso * g_saturno / g_tierra;
      nombre = "Saturno";
    break;

    case 7:
      peso_final = peso * g_urano / g_tierra;
      nombre = "Urano";
    break;

    case 8:
      peso_final = peso * g_neptuno / g_tierra;
      nombre = "Neptuno";
    break;

    case 9:
      peso_final = peso * g_pluton / g_tierra;
      nombre = "Pluton";
    break;

    default:
    document.getElementById("resultadoPeso").innerHTML="<center><strong><br><br>¡ERROR!</strong> elija una opcion valida. </center>";
  }


peso_final = parseFloat(peso_final).toFixed(2);

document.getElementById("resultadoPeso").innerHTML="<center>Tu <b>peso</b> en <strong> " + nombre + "</strong> es: <b>"+ peso_final + " kg.</b></b></center>";
}
