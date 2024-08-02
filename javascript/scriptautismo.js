let imagenes = ["../../imagenes/imagenesdeautismo/imagen1.png","../../imagenes/imagenesdeautismo/imagen2.png", "../../imagenes/imagenesdeautismo/imagen3.png", "../../imagenes/imagenesdeautismo/imagen4.png", "../../imagenes/imagenesdeautismo/imagen5.png", "../../imagenes/imagenesdeautismo/imagen6.jpg"];

let links = ["./proyectoautismo.html","./universidad.html" ,"#","#","#","#"]



let indice = 0;

let imgant = document.getElementById("a");
let imgpri = document.getElementById("contIMG");
let imgsig = document.getElementById("s");
let imglink = document.getElementById("imglink");

function anterior() {

    actualizarContenido(false);

}

function siguiente() {

    actualizarContenido(true);

}

function actualizarContenido(flag) {

    indice = obtenerIndice(flag);

    let indiceAnt = obtenerIndice(false);
    console.log(indiceAnt);

    let indiceSig = obtenerIndice(true);
    console.log(indiceSig);

    imgant = imagenes[indiceAnt];

    imgpri.src = imagenes[indice];

    imgsig= imagenes[indiceSig];

    imglink.href = links[indice];
}

function obtenerIndice(flag) { // Si flag es true el indice avanza sino retrocede.

    let aux = indice;

    if (flag) {
        aux++;
        if (aux > imagenes.length - 1) {
            aux = 0;
        }
    } else {
        aux--;
        if (aux < 0) {
            aux = imagenes.length - 1;
        }
    }

    return aux;

}

//span
let span= document.createElement('span'); //creo el span
span.id = "Mensaje";
span.style.border = '2px solid rgb(76, 66, 67)';
span.style.borderRadius = '10px';
span.style.backgroundColor = 'rgb(225, 163, 215)';
span.style.fontFamily = '"Pathway Extreme", system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif';
span.style.color = 'black';
span.style.position = 'relative';
span.style.bottom = '0px';

function verSpan(posicion, px) { //lo muestro con los parametros pasados en el html
    if(indice==0 || indice==1){
    span.textContent = posicion;
    span.style.left = px;
    document.getElementById(posicion.toLowerCase()).appendChild(span);
} 
}

function ocultarSpan(posicion) { //lo oculto
    if(indice==0 || indice==1){
    document.getElementById(posicion).removeChild(span); 
    }
}