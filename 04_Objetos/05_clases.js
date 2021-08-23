class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrarInfo(){
        console.log(`La tarea ${this.nombre} tiene una prioridad ${this.prioridad}.`);
        
    }
}

// Herencia de clases

class Compra extends Tarea{
    constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    mostrarInfo(){
        super.mostrarInfo();
        console.log(`La cantidad de la compra es ${this.cantidad}.`);
    }
}

tarea_1 = new Tarea('Aprender React', 'Media');
tarea_2 = new Tarea('Aprender Vue', 'Alta');
tarea_3 = new Tarea('Aprender Bases de datos', 'Baja');
tarea_4 = new Tarea('Aprender Boostrap', 'Media');
tarea_5 = new Compra('Comprar computadora', 'Media', 5);


listaTareas = [];

listaTareas[0] = tarea_1;
listaTareas[1] = tarea_2;
listaTareas[2] = tarea_3;
listaTareas[3] = tarea_4;
listaTareas[4] = tarea_5;

for (let key of listaTareas) {
    key.mostrarInfo()
}
