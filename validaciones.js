const rut = document.getElementById('rut');
const nombre = document.getElementById("nombre");
const appaterno = document.getElementById("appaterno");
const apmaterno = document.getElementById("apmaterno");
const edad = document.getElementById("edad");
const genero = document.getElementById("genero");
const celular = document.getElementById("celular");
const carta = document.getElementById("carta");
var error = document.getElementById("error");
var mensajeError = [];

function validar(){
  if(rut.value.length > 10 || rut.value.length < 8){
    mensajeError.pop();
    mensajeError.push('rut inválido, escribir en formato 99999999-9');
    error.innerHTML = mensajeError.join(', ');
    console.log("No se respeta length");
  }
}