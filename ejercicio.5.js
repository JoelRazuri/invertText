/*
    Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/


const revertirTexto = (text="") => (!text)
    ?console.warn("Debe ingresar una cadena de texto")
    :console.info(`La cadena de texto ingresada es:${text}. La cadena invertida es: ${text.split("").reverse().join("")}`);


// Tambien se puede resolver con un for e ir concatenando en un nuevo string el texto invertido

const revertirTexto2 = (text="") => {
    if (!text) return console.warn("Debe ingresar una cadena de texto");

    let textoInvertido = ""

    for (let i=(text.length-1); i>=0; i--){
        textoInvertido += text[i];
    }

    return console.info(`La cadena de texto ingresada es:${text}. La cadena invertida es: ${textoInvertido}`);

}



console.info("EJERCICIO 5");
console.info("Usando métodos de los strings")
revertirTexto();
revertirTexto("Hola Mundo");
console.info("Usando ciclo for")
revertirTexto2();
revertirTexto2("hola");