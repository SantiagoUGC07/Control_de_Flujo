
function getInformation()
{
    let hora = prompt("Que hora es: "); /*toma el valor de la variable string */
    if(hora >= 6 && hora <= 11)
    {
        document.write(" HOLA BUENOS DIAS ");
    }
    else if(hora >= 12 && hora <= 18)
    {
        document.write(" HOLA BUENAS TARDES ");
    }
    else if(hora >= 19 && hora <= 23)
    {
        document.write(" HOLA BUENAS NOCHES ");
    }
    else
    {
        document.write(" DEJENME DORMIR");
    }
   return 0;
}