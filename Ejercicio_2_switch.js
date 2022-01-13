let cuponDescuento ="Oro";
let descuento;

switch(cuponDescuento)
{
    case "Bronce":
        descuento = 5;
    break;
    case "Plata":
        descuento = 10;
    break;
    case "Oro":
        descuento = 15;
    break;
    default:
        console.log("Cupon erroneo");
    break;
}

console.log(descuento);
