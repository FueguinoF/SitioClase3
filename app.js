/*
//Ejercicio 1  
let dato = "Información"  //Lo hice super simple, no con distintos tipos de dato. Lo probe con varios pero dejé
let tipo = fun1(dato)       // ese solo.

function fun1(dato){
    let tipo2 = typeof(dato)
    return tipo2
}
console.log("1-) El tipo de dato de la variable es: ", tipo)

//Ejercicio 2 

let num1 = prompt("Ingrese el primer número: ") 
let num2 = prompt("Ingrese el segundo número: ")

let resta = funres(num1, num2)

function funres(num1, num2){
    let res = num1 - num2 //funciona porque no es una suma que concatenaría (por el tipo de ingreso del prompt)
    return res //Al ser una operacíon matemática ya entiende que el resultado es un numero y devuelve en ese tipo de variable
}
console.log("2-) El resultado es: ", resta)

*/

/*

//Ejercicio3
let var1 = prompt("Ingrese el primer valor: ")
let var2 = prompt("Ingrese el segundo valor: ")

let res = camb(var1, var2)

function camb(var1, var2){
    let aux  //variable auxiliar para poder hacer el intercambio sin perder valores
    aux = var1  //guardo en la auxiliar el valor de var1
    var1 = var2 //como ya esta guardada lo puedo pisar a var1 con el valor de var2
    var2 = aux  //y ahora traigo el viejo valor de var1 y lo guardo en var2 
    //console.log(var1, var2) //prueba para ver el intercambio
    return [var1, var2] //salida en un vector porque no se puede retornar mas de un valor de una funcion 
                        //no de manera simple porque pierde la referencia de a donde guardar dicho retorno
}
console.log("3-) El 1er valor ahora es: ", res[0]," y el 2do valor ahora es: ", res[1])
// Lo que esta dentro del corchete refiere a la posición o index dentro del vector

/*var1 = res[0] //variación
var2 = res[1]
console.log("3-) El 1er valor ahora es: ", var1," y el 2do valor ahora es: ", var2)*/
/*
//Ejercicio 4

let lado = prompt("Ingrese el lado del cuadrado: ")

cuad (lado) //no le metí mucha explicacion, le pasas el lado y haces 2 operaciones para cada 
            //operación requerida 
function cuad (lado){
    let perim = lado * 4
    let sup = lado * lado

    console.log("4-) El perimetro del cuadrado es: ", perim , " y su superficie es: ", sup)
    //Este console podria ir afuera de la función para ser mas prolijo y que solo calcule
}   //en ese caso hay que sacar los valores en un vector como el punto anterior

//Ejercicio 5

let temp = prompt("Ingrese la temperatura en F° para convertir a C°: ")
let temp2 = conv(temp)

function conv (temp){
    return (5/9) * (temp - 32) //ecuación o calculo para convertir de F° a C°
}

console.log("5-) La temperatura en grados Celsius es de: ", temp2 ," grados")

//Ejercicio 6

let num = prompt("Ingrese un numero no mayor a 10 para factorear: ")

while (num < 1 || num > 10 || isNaN(num)) { //valido el valor que sea mayor de 0 y de hasta 10 maximo para el 
    num = prompt("Error, el número debe ser mayor a 0 y menor o igual a 10, ingrese nuevo número: ") // número 
}                                                                               // ingresado y que sea numero. 
let fact = factor(num)

function factor(num){
    let nnum = 1
        for (let i = 1; i <= num; i++){ //ciclo para realizar la factorización
        nnum *= i //variable donde se va acumulando el resultado de las multiplicaciones continuas
        } 
        return nnum
}
console.log("6-) El factorial del numero ", num ," es: ", fact)  
*/

//Ejercicio 7

let palabra = prompt("Ingrese frase o palabra a analizar: ")
let palabra3 = palabra      //guardo la frase original para mostrar en la salida
palabra = palabra.replace(/ /g ,"")     //Limpio los espacios que pudiera haber en la frase original
let palabra2 = palabra.split("").reverse()//Lo copio en otra variable, la convierto en vector e invierto su orden

for (let i = 0; i <= palabra.length; i++){
    if (palabra[i] == palabra2[i]){ //comparo ambas cadenas y guardo el resultado de su 
        var palim = true            //coincidencia o no en la variable palim
    }
    else{
        palim = false //Si encuentra que no son iguales ya le pido que salga total no me importa seguir comparando
        break
    }    
}


if (palim) { //Informo resultado en base al valor de palim
    console.log("7-) El texto : '", palabra3 , "' es un palindromo")
}
else{
    console.log("7-) El texto : '", palabra3 , "' no es palindromo")
}

