import cipher from './cipher.js';

//console.log(cipher.encode(70, "DANIELA"));

const userName = document.getElementById('userName');
const btn1 = document.getElementById('btn1');
const saludo = document.getElementById('saludo');

function showOptions () {
  saludo.innerText = 'Hola ' + userName.value + ' que quieres hacer hoy?';
  document.getElementById("btnCifrar").style.display = 'block';
  document.getElementById("btnDescifrar").style.display = 'block';
}

function btnCifrar() {
  document.getElementById("root").style.display = 'none';
  document.getElementById("cifrar").style.display = 'block';
}

function btnDescifrar() {
  document.getElementById("root").style.display = 'none';
  document.getElementById("descifrar").style.display = 'block';
}

function cifrar() {
  const positions = document.getElementById("posicionesCifrar");
  const message = document.getElementById("msgEncode");
  const msgEncode = cipher.encode(positions.value, message.value);
  const msgCiphered = document.getElementById("msgCiphered");
  msgCiphered.innerText = msgEncode;
}

function descifrar () {
  const positions = document.getElementById("posDecodificar");
  const message = document.getElementById("msgToDecode");
  const msgToDecode = cipher.decode(positions.value, message.value);
  const msgDecode = document.getElementById("msgDecoded");
  msgDecode.innerText = msgToDecode;
}

function volverInicio () {
  location.reload();
}
    
btn1.addEventListener('click', showOptions);
document.getElementById("btnCifrar").addEventListener('click', btnCifrar);
document.getElementById("btnDescifrar").addEventListener('click', btnDescifrar);
document.getElementById("codificarMensaje").addEventListener('click', cifrar);
document.getElementById("decodificarMensaje").addEventListener("click", descifrar);
document.getElementById("volverInicio1").addEventListener("click", volverInicio);
document.getElementById("volverInicio2").addEventListener("click", volverInicio);