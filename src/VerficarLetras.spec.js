import Juego from "./juego.js"

describe("---Letras que estan en la posicion correcta----",() =>{
    it("Comprobamos si la primiera letra de la palabra no es correcta", () => {
      const jugar = new Juego();
      expect(jugar.comparaLetrasCorrectas("autos", "casas")).toEqual('');
    });
    it("Comprobamos si la primiera letra de la palabra es correcta", () => {
        const jugar = new Juego();
        expect(jugar.comparaLetrasCorrectas("autos", "avion")).toEqual('a');
      });
    it("Comprobamos si las dos primeras letras son correctas ala palabra adivinar", () => {
        const jugar = new Juego();
        expect(jugar.comparaLetrasCorrectas("autos", "autin")).toEqual("au");
      });
});