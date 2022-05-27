class Juego 
{
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
        if(palabra.at(pos1) == palabra2.at(pos2))
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
            letraCorecta = palabra.at(i);
            listaLetrasCorrectas = this.compararPosiciones(listaLetrasCorrectas, letraCorecta, palabra2,i);
        }
        return listaLetrasCorrectas;
    }
    compararPosiciones(listaLetPosIncorrectas, letra, palabra2, j){
        if(letra == palabra2.at(j)){
            listaLetPosIncorrectas += letra;
        }
        return listaLetPosIncorrectas;
    }
    comparaLetrasInCorrectas(palabra,palabra2)
    {
        var letra = '';
        let listaLetPosIncorrectas = "";	
        for(var i = 0; i < palabra.length; i++){
            letra = palabra.at(i);
            for (var j = 0; j < palabra2.length; j++){
                if( i!=j){
                    listaLetPosIncorrectas = this.compararPosiciones(listaLetPosIncorrectas, letra, palabra2, j);
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
        listaLetNoExisten = [...new Set(listaLetNoExisten)];
        return listaLetNoExisten;
    }
}

export default Juego; 