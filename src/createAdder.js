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
 * @return {function(...[*]): *}
 */
function createAdder(initialValue = 0) {
  let firstCall = true;
  let sum = 0;
  return (...digits) => {
    if (firstCall && digits.length === 0) {
      firstCall = false;
      return (sum += initialValue);
    }

    let firstValue = 0;

    if (firstCall) {
      firstValue = initialValue;
      firstCall = false;
    }
    return digits.length > 0 ? (
      sum += digits.reduce((a, b) => a + b, firstValue)
    ) : sum;
  };
}

module.exports = createAdder;
