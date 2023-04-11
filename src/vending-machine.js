// MAIN PROGRAM


const dispenseOptimumCoins = function(amount) {
  let newAmount = amount;
  let coins = 0;
  if ((newAmount / 5) >= 1) {
    coins += Math.trunc(newAmount / 5);
    newAmount = newAmount % 5;
  }
  if (amount / 2 >= 1) {
    coins += Math.trunc(newAmount / 2);
    newAmount = newAmount % 2;
  }
  if (newAmount === 1) {
    coins += 1;
  }
  return coins
}
exports.dispenseOptimumCoins = dispenseOptimumCoins;
