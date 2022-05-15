import Juego from "./juego.js";

const codigo_imput = document.querySelector("#palabra-adivinar");
const form = document.querySelector("#Adivinar-form");
const div = document.querySelector("#resultado-div");
const jugar = new Juego();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const contar = jugar.contarLetras(codigo_imput.value);
    const comparar = jugar.compararPalabra(codigo_imput.value,palabra-adivinar_imput.value);
    div.innerHTML = "<p>" + "Cantidad de letras:" + contar + comparar + "</p>";
 
}); 
