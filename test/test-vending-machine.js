// TESTS

const test = require('../lib/testing.js');
const vend = require('../src/vending-machine.js');

test.assertEqual(0, vend.dispenseOptimumCoins(0,[1]), "Given zero rupees and 1 denomination, we should get NO coin");
test.assertEqual(0, vend.dispenseOptimumCoins(5,[]), "Given five rupees and NO denomination, we should get NO coin");

test.assertEqual(1, vend.dispenseOptimumCoins(1,[1]), "Given one rupees and 1 denomination, we should get one coin");
test.assertEqual(2, vend.dispenseOptimumCoins(2,[1]), "Given two rupees and 1 denomination, we should get two coins");

test.assertEqual(3, vend.dispenseOptimumCoins(5,[1, 2]), "Given five rupees and 1,2 denomination, we should get three coins");
test.assertEqual(2, vend.dispenseOptimumCoins(6,[1, 2, 5, 10]), "Given six rupees should give two coins");
test.assertEqual(2, vend.dispenseOptimumCoins(7,[1, 2, 5, 10]), "Given seven rupees should give two coins");

test.assertEqual(1, vend.dispenseOptimumCoins(10,[1, 2, 5, 10]), "Ten rupees should give one coins");
test.assertEqual(2, vend.dispenseOptimumCoins(12,[1, 2, 5, 10]), "Twelve rupees should give two coins");
test.assertEqual(2, vend.dispenseOptimumCoins(15,[1, 2, 5, 10]), "Fifteen rupees should give two coins");
test.assertEqual(2, vend.dispenseOptimumCoins(15,[1, 2, 5, 10]), "Fifteen rupees should give two coins");
test.assertEqual(4, vend.dispenseOptimumCoins(17,[1, 4, 6]), "Seventeen rupees should give four coins");
test.assertEqual(2, vend.dispenseOptimumCoins(19,[1, 2, 13, 18]), "Nineteen rupees should give two coins");

test.assertEqual(4, vend.dispenseOptimumCoins(13,[1, 4, 7]), "Thirteen rupees should give four coins");

