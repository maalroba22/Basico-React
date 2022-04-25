//promesas
const aplicardesceuto = new Promise((res, req) => {
  setTimeout(() => {
    let descuento = true;
    if (descuento) {
      res('Descuento Aplicado');
    } else {
      req('No se puede aplicar el descuento');
    }
  }, 3000);
});
aplicardesceuto.then((resultado) => {
  console.log(aplicardesceuto);
});

// apis ajax
const descargarusuaruis = (cantidad) =>
  new Promise((resolve, reject) => {
    const api = `https://randomuser.me//api/?results=${cantidad}&nat=us`;

    //llamdo de ajax
    const xhr = new XMLHttpRequest();

    //ABRIR LA CONEXION
    xhr.open('GET', api, true);

    // on load, cargamos la conexion
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText).results);
      } else {
        reject(Error(xhr.statusText));
      }
    };

    //opciona onerror
    xhr.onerror = (error) => reject(error);
    //sen enviar la data
    xhr.send();
  });
/* descargarusuaruis(30).then(
  (miembros) => console.log(miembros),
  (Error) => console.error(new Error('HUbo un error' + error))
); */
descargarusuaruis(30).then(
  (miembros) => imprimirHTML(miembros),
  (Error) => console.error(new Error('HUbo un error' + error))
);

function imprimirHTML(usuarios) {
  let html = '';
  usuarios.forEach((element) => {
    html += `
        <li>
            nombre: ${element.name.first} ${element.name.last}
            pais: ${element.cantidad}
            imagen:
            <img src="${element.picture.medium}"


        </li>`;
    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
  });
}
