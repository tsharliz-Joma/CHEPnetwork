$ = (querySelector) => document.querySelector(querySelector);

const chepCube = $('chep-cube');

const animateUp = (object, Yposition) => {
    const position = `0 ${0 + -Math.tan(Date.now() / 1000)} ${Yposition}`;
    object.setAttribute('position', position);
    requestAnimationFrame(() => animateUp(object, Yposition));
}

animateUp(chepCube, '1.75');

