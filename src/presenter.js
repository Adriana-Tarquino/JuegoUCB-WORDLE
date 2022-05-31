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
const divpistas = document.querySelector("#pistas-div");
const form2 = document.querySelector("#pistas-form");
const pistas = "";
divIntentos.innerHTML = "<h1>" + jugar.intentoTotal +"</h1>";
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const palabraAdivinar = "arbol";
    const mensaje = jugar.ValidarJugabilidad(palabraAdivinar,palabra_imput.value);
    divMensaje.innerHTML = mensaje;
    divIntentos.innerHTML = "<h1>" +  jugar.intentoTotal +"</h1>";
    //div.innerHTML =  "La palabra es " + palabraAdivinar ;
    const palabra2 = palabra_imput.value;
    const correctas =jugar.comparaLetrasCorrectas(palabraAdivinar,palabra2) ;
    const incorrectas = jugar.comparaLetrasInCorrectas(palabraAdivinar,palabra2) ;
    const noEstanPalabra = jugar.mostrarLetrasNoExisten(palabraAdivinar,palabra2) ;
    div2.innerHTML = "Letras que estan en la palabra en la posición correcta: "+ correctas;
    div3.innerHTML ="Letras que estan en la palabra pero en la posición incorrecta: " + incorrectas;
    div4.innerHTML ="Letras que NO estan en la palabra a adivinar: " + noEstanPalabra;
   
    if(jugar.intentoTotal == 0){
        alert(jugar.TerminarJuego(jugar.ValidarJugabilidad(palabraAdivinar,palabra_imput.value)));
    }
    //pistas = jugar.guardarPistas(correctas, incorrectas, noEstanPalabra);
    //divpistas.innerHTML = pista;
}); 

/*form2.addEventListener("submit", (event) => {
    event.preventDefault();
    //const pistas = jugar.guardarPistas(palabraAdivinar,palabra2);
    //divpistas.innerHTML = pistas;
});*/