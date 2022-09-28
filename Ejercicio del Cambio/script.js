function inicializarEfectivo(c500, c200, c100, c50, c20, c10, c5, c2, c1, c05, c02, c01, c005, c002, c001) {

    return [c500, c200, c100, c50, c20, c10, c5, c2, c1, c05, c02, c01, c005, c002, c001, 0];
}

function calcularTotal(efectivo, billetesMonedas) {
    //var total = 0;
    //efectivo.push(0); //le añadimos el 0 a la ultima casilla del array de efectivo en vez de declarar otra variable
    efectivo[efectivo.length - 1] = 0
    for (let i = 0; i < efectivo.length - 1; i++) {
        //total = total + efectivo[i] * billetesMonedas[i];         // varias formas de hacer lo mismo
        //total += efectivo[i] * billetesMonedas[i];
        efectivo[efectivo.length - 1] += efectivo[i] * billetesMonedas[i];
    }

    //[efectivo.length - 1] esto representa la ultima casilla del array, simplemente la seleccionamos
    efectivo[efectivo.length - 1] = Math.round((efectivo[efectivo.length - 1] + Number.EPSILON) * 100) / 100; //para redondear a dos decimales
    //efectivo.push(total);

    return efectivo;
}
function actualizarCaja(caja, pago) {
    for (let i = 0; i < caja.length; i++) {
        caja[i] += pago[i]
    }
    return caja
}
var caja = inicializarEfectivo(0, 0, 0, 1, 4, 8, 2, 5, 4, 0, 1, 1, 2, 3, 1);
const billetesMonedas = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
caja = calcularTotal(caja, billetesMonedas);

//alert(caja);

var precio = 17.43;
var pago = inicializarEfectivo(0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
pago = calcularTotal(pago, billetesMonedas);
//alert(pago);
if (pago[pago.length - 1] - precio == 0) {
    alert('sin cambio');
    /* caja = actualizarCaja(caja, pago) */
} else {
    var devolver = pago[pago.length - 1] - precio
    alert("El cambio de la operación es: " + devolver.toFixed(2) + "€");
    if (devolver > caja[caja.length - 1]) {
        alert("No tenemos cambio")
    } else {
        var devolucion = inicializarEfectivo(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)

        for (var i = 0; i < devolucion.length; i++) {
            for (var j = 0; j < caja[i]; j++) {
                if (devolver >= billetesMonedas[i]) {
                    devolucion[i]--;
                    devolver -= billetesMonedas[i];
                    devolver = Math.round((devolver + Number.EPSILON) * 100) / 100;
                }
            }
        }
        console.log(devolucion)
        console.log(caja)
        if (devolver != 0) {
            alert("No se puede devolver")
        } else {
            console.log(devolucion)
            console.log(caja)
            caja = actualizarCaja(caja, devolucion);
            caja = actualizarCaja(caja, pago)
            caja = calcularTotal(caja, billetesMonedas)
            console.log(caja)
            var msj = "El cambio es de:\n";
            for (let i = 0; i < devolucion.length - 1; i++) {
                if (devolucion[i] != 0) {
                    msj += (devolucion[i] * -1) + " billete de " + billetesMonedas[i] + "€ \n"
                }
            }
            alert(msj)
            alert("La cantidad total de caja es de: " + caja[caja.length - 1] + "€")
        }
    }
}
console.log(devolucion)









/*         if (caja[i]*billetesMonedas[i]>=devolver){
            devolucion[i]=Math.floor(devolver/(caja[i]*billetesMonedas[i]));
            caja[i]<=devolucion[i]
        } */



/*
    - Billetes de 500€: 0
    - Billetes de 200€: 0
    - Billetes de 100€: 0
    - Billetes de 50€: 1 
    - Billetes de 20€: 4
    - Billetes de 10€: 8
    - Billetes de 5€: 2
    - Monedas de 2€: 5
    - Monedas de 1€: 4
    - Monedas de 0.50€: 0
    - Monedas de 0.20€: 0
    - Monedas de 0.10€: 1
    - Monedas de 0.05€: 2
    - Monedas de 0.02€: 3
    - Monedas de 0.01€: 1
*/

/* function inicializarEfectivo(c500, c200, c100, c50, c20, c10, c5, c2, c1, c05, c02, c01, c005, c002, c001) {
    return [c500, c200, c100, c50, c20, c10, c5, c2, c1, c05, c02, c01, c005, c002, c001, 0];
}

function calcularTotal(efectivo, billeteMoneda) {
    //var total = 0;
    efectivo[efectivo.length - 1] = 0;
    for (let i = 0; i < efectivo.length - 1; i++) {
        efectivo[efectivo.length - 1] += efectivo[i] * billeteMoneda[i]
        // total += efectivo[i] * billeteMoneda[i];
    }
    efectivo[efectivo.length - 1] = Math.round((efectivo[efectivo.length - 1] + Number.EPSILON) * 100) / 100;;
    return efectivo;
}

function cobrar(pago, caja, billeteMoneda) {
    for (let i = 0; i < pago.lengthw; i++) {
        caja[i] += pago[i];
    }
    caja= calcularTotal(caja,billeteMoneda);
    return caja;
}
function devolver(precio, pago, caja, billeteMoneda) {

}


var caja = inicializarEfectivo(0, 0, 0, 1, 4, 8, 2, 5, 4, 0, 0, 1, 2, 3, 1);
const billeteMoneda = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]

caja = calcularTotal(caja, billeteMoneda);

var precio = 120;
var pago = inicializarEfectivo(0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
pago = calcularTotal(pago, billeteMoneda);

if (pago[pago.length - 1] - precio == 0) {
    alert("Sin cambio. Gracias.");
    caja = cobrar(pago,caja)
} else {
    alert("su cambio es: " + (pago[pago.length - 1] - precio).toFixed(2))
}
alert(pago)
alert(caja) */

