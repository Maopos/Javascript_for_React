
var aprendiendo;

aprendiendo = "JavaScript";

console.log(aprendiendo);

// Scope

var musica = "Rock";

if (musica) {
    var musica = "Hip-Hop";
    console.log("Dentro del if: ", musica); 
}

console.log('Fuera del if: ', musica);
console.log('');

// --------------------------------------------

let peliculas = "Acción";

if (peliculas) {
    let peliculas = "Comedia";
    console.log("Dentro del if: ", peliculas); 
}

console.log('Fuera del if: ', peliculas);

