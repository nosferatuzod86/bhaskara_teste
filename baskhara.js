var a = 1;
var b = 12;
var c = -13;

//cálculo de Delta
var delta = ((b ** 2)-4 * a * c);

//calculo de x1
if (a != 0) {
    var x1 = ((-b + Math.sqrt(delta))/(2*a))
} else {
    console.log(`Não foi possível efetuar a equação. Entre com um número diferente de zero na variável A`)
}

//calculo de x2
if (a != 0) {
    var x2 = ((-b - Math.sqrt(delta))/(2*a))
} else {
    console.log(`Não foi possível efetuar a equação. Entre com um número diferente de zero na variável A`)
}

//var x = Math.sqrt(aux)

console.log(`O x1 é: ${x1}`)

//var x2 = ((-b - Math.sqrt(delta))/(2*a))

console.log(`O x2 é: ${x2}`)