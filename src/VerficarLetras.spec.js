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
});