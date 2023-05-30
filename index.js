let numero = 0;
let cuanto = 1;

function aumentarNumero() {
    numero = numero + cuanto;
    document.getElementById("numero").innerHTML = numero;
}

function restarNumero() {
  numero = numero - cuanto;
  document.getElementById("numero").innerHTML = numero;
}

function reiniciarNumero() {
  numero=0;
  document.getElementById("numero").innerHTML = numero;
}

function incrementarPorCuanto() {
  cuanto++;
  document.getElementById("porcuanto").innerHTML = `x ${cuanto}`;
}

function decrementarPorCuanto() {
  cuanto--;
  document.getElementById("porcuanto").innerHTML = `x ${cuanto}`;
}