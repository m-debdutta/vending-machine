// TESTS

const test = require('../lib/testing.js');
const vend = require('../src/vending-machine.js');
test.assertEqual(0, vend.dispenseOptimumCoins(0), "Zero rupees should give NO coin");
test.assertEqual(1, vend.dispenseOptimumCoins(1), "One rupees should give one coin");
test.assertEqual(1, vend.dispenseOptimumCoins(2), "Two rupees should give one coin");
test.assertEqual(1, vend.dispenseOptimumCoins(5), "Five rupees should give one coins");
test.assertEqual(2, vend.dispenseOptimumCoins(6), "Six rupees should give two coins");
test.assertEqual(2, vend.dispenseOptimumCoins(7), "Seven rupees should give two coins");
test.assertEqual(1, vend.dispenseOptimumCoins(10), "Ten rupees should give one coins");
test.assertEqual(2, vend.dispenseOptimumCoins(12), "Twelve rupees should give two coins");
test.assertEqual(2, vend.dispenseOptimumCoins(15), "Fifteen rupees should give two coins");

