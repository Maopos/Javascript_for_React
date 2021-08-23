// spread Operator

let arreglo_1 = [1, 2, 3, 4, 5];
let arreglo_2 = [6, 7, 8, 9, 10];

let arreglo_3 = [...arreglo_1, ...arreglo_2];

console.log(arreglo_3);



let lenguajes = ['javascript', 'java', 'c', 'c++', 'python', 'ruby', 'php', 'c#', 'go', 'scala', 'swift'];
let frameworks = ['react', 'angular', 'vue', 'meteor', 'knockout', 'polymer'];

let combinacion = [...lenguajes, ...frameworks];

console.log(combinacion);

// ------------------------------------

let [ultimo] = [...lenguajes].reverse();

console.log(ultimo);


// ------------------------------------

const suma = (a, b, c) => {console.log(a + b + c)};

const numeros = [1, 2, 3];

suma(...numeros);




