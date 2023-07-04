/*
    Formas de cambiar el color de fondo:
    1. cambiando directamente la propiedad y su valor del #contenedor
     (puede ser mediante funciones llamadas dentro de cada event)
    2. teniendo una clase activo que tenga un color asignado
*/

/*
1. acceder al elemento target.addeventListener y dentro de esa funcion establecer 
el color del body
*/

const contenedor = document.getElementById('contenedor');
const caja1 = document.querySelector('.uno');
const caja2 = document.getElementsByClassName('dos')[0];
const caja3 = document.getElementsByClassName('tres')[0];


// contenedor.className = ' dos';

console.log('hola')

caja1.addEventListener('click', (event) => {
    contenedor.style.backgroundColor = ' rgb(197, 251, 198)';
    
})

caja2.addEventListener('click', (event) => {
    contenedor.style.backgroundColor = 'rgb(246, 251, 197)';

})

caja3.addEventListener('click', (event) => {
    contenedor.style.backgroundColor = 'rgb(251, 210, 197)';

})
///////////////////////////////////
const text = document.getElementsByTagName('textarea')[0]
// const contador = document.getElementById('contador');


text.addEventListener('input', (e) => {
   const valor = text.value;
   // document.write(valor.length)
   const contador = document.getElementById('contador');
   contador.textContent = valor.length;
  
})



var alumnos = [

    {
  
      nombre: 'Juan Gomez',
  
      nota: 7
  
    }, {
  
      nombre: 'Pedro Rodriguez',
  
      nota: 4
  
    }, {
  
      nombre: 'Roxana García',
  
      nota: 8
  
    }, {
  
      nombre: 'Luciano Lopez',
  
      nota: 5
  
    }, {
  
      nombre: 'Fernanda Gimenez',
  
      nota: 6
  
    }, {
  
      nombre: 'Florencia Martinez',
  
      nota: 10
  
    }, {
  
      nombre: 'Raul Sanchez',
  
      nota: 7
  
    }, {
  
      nombre: 'Sandra Figueroa',
  
      nota: 8
  
    }
  
  ];
//   console.log(alumnos.length)
  
var i;
var alumnosaprobados = [];
  for(i=0; i < alumnos.length; i++){
    if(alumnos[i].nota>=7){
        alumnosaprobados.push(alumnos[i])
    }
  }

  alumnosaprobados.forEach((a) => {
    console.log(a);
  })

//   console.log(alumnosaprobados)