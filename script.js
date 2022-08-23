const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function lampOn() {
   lamp.src= './img/acesa.jpg';
}

function lampOff() {
    lamp.src= './img/lamp.jpg';
 }

turnOn.addEventListener ("click", lampOn);
turnOff.addEventListener ("click", lampOff);