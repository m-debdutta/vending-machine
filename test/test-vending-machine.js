// TESTS

const test = require('../lib/testing.js');
const vend = require('../src/vending-machine.js');
const getCoin = vend.getNumberOfCoins 
test.assertArrayEqual(0, getCoin(0), "Zero rupees should give NO coin");
test.assertArrayEqual(1, getCoin(1), "One rupees should give one coin");
test.assertArrayEqual(5, getCoin(5), "Five rupees should give five coins");
