/*
Define a Book object, containing the information:

* title,
* author,
* published year,
* pages number,
* is it currently reserved.

Create some objects, instances of the Book class.

Define a Library object, containing:

* name,
* address,
* array of books,

The library should have the following methods: 

* adding a book, 
* searching for a book by title (use `Array.find()`), 
* deleting a book (by title or by position in the array of books)
* reserving a book (and un-reserving when returned).
*/

//Book class constructor
// function Book(title, author, year, pages) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.pages = pages;
//   this.isReserved = false;
// }

// var book1 = new Book("Knyga1", "Autorius1", 2021, 100);
// var book2 = new Book("Knyga2", "Autorius2", 2000, 500);
// console.log(book1);
// console.log(book2);

// //Library class constructor
// function Library(name, address) {
//   this.name = name;
//   this.address = address;
//   this.books = [];

//   //adding a book to the library
//   this.add = function (book) {
//     this.books.push(book);
//   };

//   //TODO rest of methods

//   // searching for a book by title (use `Array.find()`),
//   this.find = function (title) {
//     this.books.find((books) => this.books === "title");
//   };
// }

// var library1 = new Library("Mano library1", "Adresas1");
// library1.add("Knyga1");
// library1.add("Knyga2");
// console.log(library1);

/*
//sample calls
var book = new Book("War and Peace", "Leo Tolstoy", 1867, 999);
var book2 = new Book("Ulysses", "James Joyce", 1922, 777);
var library = new Library("my library", "my city");

library.add(book);
library.add(book2);
library.search("Some other book");
library.search("War and Peace");

library.reserve("War and Peace");

*/

// https://javascript.info/array-methods#find-and-findindex
// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// let user = users.find((item) => item.id == 1);

// console.log(user.name);
