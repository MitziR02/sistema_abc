var personas = [];

function Persona(nombre, rfc, direccion, correo) {
    this.nombre = nombre;
    this.rfc = rfc;
    this.direccion = direccion;
    this.correo = correo;
}

function alta() {


    var nombre = document.getElementById('nombre').value;
    var rfc = document.getElementById('rfc').value;
    var direccion = document.getElementById('direccion').value;
    var correo = document.getElementById('correo').value;

    // Verificar que los campos requeridos no estén vacíos
    if (!nombre || !rfc || !correo) {
        alert('Por favor, completa todos los campos requeridos: Nombre, RFC y Correo');
        return;
    }

    var nuevaPersona = new Persona(nombre, rfc, direccion, correo);
    personas.push(nuevaPersona);

    document.getElementById('altas').style.display = 'block';

    mostrarAltas();
    limpiarFormulario();
}


function baja() {

    document.getElementById('resultado').style.display = 'block';
    document.getElementById('altas').style.display = 'block';


    var rfc = document.getElementById('rfc').value;
    var index = -1;

    for (var i = 0; i < personas.length; i++) {
        if (personas[i].rfc === rfc) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        personas.splice(index, 1);
        document.getElementById('resultado').innerHTML = "Baja exitosa.";
        mostrarAltas();
        limpiarFormulario();
    } else {
        document.getElementById('resultado').innerHTML = "Persona no encontrada. Verifique el RFC";
    }
}

function consulta() {
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('altas').style.display = 'block';


    var rfc = document.getElementById('rfc').value;

    for (var i = 0; i < personas.length; i++) {
        if (personas[i].rfc === rfc) {
            document.getElementById('resultado').innerHTML =
                "<h2>Consulta</h2>" + "<br>" +
                "<b>Nombre:</b> " + personas[i].nombre + "<br>" +
                "<b>RFC:</b> " + personas[i].rfc + "<br>" +
                "<b>Dirección:</b> " + personas[i].direccion + "<br>" +
                "<b>Correo:</b> " + personas[i].correo;
            return;
        }
    }

    document.getElementById('resultado').innerHTML = "Persona no encontrada. Verifique el RFC";
}

function mostrarAltas() {

    var altasHtml = "<h2>Altas Registradas</h2>";

    for (var i = 0; i < personas.length; i++) {
        altasHtml +=
            "<p>" +
            "<b>Nombre:</b> " + personas[i].nombre + ", " +
            "<b>RFC:</b> " + personas[i].rfc +
            "</p>";
    }

    document.getElementById('altas').innerHTML = altasHtml;
}

function limpiarFormulario() {
    document.getElementById('nombre').value = "";
    document.getElementById('rfc').value = "";
    document.getElementById('direccion').value = "";
    document.getElementById('correo').value = "";
}
