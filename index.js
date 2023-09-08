import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
//Seleccionar el primer elemento con el atributo name 
const textarea = document.getElementsByName("user-input")[0];
const resetButton = document.getElementById("reset-button");
//////Variables globales/////
//Seleccionar el primer elemento en el documento que tiene un atributo 'data-testid'
const characterCount = document.querySelector('[data-testid="character-count"]');
const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]');
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberSum = document.querySelector('[data-testid="number-sum"]');
const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]');
const wordCount = document.querySelector('[data-testid="word-count"]');
//Obtener una referencia a un  elemento <span> HTML con 'id' "contador" para modificar el contenido
const contador = document.getElementById('contador');
// Agregar un evento de escucha para el evento 'keyup' en el textarea
textarea.addEventListener('keyup', actualizarContador);
function actualizarContador() {
  // Obtener el contenido del textarea
  const texto = textarea.value; 
  // Contar el número de palabras utilizando el método getWordCount
  const numPalabras = analyzer.getWordCount(texto);
  //  actualiza el contenido de texto del elemento 
  contador.textContent = numPalabras;
  // actualiza el contenido de texto del elemento wordCount seguido de etiqueta y número de palabras 
  wordCount.textContent = `Palabras: ${numPalabras}`;
}  
textarea.addEventListener("input", function() {
  // Obtiene el valor del textarea
  const texto = textarea.value;
  //Contar el número de palabras utilizando el método getWordCount
  const count = analyzer.getCharacterCount(texto);
  //actualiza el contenido de texto del elemento
  contador.textContent = count;
  //actualiza el contenido de texto del elemento characterCount seguido de etiqueta y valor numérico
  characterCount.textContent = `Caracteres: ${count}`;
});
textarea.addEventListener("input", function() {
  // Obtiene el valor del textarea
  const texto = textarea.value;
  //Cuenta el número de palabras utilizando el método CharacterCountExcludingSpaces
  const count = analyzer.getCharacterCountExcludingSpaces(texto);
  //actualiza el contenido de texto del elemento
  contador.textContent = count;
  //actualiza el contenido de texto del elemento characterNoSpacesCount seguido de etiqueta y valor numérico
  characterNoSpacesCount.textContent = `Caracter sin espacios: ${count}`;
});

textarea.addEventListener("input", function() {
  // Obtiene el valor del textarea
  const texto = textarea.value;
  //Cuenta el número de palabras utilizando el método getNumberCount
  const count = analyzer.getNumberCount(texto);
  //actualiza el contenido de texto del elemento
  contador.textContent = count; 
  //actualiza el contenido de texto del elemento numberCount seguido de etiqueta y valor numérico
  numberCount.textContent = `Números encontrados: ${count}`;
  //Invoca el metodo para contar numeros
  let sum = analyzer.getNumberSum(texto);
  numberSum.textContent = `Suma de Numeros:  ${sum}`;
  const averageWordLength = analyzer.getAverageWordLength(texto);
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

