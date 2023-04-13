// MAIN PROGRAM

const bubbleSort = function(list) {
  const sortedList = list;
  for (let index = 1; index < sortedList.length; index++) {
    for (let position = 0; position < sortedList.length - 1; position++) {
      if (sortedList[position] < sortedList[position + 1]) {
        const swapHand = list[position];
        list[position] = list[position + 1];
        list[position + 1] = swapHand;
      }
    }
  }
  return sortedList;
}

exports.bubbleSort = bubbleSort;

const provideCoinCount = function(amount, denominationList) {
  const coinCountData = {};
  const orderedDenominations = bubbleSort(denominationList);
  let newAmount = amount;
  for (const denomination of orderedDenominations) {
    const coinsOfCurrentDenomination = Math.trunc(newAmount / denomination);
    newAmount = newAmount % denomination;
    coinCountData[denomination] = coinsOfCurrentDenomination;
  }
  return coinCountData;
}

const dispenseOptimumCoins = function(amount, denominationList) {
  let coins = 0;
  const coinCountList = provideCoinCount(amount, denominationList);
  for (const values of denominationList) {
    coins += coinCountList[values];
  }
  return coins;
}

exports.dispenseOptimumCoins = dispenseOptimumCoins;

const giveCoinsOfDenomination = function(amount, denominationList) {
  return provideCoinCount(amount, denominationList);
}

exports.giveCoinsOfDenomination = giveCoinsOfDenomination;
