import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
//seleccionar el primer elemento con el atributo name 
const textarea = document.getElementsByName("user-input")[0];
const resetButton = document.getElementById("reset-button");
//wordCountListItem es una variable que se utiliza para acceder y manipular el elemento HTML <li>,
//Esto es útil cuando deseas realizar cambios en ese elemento específico, como actualizar su contenido.
const wordCount = document.querySelector('[data-testid="word-count"]');
const characterCount = document.querySelector('[data-testid="character-count"]');
const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]');
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberSum = document.querySelector('[data-testid="number-sum"]');
const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]');
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
  wordCount.textContent = `Palabras: ${numPalabras}`;
}  
textarea.addEventListener("input", function() {
// Obtiene el valor del textarea
  const texto = textarea.value;
  const count = analyzer.getCharacterCount(texto);
  contador.textContent = count;
  characterCount.textContent = `Caracteres: ${count}`;
});
textarea.addEventListener("input", function() {
  // Obtiene el valor del textarea
  const texto = textarea.value;
  // Muestra el resultado en el elemento contador
  const count = analyzer.getCharacterCountExcludingSpaces(texto);
  contador.textContent = count;
  // Actualiza el atributo data-testid del elemento <li> para pruebas
  characterNoSpacesCount.textContent = `Caracter sin espacios: ${count}`;
});

textarea.addEventListener("input", function() {
  // Obtiene el valor del textarea
  const texto = textarea.value;
  // Muestra el resultado en el elemento contador
  const count = analyzer.getNumberCount(texto);
  contador.textContent = count; 
  numberCount.textContent = `Números encontrados: ${count}`;
  //Invoca el metodo para contar numeros
  let sum = analyzer.getNumberSum(texto);
  numberSum.textContent = `Suma de Numeros:  ${sum}`;
  let averageWordLength = analyzer.getAverageWordLength(texto);
  wordLengthAverage.textContent = `Longitud media:  ${averageWordLength}`;

});
resetButton.addEventListener("click", function(){
  textarea.value = "";
  wordCount.textContent = `Palabras: 0`;
  characterCount.textContent = `Caracteres: 0`;
  characterNoSpacesCount.textContent = `Caracter sin espacios: 0`;
  numberCount.textContent = `Números encontrados: 0`;
  numberSum.textContent = `Suma de Numeros: 0`;
  wordLengthAverage.textContent = `Longitud media: 0`;

});

