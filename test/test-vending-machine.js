// TESTS

const test = require('../lib/testing.js');
const vend = require('../src/vending-machine.js');
test.assertEqual(0, vend.dispenseOptimumCoins(0,[1, 2, 5, 10]), "Zero rupees should give NO coin");
test.assertEqual(1, vend.dispenseOptimumCoins(1,[1, 2, 5, 10]), "One rupees should give one coin");
test.assertEqual(1, vend.dispenseOptimumCoins(2,[1, 2, 5, 10]), "Two rupees should give one coin");
test.assertEqual(1, vend.dispenseOptimumCoins(5,[1, 2, 5, 10]), "Five rupees should give one coins");
test.assertEqual(2, vend.dispenseOptimumCoins(6,[1, 2, 5, 10]), "Six rupees should give two coins");
test.assertEqual(2, vend.dispenseOptimumCoins(7,[1, 2, 5, 10]), "Seven rupees should give two coins");
test.assertEqual(1, vend.dispenseOptimumCoins(10,[1, 2, 5, 10]), "Ten rupees should give one coins");
test.assertEqual(2, vend.dispenseOptimumCoins(12,[1, 2, 5, 10]), "Twelve rupees should give two coins");
test.assertEqual(2, vend.dispenseOptimumCoins(15,[1, 2, 5, 10]), "Fifteen rupees should give two coins");
test.assertEqual(2, vend.dispenseOptimumCoins(15,[1, 2, 5, 10]), "Fifteen rupees should give two coins");
test.assertEqual(4, vend.dispenseOptimumCoins(17,[1, 4, 6]), "Seventeen rupees should give four coins");
test.assertEqual(2, vend.dispenseOptimumCoins(19,[1, 2, 13, 18]), "Nineteen rupees should give two coins");

