const descargarUsuarios = cantidad => new Promise((resolve, reject) => {


    const api = 'https://randomuser.me/api/?results=' + cantidad + '&nat=us';

    const xhr = new XMLHttpRequest();

    xhr.open('GET', api, true);

    xhr.onload = () => {
        
        if (xhr.status === 200){
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }
    xhr.onerror = () => reject(Error('Error en la conexión'));

    xhr.send();
});

function imprimirHTML(resultado) {

    // for(let i in resultado){
    //     document.write(i + ': ' + resultado[i].name.title + '. ' + resultado[i].name.first + ' ' + resultado[i].name.last + '<br>');    
    // }

    let HTMLcode = '';
    resultado.forEach(i => {
        HTMLcode += `
            <ol>
            ${i.name.title}. ${i.name.first} ${i.name.last} <br>
            ${i.email} <br>
            <img src="${i.picture.large}" alt="">
            </ol>
            `;
        console.log(i);
        
    });

    document.querySelector('#app').innerHTML = HTMLcode;
}

descargarUsuarios(20).then(resultado => {

    imprimirHTML(resultado);
     
}).catch(error => {
    console.log(error);
});
