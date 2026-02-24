function square(width, height) {
  return width * height;
}

let s = square(4, 9);
console.log(s);

let result1 = function (width, height) {
  return width * height;
};
console.log(result1(5, 6));

let result2 = (width, height) => width * height;
console.log(result2(5, 3));
