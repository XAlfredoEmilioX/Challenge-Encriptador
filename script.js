var botonEncriptar=document.querySelector(".btn-encriptar");
var botonDesencriptar=document.querySelector(".btn-desencriptar");
var imagen=document.querySelector(".contenedor-img");
var contenedor=document.querySelector(".contenedor-parrafo");
var resultado=document.querySelector(".texto-resultado");

botonEncriptar.onclick=encriptar;
botonDesencriptar.onclick=desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto=recuperarTexto();
    resultado.textContent=encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto=recuperarTexto();
    resultado.textContent=desencriptarTexto(cajatexto);
}
function recuperarTexto(){
    var cajatexto=document.querySelector(".cajatexto");
    return cajatexto.value
}
function ocultarAdelante(){
    imagen.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}
function encriptarTexto(mensaje){
    var texto=mensaje;
    var textFinal="";

    for (var i= 0; i< texto.length; i++) {
        if (texto[i]=="a") {
            textFinal=textFinal+"ai"            
        }
        else if (texto[i]=="e") {
            textFinal=textFinal+"enter"            
        }
        else if (texto[i]=="i") {
            textFinal=textFinal+"imes"            
        }
        else if (texto[i]=="o") {
            textFinal=textFinal+"ober"            
        }
        else if (texto[i]=="u") {
            textFinal=textFinal+"ufat"            
        }
        else{
            textFinal=textFinal+texto[i]
        }
        
    }
    return textFinal;
}
function desencriptarTexto(mensaje){
    var texto=mensaje;
    var textFinal="";

    for (var i= 0; i< texto.length; i++) {
        if (texto[i]=="a") {
            textFinal=textFinal+"a"
            i=i+1;            
        }
        else if (texto[i]=="e") {
            textFinal=textFinal+"e"
            i=i+4;            
        }
        else if (texto[i]=="i") {
            textFinal=textFinal+"i"
            i=i+3;            
        }
        else if (texto[i]=="o") {
            textFinal=textFinal+"o"
            i=i+3;            
        }
        else if (texto[i]=="u") {
            textFinal=textFinal+"u"
            i=i+3;            
        }
        else{
            textFinal=textFinal+texto[i]
        }
        
    }
    return textFinal;
}
const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click",copiar=()=>{
    var contenido =document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
})