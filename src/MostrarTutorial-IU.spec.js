import fs from "fs"
import Juego from "./juego.js";

describe("Mostrar Tutorial IU", () => {
const jugar = new Juego();
 beforeAll(() =>{
   document.body.innerHTML = fs.readFileSync("index.html", "utf8");
 });

  it("deberia mostrar titulo juego WORDLE", () => {
   const titulo = document.querySelector("#titulo");
   expect(" ").toEqual(" ");
  });

  it("deberia redireccionar a la siguiente pagina de juego WORDLE al presionar el boton INICIAR", () => {
    const titulo = document.querySelector("#button-iniciar");
    expect(" ").toEqual(" ");
  });

  it("deberia mostrar la pagina de juego WORDLE", () => {
    const titulo = document.querySelector("#index2");
    expect(" ").toEqual(" ");
  });
 

  /*it("deberia mostrar como jugar el juego", () => {
   const tutorial = document.querySelector("#tutorial");
   expect(tutorial.innerHTML).toEqual("COMO JUGAR");
  });*/
 

});