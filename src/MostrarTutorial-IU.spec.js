import fs from "fs"


describe("Mostrar Tutorial IU", () => {
 beforeAll(() =>{
   document.body.innerHTML = fs.readFileSync("index.html", "utf8");
 });

  /*it("deberia mostrar titulo juego WORDLE", () => {
   const titulo = document.querySelector("#titulo");
   expect(titulo.innerHTML).toEqual("WORDLE");
  });

  it("deberia mostrar como jugar el juego", () => {
   const tutorial = document.querySelector("#tutorial");
   expect(tutorial.innerHTML).toEqual("COMO JUGAR");
  });*/

  

});