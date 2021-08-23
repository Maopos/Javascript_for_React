export class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrarInfo(){
        console.log(`La tarea ${this.nombre} tiene una prioridad ${this.prioridad}.`);
        
    }
}

export const crearTarea = (nombre, prioridad) =>{
    return new Tarea(nombre, prioridad);
}

export const tarea_1 = 'Aprender React';


