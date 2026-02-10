console.log('This is a test file.');

//console.log(1 + 5);
n = 123;
m = 123.777;
l = 1 / 0; //1/0

/*
console.log(typeof n);
console.log(typeof m);
console.log(1 / 0); //Infinity
console.log('HELLO' / 3); //NaN
console.log(Infinity); //Infinity
console.log(NaN ** 0); //ПРИВЕДЕНИЕ к числу
console.log(typeof NaN); //number
*/
/*
let str1 = 'John'; // ' and " the same
let str2 = 'hello'; //
let str3 = `hello ${str1}`;

console.log(str1);
console.log(str2);
console.log(str3);
*/
/*
let bool1 = true;
let bool2 = false;
let bool3 = 1 > 2;

console.log(bool1);
console.log(bool2);
console.log(bool3);
*/
/*
let a = null; //null - это специальное значение, которое означает "нет значения". Это не то же самое, что undefined. null - это намеренное отсутствие значения, тогда как undefined означает, что переменная была объявлена, но не была инициализирована.
let b; //undefined - это значение, которое присваивается переменной, которая была объявлена, но не была инициализирована. Это также может быть результатом обращения к несуществующему свойству объекта или вызова функции без аргументов, когда она ожидает их.
console.log(a);
console.log(b);
*/
const id = Symbol();

console.log(id);

console.log(Symbol('id') === Symbol('id')); //false, каждый символ уникален
console.log(Symbol('id')); //Symbol(id)
