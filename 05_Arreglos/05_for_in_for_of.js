

var peliculas = ['Brave hearth', 'La vida es bella', 'Gran Torino', 'Avengers'];
console.log('\n---- For in ----');

for (let i in peliculas) { //Devuelve los indices del array
    console.log(i);
    
}

console.log('\n---- For of ----');
for (let i of peliculas) {//Devuelve una lista con los elementos del array
    console.log(i);
    
}