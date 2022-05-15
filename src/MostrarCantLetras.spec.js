import fs from "fs"
import Juego from "./juego.js"


describe("Adivinar Palabra", () => {
    const jugar = new Juego();
    beforeAll(() =>{
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    });
    /*it ("deberia mostrarme la cant de letras de la palabra", () =>{
        const palabraAdivinar = document.querySelector("#palabra-adivinar");
        palabraAdivinar.value ="arbol";

    });*/

    it("deberia devolver la cantidad de letras de una palabra", () => {
        expect(jugar.contarLetras("arbol")).toEqual(5);
    });
    
    
});