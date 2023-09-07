import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
//seleccionar el primer elemento con el atributo name 
const textarea = document.getElementsByName("user-input")[0];
//wordCountListItem es una variable que se utiliza para acceder y manipular el elemento HTML <li>,
//Esto es útil cuando deseas realizar cambios en ese elemento específico, como actualizar su contenido.
const wordCountListItem = document.querySelector('[data-testid="word-count"]');
//Obtener una referencia a un  elemento <span> HTML con 'id' "contador" para modificar el contenido
const contador = document.getElementById('contador');
  // Agregar un evento de escucha para el evento 'input' en el textarea
textarea.addEventListener('input', actualizarContador);
function actualizarContador() {
  // Obtener el contenido del textarea
  const texto = textarea.value; 
  // Contar el número de palabras utilizando el método getWordCount
  const numPalabras = analyzer.getWordCount(texto);
  // Actualizar el contador dentro del <span>
  contador.textContent = numPalabras;
  // Actualizar el contenido del <li>
  wordCountListItem.textContent = `Recuento de palabras: ${numPalabras}`;
};


