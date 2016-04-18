// console.log("Hello");

	var registrationForm = document.querySelector("#registration");


	// Get references to the input fields   // Wait for the user to submit the form
	var usernameInput = document.querySelector("#username");

	var usernameMessage = document.querySelector("#username-message");

	var nameInput = document.querySelector("#full-name");

	var nameMessage = document.querySelector("#full-name-message");

	var campusMessage = document.querySelector("#campus-message");

	var campusOptions = document.querySelectorAll("[name=campus]");
	var messageInput = document.querySelector('#message')
	var messageMessage = document.querySelector('#message-message');




// Listen for the blur event on the username input field

usernameInput.onblur = function(){

	// Creat a fake list of usernames that are in use

	var usernames = ["admin", "user", "test", "ben.abbot"]

	// Check if the username is in use
	if( usernames.indexOf( this.value.toLowerCase() ) >= 0) {
		usernameMessage.innerHTML = 'Username is in use';

	} else if( this.value.length < 3) {

		usernameMessage.innerHTML = 'username but be at least 3 characters';
	} else if ( this.value.length > 20) {

		usernameMessage.innerHTML = 'Username must be at most 20 characters';
	}else if( usernamePattern.test( this.value ) ){
		// hIDE ANY EXISTING MESSAGES
		usernameMessage.innerHTML = ''

	} else {
		// Display an error to the user
		usernameMessage.innerHTML = 'Invalid username'
	}
}



messageInput.onkeyup = function( ) {

	var totalLetters = this.value.length;

	messageMessage.innerHTML = totalLetters + '/240';
}
//

//------------------------------------------------------------------------------------------------------------
























	// console.log(campusOptions);









														
// registrationForm.onsubmit = function(event) {


// 	// Count how man errors there are
// 	var totalErrors = 0;





	

// 	// Check the username
// 	if (usernamePattern.test( usernameInput.value )) {
// 		// Usdrename is valid
// 		// console.log("Username is valid");
// 		usernameMessage.innerHTML = "";
// 	} else {
// 			//username is invalid
// 			// console.log("Username is invalid");
// 			usernameMessage.innerHTML = "Username is invalid";  //you can be more specific but okay for now
// 			totalErrors++;
// 		}
	
// 	// Check the username
// 	if (namePattern.test( nameInput.value )) {
// 		// Usdrename is valid
// 		// console.log("Username is valid");
// 		nameMessage.innerHTML = "";
// 	} else {
// 			//username is invalid
// 			// console.log("Username is invalid");
// 			nameMessage.innerHTML = "Name is invalid";  //you can be more specific but okay for now
// 			totalErrors++;
// 		}
		


// //-------------------------------------------------------------------------------------------
// 		var campusIsSelected = false;

// 		// Loop over all the campus
// 		for(var i=0;i<campusOptions.length; i++) {
// 			// Check if this campus has benn selected
// 			if( campusOptions[i].checked){
// 				campusIsSelected = true;
			
// 			}
// 		}
// 		//If campusIsSelected is still false
// 		if( campusIsSelected  == false ) {
// 			campusMessage.innerHTML = "Please select a campus";
// 			totalErrors++;

// 		} else {
// 			campusMessage.innerHTML = '';
// 		}
// 		// If the total errors is greater than 0
// 		if (totalErrors > 0) {
// 		// Stop the form from submitting
// 		event.preventDefault();
// 	}
//-------------------------------------------------------------------------------------------
	// alert('submitted');
// }



