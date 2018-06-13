
// Challenge 1
// output tree where nth line displays n #
function makeTree(n) {
	for (var i = 0; i < 8; i++) {
		console.log('#'.repeat(i));
	}
}

makeTree(8);

// Challenge 2
// test if divisible by 2
function isEven(n) {
	n % 2 == 0 ? 
		console.log('the number is even') : 
		console.log('the number is odd')
}

// tests
isEven(10);
isEven(11);

