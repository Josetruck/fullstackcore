let frutas = ["Manzana", "Banana", "Fresa", "Piña"];

    let frutasObject = new Array(["Cereza", "Papaya"], ["Pera", "Sandía"]);

    //forEach 
    frutasObject.forEach(element => {
        element.forEach(element2 => {
        for(l of element2){
            console.log(l);
        }
        console.log("Fin Fruta");
        });
    });