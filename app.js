
import { sum, difference, product, quotent } from './utils.js';

const addX = document.getElementById('add-X');
const addY = document.getElementById('add-Y');
const addButton = document.getElementById('add-btn');
const addResult = document.getElementById('add-result');

const subX = document.getElementById('sub-X');
const subY = document.getElementById('sub-Y');
const subButton = document.getElementById('sub-btn');
const subResult = document.getElementById('sub-result');

const multX = document.getElementById('mult-X');
const multY = document.getElementById('mult-Y');
const multButton = document.getElementById('mult-btn');
const multResult = document.getElementById('mult-result');

const divX = document.getElementById('div-X');
const divY = document.getElementById('div-Y');
const divButton = document.getElementById('div-btn');
const divResult = document.getElementById('div-result');


addButton.addEventListener('click', () => {
    const x = Number(addX.value);
    const y = Number(addY.value);

    const result = sum(x, y);

    addResult.textContent = result;
    alert('sum is ' + result);
});

subButton.addEventListener('click', () => {
    const x = Number(subX.value);
    const y = Number(subY.value);

    const result = difference(x, y);

    subResult.textContent = result;
    alert('difference is' + result);
});

multButton.addEventListener('click', () => {
    const x = Number(multX.value);
    const y = Number(multY.value);

    const result = product(x, y);

    multResult.textContent = result;
    alert('product is' + result);
});

divButton.addEventListener('click', () => {
    const x = Number(divX.value);
    const y = Number(divY.value);

    const result = quotent(x, y);

    divResult.textContent = result;
    alert('quotent is' + result);
});