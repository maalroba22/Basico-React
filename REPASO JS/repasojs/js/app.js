// CREAR VARIABLES
var aprendiendo = true;
aprendiendo = 'js';
console.log(aprendiendo);

// scope con var sobre escribe la variable gobal

var musica = 'Rock';
if (musica) {
  var musica = 'vallenato';
  console.log('dentro de musica', musica);
}
console.log('fuera del if', musica);

//scope con let las variables conservar su valor en su sacope
console.log('-----------------------');

let musica1 = 'Rock';

if (musica1) {
  let musica1 = 'vallenato';
  console.log('dentro del if', musica1);
}

console.log('fuera del if', musica1);

//template staring
console.log('---------------------');
const nombre = 'manuel romero';
const empleo = 'Ing Sistemas';

console.log('Nombre:' + nombre + 'Cargo' + empleo);

// nueva forma de concatenar con template string
console.log(`Nombre ${nombre} Empleo ${empleo}`);

// concatenar con const y multiples lineas
const contenedorApp = document.querySelector('#app');
const nombrec = 'Manuel Romero';
const empleoc = 'ing Sistmas';

// frpma tradicional
let html =
  '<ul>' +
  '<li> Nombre :' +
  nombrec +
  '</li>' +
  '<li> empleoc :' +
  empleoc +
  '</li>' +
  '</ul>';
// contenedorApp.innerHTML = html;

// con template sccrip
const contenedorapp1 = document.querySelector('#app');

let html1 = `<ul>
  <li>Nombre: ${nombre}</li>
  <li>Empleo: ${empleo}</li>
</ul>`;
contenedorapp1.innerHTML = html1;
