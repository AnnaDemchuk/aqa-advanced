const car1 = { brand: 'Volvo', model: 'A1', year: 2012 };
const car2 = { brand: 'Skoda', model: 'B1', year: 2014 };

const cars = { car1: { ...car1 }, car2: { ...car2 } };
//можна тільки з car1:, car2: Якщо ключі однакові  — друге значення перезапише перше
console.log(cars);
