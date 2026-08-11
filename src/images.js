import perfume from './img/perfume.png?format=webp&quality=80'

const imagen = document.createElement('img')
imagen.src = perfume
document.body.appendChild(imagen)

console.log('Imagen procesada:', perfume)