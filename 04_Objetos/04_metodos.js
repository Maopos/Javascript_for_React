// Metodos

console.log('Metodos\n');

const persona = {
    nombre: 'Juan',
    trabajo: 'Desarrollador',
    edad: 30,
    musicaRock: true,
    
    // Metodo
    mostrarInfo: function() {
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
    }
}

persona.mostrarInfo();
