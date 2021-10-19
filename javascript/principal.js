//DOM
/*let links=document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
});*/

/*let celdas=document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this);
    })
});*/

//Obtener los elementos de la clase .cerrar
let links=document.querySelectorAll(".cerrar");
//recorrerlos
links.forEach(function(link){
    //Agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(){
        console.log(":)")
    });
});
