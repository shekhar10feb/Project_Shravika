// for antenna red light
const colors = ['black', 'red'];

let currentColor = 0;

const selectorThis = document.querySelectorAll('.bulbOnWireOfAntenna');

function blinkRed() {
    
    --currentColor;

    if(currentColor < 0) {
        currentColor = colors.length - 1;
    }

    for(let i=0; i<selectorThis.length; i++) {
        selectorThis[i].style.background = 
          colors[(currentColor + i) % colors.length];
    }
}

setInterval(blinkRed, 500);

// for the three lights
const bulbs = 
      document.querySelectorAll('.bulb');

let activeLight = 0;

setInterval(blinkLights, 1000);

function blinkLights() {
    bulbs[activeLight].className = 'bulb';

    activeLight++;

    if(activeLight > 2) {
        activeLight = 0;
    }

    const currentLight = bulbs[activeLight];

    currentLight.classList
      .add(currentLight.getAttribute('color'));
}