import Juego from "./juego.js";

const codigo_imput = document.querySelector("#palabra-adivinar");
const form = document.querySelector("#Adivinar-form");
const div = document.querySelector("#resultado-div");
const jugar = new Juego();

const div2 = document.querySelector("#letras-div");
const div3 = document.querySelector("#letras-incorrectas-div")
const div4 = document.querySelector("#letras-no-existen-div")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const contar = jugar.contarLetras(codigo_imput.value);
    const palabraAdivinar = "arbol";
    const comparar = jugar.compararPalabra(palabraAdivinar,codigo_imput.value);
    div.innerHTML = "<p>" + "Cantidad de letras:" + contar + "</p>";
    
    ///Mostrar Letras correctas.
    div2.innerHTML = "<p>" + "Letras que estan en la palabra en la posición correcta: "+ jugar.comparaLetrasCorrectas(palabraAdivinar,codigo_imput.value) + "</p>";
    div3.innerHTML = "<p>" + "Letras que estan en la palabra pero en la posición incorrecta: " + jugar.comparaLetrasInCorrectas(palabraAdivinar,codigo_imput.value) + "</p>";
    div4.innerHTML = "<p>" + "Letras que NO estan en la palabra a adivinar: " + jugar.mostrarLetrasNoExisten(palabraAdivinar,codigo_imput.value) + "</p>";

    if(codigo_imput.value == palabraAdivinar){
        confirm("Ganaste");
    }else{
        confirm("Perdiste");
    }
}); 