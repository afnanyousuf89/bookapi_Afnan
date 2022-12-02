class Book{
	constructor(title,author,pagelength,year){
		this.title = title;
		this.author = author;
		this.pagelength = pagelength;
		this.year = year;
	}
}

class ReadingBook{
	constructor() {
		this.allbooks = [];
	  }
}



function getbooks(){
	return new ReadingBook().allbooks.length;
}

module.exports = getbooks;