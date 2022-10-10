var cont = 0
var perromuestra;
function ejecutar(){
fetch(`https://dog.ceo/api/breeds/image/random`)
.then(res=>res.json())
.then(json=>{localStorage.setItem(`perro${cont}`,JSON.stringify(json));
console.log(json.message)
var lista = localStorage;
console.log(lista)
perromuestra = JSON.parse(localStorage[`perro${cont}`]);
var imgmuestra = perromuestra.message ;
var imagen = document.getElementById("muestra");
imagen.height = 200;
imagen.width = 200;
imagen.src = imgmuestra;});
}

function pintar(){
    var guardaimg = document.createElement("img");
    var perroguarda = JSON.parse(localStorage[`perro${cont}`]);
    if(cont < 20){
guardaimg.src = perroguarda.message;
guardaimg.height = 200;
guardaimg.width = 200;
guardaimg.id = `d${cont}`
document.querySelector("#grid").appendChild(guardaimg);
cont++;
ejecutar()
return cont
} else {
    alert("Has alcanzado el máximo de perros para guardar")
}}


