let Resultado = document.getElementById("Resultado");

let des;
let nprecio;


function getInformation()
{
    let cupon = prompt("Nombre del cupon: ");
    let precio = parseInt(prompt("precio del producto: "));

    switch (cupon)
    {
        case "Bronce":
            des = precio * .05;
        break;
        case "Plata":
            des = precio * .1;
        break;
        case "Oro":
            des = precio * .2;
        break;
        case "Platino":
            des = precio * .2;
        break;
        default:
            Resultado.textContent ="El cupon ingresado no es valido";
            des = 0;
        break;
    }

    if(des != 0 )
    {
        nprecio = precio - des;
        Resultado.textContent = `El precio ingresado fue de ${precio}
        El Descuento es de: ${des}
        El precio menos el descuento es de:  ${nprecio}`;
    } 
    
}