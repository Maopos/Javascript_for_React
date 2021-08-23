import {tarea_1, crearTarea, Tarea} from "./tarea.js";

console.log(tarea_1);

console.log(crearTarea('Aprender redux', 'Baja'));

const tarea_2 = new Tarea('Aprender Vue', 'Alta');

tarea_2.mostrarInfo();