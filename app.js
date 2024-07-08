let numeroSecreto= 0;
let intentos=0;
let listaNumerosSorteados= [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
  return;
}

function verificarIntento() {
        let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
       if(numeroUsuario === numeroSecreto){
        asignarTextoElemento("p",`acertaste el numero en ${intentos} ${(intentos=== 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
       }else{
           if(numeroUsuario>numeroSecreto){
            asignarTextoElemento("p","el numero secreto es menor");
           }else{
            asignarTextoElemento("p","el numero secreto es mayor");

           }
           intentos++;
           limpearCaja();
       }
      
        return;
}
function limpearCaja(){
    let valorCaja= document.querySelector(" #valorUsuario");
    valorCaja.value= " ";
}

function generarNumeroSecreto(){
   let numeroGenerado =  Math.floor(Math.random()* numeroMaximo)+1;
   // si ya sorteamos todos los nums
   if(listaNumerosSorteados.length == numeroMaximo){
         asignarTextoElemento("p","Ya se sortearon todos los elementos posibles");

   }else{

   
   //si el num generado esta lista hacemos una condicion y si no hacemos otra
   if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
   }else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
 }
}
function condicionesIniciales(){
    asignarTextoElemento("h1","Juedo de nuemro secreto");
    asignarTextoElemento  ("p",`Indique un numero del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;

}
function reiniciarJuego(){
//limpear caja
limpearCaja();
//indicar mensaje de intentar numero
//generar num aleatorio
//inicializar intentos
condicionesIniciales();
//que no se pueda usar el boton de reinicio
document.querySelector("#reiniciar").setAttribute("disabled","true");


}

condicionesIniciales();











