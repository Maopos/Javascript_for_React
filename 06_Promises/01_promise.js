// Promises

const aplicarDescuento = new Promise((resolve, reject) => {
    
    setTimeout(() => {

        let descuento = false;

        if (descuento) {
            resolve('Descuento Aplicado');
        } else {
            reject('Descuento No Aplicado');
        }


    }, 1000);

});

aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
});
    

console.log(aplicarDescuento);
