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

	deletebook(title)
	{
		for(let i=0;i<this.allbooks.length;i++){

			var b = this.allbooks[i];
			if(b.title == title){
				this.allbooks.splice(i,1);
			}

		}


	}
	checkbook(b)
	{
		for(let i=0;i<this.allbooks.length;i++){

			// var b = this.allbooks[i];
			if(title in this.addbooks){
			}

		}


	}
	
	

}



/*

var sReadingBook = new ReadingBook();

		var b = new Book('ABC Book','Afnan',255,1965);
		var c = new Book('Song of ice and fire','wasey',255,1965);

		//act
		sReadingBook.addbook(b);
		sReadingBook.addbook(c);
		
		const ans = sReadingBook.allbooks.length;
		console.log(sReadingBook.allbooks);


		sReadingBook.deletebook("ABC Book");
		console.log(sReadingBook.allbooks);


*/


module.exports = {
	ReadingBook: ReadingBook,
	Book : Book
}