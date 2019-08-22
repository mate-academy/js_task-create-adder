'use strict';

function createAdder(initialValue = 0) {
  const values = [];
  values.push(initialValue);

  return function nowValue(...value) {
    for (const element of value) {
      values.push(element);
    };
    let sum = 0;
    for (const el of values) {
      sum = sum + el;
    }
    return sum;
  };
}

module.exports = createAdder;
