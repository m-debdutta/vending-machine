// MAIN PROGRAM

const dispenseOptimumCoins = function(amount, denominations) {
  const orderedDenominations = denominations.reverse();
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
