// MAIN PROGRAM



const dispenseOptimumCoins = function(amount) {
  const denomination = [10, 5, 2, 1];
  let newAmount = amount;
  let coins = 0;
  for (let index = 0; index < denomination.length; index++) {
    if ((newAmount / denomination[index]) >= 1) {
      coins += Math.trunc(newAmount / denomination[index]);
      newAmount = newAmount % denomination[index];
    }
  }
  return coins
}
exports.dispenseOptimumCoins = dispenseOptimumCoins;
