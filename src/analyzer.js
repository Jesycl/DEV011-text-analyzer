const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    // Dividir el texto en palabras usando expresiones regulares y filtrar espacios vacíos
    const words = text.split(/\s+/).filter(word => word !== '');
    // Retornar el recuento de palabras
    return words.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const characterCount = text.length;
    return characterCount; 
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const eliminarSignos = text.replace(/[^\w\s]|_/g, '').replace(/\s+/g, '');
    const textoSinEspaciosPuntuacion = eliminarSignos.length;
    return textoSinEspaciosPuntuacion;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numerosEncontrados = text.match(/\b\d+(\.\d+)?\b/g);
    return numerosEncontrados ? numerosEncontrados.length : 0;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    let sum = 0;

    if(numbers !== null){

      for(let i = 0; i < numbers.length; i++){
        sum += Number(numbers[i]);
      }
    }
    return sum;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words= text.split(" ");
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);
    const averageLength = totalLength / words.length;
    return Number(averageLength.toFixed(2));
  },
};

export default analyzer;
    
    

