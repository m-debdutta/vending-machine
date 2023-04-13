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


const dispenseOptimumCoins = function(amount, denominations) {
  const orderedDenominations = bubbleSort(denominations);
  let newAmount = amount;
  let coins = 0;
  for (const element of orderedDenominations) {
    coins += Math.trunc(newAmount / element);
    newAmount = newAmount % element;
  }
  return coins;
}

exports.dispenseOptimumCoins = dispenseOptimumCoins;
