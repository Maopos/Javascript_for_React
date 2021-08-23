// Reduce es una función que recibe una función y un array como parámetros.

const peliculas = [
    {titulo: 'El Padrino', año: '1990', protagonista: 'Al Pacino', entradas: 200},
    {titulo: 'Transformers', año: '1998', protagonista: 'Michael Bay', entradas: 1000},
    {titulo: 'El rescate', año: '1997', protagonista: 'Mel Gibson', entradas: 250},
    {titulo: 'Titanic', año: '1998', protagonista: 'Leonardo DiCaprio', entradas: 1000},
    {titulo: 'La Roca', año: '1999', protagonista: 'Nicolas Cage', entradas: 500},
];

let totalEntradas = peliculas.reduce((acumulador, i) => {
    return acumulador + i.entradas;
}, 0);

console.log('Total Entradas: ' + totalEntradas);

let promedioEntradas = totalEntradas / peliculas.length;
console.log('Promedio entradas: ' + promedioEntradas);
