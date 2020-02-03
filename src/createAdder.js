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
  let buffer = initialValue;

  return function(...param) {
    if (Array.isArray(param) && param.length) {
      buffer += Number(param.reduce((a, b) => a + b));
    } else {
      buffer += Number(param);
    }

    return buffer;
  };
}

module.exports = createAdder;
