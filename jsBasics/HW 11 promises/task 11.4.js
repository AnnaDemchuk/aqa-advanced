export class Requests {
  urlTodos;
  urlUsers;

  constructor() {
    this.urlTodos = 'https://jsonplaceholder.typicode.com/todos/1';
    this.urlUsers = 'https://jsonplaceholder.typicode.com/users/1';
  }

  async getRequests(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Помилка запиту');
    }
    const data = await response.json();
    console.log(data);
    return data;
  }
}

const request = new Requests();
request.getRequests(request.urlTodos);
request.getRequests(request.urlUsers);
