const users = [
  { name: 'John', lastname: 'Kennedy', age: 30 },
  { name: 'Jane', lastname: 'Kennedy', age: 25 },
];

for (let user of users) {
  console.log(user.name, user.lastname, user.age);
}

for (const { name, lastname, age } of users) {
  console.log(name, lastname, age);
}
