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

  botonCopiar.textContent = "Copiar";
  contenedorResultado.appendChild(botonCopiar);
  //NUEVO-----------

  botonCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(resultado.textContent)
      .then(() => {
        mostrarToast();// Mensaje opcional de confirmación
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles: ', err);
    });
   //NUEVO-----------  
  });
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

function mostrarToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000); // El toast se muestra durante 3 segundos
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




