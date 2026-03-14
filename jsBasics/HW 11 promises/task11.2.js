function getTodos() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    if (!response.ok) {
      throw new Error('Помилка запиту');
    }
    //console.log(response);
    return response.json();
  });
}

function getUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => {
    if (!response.ok) {
      throw new Error('Помилка запиту');
    }
    // console.log(response);
    return response.json();
  });
}

const allPromises = Promise.all([getTodos(), getUsers()]);

allPromises
  .then((results) => {
    const todo = results[0];
    const user = results[1];

    console.log('TODO:', todo);
    console.log('USER:', user);
  })
  .catch((error) => {
    console.error('Error in Promise.all:', error);
  });

const racePromises = Promise.race([getTodos(), getUsers()]);

racePromises
  .then((results) => {
    const race = results;
    console.log('Race:', race);
  })
  .catch((error) => {
    console.error('Error in Promise.race:', error);
  });
