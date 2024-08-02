const proyectosContainer=document.getElementById("tarjetasContainer");
const aside=document.getElementsByTagName("aside")[0];


const getTecnologias= (tecnologias)=>{
    let res= "";
    tecnologias.forEach(tecnologia=>{
        res+= `<span class=tecnologia>${tecnologia}</span>`
    })

    return res;
}


proyectos.forEach(proyecto=>{
    const nuevoProyecto=document.createElement("div");
    nuevoProyecto.classList= "tarjeta proyecto";
    proyectosContainer.appendChild(nuevoProyecto);
    nuevoProyecto.innerHTML= `
    <img src="imagenes/proyectos/${proyecto.imagen}">
    <div>
    <h3>${proyecto.titulo}</h3>
    <p>${proyecto.descripcion}</p>
    <p>Tecnologias:${getTecnologias(proyecto.tecnologias)} </p>
    </div>
    <a href="${proyecto.link}" target="_blanck">Ver proyecto</a>
    
    
    `
})


const nuevaPresentacion= document.createElement("div");
nuevaPresentacion.classList="presentacion";
nuevaPresentacion.innerHTML= `

<img src="${informacionPersonal.imagen}">
`;

informacionPersonal.otros.forEach(dato=>{
    nuevaPresentacion.innerHTML += `
    

    <div>

    <span>${dato[0]}:</span>
    <span>${dato[1]}</span>
    </div>
    
    `
})

aside.appendChild(nuevaPresentacion);

const nuevoIdiomas= document.createElement("div");
nuevoIdiomas.classList="idioma";

informacionPersonal.idiomas.forEach(dato=>{
    nuevoIdiomas.innerHTML += `
    

    <div>

    <span>${dato[0]}:</span>
    <span>${dato[1]}</span>
    </div>
    
    `
})

aside.appendChild(nuevoIdiomas);


const nuevoLenguajesProgramacion= document.createElement("div");
nuevoLenguajesProgramacion.classList="idioma";

informacionPersonal.tecnologias.forEach(dato=>{
    nuevoLenguajesProgramacion.innerHTML += `
    

    <div>

    <span>${dato[0]}</span>
    <span>${dato[1]}</span>
    </div>
    <progress max="10" value=${dato[1]}>
    `
})

aside.appendChild(nuevoLenguajesProgramacion);


const getIconoRed=(red)=>{
    switch(red){
        case "instagram":
            return "instagram.svg";

            case "linkedin":
                return "linkedin.svg";

                case "facebook":
                    return "square-facebook.svg";

                    case "github":
                    return "github.svg";

                    default:
                        return "globe-solid.svg"
    }
}


const nuevoRedes= document.createElement("div");
nuevoRedes.classList="redes";

informacionPersonal.redes.forEach(dato=>{
    if(dato[1]==="") return;
    nuevoRedes.innerHTML += `
    

   <a href="${dato[1]}" target="_blank">
   
   <img src="imagenes/iconos/${getIconoRed(dato[0])}">
   
   </a>
    
    `
})

aside.appendChild(nuevoRedes);


