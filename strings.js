var alphaArray = [];
var submitButton = document.getElementById("submit");
var textField = document.getElementById("letters");
var output = document.getElementById("output");


function makeTestString () {
	var testString = textField.value;
	testString = testString.toLowerCase();
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
	textField.value = "";
	output.innerHTML = alphaArray;
}

function reversal(alphaString) {
	alphaArray = [];
	var reverseAlpha = alphaString.split("");
	reverseAlpha = reverseAlpha.reverse();
	reverseAlpha = reverseAlpha.join("");
	alphaArray += alphaString + " spelled backwards is " + reverseAlpha;
}

function alphabits(alphaString) {
	var bitsAlpha = alphaString.split("");
	bitsAlpha = bitsAlpha.sort();
	bitsAlpha = bitsAlpha.join("");
	alphaArray += "<br>" + alphaString + " with the letters in alaphbetical order is " + bitsAlpha;
}

function palindrome(alphaString) {
	var dromeAlpha = alphaString.split("");
	dromeAlpha = dromeAlpha.reverse();
	dromeAlpha = dromeAlpha.join("");
	if (dromeAlpha == alphaString) {
		alphaArray += "<br>" + alphaString + " is a palindrome!"
	} else {
		alphaArray += "<br>" + alphaString + " is not palindrome!"
	}
}

function checkBuild(e) {
	if(e && e.keyCode == 13) {
		makeTestString();
	}
}


//looks for enter button press
function checkReturn(e) {
	if(e && e.keyCode == 13) {
		makeTestString();
	}
}

function validate() {
  textField.value = textField.value.replace(/[^a-zA-Z]+/, '');
};


submitButton.addEventListener("click", makeTestString);
textField.addEventListener("keyup", checkReturn);
textField.addEventListener("keyup", validate);
