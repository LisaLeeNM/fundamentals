/*
 * Conditionals, Functions, Scope and Loops.
 */

// Equals
// The 3 equal signs prevents type conversions; this is standard comparison operator for equals; however, there is syntax to compare types with 2 equal signs
let equals = 1 === 1;
console.log(equals);

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than Equals
let greaterThanEq = 5 >= 5;

// Less Than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;


let storeA = 4.40;
let storeB = 4.40;

let storeAIsLower = storeA > storeB;

// Else will always execute if previous comparisons are false
if (storeAIsLower) {
	console.log("Store A has a lower price.")
} else if (storeB < storeA) {
	console.log("Store B has a lower price.")
} else {
	console.log("Their prices are equal.")
}

console.log(storeAIsLower);


// Functions are ways to encapsulate our code in a way that's reusable; visually similar to if block except that it's named
// Functions generally should not be longer than 20 lines of code and only do one thing
function compareStorePrices (storeA, storeB) {
	let storeAIsLower = storeA < storeB;
	if (storeAIsLower) {
		console.log("Store A has a lower price.")
	} else if (storeB < storeA) {
		console.log("Store B has a lower price.")
	} else {
		console.log("Their prices are equal.")
	}
}

compareStorePrices(10, 5);
compareStorePrices(7, 10);

function squareNum(number) {
	return number * number;
}

let squaredNumber = squareNum(56);
console.log(squaredNumber);

/*...*/
/*...*/
/*...*/

let x = 10;

function addNumbers (n, m, x) {
	console.log(x);
	let b;
	if (1===1) {
		b = 8;
	}
	console.log(b);
	return n + m;
}

addNumbers(2, 3, 8);


/*...*/
/*...*/
/*...*/

//              0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen = ourArray.length;
for(let i=0; i<arrLen; i++){
	//console.log("i is equal to: " + i);
	console.log(ourArray[i]);
}


// Loops are structured like an if block that repeat a certain section of code until a certain condition is met

for(counter; comp; incr){

}

for(let i = 0; i<ourArray.length; i++){
	console.log("i is equal to: " + i);
//	console.log(ourArray[i]);
}

// Be careful putting loops within loops, sometimes you have to, but look for other options before you do that


/*...*/
/*...*/
/*...*/

// While Loop runs until a condition is false

// The code below will run indefinitely because true is never becomes false

while (true) {
	console.log('Ran')
}

// Be careful with while loops because it's easy to create an infinite loop and cause your program to crash

let x = 0;
while (x < 10) {
	console.log('Ran');
	x = x + 1;
}
