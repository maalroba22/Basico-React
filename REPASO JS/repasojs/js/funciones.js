console.log('bienvenido manuel');

// funcion declarate
function saludar(nombre) {
  console.log(`Bienvenido ${nombre}`);
}

saludar('perro');
// function expression
const nombreCliente = function (cliente) {
  console.log(`Cliente Vip ${cliente}`);
};

nombreCliente('ine');

// parametros por default en las funtion

function actividades(nombre = 'emanuel', actividad = 'programador+') {
  console.log(`lapersona: ${nombre} esta realizadno
    la actividad ${actividad}`);
}
actividades('Manuel', 'jugando futbol');
actividades();

//arrow function

const viajando = (destino) => `viajando a ${destino}`;
// let viajes = viajando('barcelona');
console.log(viajando());

// objetos literales

const persona = {
  name: 'manuel',
  profesion: 'Ing siatemas',
  edad: 32,
};
console.log(persona.name);

// Object connstrstor
function Tarea(nombre, urgencia) {
  (this.nombre = nombre), (this.urgenciac = urgencia);
}
const tareas = new Tarea('matematica', 'alta');
console.log(tareas);

// destructurin de objetos
const aprendiendojs = {
  version: {
    nueva: 'Es6',
    vieja: 'Es5',
  },
  famework: ['recat', 'react', 'angular'],
};
let { nueva } = aprendiendojs.version;
console.log(nueva);

// funcion map
const carrito = ['arroz', 'pollo', 'pescado'];
const carritoapp = document.querySelector('#app');

let data = '';
carrito.forEach((elemento) => {
  data += `<li>${elemento}</li>`;
});
carritoapp.innerHTML = data;

// expres operaitor
let lenguaje = ['js', 'php', 'visual.net'];
let framework = ['react', 'laravel', 'djsango'];
let combinacion = [...lenguaje, ...framework];
console.log(combinacion);

function suma(a, b, c) {
  console.log(a + b + c);
}
const numeros = [1, 2, 3];
suma(...numeros);
//metodos para arreglos
const personas = [
  { nombre: 'manuel', edad: '32', prendiendo: 'js' },
  { nombre: 'ine', edad: '34', prendiendo: 'ingles' },
  { nombre: 'emanuel', edad: '2', prendiendo: 'hablar' },
  { nombre: 'ximena', edad: '4', prendiendo: 'cantar' },
  { nombre: 'roberto', edad: '23', prendiendo: 'react' },
];

//buscamos con fileter
// mayores de 20
const mayores = personas.filter((persona) => {
  return persona.edad > 20;
});
console.log(mayores);

// que aprende ine
const ine = personas.find((perosna) => {
  return perosna.nombre === 'ine';
});
console.log(ine);

// sumar las edades de las personas
let sumaedades = personas.reduce((edadt, p) => {
  return (edadt += p.edad);
}, 0);

console.log(sumaedades);
