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
    it("deberia elegir cualquier palabra", () => {
      expect(jugar.palabrasAleatoria()).toEqual();
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

describe("---Mostrar letras que no estan en la palabra a adivinar---", () => {
  const jugar = new Juego();
  it("letras que no estan en la palabra a adivinar", () => {
    expect(jugar.mostrarLetrasNoExisten("arbol", "autos")).toEqual(["u", "t", "s"]);
  })
  it("Una letra que esta en la palabra a adivinar pero en otra direccion", () => {
    expect(jugar.mostrarLetrasNoExisten("arbol", "autor")).toEqual(["u", "t"]);
  })
  it("Una palabra sin letras que coincidan, no con letras que esten en la palabra", () => {
    expect(jugar.mostrarLetrasNoExisten("arbol", "casas")).toEqual(["c", "s"]);
  })
});

describe("---JUGABILIDAD---", () => {
  const jugar = new Juego();
  it("Mostrar el mensaje de perdiste el juego", () => {
    expect(jugar.ValidarJugabilidad("arbol","casas")).toEqual("Perdiste!");
  })
  it("Mostrar el mensaje de perdiste el juego", () => {
    expect(jugar.ValidarJugabilidad("arbol","arbol")).toEqual("Ganaste!");
  })
  it("Poder jugar con dos intentos ", () => {
    expect(jugar.ValidarIntentos("Perdiste!")).toEqual(0);
  })
  it("Comprueba la jugabilidad del juego", () => {
    expect(jugar.ValidarJugabilidad("arbol","casas")).toEqual("Perdiste!");
  })
  it("Se dede mostrar un mensaje que Perdiste en el juego ", () => {
    expect(jugar.TerminarJuego("Perdiste!")).toEqual("Perdiste!");
  })
  /*it("Se deberia mostrar un a lista de palabaras que contenga las pistas anteriores", () => {
    expect(jugar.guardarPistas("arbol","casas")).toEqual("/aa/c,s");
  })*/
});