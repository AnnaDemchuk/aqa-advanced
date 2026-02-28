function handleNum(number, isEvenCallback, isOddCallback) {
  if (number % 2 === 0) {
    return isEvenCallback();
  } else {
    return isOddCallback();
  }
}

function handleEven() {
  console.log(`Number is even`);
}

function handleOdd() {
  console.log(`Number is odd`);
}

handleNum(5, handleEven, handleOdd);
handleNum(8, handleEven, handleOdd);
