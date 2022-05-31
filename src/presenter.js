import Juego from "./juego.js";
// Conexion a la base de datos
// require("./dataBase")
// fin de la conexion de la base de datos

const palabra_imput = document.querySelector("#palabra-adivinar");
const form = document.querySelector("#Adivinar-form");
const div = document.querySelector("#resultado-div");
const jugar = new Juego();

const div2 = document.querySelector("#letras-div");
const div3 = document.querySelector("#letras-incorrectas-div");
const div4 = document.querySelector("#letras-no-existen-div");
const divIntentos = document.querySelector("#intentos-div");
const divMensaje = document.querySelector("#mensaje-div");


divIntentos.innerHTML = "<h1>" + jugar.intentoTotal +"</h1>";
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const palabraAdivinar = "arbol";
    const mensaje = jugar.ValidarJugabilidad(palabraAdivinar,palabra_imput.value);
    divMensaje.innerHTML = mensaje;
    divIntentos.innerHTML = "<h1>" +  jugar.intentoTotal +"</h1>";
    //div.innerHTML =  "La palabra es " + palabraAdivinar ;
    div2.innerHTML = "Letras que estan en la palabra en la posición correcta: "+ jugar.comparaLetrasCorrectas(palabraAdivinar,palabra_imput.value) ;
    div3.innerHTML ="Letras que estan en la palabra pero en la posición incorrecta: " + jugar.comparaLetrasInCorrectas(palabraAdivinar,palabra_imput.value) ;
    div4.innerHTML ="Letras que NO estan en la palabra a adivinar: " + jugar.mostrarLetrasNoExisten(palabraAdivinar,palabra_imput.value) ;
    
    if(jugar.intentoTotal == 0){
        alert(jugar.TerminarJuego(jugar.ValidarJugabilidad(palabraAdivinar,palabra_imput.value)));
    }
}); 