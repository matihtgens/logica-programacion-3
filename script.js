/*
Instrucciones:

    Crear un programa en Javascript que realice lo siguiente:
        Debe solicitar al usuario un número por prompt o por input y guardarlo.
        Debe calcular el factorial del número recibido.
        Debe imprimir el resultado por el DOM de un archivo index.html que debes crear en el mismo directorio de tu proyecto.
        Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
    Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
        5
        120.
        6
        720.
        Entrada: 
        Salida:
        Entrada: 
        Salida: 
    Pruébalo con los números que se te ocurran.
    Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub.
    Colócalo en un repositorio llamado “logica-programacion-3”

Sugerencias:

    El factorial de un número es igual al producto de todos los números enteros positivos desde el 1 hasta dicho número.
        Ejemplo: 4! = 1 x 2 x 3 x 4 = 24.
    Recuerda convertir a number el valor solicitado por prompt y verificar que sea un número para evitar errores en tu programa.
    Recuerda que para mostrar mensajes por el DOM, debes crear un archivo HTML y enlazar tu script.
    Para ayudarte puedes desarrollar un algoritmo y el pseudocódigo.

*/

/*
* Importamos el módulo prompt-sync para probar prompt por consola antes de correr el programa en el index

* Previo a esta importacion hay que instalarlo con npm install prompt-sync

const prompt = require('prompt-sync')();

*/

function factorial(num) {
    if (num < 0) { 
        return -1;
    }
    else if (num === 0){
        return 1;
    }
    else {
        return (num * factorial(num - 1));
    }
}

/* 
* Prompt de prueba para solicitar un numero mientras lo implementaba en el index con DOM
const number = Number(prompt('Ingrese un numero: '));

if (number > 0){
    console.log(`El factorial del numero ${number}, es : ${factorial(number)}`);
}else if (number == 0){
    console.log(`El factorial del numero ${number}, es : 1`);
}else{
    console.log(`El factorial del numero ${number}, no es posible, ingrese un numero positivo`);
}
*/

// Función para manejar el evento de click en el botón calcular
document.getElementById('button').addEventListener('click', function() {
    const inputValue = document.getElementById('numberInput').value; // Obtengo el valor del input donde ingreso un numero
    const resultElement = document.getElementById('result'); // Obtengo el elemento para mostrar el resultado
    

    if (inputValue.trim() === '' || isNaN(inputValue) || Number(inputValue) < 0) {
        // Con trim borro los espacion en blanco del input y con Number verifico que sea un numero y que sea positivo , si se cumple cualquiera
        // de estas comparaciones, me dara mensaje de error y no se ejecutara la factorizacion.
        resultElement.textContent = `Por favor, ingrese un número positivo válido.`; 
    } else {
        const number = Number(inputValue); 
        if (number > 0) {
            resultElement.textContent = `El factorial del número ${number} es: ${factorial(number)}`; // Muestra el resultado
        } else if (number === 0) {
            resultElement.textContent = `El factorial del número ${number} es: 1`; // Caso especial para 0
        }
    }
});