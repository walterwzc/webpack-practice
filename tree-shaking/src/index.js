import { cube } from './math.js';

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
      'Hello webpack!',
      '5 cubed = ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());
