console.log('-- Functions declarations --');


function saludar(nombre) {
  console.log('Hola ' + nombre);
}


saludar('Juan');

console.log('');

// ----------------------------------------------------------------
console.log('-- Functions expressions --');

const saludar_2 = function(nombre){
    console.log('Hola', nombre);
    
};

saludar_2('Juan');
console.log('');


// Parametros default

console.log('-- Default parameters --');

function actividad(nombre = 'Mauricio', actividad = 'Estudiando'){
    console.log(`${nombre} esta ${actividad}`);
}

actividad();
actividad('Juan');
actividad(undefined, 'Montando Bici');
actividad('Juan', 'durmiendo');

console.log('');


// Arrow functions

console.log('-- Arrow Functions --');

let viajando = (destino, dia) => {
    return `Viajando a ${destino} el dia ${dia} de este mes.`;
}

let viaje;
viaje = viajando('Brasil', 30);


console.log(viaje);
