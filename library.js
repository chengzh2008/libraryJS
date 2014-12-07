// Book object function, it has four properties
function Book(name, author, publisher, totalPage) {
    this.name = name;
    this.author = author;
    this.publisher = publisher;
    this.totalPage = totalPage;
}

// add methods to its prototype
Book.prototype = {
    enshelf: function (shelf) {
        this.shelf = shelf;
    },

    unshelf: function () {
        delete this.shelf;
    },

    toString: function () {
        var output = "";
        output += "  Book Name: " + this.name + "\n";
        output += "     written by: " + this.author + "\n";
        output += "     published by: " + this.publisher + "\n";
        output += "     total page: " + this.totalPage;
        return output;
    }
}

// Shelf object function
function Shelf(name) {
    this.name = name
    this.books = [];
    this.numBooks = 0;
}

// add methods to its prototype
Shelf.prototype = {
    addBook: function (book) {
        book.enshelf(this);
        this.books.push(book);
        this.numBooks++;
    },

    removeBook: function (book) {
        book.unshelf(this);
        this.books = this.books.filter(function (element) {
            return element.name !== book.name;
        });
        this.numBooks--;
    },

    toString: function () {
        var output = "";
        output += "Shelf " + this.name + " has " + this.numBooks + " books.\n";
        for (var i = 0; i < this.books.length; i++) {
            output += this.books[i].toString() + "\n";
        }
        return output;
    }
}

// Library object
function Library(name) {
    this.name = name;
    this.shelves = [];
    this.numShelves = 0;
}

// add method to library prototype
Library.prototype = {
    addShelf: function (shelf) {
        this.shelves.push(shelf);
        this.numShelves++;
    },

    removeShelf: function(shelf) {
        this.shelves = this.shelves.filter(function (element) {
            return element.name !== shelf.name;
        });
        this.numShelves--;
    },

    report: function () {
        var output = "";
        output += "The library \"" + this.name + "\" has " + this.numShelves + " shelf/shelves.\n";
        output += "It contains: \n";
        for (var i = 0; i < this.shelves.length; i++) {
            var shelf = this.shelves[i];
            output += shelf.toString();
        }
        return output;
    }
}

// test Book object
var book1 = new Book("name1", "author1", "publisher1", 389);
var book2 = new Book("name2", "author2", "publisher2", 500);
console.log(book1.toString());

// test Shelf object
var shelf1 = new Shelf("A");
shelf1.addBook(book1);
shelf1.addBook(book2);
console.log(shelf1.toString());

var book3 = new Book("name3", "author3", "publisher3", 700);
shelf1.addBook(book3);
console.log(shelf1.toString());

shelf1.removeBook(book2);
console.log(shelf1.toString());



// test Library object
var book4 = new Book("name4", "author4", "publisher4", 600);
var book5 = new Book("name5", "author5", "publisher5", 1000);

var shelf2 = new Shelf("B");

shelf2.addBook(book4);
shelf2.addBook(book5);

console.log(shelf2.toString());


var library = new Library("My library");
library.addShelf(shelf1);
library.addShelf(shelf2);
console.log(library.report());
library.removeShelf(shelf1);
console.log(library.report());
