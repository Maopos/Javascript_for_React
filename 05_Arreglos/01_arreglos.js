// Arreglos

console.log('\n-- Arreglos --\n');


const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

console.log(carrito); 

const app = document.querySelector('#app');

let HTMLcode = '';
carrito.forEach(producto => {
    HTMLcode += `<li>${producto}</li><br>`;
});

app.innerHTML = HTMLcode;