/*
 * Objects, Interfaces, and API's
 */

// Basics of Object-Oriented Programming (OOP)

// OOP is a way to rep data and functionality in an encapsulated way. Orig devised to make it easy to represent real-world objects and code

// In traditional OOP, there are 2 key features. Objects contain state or the current data and information that describes the object and functionality, which is actions or changes the object can make to itself or the outside world

// Theoretical example: Dog; States: name, color, breed, size; Functionality: bark, dig, lick

// Can represent more abstract things: object that deals with the editing of strings; States: maximum length, the string being edited, list of banned words; Functionality: converting string to title case, checking and removing banned words, cutting string down to max length

// Most important thing to remember about an object: contains data and functionality that are related


let dog = {
	name: "Steve",
	color: "Brown",
	breed: "Pug",
	size: "Small",
	bark: function() {
		console.log("Bark!");
	},
};

dog.bark();


let dog = {
	name: "Steve",
	color: "Brown",
	breed: "Pug",
	size: "Small",
	bark: function(typeOfBark) {
		console.log("Bark!");
	},
};


// APIs (Application Programming Interface)

// These are interfaces written into software to be used by other programmers to interact with the code

// For dog object, its API is the bark function

// Rest APIs are same idea, they just allow you to interact with other people's code, except rather than using functions, they use URLs as their way to interact with web applications


// Passing By Value vs. Passing By Reference

// When you send data through a function via its parameters there are two ways in which it can be passed: Passing by value or passing by reference

// Passing By Value: Inside the function, only the value of the data is imported, meaning the data is essentially copied for use inside the function

// Passing By Reference: Means that the parameter being passed in only points to the original data. If you pass in data to a function by reference and change it in some way, the original piece of data is affected too. This is important to keep in mind because if you pass something by reference and are expecting the original not to be changed in any way, you may encounter errors.

// whether or not a certain type is passed by value or reference is up to the programming language you're using. You'll have do further research to find out whether or not this is the case.


/*...*/
/*...*/

function x(y) {
	y = y + 5;
	console.log(y);
}

let y = 5;
x(y);
console.log(y);

// As you can see y inside of the function is set to 10
// But y outside of the function is still 5


/*...*/
/*...*/

// If y were an object...

function x(y) {
	y.num = y.num + 5;
	console.log(y);
}

let y = {
	name: "Tom",
	num: 10,
};
x(y);
console.log(y);

// We can see num outside and inside the function become the same, this is because objects in Javascript are passed in by reference
// Anything that we do inside of a function to an object is translated to the object that we originally passed in. The object is not copied.