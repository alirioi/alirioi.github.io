var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false,
    x: [],
    y: []
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false,
    x: 0,
    y: 0
};

var pollo = {
    url: "pollo.png",
    cargaOK: false,
    x: [],
    y: []
};

var min=0;
var max=7;
var m=60;
var cantidad = aleatorio(5,8);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);



function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen,0,0);        
    }
    
    if(vaca.cargaOK)
    {   
        for(var v=0; v<cantidad; v++)
        {
            var x= (aleatorio(min,max)*m);
            var y= (aleatorio(min,max)*m);
            vaca.x[v]=x;
            vaca.y[v]=y;
            papel.drawImage(vaca.imagen,x,y);
        }             
    }

    if(cerdo.cargaOK)
    {   
        x=aleatorio(min,max)*m;
        y=aleatorio(min,max)*m;
        cerdo.x=x;
        cerdo.y=y;
        papel.drawImage(cerdo.imagen,x,y);
               
    }

    if(pollo.cargaOK)
    {
        for(var p=0; p<cantidad; p++)
        {
            var x= (aleatorio(min,max)*m);
            var y= (aleatorio(min,max)*m);
            pollo.x[p]=x;
            pollo.y[p]=y;
            papel.drawImage(pollo.imagen,x,y);
        }
    }
}

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

function dibujarOtraVez()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen,0,0);        
    }

    if(vaca.cargaOK)
    {   
        for(var v=0; v<cantidad; v++)
        {
            papel.drawImage(vaca.imagen,vaca.x[v],vaca.y[v]);    
        }
        
    }

    if(pollo.cargaOK)
    {   
        for(var p=0; p<cantidad; p++)
        {
            papel.drawImage(pollo.imagen,pollo.x[p],pollo.y[p]);
        }        
    }
}

function moverCerdo(x,y)
{   
    papel.drawImage(cerdo.imagen,x,y);
}

document.addEventListener("keydown", moverTeclado);

function moverTeclado(evento)
{
    var mov = 10;
    switch (evento.keyCode)
    {
        case teclas.UP:            
            if(cerdo.y>-20)
            {
                dibujarOtraVez();
                cerdo.y = cerdo.y - mov;
                moverCerdo(cerdo.x,cerdo.y);                
            }      
        break;

        case teclas.DOWN:
            if(cerdo.y<440)
            {
                dibujarOtraVez();
                cerdo.y = cerdo.y + mov;
                moverCerdo(cerdo.x,cerdo.y);                
            }        
        break;

        case teclas.LEFT:
            if(cerdo.x >-10)
            {
                dibujarOtraVez();
                cerdo.x = cerdo.x - mov;
                moverCerdo(cerdo.x,cerdo.y);                
            }        
        break;

        case teclas.RIGHT:
            if(cerdo.x <430)
            {
                dibujarOtraVez();
                cerdo.x = cerdo.x + mov;
                moverCerdo(cerdo.x,cerdo.y);                
            }
        
        break;

        default:
    }
}