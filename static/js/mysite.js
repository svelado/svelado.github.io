// Quote's and their author's index match up
var quotes = [
	'Coming together is a beginning; keeping together is progress; working together is success.',
	'Success is not final, failure is not fatal: It is the courage to continue that counts',
	'Defeat is not the worst of failures. Not to have tried is the true failure',
	"I think it is fair to say that personal computers have become the most empowering tool we've ever created. They're tools of communication, they're tools of creativity, and they can be shaped by their user.", 
	'The good news about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do.',
	'To err is human and to blame it on a computer is even more so.',
	'A leader is one who knows the way, goes the way, and shows the way.',
	' A good leader takes a little more than his share of the blame, a little less than his share of the credit.'
];

var authors = [
	'Henry Ford',
	'Winston Churchill',
	'George Edward Woodberry',
	'Bill Gates',
	'Ted Nelson',
	'Robert Orben',
	'John C. Maxwell',
	'Arnold H. Glasow'


];

var colors = [
	'#BA68C8',
	'#64B5F6',
	'#C5E1A5',
	'#E57373',
]


function init () {
	console.log("JS Started");
}

// Makes sure there are enough authors for the quotes
function quoteChecker(quotes, authors) {
	if (quotes.length == authors.length){
	console.log('Quotes and authors match');
	} else {
	console.log("Quotes and authors DON'T match");
	}
}

// Selects the index of the quote
function selectIndex (quotes) {
	var index = Math.floor((Math.random() * quotes.length) + 1);
	console.log('The selected index is ' + index);
	if(index > quotes.length - 1){
		index = index - 1;
	}
	return index;

}

function colorSelect (colors) {
	var index = Math.floor((Math.random() * 4) + 1);
	if(index > 4) { 
		index = index - 1;
	}
	return index;
}

init();
quoteChecker(quotes,authors);
var quoteIndex = selectIndex(quotes);
var quote = '"' + quotes[quoteIndex] + '"';
var author = authors[quoteIndex];
var colorIndex = colorSelect(colors);
var color = colors[colorIndex];








