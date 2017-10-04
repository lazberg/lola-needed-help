
// Using these as arrays to check the incoming input with.
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numberList = ['1','2','3','4','5','6','7','8','9','0'];

function SubmitText() {
	// This line imports the text that resides in the textarea and adds it to a string variable.
	var inputText = document.getElementById('inputText').value.toLowerCase();
	// resets the output field
	document.getElementById('outputText').innerHTML = "";
	// Simple for-loop that goes through each letter using the .charAt function together with the i-variable which automatically increases by 1 for each loop using i++.
	for (var i=0;i<inputText.length;i++) {
		// selects the symbol at the exact point in the string variable inputText.
		var letter = inputText.charAt(i);
		if (alphabet.includes(letter) || numberList.includes(letter)) {
			// assuming the input is in the alphabet or is a number, it will then be used to add an img tag to the html.
			// the images are in a separate folder and the files follow the convention of "letter_DESIREDLETTER.gif".
			// in this example, only a, b and c is available.
			document.getElementById('outputText').innerHTML += '<img src="img/letter_'+letter+'.gif">';
		}
	}
	
}