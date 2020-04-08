'use strict';

/**
 * Write a function (factory) creating a function (device) returning the sum of
 * initialValue and all the arguments of current and all previous calls. By
 * default initial value is 0.
 *
 * For example:
 *
 * const adder1 = createAdder()
 * console.log(adder1()); // 0
 * console.log(adder1(10, 20)); // 30 = 0 + (10 + 20)
 * console.log(adder1(30, 40)); // 100 = 0 + (10 + 20) + (30 + 40)
 *
 * const adder2 = createAdder(100);
 * console.log(adder2(10)); // 110 = 100 + 10
 * console.log(adder2(20, 30, 40)); 200 = 100 + 10 + (20 + 30 + 40)
 * console.log(adder2()); 200 = the same as previous
 *
 * @param {number} initialValue
 *
 * @return {number}
 */
function createAdder(initialValue = 0) {
  // write code here
  let initVal = initialValue;

  const device = (...args) => {
    const currentSum = [...args].reduce((accum, value) => accum + value, 0);

    initVal += currentSum;

    return isNaN(initVal) ? 0 : initVal;
  };

  return device;
}

module.exports = createAdder;
