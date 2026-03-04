function result(num) {
  if (num > 0) {
    console.log(num);
    num--;
    return result(num);
  }
}

result(7);
