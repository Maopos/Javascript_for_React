// Filter

const peliculas = [
    {titulo: 'El Padrino', año: '1990', protagonista: 'Al Pacino', entradas: 200,},
    {titulo: 'Transformers', año: '1998', protagonista: 'Michael Bay', entradas: 1000},
    {titulo: 'El rescate', año: '1997', protagonista: 'Mel Gibson', entradas: 250},
    {titulo: 'Titanic', año: '1998', protagonista: 'Leonardo DiCaprio', entradas: 1000},
    {titulo: 'La Roca', año: '1999', protagonista: 'Nicolas Cage', entradas: 500},
];

let titanic = peliculas.find(pelicula => {
    return pelicula.titulo === 'Titanic'
    });

console.log(titanic);
console.log('');


let melGibson = peliculas.find(i => {
    return i.protagonista === 'Mel Gibson'
});

console.log(melGibson.titulo);
console.log(melGibson.año);

