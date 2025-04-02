//Funcion Hora
function horario(hora) {

    if (hora >= 0 && hora <= 6) {
        return "Deje dormir";
    } else if (hora >= 6 && hora <= 11) {
        return "Buenos dias";
    } else if (hora >= 12 && hora <= 18) {
        return "Buenas tardes";
    } else if (hora >= 19 && hora <= 24){
        return "Buenas noches";
    } else {
        return "Usted no vive en este planeta";
    }
}

horario();
console.log(horario());

/*----------------------------------------------------------------------------*/
//Funcion Invitacion
function invitacion(nombre, apellido) {
    if (nombre && apellido) {
        return `Bienvenido señor ${nombre} ${apellido} su mesa está lista`;
      }  else if (apellido) {
                return `Su mesa está lista señor ${apellido}`
        }   else {
                return `Disculpe señor, usted no está invitado`;
        }
    }

invitacion();
console.log(invitacion("Mike", "Smith"));

/*----------------------------------------------------------------------------*/
//Clase Sandwich
class Sandwich {

    constructor(pan, ingredientes, queso) {
        this.pan = pan;
        this.ingredientes = ingredientes;
        this.queso = queso;
    }
    
    orden() {
        return `Su pan ${this.pan} con ${this.ingredientes} y queso ${this.queso} está listo`
    }
}

let Integral = new Sandwich("integral", "lechuga", "brie"),
    Extra = new Sandwich("con mantequilla", "carne", "de caballo");

console.log(Integral.orden());
console.log(Extra.orden());

/*----------------------------------------------------------------------------*/
//Orden Sandwich
let sandwich2 = {
    pan: "",
    ingredientes: "",
    queso: "",
}

function ordenes(pedido, nolist) {
    if (!pedido.pan || !pedido.ingredientes || !pedido.queso) {
        return `Lo siento, algo falta en su orden`
    } else if (nolist === true) {
        return `Su orden aún no está lista`
    } else {
        return `Su orden de ${pedido.pan} con ${pedido.ingredientes} y queso ${pedido.queso} está lista`
    }
}

let orden1 = ordenes({pan: "ligth", ingredientes: "tomates", queso: "parmesano"});
let orden2 = ordenes({pan: "extra", ingredientes: "ajo, pepinillos, tocino", queso: "brie"});
let orden3 = ordenes({pan: "", ingredientes: "", queso: ""})
let orden4 = ordenes({pan: "hamburguesa", ingredientes: "cebolla, piminetos, carne", queso: "cheddar"}, true)

console.log(orden1)
console.log(orden2)
console.log(orden3)
console.log(orden4)

/*----------------------------------------------------------------------------*/
// Funcion Buscar Palabra
function buscarPalabra(array, palabra) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === palabra) {
            return i
        }
    } return -1
}

const listaPalabras = ["Tengo", "Hambre", "Quiero", "Pizza"]
const buscaEstaPalabra = "tomate"

const encuentraPalabra = buscarPalabra(listaPalabras, buscaEstaPalabra);

if (encuentraPalabra !== -1) {
    console.log(`Su palabra es ${buscaEstaPalabra} y está en la posicion ${encuentraPalabra}`)
} else {
    console.log(`Su palabra no fue encontrada`)
}       

/*----------------------------------------------------------------------------*/
// Funcion Retornar Mayor
function retornarMayor(num1, num2) {
    if (num1 < num2) {
        return num2;
    } else {
        return num1;
    }
}

let retorno =  retornarMayor(2, 4);
console.log(retorno);

/*----------------------------------------------------------------------------*/
// Funcion Signo
function signo(num) {
    if (num < 0) {
        return "Negative"
    } else if (num > 0) {
        return "Positive"
    } return "Cero"
}

let resultado = signo(0)
console.log(resultado)


