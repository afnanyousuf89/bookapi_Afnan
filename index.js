class Book {
	constructor(title, author, pagelength, year) {
		this.title = title;
		this.author = author;
		this.pagelength = pagelength;
		this.year = year;
	}
}

class ReadingBook {
	constructor() {
		this.allbooks = [];
	}

	numberRead() {
		return this.allbooks.length;
	}

	addbook(b) {
		this.allbooks.push(b);
	}

}







module.exports = {
	ReadingBook: ReadingBook,
	Book : Book
}