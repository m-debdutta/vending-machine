const test = require('../lib/testing.js');
const vend = require('../src/vending-machine.js');

test.assertEqual(5,vend.giveNumber(),"its should work")
test.assertEqual(5,4,"its should work")
test.assertArrayEqual([1,2,3],[1,2,3],"it should works");
test.assertArrayEqual([1,2],[1],"this shouldn't work");
