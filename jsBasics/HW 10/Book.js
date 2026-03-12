export class Book {
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 1) {
      console.log('Name is empty');
    } else {
      this._name = value;
    }
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (value.length < 1) {
      console.log('Field author is empty');
    } else {
      this._author = value;
    }
  }

  get year() {
    return this._year;
  }
  set year(value) {
    if (value < 1) {
      console.log('Year is wrong');
    } else {
      this._year = value;
    }
  }

  printInfo() {
    console.log(`name: ${this._name}`);
    console.log(`author: ${this._author},`);
    console.log(`year: ${this._year}`);
  }

  static findOldestBook(booksArrey) {
    booksArrey.sort((a, b) => a._year - b._year);
    return booksArrey[0];
  }
}
