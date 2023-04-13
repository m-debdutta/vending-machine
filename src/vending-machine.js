// MAIN PROGRAM

const swap = function(list, index1, index2) {
  const swapHand = list[index1];
  list[index1] = list[index2];
  list[index2] = swapHand;
  return list;
}

exports.swap = swap;

const bubbleSort = function(list) {
  const sortedList = list;
  for (let index = 1; index < sortedList.length; index++) {
    for (let position = 0; position < sortedList.length - 1; position++) {
      if (sortedList[position] < sortedList[position + 1])
        swap(sortedList, position, position + 1);
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
