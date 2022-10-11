const lamp = document.getElementById('lamp')
const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')



function acenderOn(){
   if (!eIsso()){
   lamp.src = "./lamppeqena.jpg"
   }
}


function apagar(){
    if(!eIsso()){
    lamp.src = "./lambrok.jpg"
    }
}

function quebrar(){
    lamp.src = "./lampQuebrada.jpg"
}

function eIsso(){
   return lamp.src.indexOf('Quebrada') > -1
}
turnOn.addEventListener('click', acenderOn);
turnOff.addEventListener('click', apagar);
lamp.addEventListener('dblclick', quebrar);
lamp.addEventListener('mouseenter', acenderOn);
lamp.addEventListener('mouseleave', apagar);
