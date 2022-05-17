class Juego 
{
    constructor (palabra){
        this.palabra = palabra;
        }
    IngresarPalabra(palabra)
    {
        return palabra;
    }
    getPalabra(){
        return palabra;
    }
    setPalabra(palabra){
        this.palabra = palabra;
    }

    contarLetras(palabra)
    {
        var cantLetras = palabra.length;
        return cantLetras;
    }
    compararPalabra(palabra1,palabra2,pos1,pos2)
    {
        var resp = false;
        if(palabra1.charAt(pos1) == palabra2.charAt(pos2))
        {
            resp =true;
        }
        return resp;
    }
    comparaLetrasCorrectas(palabra,palabra2)
    {
        var letraCorecta = '';
        let listaLetrasCorrectas = "";
        for(var i = 0; i < palabra2.length; i++){
            if(palabra.at(i) == palabra2.at(i)){
                letraCorecta = palabra2.at(i);
                listaLetrasCorrectas += letraCorecta
            }
        }
        return listaLetrasCorrectas;
    }
    comparaLetrasInCorrectas(palabra,palabra2){
        var letra = '';
        let listaLetPosIncorrectas = "";	
        for(var i = 0; i < palabra2.length; i++){
            // if(palabra.at(i) != palabra2.at(i)){
                letra = palabra2.at(i);
                for (var j = 0; j < palabra.length; j++){
                    if( i!=j){
                        if(letra == palabra.at(j)){
                            listaLetPosIncorrectas += letra;
                        }
                    }
                }

            // }
        }
        return listaLetPosIncorrectas ;
    }
}

// var game = new Juego();
// console.log(game.comparaLetrasInCorrectas("arbol","autos"));
export default Juego; 