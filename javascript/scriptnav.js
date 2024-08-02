let th = document.getElementById("home");
let con = document.getElementById("contenedor");

function cambiarClick(th) {
    th.style.backgroundColor = "#49362e";
    /*th.style.textDecoration = "line-through";*/
    th.style.borderRadius = "10px"
}

function cambio(th) {
    th.style.backgroundColor = "";
    /* th.style.textDecoration = "";*/
    th.style.borderRadius = ""
}