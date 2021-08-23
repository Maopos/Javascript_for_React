// Filter

const peliculas = [
    {titulo: 'El Padrino', año: '1990', protagonista: 'Al Pacino'},
    {titulo: 'Transformers', año: '1998', protagonista: 'Michael Bay'},
    {titulo: 'El rescate', año: '1997', protagonista: 'Mel Gibson'},
    {titulo: 'Titanic', año: '1998', protagonista: 'Leonardo DiCaprio'},
    {titulo: 'La Roca', año: '1999', protagonista: 'Nicolas Cage'},
];

let inicianConT = peliculas.filter(i => i.titulo.startsWith('T'));
console.log(inicianConT);

peliculas.filter(i => {
    console.log(i);
    
});

let mayor1995 = peliculas.filter(i => {
    return i.año > 1995;
    
});

console.log(mayor1995);

let titanic = peliculas.filter(i => i.titulo === 'Titanic');
console.log(titanic);


