import listapalabras from "./listaPalabras.js";
const baseDatos = [
    {
        categoria: "frutas",
        palabras: ["platano", "mora", "limon", "manzana", "frutilla"],
    },
    {
        categoria: "verbos",
        palabras: ["caminar", "comer", "bailar", "correr", "jugar"],
    },
];
class Juego {
    constructor(intentoTotal) {
        this.intentoTotal = 2;
        //this.palabra = palabra;
    }

    IngresarPalabra(palabra) {
        return palabra;
    }

    contarLetras(palabra) {
        var cantLetras = palabra.length;
        return cantLetras;
    }
    compararPalabra(palabra, palabra2) {
        var resp = false;
        if (palabra === palabra2) {
            resp = true;
        }
        return resp;
    }
    palabrasAleatoriaCate1() {
        var lista = new listapalabras();
        var aleatorio = Math.random();
        var listaCadaena = lista.primeraCat();
        var palabra = listaCadaena[Math.round(aleatorio)];
        return palabra;
    }
    palabrasAleatoriaCate2() {
        var lista = new listapalabras();
        var aleatorio = Math.random();
        var listaCadaena2 = lista.segunCat();
        var palabra = listaCadaena2[Math.round(aleatorio)];
        return palabra;
    }
    ValidarJugabilidad(palabra, palabra2) {
        let mensaje = "Perdiste!";
        if (this.compararPalabra(palabra, palabra2) == true) {
            mensaje = "Ganaste!";
        } else {
            if (this.intentos == 0) {
                mensaje = "Perdiste!";
            } else {
                this.ValidarIntentos(mensaje);
            }
        }
        return mensaje;
    }
    ValidarIntentos() {
        this.intentoTotal = this.intentoTotal - 1;
        return this.intentoTotal;
    }
    TerminarJuego(mensaje) {
        if ((mensaje = "Perdiste!")) {
            return mensaje;
        } else {
            return mensaje;
        }
    }
    guardarPistas(correctas, incorrectas, noEstanPalabra) {
        /// correctas = this.comparaLetrasCorrectas(palabra,palabra2);
        //incorrectas = this.comparaLetrasInCorrectas(palabra,palabra2);
        //noEstanPalabra = this.mostrarLetrasNoExisten(palabra,palabra2);
        let totalpISTAS = correctas + "/" + incorrectas + "/" + noEstanPalabra;
        return totalpISTAS;
    }
    comparaLetrasCorrectas(palabra, palabra2) {
        var letraCorecta = "";
        let listaLetrasCorrectas = "";
        for (var i = 0; i < palabra2.length; i++) {
            letraCorecta = palabra.at(i);
            listaLetrasCorrectas = this.compararPosiciones(
                listaLetrasCorrectas,
                letraCorecta,
                palabra2,
                i
            );
        }
        return listaLetrasCorrectas;
    }
    compararPosiciones(listaLetPosIncorrectas, letra, palabra2, j) {
        if (letra == palabra2.at(j)) {
            listaLetPosIncorrectas += letra;
        }
        return listaLetPosIncorrectas;
    }
    comparaLetrasInCorrectas(palabra, palabra2) {
        var letra = "";
        let listaLetPosIncorrectas = "";
        for (var i = 0; i < palabra.length; i++) {
            letra = palabra.at(i);
            for (var j = 0; j < palabra2.length; j++) {
                if (i != j) {
                    listaLetPosIncorrectas = this.compararPosiciones(
                        listaLetPosIncorrectas,
                        letra,
                        palabra2,
                        j
                    );
                }
            }
        }
        return listaLetPosIncorrectas;
    }

    mostrarLetrasNoExisten(palabra, palabra2) {
        var letra = "";
        let listaLetNoExisten = "";
        let letPosInc = this.comparaLetrasInCorrectas(palabra, palabra2);
        for (var i = 0; i < palabra2.length; i++) {
            letra = palabra2.at(i);
            if (letra != palabra.at(i)) {
                if (letPosInc != "") {
                    for (var j = 0; j < letPosInc.length; j++) {
                        if (letra != letPosInc.at(j)) {
                            listaLetNoExisten += letra;
                        }
                    }
                } else {
                    listaLetNoExisten += letra;
                }
            }
        }
        listaLetNoExisten = [...new Set(listaLetNoExisten)];
        return listaLetNoExisten;
    }
    // Crear Categorias mas una lista de palabras
    crearCategoria(newCategoria, ...palabras) {
        let lp = [];
        for (let i = 0; i < palabras.length; i++) {
            lp.push(palabras[i]);
        }
        baseDatos.push({
            categoria: newCategoria,
            palabras: lp,
        });
    }
    palabraAleatoria(categ) {
        const db = baseDatos
            .map(({ categoria, palabras }) => ({
                categoria,
                palabras,
            }))
            .filter((baseDatos) => baseDatos.categoria === categ);
        // devuelve la categoria mas la lista de palabras
        // console.log(db);
        const lp = db[0].palabras;
        // console.log(lp);
        let rand = Math.floor(Math.random() * lp.length);
        let resp = lp[rand];
        return resp;
    }
    verificarPalabraDB(palabra) {
        const db = baseDatos.map(({ palabras }) => ({
            palabras,
        }));
        console.log(db);
        let resp = false;
        for (let i = 0; i < db.length; i++) {
            if (db[i].palabras.includes(palabra)) {
                resp = true;
            }
        }
        return resp;
    }
    monstrarCategorias(){
        const db = baseDatos.map(({categoria}) => ({
            categoria,
        }));
        console.log(db);
        let ctg = [];
        for (let i = 0; i < db.length; i++){
            ctg.push(db[i].categoria);
        }
        return ctg;
    }
}

export default Juego;

// let db = new Juego();
// // console.log(baseDatos);
// db.crearCategoria("plantas","arbol","flor","manzano","pino");
// console.log(db.palabraAleatoria("verbos"));
