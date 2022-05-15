import fs from "fs"
import Juego from "./juego.js"


describe("Adivinar Palabra", () => {
    const jugar = new Juego();
    beforeAll(() =>{
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    });
    /*it ("deberia mostrarme un bloque para ingresar la palabra a adivinar palabra", () =>{
        const palabraAdivinar = document.querySelector("#palabra-adivinar");
        palabraAdivinar.value ="arbol";

        const botonAdivinar = document.querySelector("#boton-adivinar");
        botonAdivinar.click();
        
        const resultado = document.querySelector("#resultado-div");
        botonAdivinar.click();
        
        expect(resultado.innerHTML).toEqual(" ");
    });*/

    it("deberia ingresar la palabra a Adivinar", () => {
        expect(jugar.IngresarPalabra("arbol")).toEqual("arbol");
    });
    
    it("deberia comparar la palabra ingresada con las palabra a adivinar", () => {
        expect(jugar.compararPalabra("arbol","arbol")).toEqual(true);
    });    
    
});