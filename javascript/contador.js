export class Contador {
    numero = 0;
    nombre;
    containerElement;
    cuentaElement;

    constructor(nombre, containerElement, cuentaInicial = 0) {
        this.nombre = nombre;
        this.numero = cuentaInicial;
        this.containerElement = containerElement;
        this.cuentaElement = containerElement.querySelector(".cuenta");
        containerElement.querySelector("h2").innerText = nombre;
        containerElement.querySelector(".agregar").addEventListener("click", () => this.agregar());
        containerElement.querySelector(".restar").addEventListener("click", () => this.restar());
        this.actualizarCuenta();
    }

    agregar(cantidad = 1) {
        this.numero += cantidad;
        this.actualizarCuenta();
    }

    restar(cantidad = 1) {
        this.numero = Math.max(0, this.numero - cantidad);
        this.actualizarCuenta();
    }

    reset() {
        this.numero = 0;
        this.actualizarCuenta();
    }

    actualizarCuenta() {
        console.log(this.nombre, this.numero);
        const gruposActuales = this.containerElement.querySelectorAll(".grupo");
        const separadoresActuales = this.containerElement.querySelectorAll(".separador");

        if (gruposActuales.length > 0) { 
            gruposActuales.forEach(grupo => this.cuentaElement.removeChild(grupo));
            separadoresActuales.forEach(separador => this.cuentaElement.removeChild(separador));
        }

        let grupoActual;

        for (let i = 0; i < this.numero; i++) {
            if (i % 5 === 0) {
                grupoActual = document.createElement("div");
                grupoActual.classList.add("grupo");
               
                if(i % 15 === 0 && i!==0){
                const separador = document.createElement("div");
                separador.classList.add("separador");
                this.cuentaElement.appendChild(separador);
                
                }
                this.cuentaElement.appendChild(grupoActual);
                
            }

            
            const nuevoFosforo = document.createElement("img");
            nuevoFosforo.src = "../../imagenes/fosforo.png";
            nuevoFosforo.classList = ("fosforo" + (i % 5 + 1));
            grupoActual.appendChild(nuevoFosforo);
            
        }
    }
}
