let imagenes = ["../../imagenes/machupichu.jpg", "../../imagenes/petra.jpg", "../../imagenes/chichenitza.jpg", "../../imagenes/acropolis.jpg", "../../imagenes/piramidesgiza.jpg",
    "../../imagenes/Taj-Mahal.jpg", "../../imagenes/Torre-Eiffel.jpg", "../../imagenes/alhambra.jpg", "../../imagenes/coliseo.jpg", "../../imagenes/timessquare.jpg"];

let titulos = ["Machu Picchu - Perú", "Petra - Jordania", "Chichen Itzá - México", "La Acrópolis - Grecia", "Las Pirámides de Giza - Egipto", "El Taj Mahal - India", "La Torre Eiffel - Francia", "La Alhambra - España", "Coliseo - Italia", "Times Square - Estados Unidos"];

let links = ["../../paginas/machupichu/machupichu.html","../../paginas/petra/petra.html","../../paginas/chichenitza/chichenitza.html","../../paginas/acropolis/acropolis.html","../../paginas/giza/giza.html","../../paginas/tajmahal/tajmahal.html","../../paginas/torreeiffel/torreeiffel.html","../../paginas/alhambra/alhambra.html","../../paginas/coliseo/coliseo.html","../../paginas/timessquare/timessquare.html"]

let texto =
    ["Se destaca como el principal enclave arqueológico maya gracias a su ingenioso trazado urbano, la majestuosidad de sus estructuras y la meticulosa labor en piedra de sus edificaciones. <br>En su diseño se aprovechó de manera notable la geografía de la colina que lo convirtió en un impresionante centro ceremonial.",
        "Conocida como la 'metrópolis olvidada', no solo por su largo período de abandono desde el siglo VI d.C., cuando sus residentes desertaron y cayó en el olvido, hasta su redescubrimiento en el siglo XIX por el explorador suizo Johann Ludwig Burckhardt, sino también por haber quedado sepultada bajo las dunas.",
        "La icónica ciudad maya de Chichén Itzá, inscrita como Patrimonio de la Humanidad por la UNESCO desde 1988 y reconocida como una de las Maravillas del Mundo desde 2007. <br>Destacó como un importante centro cultural y político de la antigua civilización maya y fue uno de los núcleos poblacionales más grandes en el centro-norte de la península de Yucatán.",
        "La Acrópolis, conocida como la 'ciudad alta', era un elemento distintivo en la mayoría de las urbes griegas, con funciones defensivas y como sede de los principales templos. <br>La Acrópolis de Atenas alberga algunos de los monumentos más emblemáticos de la Grecia clásica: el Partenón, el Erecteion, el Templo de Atenea Niké y los Propileos destacan como algunas de las estructuras más notables y magníficas.",
        "Las pirámides de Giza en Egipto han sido galardonadas con los premios 'Oscar' del turismo. <br>Consideradas como la 'principal atracción turística mundial' por los World Travel Awards (WTA), estos premios, otorgados anualmente por las agencias de viajes, son conocidos como los Oscar del turismo.",
        "Aunque a menudo se le considera un templo, el Taj Mahal es en realidad un mausoleo que encierra una hermosa y trágica historia de amor entre un emperador y su esposa. <br>Esta magnífica estructura fue erigida en el siglo XVII y se encuentra en las proximidades de la ciudad de Agra, en el estado de Uttar Pradesh, en la India. <br>Es, sin lugar a dudas, una parada obligatoria para los miles de turistas que visitan esta región de la India. <br>Pero ahora, adentrémonos en la apasionante historia de amor que envuelve este mágico sitio.",
        "Se erige como el edificio más alto de París y uno de los destinos más populares tanto en la ciudad como en el mundo entero: la Torre Eiffel, con sus imponentes 324 metros de altura, atrae a una media de 7 millones de visitantes durante todo el año. <br>Cada noche, este emblemático símbolo de París se engalana con una iluminación dorada y el mágico destello que lo envuelve durante cinco minutos al comienzo de cada hora hasta la 1 de la madrugada.",
        "Cada año, aproximadamente 3,5 millones de personas visitan La Alhambra, un monumento de incomparable belleza que ostenta el título del más visitado de España y uno de los más impresionantes del mundo. <br>Este complejo de palacios, jardines y fortalezas fue iniciado por órdenes de los monarcas nazaríes del Reino de Granada en 1377, y sus numerosos rincones cautivadores justifican dedicarle una jornada completa de visita.",
        "En nuestra lista de los destinos más populares del mundo, no podía faltar uno de los grandes de Italia: el Coliseo. <br>Construido en el siglo I en el corazón de Roma, este antiguo anfiteatro recibe cada año a más de 5 millones de visitantes. <br>Con juegos de gladiadores, batallas navales y luchas con animales, el Coliseo, también conocido como el Anfiteatro Flavio, fue parte integral del entretenimiento público en la antigua Roma, quizás su nombre proviene de la colosal estatua de Nerón que se alzaba cerca.",
        "Times Square, la emblemática plaza situada en el corazón de Nueva York, se ha convertido a lo largo de los años en un verdadero símbolo de esta ciudad cosmopolita, gracias a sus deslumbrantes luces y sus llamativos carteles publicitarios. <br>Con miles de luces y enormes pantallas publicitarias, Times Square se ha consolidado como el icono más reconocible de Nueva York. <br>En el centro de esta bulliciosa zona se encuentra la plaza, ubicada en la intersección de Broadway y la 7ª Avenida."];

let indice = 0;

let imgant = document.getElementById("imgant");
let imgpri = document.getElementById("imgpri");
let imgsig = document.getElementById("imgsig");
let titulo = document.getElementById("titulo");
let parrafo = document.getElementById("parrafo1");
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

    imgant.src = imagenes[indiceAnt];

    imgpri.src = imagenes[indice];

    imgsig.src = imagenes[indiceSig];

    titulo.textContent = titulos[indice];

    parrafo.innerHTML = texto[indice];

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
span.style.backgroundColor = 'rgb(76, 66, 67)';
span.style.fontFamily = '"Pathway Extreme", system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif';
span.style.color = 'rgb(173, 146, 140)';
span.style.position = 'relative';
span.style.bottom = '0px';

function verSpan(posicion, px) {  //lo muestro con los parametros pasados en el html
    span.textContent = posicion;
    span.style.left = px;
    document.getElementById(posicion.toLowerCase()).appendChild(span); 
}

function ocultarSpan(posicion) { //lo oculto
    document.getElementById(posicion).removeChild(span); 
}




