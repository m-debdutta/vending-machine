// MAIN PROGRAM

const dispenseOptimumCoins = function(amount, denominations) {
  const orderedDenominations = sortList(denominations);
  let newAmount = amount;
  let coins = 0;
  for (const element of orderedDenominations) {
    if ((newAmount / element) >= 1) {
      coins += Math.trunc(newAmount / element);
      newAmount = newAmount % element;
    }
  }
  return coins;
}
exports.dispenseOptimumCoins = dispenseOptimumCoins;

const sortList = function(numbers) {
  const list = numbers;
  for (let i = 1; i < list.length; i++) {
    for (let index = 0; index < list.length - i; index++) {
      if(list[index] < list[index + 1]) {
        const swapHand = list[index];
        list[index] = list[index + 1];
        list[index + 1] = swapHand;
      }
    } 
  }
  return list;
}

exports.sortList = sortList;
