import fs from "fs"
import Juego from "./juego.js"


describe("Adivinar Palabra", () => {
    const jugar = new Juego();
    beforeAll(() =>{
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    });
     it("---Ingresar la palabra--- ", () => {
        expect(jugar.IngresarPalabra("arbol")).toEqual("arbol");
    });
    
    it("---Comparar la palabra ingresada con las palabra a adivinar---", () => {
        expect(jugar.compararPalabra("arbol","arbol")).toEqual(true);
    });    

    it("---Comparar la palabra ingresada con las palabra a adivinar y retornar false---", () => {
        expect(jugar.compararPalabra("arbol","ramas")).toEqual(false);
    });    
});