/*----------------------------------------------------------------------------*/
// Funcion Palindromo
function esUnPalindromo(palabra) {
    let invertida = ""
    for (let i = palabra.length -1; i >= 0; i--) {
        invertida += palabra[i];
    }
    if (palabra === invertida) {
        return true;
    }   return false;
}   

  let resultadoPalindromo = esUnPalindromo("sososos");
      resultadoPalindromo2 = esUnPalindromo("carrera");
  console.log(resultadoPalindromo)
  console.log(resultadoPalindromo2)

/*----------------------------------------------------------------------------*/
// Funcion Mayusculas
function mayusculas(string) {
   return string.toUpperCase();
}
let perro = mayusculas("perro mojado")
console.log(perro)

/*----------------------------------------------------------------------------*/

/* 1) Programa una función que cuente el número de caracteres de una cadena de texto
, pe. miFuncion("Hola Mundo") devolverá 10.

2) Programa una función que te devuelva el texto recortado según el
 número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

3) Programa una función que dada una String te devuelva un Array de 
textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

4) Programa una función que repita un texto X veces, pe. miFuncion('
Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */


// Funcion Contar Cantidad de Letras
function contarLetras(str) {
    if (typeof str !== 'string') {
        return "Por favor ingrese una cadena de strings"
    } else {
        for (let i = 0; i < str.length; i++) {
        if (i === str.length - 1) {
            return i + 1;
        }
    }
}
}
const RESULTADOCONTARLETRAS = contarLetras("que ganas de dormir");
console.log(`Su cadena tiene ${RESULTADOCONTARLETRAS} caracteres`);


// Funcion Recortar letras de texto
function recortarTexto(name) {
    let recorter = name.slice(0, name.length -1)
    return recorter;
}
const RECORTARTEXTO = recortarTexto("Este es un string recortado");
console.log(RECORTARTEXTO);


// Funcion convertir String a Array
function convertirString (text, caracter) {
    let arr = [];
    let convertir = text.split(caracter)
    for (let i = 0; i < convertir.length; i++) {
        arr.push(convertir[i]);
    } return arr;
}
const STRINGCONVERTIDO = convertirString("Hola que tal soy Pablo", " ");
console.log(STRINGCONVERTIDO);


// Funcion Repetir texto por cantidad de veces
function repetirTexto(text) {
    let repetir = text.repeat(4);
    return repetir;
}
const STRINGREPETIDO = repetirTexto(`Este es un texto repetido `);
console.log(STRINGREPETIDO);

/*----------------------------------------------------------------------------*/

/* 5) Programa una función que invierta las palabras de una cadena
 de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
 
6) Programa una función para contar el número de veces que se 
repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

7) Programa una función que valide si una palabra o frase dada,
 es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
 
8) Programa una función que elimine cierto patrón de caracteres
 de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */


// Funcion Invertir Cadena de Texto
function InvertirCadena(str) {
    if (str === "") {
        return "No has ingresado un texto"
    }
   let cadenaInvertida = str.split("").reverse().join("")
   return cadenaInvertida;

}
let resultadoCadenaInvertida = InvertirCadena("Hola mundo");
console.log(resultadoCadenaInvertida)


// Funcion Cantidad de veces repetida una palabra
function palabraRepetidaVeces(texto, palabra) {
  if (texto === "") {
    return "Por favor, ingrese un texto";
  }
  if (palabra === "") {
    return "Por favor ingrese la palabra que quiere buscar"
  }
  let contador = (texto.match(new RegExp(palabra, "g")) || []).length;
  if (contador === 0) {
    return "Su palabra no está repetida";
  } else {
    return `La palabra "${palabra}" se repite ${contador} veces`;
  }
}
let resultadoPalabraRepetida = palabraRepetidaVeces("Hola mundo adios mundo", "mundo");
console.log(resultadoPalabraRepetida);


