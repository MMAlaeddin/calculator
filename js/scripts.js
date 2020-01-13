var add = function(number1, number2) {
  return number1 + number2;
    };
var number1 = parseInt(prompt("enter a number:"));
var number2 = parseInt(prompt("enter another number"));
var result = add(number1, number2);
alert(result);

var minus = function(number1, number2) {
	return number1 - number2;
};
var number1 = parseInt(prompt("Enter number"));
var number2 = parseInt(prompt("enter one more number"));
var result = minus(number1, number2);
alert(result);

var divide = function(number1, number2) {
	return number1 / number2; 
};
var number1 = parseInt(prompt("Dude, give me a number"));
var number2 = parseInt(prompt("Cmon, one more number man"));
var result = divide(number1, number2);
alert(result);

var multiply = function(number1, number2) {
	return number1 * number2;
};
var number1 = parseInt(prompt("Ok last time, give me a number"));
var number2 = parseInt(prompt("One LAST number here!"));
var result = multiply(number1, number2);
alert(result);