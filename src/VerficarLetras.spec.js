import Juego from "./juego.js"

describe("---Letras que estan en la posicion correcta----",() =>{
    it("Comprobamos si la primiera letra de la palabra no es correcta", () => {
      const jugar = new Juego();
      expect(jugar.comparaLetrasCorrectas("autos", "casas")).toEqual('');
    });
});