async function getTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (!response.ok) {
    throw new Error('Помилка запиту');
  }
  const data = await response.json();
  console.log(data);
  return data;
}

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

  if (!response.ok) {
    throw new Error('Помилка запиту');
  }
  const data = await response.json();
  console.log(data);
  return data;
}

getUsers();
getTodos();
