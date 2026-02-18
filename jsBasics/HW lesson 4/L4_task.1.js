let myString;
let myNumber;
let myBoolean;
let myNull;
let myUndefined;

myString = 'Hello, World!';
myNumber = 42;
myBoolean = true;
myNull = null;
myUndefined = undefined;

console.log(typeof myString + ':' + `${myString}`); //string
console.log(typeof myNumber + ':' + `${myNumber}`); //number
console.log(typeof myBoolean + ':' + `${myBoolean}`); //boolean
console.log(typeof myNull + ':' + `${myNull}`); //object, это историческая ошибка в JavaScript, которая сохраняется для совместимости. На самом деле, null не является объектом, а представляет собой примитивное значение, которое означает "нет значения" или "пустое значение".
console.log(typeof myUndefined + ':' + `${myUndefined}`); //undefined
