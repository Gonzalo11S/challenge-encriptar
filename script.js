function encriptar(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  }

function desencriptar(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  }

function encriptarTexto() {
  ocultarResultado();
  const texto = inputTexto.value;
  const textoEncriptado = encriptar(texto); 
  resultado.textContent = textoEncriptado; 
  //NUEVO-----------
  botonCopiar.textContent = "Copiar";
  contenedorResultado.appendChild(botonCopiar);


  //--
  }

function desencriptarTexto() {
  const texto = inputTexto.value;
  const textoEncriptado = desencriptar(texto); 
  resultado.textContent = textoEncriptado; 
  }  

function ocultarResultado() {
  imagenResultado.style.display = 'none';
  textoResultado.style.display = 'none';
}

  
const inputTexto = document.getElementById('principal_texto');
const resultado = document.getElementById('resultado_texto');
const botonEncriptar = document.getElementById('boton_encriptar');
const botonDesencriptar = document.getElementById('boton_desencriptar');

const imagenResultado = document.getElementById('resultado_imagen');
const textoResultado = document.getElementById('resultado_info');

const contenedorResultado = document.querySelector(".resultado_contenedor");
const botonCopiar = document.createElement('button');

botonCopiar.classList.add('mi-boton-estilizado'); 

botonEncriptar.addEventListener('click', encriptarTexto);
botonDesencriptar.addEventListener('click', desencriptarTexto);




