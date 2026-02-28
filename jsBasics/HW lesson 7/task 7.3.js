function divide(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error(`denominator is 0`);
    }

    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
      throw new Error(`numerator or denominator is no number`);
    }

    return numerator / denominator;
  } finally {
    console.log('The work is finished');
  }
}

console.log(divide(9, 4));
//console.log(divide(10, 0));
//console.log(divide('12', 6));
//console.log(divide(55, 'a'));
