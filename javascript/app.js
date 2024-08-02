
function validar() {

    let miformulario = document.forms["formulario"]
    let patronNombre = /^[a-zA-Z\s]{5,30}$/;

    let patronEmail = /^\S+@\S+\.\S+$/;
    let parrafo = document.getElementById("parrafo")


    let nombre = miformulario.nombre;
    let email = miformulario.gmail
    let apellido = miformulario.apellido;
    let mensaje = miformulario.mensaje


    if (patronNombre.test(nombre.value) && patronEmail.test(email.value) && patronNombre.test(apellido.value) && mensaje.value != "") {


        parrafo.innerText = "Datos ingresados correctamente"
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        table.appendChild(thead);
        table.appendChild(tbody);

        table.id = 'tabla';
        miformulario.appendChild(table);
        
        miformulario.style.position = 'relative';
        miformulario.style.left = '-10px';

        let tr1 = document.createElement('tr');
        let thead1 = document.createElement('th');
        thead1.innerHTML = 'Nombre';
        let thead2 = document.createElement('th');
        thead2.innerHTML = 'Apellido';
        let thead3 = document.createElement('th');
        thead3.innerHTML = 'Email';
        let thead4 = document.createElement('th');
        thead4.innerHTML = 'Mensaje';

        tr1.appendChild(thead1);
        tr1.appendChild(thead2);
        tr1.appendChild(thead3);
        tr1.appendChild(thead4);
        thead.appendChild(tr1);


        let array = [nombre.value, apellido.value, email.value, mensaje.value];
        for (let i = 0; i < array.length; i++) {

            let tr2 = document.createElement('tr');
            let td2Nombre = document.createElement('td');
            td2Nombre.innerHTML = array[0]
            let td2Apellido = document.createElement('td');
            td2Apellido.innerHTML = array[1]
            let td2Gmail = document.createElement('td');
            td2Gmail.innerHTML = array[2]
            let td2Mensaje = document.createElement('td');
            td2Mensaje.innerHTML = array[3]
            tr2.appendChild(td2Nombre);
            tr2.appendChild(td2Apellido);
            tr2.appendChild(td2Gmail);
            tr2.appendChild(td2Mensaje);
            tbody.appendChild(tr2);

            break;

        }



    } else if (nombre.value == "" || email.value == "" || apellido.value == "" || mensaje.value == "") {


        parrafo.innerText = "No deje espacios en blanco."
        return false;


    } else {

        if (!patronNombre.test(nombre.value)) {

            nombre.style.borderColor = "red"

        } if (!patronNombre.test(nombre.value)) {

            parrafo.innerText = "El nombre tiene que tener cinco caracteres o mas."

        } if (!patronNombre.test(apellido.value)) {
            apellido.style.borderColor = "red"
        } if (!patronNombre.test(apellido.value)) {
            parrafo.innerText = "El apellido tiene que tener cinco caracteres o mas."

        }

        if (!patronEmail.test(email.value)) {
            email.style.borderColor = "red"

        } if (!patronEmail.test(email.value)) {

            parrafo.innerText = "El email tiene que tener un arroba y terminar en .com"


        } if (mensaje.value == "") {
            mensaje.style.borderColor = "red"


            return false;
        }


    }


}
