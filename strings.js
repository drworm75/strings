var alphaArray = [];
var letterInput = document.getElementById("letters");
var submitButton = document.getElementById("submit");

console.log(letterInput);

function makeTestString () {
	var testString = letterInput.value;
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
}

function reversal(alphaString) {
	alphaArray = [];
	var reverseAlpha = alphaString.split("");
	reverseAlpha = reverseAlpha.reverse();
	reverseAlpha = reverseAlpha.join("");
	alphaArray += reverseAlpha;
}

function alphabits(alphaString) {
	var bitsAlpha = alphaString.split("");
	bitsAlpha = bitsAlpha.sort();
	bitsAlpha = bitsAlpha.join("");
	alphaArray += "\n" + bitsAlpha;
}

function palindrome(alphaString) {
	var dromeAlpha = alphaString.split("");
	dromeAlpha = dromeAlpha.reverse();
	dromeAlpha = alphaString + dromeAlpha.join("");
	alphaArray += "\n" + dromeAlpha;
	console.log(alphaArray);
}

function checkBuild(e) {
	if(e && e.keyCode == 13) {
		makeTestString();
	}
}

submitButton.addEventListener("click", makeTestString);

// letterInput.addEventListener("keyup", checkBuild);

// console.log(testString);
// // var reverseString = reversal(testString);
// alphabits(testString);
// palindrome(testString);

// console.log(palindrome(testString));
