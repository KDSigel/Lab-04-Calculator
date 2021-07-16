import { sum, difference, product, quotent } from './utils.js';


const test = QUnit.test;

test('add should take in 13 and 44 and return 57', (expect) => {

    const expected = 57;
    
    const actual = sum(13, 44);

    expect.equal(actual, expected);
});

test('difference should take in 44 and 22 and return 22', (expect) => {

    const expected = 22;
    
    const actual = difference(44, 22);

    expect.equal(actual, expected);
});

test('product should take in 3 and 22 and return 66', (expect) => {

    const expected = 66;
    
    const actual = product(3, 22);

    expect.equal(actual, expected);
});

test('quotent should take in 35 and 7 and return 5', (expect) => {

    const expected = 5;
    
    const actual = quotent(35, 7);

    expect.equal(actual, expected);
});