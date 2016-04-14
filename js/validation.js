// console.log("Hello");

//Find the form
var registrationForm = document.querySelector("#registration");

														// Wait for the user to submit the form
registrationForm.onsubmit = function(event) {


	// Count how man errors there are
	var totalErrors = 0;

	// Get references to the input fields
	var usernameInput = document.querySelector("#username");

	var usernameMessage = document.querySelector("#username-message");

	var nameInput = document.querySelector("#full-name");

	var nameMessage = document.querySelector("#full-name-message");

	var campusMessage = document.querySelector("#campus-message");

	var campusOptions = document.querySelectorAll("[name=campus]");

	console.log(campusOptions);




	

	// Check the username
	if (usernamePattern.test( usernameInput.value )) {
		// Usdrename is valid
		// console.log("Username is valid");
		usernameMessage.innerHTML = "";
	} else {
			//username is invalid
			// console.log("Username is invalid");
			usernameMessage.innerHTML = "Username is invalid";  //you can be more specific but okay for now
			totalErrors++;
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
			totalErrors++;
		}
		


//-------------------------------------------------------------------------------------------
		var campusIsSelected = false;

		// Loop over all the campus
		for(var i=0;i<campusOptions.length; i++) {
			// Check if this campus has benn selected
			if( campusOptions[i].checked){
				campusIsSelected = true;
			
			}
		}
		//If campusIsSelected is still false
		if( campusIsSelected  == false ) {
			campusMessage.innerHTML = "Please select a campus";
			totalErrors++;

		} else {
			campusMessage.innerHTML = '';
		}
		// If the total errors is greater than 0
		if (totalErrors > 0) {
		// Stop the form from submitting
		event.preventDefault();
	}
//-------------------------------------------------------------------------------------------
	// alert('submitted');
}



