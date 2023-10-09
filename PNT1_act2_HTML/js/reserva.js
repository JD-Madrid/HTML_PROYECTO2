function hacerReserva() {
    let botonSucuralCliente = document.getElementById("boton-sucursal")
    botonSucuralCliente.addEventListener("click", seleccionarSucursal)
}

function seleccionarSucursal() {
    let sectionSeleccionarSucursal = document.getElementById("seleccionar-sucursal")
    sectionSeleccionarSucursal.style.display = "none"
    let hacerReservaSection = document.getElementById("hacer-reserva")

    let inputPalermo = document.getElementById("suc-palermo")
    let inputCaballito = document.getElementById("suc-caballito")
    let spanSucursalCliente = document.getElementById("reserva-cliente")
    let encabezado = document.getElementById("titulo-sucursal")
    encabezado.style.display = "none"

    if (inputPalermo.checked) {
        spanSucursalCliente.innerHTML = "Sucursal Gurruchaga 1332 - Palermo"
        hacerReservaSection.style.display = "block"
    } else if (inputCaballito.checked) {
        spanSucursalCliente.innerHTML = "Sucursal Malvinas Argentinas 4040 - Caballito"
        hacerReservaSection.style.display = "block"
    } else {
        alert("Selecciona una sucursal")
    }
}

function enviarDatos() {

    if (confirm("Está seguro de enviar el formulario?")) {

        let resulUsuario = validarNombreYApellido(document.getElementById('txtNombreApellido').value);

        if (resulUsuario == true) {
            var resulEmail = ValidarEmail(document.getElementById('txtCorreo'))
           
        }
        if (resulUsuario == true && resulEmail == true) {
            var resulFecha = validarFecha(document.getElementById('txtFecha'));
            var resulTelefono = validarNroTel(document.getElementById('txtTelefono'));
        }

        if (resulUsuario == true && resulFecha == true && resulTelefono == true) {
            alert("Datos correctos! Reserva exitosa!");
            return true;
        }
        else {
            alert("Revise los datos que están mal cargados!");
            return false;
        }
    }
    else {
        return false;
    }
}

function validarNombreYApellido(nombreYApellido) {
    if (nombreYApellido != '') {
        return true;
    }
    else {
        alert("El campo Nombre y apellido es de carga obligatoria!");
        document.getElementById('txtNombreApellido').focus();
        return false;
    }
}

function ValidarEmail(mail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("Ingresaste un mail inválido!");
        return false;
    }
}

/* No pude validar la fecha */
function validarFecha(fecha) {
    let fechaReservaSeleccionada = new Date(fecha.getDate);
    let fechaActual = new Date();

    if (fechaReservaSeleccionada.getDate < fechaActual.getDate) {
        alert('La fecha de reserva no puede ser anterior a la fecha actual.');
        campoFechaReserva.value = '';
        return false;
    } else {
        return true;
    }
}

function validarNroTel(tlf) {
    var nrotel = /^\d{10}$/;

    if (tlf.value.match(nrotel)) {
        /* alert("Teléfono Válido!"); */
        return true;
    }
    else {
        alert("Teléfono Inválido");
        document.getElementById('txtTelefono').value = '';
        document.getElementById("txtTelefono").focus();
        return false;
    }
}


window.addEventListener("load", hacerReserva)