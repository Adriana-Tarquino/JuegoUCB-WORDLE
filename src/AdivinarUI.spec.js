import fs from "fs"

describe("Adivinar Palabra", () => {
    beforeAll(() =>{
    document.body.innerHTML = fs.readFileSync("index2.html", "utf8");
    require("./presenter.js");
    });

    it("Deberia mostrar el titulo en la segunda pagina", () => {
        const resultado = document.querySelector("#titulo");
        expect(resultado.innerHTML).toEqual("---WORDLE---");
    }); 
    it("Deberia devolver la palabra correcta despues de que se ingrese un palabra incorrecta", () => {
        const palabraAdivinar = document.querySelector("#palabra-adivinar");
        palabraAdivinar.value = "autos";
    
        const botonAdivinar = document.querySelector("#boton-adivinar");
        botonAdivinar.click();
        const resultado = document.querySelector("#resultado-div");
        //expect(resultado.innerHTML).toEqual("La palabra es arbol");
    });    

});