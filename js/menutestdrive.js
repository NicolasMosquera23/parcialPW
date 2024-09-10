const registros = {};

function registrar() {
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const estrato = document.getElementById('estrato').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const grupoSanguineo = document.getElementById('grupoSanguineo').value;
    const genero = document.getElementById('genero').value;
    const actividades = document.getElementById('actividades').value;
    const fechaTestDrive = document.getElementById('fechaTestDrive').value;
    const horaTestDrive = document.getElementById('horaTestDrive').value;

    // Validación con expresiones regulares
    const nombreRegex = /^[a-zA-Z\s]+$/;
    const telefonoRegex = /^[0-9]{10}$/;

    if (!nombreRegex.test(nombres) || !nombreRegex.test(apellidos)) {
        alert("Los nombres y apellidos solo deben contener letras.");
        return;
    }

    if (!telefonoRegex.test(telefono)) {
        alert("El teléfono debe contener 10 dígitos.");
        return;
    }

    if (email in registros) {
        registros[email]++;
        alert(`Ya has solicitado el test drive ${registros[email]} veces.`);
    } else {
        registros[email] = 1;
        alert(`Registro exitoso:\nNombres: ${nombres}\nApellidos: ${apellidos}\nEmail: ${email}\nTeléfono: ${telefono}\nEstrato: ${estrato}\nFecha de Nacimiento: ${fechaNacimiento}\nGrupo Sanguíneo: ${grupoSanguineo}\nGénero: ${genero}\nActividades Favoritas: ${actividades}\nFecha de Test Drive: ${fechaTestDrive}\nHora Solicitada: ${horaTestDrive}`);
    }
}

function cancelar() {
    window.location.href = "/menuinicio.html";  // Cambia a la URL de tu página de inicio
}
