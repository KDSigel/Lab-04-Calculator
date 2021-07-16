
import { sum, difference, product, quotent } from './utils.js';

const addFirstNum = document.getElementById('add-first-num');
const addSecondNum = document.getElementById('add-second-num');
const addButton = document.getElementById('add-btn');
const addResult = document.getElementById('add-result');


addButton.addEventListener('click', () => {
    const x = Number(addFirstNum.value);
    const y = Number(addSecondNum.value);

    const flavor = sum(x, y);

    addResult.textContent = flavor;
});