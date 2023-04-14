// TESTS

const test = require('../lib/testing.js');
const vend = require('../src/vending-machine.js');

const testEdgeCases = function() {
  test.displayHeadline("Test for edge cases : ");
  test.assertEqual(0, vend.dispenseOptimumCoins(0,[1]),
    "Given ₹0 and denomination 1 , we should get NO coin");
  test.assertEqual(0, vend.dispenseOptimumCoins(5,[]),
    "Given ₹5 and NO denomination, we should get NO coin");
  test.assertEqual(1, vend.dispenseOptimumCoins(1,[1]), 
    "Given ₹1 and denomination 1, we should get one coin");
  test.assertEqual(2, vend.dispenseOptimumCoins(2,[1]), 
    "Given ₹2 and denomination 1, we should get two coins");
}

const testOrderedDenomination = function() {
  test.displayHeadline("Tests for ordered denomination :");
  test.assertEqual(2, vend.dispenseOptimumCoins(6,[1, 2, 5, 10]), 
    "Given ₹6 and denomination [1, 2, 5, 10] should give two coins");
  test.assertEqual(2, vend.dispenseOptimumCoins(7,[1, 2, 5, 10]), 
    "Given ₹7 and denomination [1, 2, 5, 10] should give two coins");
  test.assertEqual(4, vend.dispenseOptimumCoins(13,[1, 4, 7]), 
    "Given ₹13 and denomination [1, 4, 7] should give four coins");
}

const testUnorderdDenomination = function() {
  test.displayHeadline("Test for unordered denomination set : ");
  test.assertEqual(4, vend.dispenseOptimumCoins(13,[7, 1, 4]), 
    "Given ₹13 and denomination [7, 1, 4] should give four coins");
  test.assertEqual(2, vend.dispenseOptimumCoins(19,[2, 13, 18, 1]), 
    "Given ₹9 and denomination [2, 13, 18, 1] should give two coins");
}

const testBubbleSort = function() {
  test.displayHeadline("Test for sorting function");
  test.assertArrayEqual([ 7, 5, 3, 1 ],vend.bubbleSort([5, 3, 7, 1]),
    "Given set of [5, 3, 7, 1] should give [7, 5, 3, 1]");
}

const testNoOfCoinsOfDenomination = function() {
  test.displayHeadline("Giving number of coins of each denomination arranged in any order")
  const coinObject = vend.giveCoinsOfDenomination(19,[2, 5, 10, 1]);
  test.assertEqual(0,coinObject[1], 
    "Given ₹19 and denomination [2, 5, 10, 1] should give zero 1 rupee coin");
  test.assertEqual(2,coinObject[2], 
    "Given ₹19 and denomination [2, 5, 10, 1] should give two 2 rupee coin");
  test.assertEqual(1,coinObject[5], 
    "Given ₹19 and denomination [2, 5, 10, 1] should give one 5 rupee coin");
  test.assertEqual(1,coinObject[10], 
    "Given ₹19 and denomination [2, 5, 10, 1] should give one 10 rupee coin");
}

const tests = function() {
  testEdgeCases();
  testOrderedDenomination();
  testUnorderdDenomination();
  testBubbleSort();
  testNoOfCoinsOfDenomination();
}
tests();
