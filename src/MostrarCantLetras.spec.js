import fs from "fs"
import Juego from "./juego.js"


describe("Adivinar Palabra", () => {
    const jugar = new Juego();
    beforeAll(() =>{
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    });
    it("deberia devolver la cantidad de letras de una palabra", () => {
        expect(jugar.contarLetras("arbol")).toEqual(5);
    });    
});