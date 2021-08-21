// Object Literal Enhacement

console.log('Object Literal Enhacement\n');

const marca = 'Toyota';
const segmento = 'Suv';
const modelo = ['Rav4', 'Prado', 'Yaris', 'BZ4X']

// Manera anterior
const toyota_1 = {
    marca: marca,
    segmento: segmento,
    modelo: modelo
}

console.log(toyota_1);


// Manera nueva

const toyota = {marca, segmento, modelo};

console.log(toyota);
