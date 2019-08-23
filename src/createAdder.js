'use strict';

function createAdder(initialValue = 0) {
  let values = initialValue;

  return function(...value) {
    value.forEach(function(element) {
      values += element;
    });

    return values;
  };
}

module.exports = createAdder;
