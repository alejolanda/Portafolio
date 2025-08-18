let HoraDelDesafio = document.querySelector('h1');
HoraDelDesafio.innerHTML = 'Hora del Desafio';

function AccionFunccion () {
    console.log ('El botón fue clicado');
    alert ('El botón fue clicado');
}


function ciudadDeBrasil () {
    let ciudad  = prompt('Dime una ciudad de Brasil');
    alert (`Estuve en ${ciudad} y me acordé de ti`);
}

function mostrarAlerta (){
    alert ('Yo I Love JS');
}

function suma (){
    let num1 = parseInt (prompt ('Dame un Numero'));
    let num2 = parseInt (prompt ('Dame otro numero'));
    let suma = num1 + num2;
    alert (`El Resultado de la suma de ${num1} y ${num2} es: ${suma} `);
}