import { Book } from './Book.js';

export class EBook extends Book {
  get format() {
    return this._format;
  }

  set format(value) {
    if (value.length < 1) {
      console.log('Field format is empty');
    } else {
      this._format = value;
    }
  }

  printInfo() {
    console.log(`name: ${this._name}`);
    console.log(`author: ${this._author},`);
    console.log(`year: ${this._year}`);
    console.log(`format: ${this._format}`);
  }

  static toEbook(bookObject, format = '**') {
    let newEbook = new EBook();
    newEbook = bookObject;
    newEbook._format = format;
    return newEbook;
  }
}
