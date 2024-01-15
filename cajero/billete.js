class Billete //Clase billete con todos los datos necesarios
{
   constructor(v,c)
   {
      this.valor = v;
      this.cantidad =c;
      this.imagen = new Image();
      this.imagen.src = imagenes[this.valor];
   }
}

function borrar() //funcion para borrar en pantalla los datos de transaccion anterior
{
   resultado.innerHTML = '';
   dinero = 0;
   div = 0;
   papeles = 0;
   entregado.splice(0,entregado.length);   
}

function dineroCajero() //funcion para calcular la cantidad de dinero que hay en el cajero
{
   for(var b of caja)
   {
      dinerodecaja += + (b.valor * b.cantidad);

   }
}

function dineroTotal() //funcion para actualizar y mostrar en pantalla el dinero que hay en el cajero
{
   dinerototal.innerHTML = "";
   dinerototal.innerHTML = "Cantidad de dinero disponible en el cajero: "+dinerodecaja+"$<br/>";
}

function entregarDinero() //funcion para calcular el dinero a entregar
{
   var t = document.getElementById("dinero");
   dinero = parseInt(t.value);
   console.log(dinero);
   
   if(dinero <= dinerodecaja)
   {
      dinerodecaja = dinerodecaja - dinero; //Resto el dinero a retirar al dinero total de la caja para ir vaciando el cajero conforme se hagan retiros

      //determino la cantidad de billetes de cada valor que se necesitan para completar de forma optima el dinero del retiro
      for(var bi of caja)
      {
         if(dinero>0)
         {
            div = Math.floor(dinero/bi.valor);
            if(div>bi.cantidad)
            {
               papeles = bi.cantidad;           
            }

            else
            {
               papeles=div;            
            }
         
            entregado.push(new Billete(bi.valor,papeles));
            dinero = dinero - (bi.valor*papeles);
            bi.cantidad = bi.cantidad - papeles;
            
            
         }
      }

      //se indica por pantalla el dinero retirado
      if(dinero<=0)
      {
         resultado.innerHTML ="Usted retiro: <br/>";
         for(var e of entregado)
         {
            if(e.cantidad>0)
            {
               resultado.innerHTML += e.cantidad + " x <br/ ><img src=" + e.imagen.src + " /><br/><br/>";
            }
         }
      }
      //se indica por pantalla que no se puedo realizar el retiro por falta de billetes de cierto valor
      else
      {
         resultado.innerHTML = "No puedo darte esa cantidad exacta por falta de billetes";
         dinerodecaja = dinerodecaja + dinero; //Se repone el dinero al total de dinero en el cajero por no poder realizar el retiro
      }
   }

   //se indica por pantalla que no se puedo realizar el retiro por falta de dinero en el cajero
   else
   {
      resultado.innerHTML = "No puedo darte esa cantidad por falta de dinero.";
   }

   //Actualizo la cantidad de dinero del cajero
   dineroTotal();
}