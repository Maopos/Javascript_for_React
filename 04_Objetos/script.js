// Objetos

// Literal Objects

const persona = {
    nombre: 'Mauricio',
    apellido: 'Posada',
    edad: 41,
    direccion: {
        calle: 'Calle 123 Carrera 45b - 6',
        ciudad: 'Santiago de Cali',
        pais: 'Colombia'
    }

}

console.log(persona);

console.log('\n-------------------------------------------\n');


// Object Constructor

function Tarea(nombre, prioridad){
    this.nombre = nombre;
    this.prioridad = prioridad;
}  

// Agregar un prototype a Tarea

Tarea.prototype.mostrarInformationTarea =  function (){

    return `La tarea ${this.nombre} tiene una prioridad de ${this.prioridad}`;
}

const tarea_1 = new Tarea('Aprender JavaScript', 'Urgente');
const tarea_2 = new Tarea('Aprender React', 'Media');

console.log(tarea_1);
console.log(tarea_1.nombre);
console.log(tarea_1.mostrarInformationTarea());

console.log(tarea_2.mostrarInformationTarea());
document.write(tarea_2.mostrarInformationTarea());






