import { Contador } from "./contador.js";

const modal = document.querySelector("dialog");

// Verifica si hay una partida guardada en localStorage
const partidaEnMemoria = JSON.parse(localStorage.getItem("cant")) || {};
const p1Nombre = "Nosotros";
const p2Nombre = "Ellos";

// Inicializa los contadores con un valor por defecto en caso de que no haya partida guardada
const p1 = new Contador(p1Nombre, document.getElementById("jugador1Container"), partidaEnMemoria[p1Nombre] || 0);
const p2 = new Contador(p2Nombre, document.getElementById("jugador2Container"), partidaEnMemoria[p2Nombre] || 0);

document.getElementById("reset").addEventListener("click", () => modal.showModal());
document.getElementById("volver").addEventListener("click", () => modal.close());
document.getElementById("aceptar").addEventListener("click", () => {
    p1.reset();
    p2.reset();
    modal.close();
});

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const partidaAGuardar = {
            [p1.nombre]: p1.numero,
            [p2.nombre]: p2.numero,
        }
        localStorage.setItem("cant", JSON.stringify(partidaAGuardar));
    })
});


