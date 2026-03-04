const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveCount++;
  }
  if (numbers[i] < 0) {
    negativeCount++;
  }
  if (numbers[i] === 0) {
    zeroCount++;
  }
}

console.log(`Кількість позитивних чисел: ${positiveCount}`);
console.log(`Кількість негативних чисел: ${negativeCount}`);
console.log(`Кількість нульових чисел: ${zeroCount}`);

/*
//варіант 2
let positiveCount2 = 0;
let negativeCount2 = 0;
let zeroCount2 = 0;

positiveCount2 = numbers.filter((num) => num > 0).length;
negativeCount2 = numbers.filter((num) => num < 0).length;
zeroCount2 = numbers.filter((num) => num === 0).length;

console.log(`Кількість позитивних чисел: ${positiveCount2}`);
console.log(`Кількість негативних чисел: ${negativeCount2}`);
console.log(`Кількість нульових чисел: ${zeroCount2}`);
*/
