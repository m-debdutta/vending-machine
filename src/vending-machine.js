// MAIN PROGRAM


const dispenseOptimumCoins = function(amount) {
  let coin = 0;
  return (amount % 2 === 0) ? Math.trunc(amount / 2) : Math.trunc(amount / 2) + 1;
}
exports.dispenseOptimumCoins = dispenseOptimumCoins;
