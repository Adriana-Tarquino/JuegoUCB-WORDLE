class Juego 
{
    /*constructor (palabra){
        this.palabra = palabra;
    }*/

    IngresarPalabra(palabra)
    {
        return palabra;
    }

    contarLetras(palabra)
    {
        var cantLetras = palabra.length;
        return cantLetras;
    }

    compararPalabra(palabra,palabra2)
    {
        let pos1, pos2;
        var resp = false;
        if(palabra.charAt(pos1) == palabra2.charAt(pos2))
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

    comparaLetrasInCorrectas(palabra,palabra2)
    {
        var letra = '';
        let listaLetPosIncorrectas = "";	
        for(var i = 0; i < palabra.length; i++){
            letra = palabra.at(i);
            for (var j = 0; j < palabra2.length; j++){
                if( i!=j){
                    if(letra == palabra2.at(j)){
                        listaLetPosIncorrectas += letra;
                    }
                }
            }
        }
        return listaLetPosIncorrectas;
    }

    mostrarLetrasNoExisten(palabra, palabra2)
    {
        var letra = '';
        let listaLetNoExisten = "";
        let letPosInc = this.comparaLetrasInCorrectas(palabra, palabra2);
        for (var i = 0; i < palabra2.length; i++){
            letra = palabra2.at(i);
            if(letra != palabra.at(i)){
                if(letPosInc != ""){
                    for (var j = 0; j <letPosInc.length; j++) {
                        if(letra != letPosInc.at(j)){
                            listaLetNoExisten += letra;
                        }
                    }
                }else{
                    listaLetNoExisten += letra;
                }
                
            }
        }
        return listaLetNoExisten;
    }
}

// var game = new Juego();
// console.log(game.mostrarLetrasNoExisten("arbol","autos"));
export default Juego; 