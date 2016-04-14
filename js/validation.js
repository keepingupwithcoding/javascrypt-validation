// console.log("Hello");

//Find the form
var registrationForm = document.querySelector("#registration");

														// Wait for the user to submit the form
registrationForm.onsubmit = function(event) {

	// Patterns to use in validation
	var usernamePattern = new RegExp("^[a-zA-Z0-9._-]{3,20}$");
	var namePattern = new RegExp("^[a-zA-Z' .-]{1,30}$")

	// Get references to the input fields
	var usernameInput = document.querySelector("#username");

	var usernameMessage = document.querySelector("#username-message");

	var nameInput = document.querySelector("#full-name");

	var nameMessage = document.querySelector("#full-name-message");


	

	// Check the username
	if (usernamePattern.test( usernameInput.value )) {
		// Usdrename is valid
		// console.log("Username is valid");
		usernameMessage.innerHTML = "";
	} else {
			//username is invalid
			// console.log("Username is invalid");
			usernameMessage.innerHTML = "Username is invalid";  //you can be more specific but okay for now
		}
	
	// Check the username
	if (namePattern.test( nameInput.value )) {
		// Usdrename is valid
		// console.log("Username is valid");
		nameMessage.innerHTML = "";
	} else {
			//username is invalid
			// console.log("Username is invalid");
			nameMessage.innerHTML = "Name is invalid";  //you can be more specific but okay for now
		}

		// Stop the form from submitting
		event.preventDefault();

	// alert('submitted');
}



