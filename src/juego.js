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
        if(palabra.at(0) == palabra2.at(0))
        {
            letraCorecta = palabra.at(0);
            listaLetrasCorrectas += letraCorecta;
        }
        if(palabra.at(1) == palabra2.at(1))
        {
            letraCorecta = palabra.at(1);
            listaLetrasCorrectas += letraCorecta;
        }
        return listaLetrasCorrectas;
    }
}
export default Juego; 