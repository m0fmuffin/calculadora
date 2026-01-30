let pantalla = document.getElementById("pantalla");
let botonesNumero = document.querySelectorAll(".btnNumero");
let botonesOperacion = document.querySelectorAll(".btnOperador");
let botonIgual = document.getElementById("igual");
let botonLimpiar = document.getElementById("limpiar");

let primerNumero = "";
let operacion = "";
let segundoNumero = "";

botonesNumero.forEach(function(boton) {
    boton.addEventListener("click", function() {
        pantalla.value += boton.textContent;
    });
});

botonesOperacion.forEach(function(boton) {
    boton.addEventListener("click", function() {
        primerNumero = pantalla.value;
        operacion = boton.textContent;
        pantalla.value = "";
    });
});

botonIgual.addEventListener("click", function() {
    segundoNumero = pantalla.value;

    let resultado;

    let num1 = parseFloat(primerNumero);
    let num2 = parseFloat(segundoNumero);

    switch(operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default: resultado = "Error";    
    }

    console.log(primerNumero, operacion, segundoNumero);
    console.log(resultado);


    pantalla.value = resultado;
});

botonLimpiar.addEventListener("click", function() {
    pantalla.value = "";
    primerNumero = "";
    segundoNumero = "";
    operacion = "";
});




