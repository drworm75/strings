![Title Banner](https://raw.githubusercontent.com/drworm75/strings/master/images/string-manipulation.png)

### Description: 

* Create an HTML text input that accepts only letters.

* Create an HTML button

* Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.

* Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.

* Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.

* When the user presses the enter key in the text input or clicks the button, set the value of the testString variable to the value of the input.

* The output of each of the functions should immediately appear as well.

### Final Result:
> The manipulated text displays as required.  A button press also clears the text field to prepare for the next input.  


![Page Screenshot](https://raw.githubusercontent.com/drworm75/strings/master/images/string-manipulation-screenshot.png)

### Takehome Lesson:

> Used a dymamic, full page background image in css.  
```
html {
	height: 100%;
	background: url(images/colorful-letters-background.jpg) no-repeat center center;
	background-size: cover;
}
```
For text validation on the form, ran a function that would check each character entry on keyup for compliance.  If it was a non-letter, the inncorrect character was immediately erased. 
```
function validate() {
  textField.value = textField.value.replace(/[^a-zA-Z]+/, '');
};
```




### How to run (Node must be installed on your machine):
```
git clone https://github.com/drworm75/strings.git
cd dynamic-cards.git
npm install http-server -g
http-server -p 8080
```

This will show in your browser at:
`http://localhost:8080`

### Contributors:
[Dwayne Pate](https://github.com/drworm75)