function agregarCaracter(caracter) {
    document.getElementById('caja').value += caracter;
}

function limpiar() {
    document.getElementById('caja').value = '';
}

function calcular() {
    try {
        let resultado = eval(document.getElementById('caja').value);

        //el eval 
        document.getElementById('caja').value = resultado;
    } catch (error) {
        document.getElementById('caja').value = 'Error';
    }
}