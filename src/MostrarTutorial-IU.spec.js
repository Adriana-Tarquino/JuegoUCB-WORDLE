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

  /*it("deberia mostrar como jugar el juego", () => {
   const tutorial = document.querySelector("#tutorial");
   expect(tutorial.innerHTML).toEqual("COMO JUGAR");
  });*/
 

});