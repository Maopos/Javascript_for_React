// Template Strings

const nombre = 'Mauricio';
const trabajo = 'programador';

console.log('Nombre', nombre, ', Trabajo', trabajo);
console.log(`Nombre ${nombre}, Trabajo ${trabajo}`);


// Concatenar ultiples lineas

const contenedorApp = document.querySelector('#app');

let HTMLcode = `
                <h1>Template Strings</h1>   
                <ul>
                    <li>Nombre: ${nombre}</li>
                    <li>Trabajo: ${trabajo}</li>
                </ul>                
                `;

contenedorApp.innerHTML = HTMLcode;