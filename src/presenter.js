import Juego from "./juego.js";
// Index:
// const selector = document.getElementById("seleccionCategoria").value;
// Index 2;
const palabra_imput = document.querySelector("#palabra-adivinar");
const form = document.querySelector("#Adivinar-form");
const div = document.querySelector("#resultado-div");
const jugar = new Juego();
const div2 = document.querySelector("#letras-div");
const div3 = document.querySelector("#letras-incorrectas-div");
const div4 = document.querySelector("#letras-no-existen-div");
const divIntentos = document.querySelector("#intentos-div");
divIntentos.innerHTML = "<h1>" + jugar.intentoTotal +"</h1>";
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const palabraAdivinar = jugar.palabrasAleatoriaCate1();
    if(jugar.intentoTotal <= 0){
        alert(jugar.TerminarJuego(jugar.ValidarJugabilidad(palabraAdivinar,palabra_imput.value)));
        div.innerHTML = "<h1>" + "La palabra es " +  palabraAdivinar + "</h1>";
    }
    else {
        alert(jugar.ValidarJugabilidad(palabraAdivinar, palabra_imput.value))
        divIntentos.innerHTML = "<h1>" +  jugar.intentoTotal +"</h1>";
    }
    
    const palabra2 = palabra_imput.value;
    const correctas =jugar.comparaLetrasCorrectas(palabraAdivinar,palabra2) ;
    const incorrectas = jugar.comparaLetrasInCorrectas(palabraAdivinar,palabra2) ;
    const noEstanPalabra = jugar.mostrarLetrasNoExisten(palabraAdivinar,palabra2) ;
    div2.innerHTML = correctas + "," + div2.innerHTML;
    div3.innerHTML = incorrectas + "," + div3.innerHTML;
    div4.innerHTML =noEstanPalabra + "," + div4.innerHTML;
   
    /*if(jugar.intentoTotal == 0){
        alert(jugar.TerminarJuego(jugar.ValidarJugabilidad(palabraAdivinar,palabra_imput.value)));
        div.innerHTML = "<h1>" + "La palabra es " +  palabraAdivinar + "</h1>";
    }
    else {
        alert(jugar.ValidarJugabilidad(palabraAdivinar, palabra_imput.value))
    }*/
});