//Obtener los elementos de la clase .cerrar
let links=document.querySelectorAll(".cerrar");
//recorrerlos
links.forEach(function(link){
    //Agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        console.log(":)")
        ev.preventDefault();
        let contenido=document.querySelector(".content");
        //Quitarle las clases de animacion que tiene
        contenido.classList.remove("animate__animated");
        contenido.classList.remove("animate__fadeInDown");
        //Agregar clase de animacion para salida animate__fadeInUp
        contenido.classList.add("animate__animated");
        contenido.classList.add("animate__fadeOutUp");

        setTimeout(function(){
            location.href="/";
        },500)
    });
});
