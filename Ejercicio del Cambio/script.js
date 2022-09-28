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


//alert(caja);
var pago = [];
var precio;

function recoger() {
    var caja = inicializarEfectivo(2, 2, 2, 1, 4, 8, 2, 5, 4, 2, 3, 1, 2, 3, 1);
    const billetesMonedas = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    caja = calcularTotal(caja, billetesMonedas);

    precio = parseInt(document.getElementById("precio").value);

    pago[0] = parseInt(document.getElementById("500").value);
    pago[1] = parseInt(document.getElementById("200").value);
    pago[2] = parseInt(document.getElementById("100").value);
    pago[3] = parseInt(document.getElementById("50").value);
    pago[4] = parseInt(document.getElementById("20").value);
    pago[5] = parseInt(document.getElementById("10").value);
    pago[6] = parseInt(document.getElementById("5").value);
    pago[7] = parseInt(document.getElementById("2").value);
    pago[8] = parseInt(document.getElementById("1").value);
    pago[9] = parseInt(document.getElementById("05").value);
    pago[10] = parseInt(document.getElementById("02").value);
    pago[11] = parseInt(document.getElementById("01").value);
    pago[12] = parseInt(document.getElementById("005").value);
    pago[13] = parseInt(document.getElementById("002").value);
    pago[14] = parseInt(document.getElementById("001").value);
    for(let i=0;i<pago.length;i++){
       if(isNaN(pago[i])){
        pago[i] = 0;
       }
    }
    console.log(pago)
    cobrar(precio,pago,caja,billetesMonedas)
}
function cobrar(precio, pago, caja, billetesMonedas) {

    console.log(precio)
    pago = calcularTotal(pago, billetesMonedas);
    //alert(pago);
    if (pago[pago.length - 1] - precio == 0) {
        alert('sin cambio');
        /* caja = actualizarCaja(caja, pago) */
    } else {
        var devolver = pago[pago.length - 1] - precio
        alert("El cambio de la operación es: " + devolver.toFixed(2) + "€");
        if(pago[pago.length - 1] < precio){
            alert("Te falta dinero para pagar")
        } else {
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
}
}

/* function iniciar(billetesMonedas){
   for(let i=0;i<billetesMonedas.length;i++;){
    var etiqueta = document.createElement("form"); 
    var contenido = document.createElement (texto); 
    etiqueta.appendChild (contenido); 
    document.body.appendChild(etiqueta);
   }
} */


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

