const formularioPreinscripcion = document.getElementById('formularioPreinscripcion');
const estadoPreinscripcion = document.getElementById('estadoPreinscripcion');

formularioPreinscripcion.addEventListener('submit', event => {
    event.preventDefault();
    const propuesta = formularioPreinscripcion.elements.propuesta.selectedOptions[0].textContent;
    estadoPreinscripcion.textContent =
        `Revisamos tus datos para ${propuesta}. Este sitio todavía no los envía ni los guarda; para completar la inscripción, comunicate con la institución.`;
});

formularioPreinscripcion.addEventListener('input', () => {
    estadoPreinscripcion.textContent = '';
});
