'use strict';

function createAdder(initialValue = 0) {
  let numbersSum = initialValue;

  return (...numbers) => {
    numbersSum = numbers.reduce((a, number) => a + number, numbersSum);

    return numbersSum;
  };
}

module.exports = createAdder;
