const getbooks = require('./index');

//My Tests Suit

describe('My Tests for Book API',()=>{

	beforeEach(()=>{

	});

	beforeAll(()=>{

	});

	//1. Given that I visit the site, when I first start, I expect my list to be empty.
test('Empty List on start',()=>{

	//arrange 
	const ans = 0;
	//act
	const count = getbooks();
	//assert
	expect(count).toBe(ans);

});
	//Empty List on start
		
	afterEach(()=>{

	});

	afterAll(()=>{

	});

});