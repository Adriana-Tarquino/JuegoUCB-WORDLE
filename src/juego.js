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
}
export default Juego; 