//Funcion Palindromo con validaciones
function validacionPalindromo(palabra) {
    palabra = palabra.toLowerCase();
    if (palabra == null) {
        return "Por favor, ingrese una palabra";
    }
    let invertida = "";
    for (let i = palabra.length -1; i  >= 0; i--) {
        invertida += palabra[i];
    }

    if (palabra === "") {
    return `Por favor, ingrese una palabra`
    }   

    else if (palabra.length <= 2) {
        return "Por favor, ingrese una palabra mayor a dos letras"
    }

    else if (palabra === invertida) {
        return `${palabra} es efectivamente un palindromo`;
    } 

    else {
        return `${palabra} no es un palindromo`
    }
}
let resultadoValidacionPalindromo = validacionPalindromo("")
console.log(resultadoValidacionPalindromo)


//Funcion eliminar un patrón de caracteres
function eliminarPatronCaracteres(patron) {
    let reemplazar = patron.replace(/xyz/g, "");
    return reemplazar
}
let ReemplazarYEliminarPatronCaracteres = eliminarPatronCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
console.log(ReemplazarYEliminarPatronCaracteres)


/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no
 (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factoria
enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */



//Funcion Generar numero aleatorio con dos parametros
function numeroAleatorio(min, max) {
    if (typeof min !== "number" && typeof max !== "number") {
        return "Por favor, ingrese un número"
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min) + min);
    return `El número aleatorio es: ${result}`
  }
let resultadoNumeroAleatorio = numeroAleatorio(501, 676);
console.log(resultadoNumeroAleatorio);


// Funcion Verificar número capicua
function numeroCapicua(num) {
    if (typeof num !== "number") {
        return "Por favor, ingrese un número";
    }
    let capicua = '';
    for (let i = num.toString().length -1; i  >= 0; i--) {
        capicua += num.toString()[i];
    }
        if (num.toString().length <= 1) {
        return "Por favor, ingrese un número mayor a un dígito"
    }

        else if (num.toString() === capicua) {
        return `${num} es efectivamente capicua`;
    } 

        else {
        return `${num} no es capicua`
    }
}
let resultadoNumeroCapicua = numeroCapicua(2002)
console.log(resultadoNumeroCapicua)


// Funcion encontrar factorial de un número
function factorialNumero(num) {
    let result = 1;
    if (typeof num !== "number") {
        return "Por favor ingrese un número"
    }
    else if (num < 0) {
        return `El factorial no puede estar en números negativos`
    }   else if (num === 0 || num === 1) {
        return `El resultado es del factorial es 1`;
    } else {
        for (let i = 2; i <= num; i++) {
            result *= i; 
        }
    }   return `El resultado del factorial de ${num} es igual a ${result}`
}
let resultadoFactorialNumero = factorialNumero(5);
console.log(resultadoFactorialNumero)

/*----------------------------------------------------------------------------*/
function counterCharacters (str) {
  if (str == null || str == undefined || typeof str == 'function' || typeof str === 'symbol') return 0;
  
  if (typeof str === 'bigint') return str.toString().length;
  
  if (Array.isArray(str)) {
    return str = str.join("").length;
  }

  if (typeof str === 'object') {
    str = Object.values(str);
    return str.join("").length;
  }
  
  if (typeof str === 'number') {
    return str.toString().length;
  }
  
  if (typeof str === 'boolean') {
    return str.toString().length;
  }
  
  return str.length;
}

console.log("String", counter("12345"));
console.log("Array", counter(["12345", "12345", "12345"]));
console.log("Object", counter({ a: "test", b: "test", c: "test"}));
console.log("Number", counter(12345));
console.log("Boolean", counter(true));
console.log("Undefined", counter(undefined));
console.log("Null", counter(null));
console.log("Function", counter(function(){}));
console.log("Empty Array", counter([]));
console.log("Empty Object", counter({}));
console.log("Symbol", counter(Symbol()));
console.log("Maps", counter(new Map()));
console.log("Sets", counter(new Set()));
console.log("Bigint", counter(BigInt(123n)));

// Para practicar Javascript - Jhon Rivero
