import Juego from "./juego.js"

describe("---Letras que estan en la posicion correcta----",() =>{
    const jugar = new Juego();
    it("Comprobamos si la primiera letra de la palabra no es correcta", () => {
      expect(jugar.comparaLetrasCorrectas("autor", "casas")).toEqual("");
    });
    it("Comprobamos si la primiera letra de la palabra es correcta", () => {
        expect(jugar.comparaLetrasCorrectas("autos", "avion")).toEqual("ao");
    });
    it("Comprobamos si las dos primeras letras son correctas a la palabra adivinar", () => {
        expect(jugar.comparaLetrasCorrectas("autos", "autin")).toEqual("aut");
    });
    it("Comprobamos si las toda la palabra coinciden y devuelve solo las correctas", () => {
        expect(jugar.comparaLetrasCorrectas("autos", "auras")).toEqual("aus");
    });
    it("Comprobamos si las toda la palabra coinciden y devuelve solo las correctas y si no son correectas devuelve vacio", () => {
        expect(jugar.comparaLetrasCorrectas("autos", "cazar")).toEqual("");
    });
});

describe("---Letras que estan en la posicion incorrecta----",() =>{
    const jugar = new Juego();
    it("Comprobamos si la primera  letra de la palabra es correcta pero en una posicion incorrecta", () => {
      expect(jugar.comparaLetrasInCorrectas("sol", "liz")).toEqual("l");
    });
    it("Comprobamos si la primera  letra de la palabra es correcta pero en una posicion incorrecta", () => {
        expect(jugar.comparaLetrasInCorrectas("piel", "lupa")).toEqual("pl");
      });
    it("Comprobamos si las letra esta en una posicion incorrecta de la palabra", () => {
        expect(jugar.comparaLetrasInCorrectas("nivel", "lapiz")).toEqual("il");
      });
    it("Comprobamos si las letra esta en una posicion incorrecta de la palabra(no tomar en cuenta letras correctas)", () => {
        expect(jugar.comparaLetrasInCorrectas("nivel", "metal")).toEqual("e");
      });
});