/*
//Ejercicio 8

let cadena = prompt("Ingrese una cadena de texto: ")
let cadamay = cadena.toUpperCase() //funcion para conversion a mayúsculas
let cadamin = cadena.toLowerCase() //y para minúsculas. Son funciones propias de JS

console.log("8-) La cadena en mayúsculas es: '",cadamay, "' y en minúsculas es: '",cadamin,"'")

//Ejercicio 9 

let nota = prompt("Ingrese la nota numérica para el alumno: ")

while(nota < 0 || nota > 10){ //valido nota numérica entre 0 y 10 
    nota = prompt("Error, la nota debe ser entre 0 y 10, intente de nuevo")
}

switch (true) { //analizo si es cierta o verdadera alguna de las siguientes condiciones e informo
    case nota > 0 && nota < 3:
        console.log("9-) Resultado: Muy deficiente")
        break
    case nota >= 3 && nota < 5:
        console.log("9-) Resultado: Insuficiente")
        break
    case nota >= 5  && nota < 6:
        console.log("9-) Resultado: Suficiente")
        break
    case nota >= 6 && nota < 7:
        console.log("9-) Resultado: Bien")
        break
    case nota >= 7  && nota < 9:
        console.log("9-) Resultado: Notable")
        break
    case nota >= 9 && nota <= 10:
        console.log("9-) Resultado: Sobresaliente")
        break

    default: console.log("no entro al switch") //esto es para que me diga en consola si no entró, lo use en
        break;                                  //como prueba mientras generaba el switch
}


//Ejercicio 10

let mes = prompt("Ingrese un numero entre 1 y 12 para el mes deseado: ")

while(mes < 1 || mes > 12){ //valido mes entre 1 y 12 
    mes = prompt("Error, el número del mes debe ser entre 1 y 12, intente de nuevo")
}

switch (true) {
    case mes == 1: //Mismo mensaje para los meses de 31 días
    case mes == 3:
    case mes == 5:
    case mes == 7:
    case mes == 8:
    case mes == 10:
    case mes == 12:
        console.log("10-) El mes elegido tiene 31 dias")
        break
    case mes == 4:  //Mismo mensaje para los meses de 30 dias
    case mes == 6:
    case mes == 9:
    case mes == 11:
        console.log("10-) El mes elegido tiene 30 días")
        break
    default: console.log("10-) El mes elegido tiene 28 dias") //mensaje para febrero
        break
}
// la variación mas completa de este ejercicio sería escribir para cada caso "el mes x (nombre mes) tiene x dias"

//Ejercicio 11

let pnum = prompt("Ingrese un numero del 1 al 10 para realizar la pirámide: ")

while(pnum < 1 || pnum > 10){ //valido número entre 1 y 10
    pnum = prompt("Error, el número debe ser entre 1 y 10, intente de nuevo")
}
console.log("11-) La pirámide es la siguiente: ")
for (let i = 1; i <= pnum; i++){ //generador de paso 
    var salida = "" //cadena vacia para generar la fila, importante para no generar una suma numerica 
    for (let j = 1; j < i + 1; j++){ //generador de fila con los numeros del 1 al paso
        salida = salida + j //al ser una cadena me permite concatenar el resultado que va tomando j al 
    }                       //avanzar por cada paso, asi me muestra la consecutividad y no una suma 
    console.log(salida)
}


//Ejercicio 12

let bultos = prompt("Ingrese la cantidad de bultos: ")
let bulxcaja = prompt("Ingrese la cantidad de bultos que entran por caja: ")

let dist = distribucion(bultos, bulxcaja)

function distribucion(bultos, bulxcaja) {
    let dist = Math.trunc(bultos / bulxcaja) //calculo cuantas cajas llenas, trunco la parte decimal
    let resto = bultos % bulxcaja //calculo el resto, los bultos que quedan sin llenar una caja
    return [dist, resto]
    
}

console.log("12-) La cantidad de cajas llenas de bultos es de: ", dist[0])
console.log("Y los bultos que sobran son: ", dist[1])


//Ejercicio 13
let fiesta = 100000 //seteo valor del auto 
let focuss = 120000
let codigo = prompt("Ingrese el codigo del auto a comprar: ")

while (codigo != "fiesta" && codigo != "focus"){ //valido codigo de auto, siempre que NO sea uno de ellos pide de 
    codigo = prompt("Error, el código es incorrecto, intente nuevamente. ") //nuevo 
}

if (codigo == "fiesta"){
    let dto = 5 * fiesta / 100 //calculo descuento
    console.log("13-) El valor del auto es de: $ ", fiesta, ", su descuento es del 5% y equivale a: $ ",dto,". El valor final es de : $ ", fiesta - dto)
}

if (codigo == "focus"){
    let dto = 10 * focuss / 100 //calculo descuento
    console.log("13-) El valor del auto es de: $ ", focuss , ", su descuento es del 10% y equivale a: $ ",dto,". El valor final es de : $ ", focuss - dto)
}

//Le metí mas comentarios al archivo para poder compartirlo y por sugerencias grupales en clase hay una mejora
//de la validación en el punto 6
*/