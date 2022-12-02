const MyClasses = require('./index');

const ReadingBook = new MyClasses.ReadingBook();
const Book = new MyClasses.Book();

//My Tests Suit

describe('My Tests for Book API', () => {

	beforeEach(() => {

	});

	beforeAll(() => {

	});

	//1. Given that I visit the site, when I first start, I expect my list to be empty.
	test('Empty List on start', () => {

		//arrange 
		const ans = 0;
		//act
		const count = ReadingBook.numberRead();
		//assert
		expect(count).toBe(ans);

	});
	//Empty List on start





	//2. Given that I have an empty list, when I add the first book to my list then I expect numberRead to return 1.

	test('Return 1 when I add first book', () => {
		//arrange 
		const ans = 1;
		var b = new MyClasses.Book('ABC Book','Afnan',255,1965);
		//act
		ReadingBook.addbook(b);
		const count = ReadingBook.numberRead();
		//assert
		expect(count).toBe(ans);

	});

	//3 Given that I have an empty list, when I add additional books to the list I expect the numberRead to return the total number of books in my list.
	test('Return count of total books upon adding book', () => {
		//arrange 
		var b = new MyClasses.Book('ABC Book','Afnan',255,1965);
		//act
		ReadingBook.addbook(b);
		const ans = ReadingBook.allbooks.length;

		const count = ReadingBook.numberRead();
		//assert
		expect(count).toBe(ans);

	});

	//4 Given that I have a book in my list, when I call removeBook("<title>") with "title" representing the title of my book that I want to delete, then when I call getBooks() the book I deleted should no longer be there.
	test('Delete Book by Title', () => {
		//arrange 

		ReadingBook.allbooks = new Array();

		var b = new MyClasses.Book('ABC Book','Afnan',255,1965);
		var c = new MyClasses.Book('Song of ice and fire','wasey',255,1965);

		//act
		ReadingBook.addbook(b);
		ReadingBook.addbook(c);
		const ans = ReadingBook.allbooks.length;

		ReadingBook.deletebook("ABC Book");

		const count = ReadingBook.numberRead();
		//assert
		expect(count).toBe(1);

	});





	afterEach(() => {

	});

	afterAll(() => {

	});

});