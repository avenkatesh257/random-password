// Code Appetizer

// Using javascript, create a random password generator. Your function should accept the length of the password as an argument and return a password with any of the chars A-Z, a-z, 0-9, !, $

// Class Exercise

// Exercise taken from Stoyan Stefanov's 'Onject Oriented Javascript' book 
// 1. Create an object called 'shape' that has a 'type' property and a 'getType' method. 
// 2. Define a Triangle constructor function whose prototype is shape. Objects created with Triangle should have three own properties: a, b, c representing the sides of a triangle. 
// 3. Add a new method to the prototype called getPerimeter.

//for loop is not a function b/c you don't put in an argument//


function makePasswd(passwordLength) {
	var password= '';
	var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (var i=0; i < passwordLength; i++) {

    var randomcharacter= chars[Math.floor(Math.random() * chars.length)]; //length that you multiply into Math.random will give you upmost value//
    
   password= password + randomcharacter;

	}
	 return password;
}



function Animal(){
	this.color: '';
	this.numOfLegs= '';

	function Cat(){
		this.meows = true;
	}
}

password= password + randomcharacter is same as password += randomcharacter