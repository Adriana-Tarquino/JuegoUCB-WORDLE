import Juego from "./juego";

const codigo_imput = document.querySelector("#palabra-adivinar");
const form = document.querySelector("#Adivinar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    div.innerHTML = "<p>" + palabraAdivinar + "</p>";
});
