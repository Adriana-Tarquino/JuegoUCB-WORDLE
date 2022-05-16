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
        var letPosIncorrecta = '';
        let listaLetPosInCorrectas = "";	
        for(var i = 0; i < palabra2.length; i++){
            for(var j = 0; j < palabra.length; j++){
                if(palabra2.at(j) === palabra.at(i)){
                    letPosIncorrecta = palabra2.at(j);
                    listaLetPosInCorrectas += letPosIncorrecta;
                }
            }
        }
        return listaLetPosInCorrectas ;
    }
}
export default Juego; 