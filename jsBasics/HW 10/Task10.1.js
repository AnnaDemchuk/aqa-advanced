import { Book } from './Book.js';
import { EBook } from './EBook.js';

const book1 = new Book();

book1.name = "Harry Potter and the Sorcerer's Stone";
book1.author = 'J.K. Rowling';
book1.year = 1997;

const book2 = new Book();
book2.name = 'The Hobbit';
book2.author = 'J.R.R. Tolkien';
book2.year = 1937;

const book3 = new Book();
book3.name = '1984';
book3.author = 'George Orwell';
book3.year = 1949;

//book1.printInfo();
//book2.printInfo();
//book3.printInfo();

const eBook1 = new EBook();

eBook1.name = 'Pride and Prejudice';
eBook1.author = 'Jane Austen';
eBook1.year = 1813;
eBook1.format = 'txt';

//eBook1.printInfo();

const arrBooks = [book1, book2, book3, eBook1];
console.log(Book.findOldestBook(arrBooks));

console.log(EBook.toEbook(book1, '*****'));

/*
const book4 = new Book();
book4.name = '';
book4.author = '';
book4.year = -5;

const eBook2 = new EBook();
eBook2.name = '';
eBook2.author = '';
eBook2.year = 0;
eBook2.format = '';
*/
