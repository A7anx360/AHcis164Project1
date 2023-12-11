// Written by: Alan Hernandez
// Date Written: December 10, 2023
// Date Modified: December 10, 2023

// Strict mode is enabled (however that even works)
"use strict";

// A JQuery method that makes sure the DOM is loaded before executing.
$(document).ready( () => {
// The Event-Handler Function for "#reservation_form" is defined below.
	$("#reservation_form").submit( event => {
// The variable 'isValid' is created & set to a 'true' value.
		let IsValid = true;
// The following lines validate the '#email'.
// The constant 'emailPattern' is created & holds the email pattern as a value.
		const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		const email = $("#email").val().trim();
		if (email == "") {
			$("#email").next().text("Required!");
			isValid = false;
		} else if ( !emailPattern.test(email) ) {
			$("#email").next().text("Email address must be valid!");
			isValid = false;
		} else {
			$("#email").next().text("");
		}
//The following lines validate the '#night'.
		const nightVar = $("#nights").val().trim();
		if (nightVar == "") {
			$("#nights").next().text("Required!");
			isValid = false;
		} else if ( nightVar.isNumeric() == false ) {
			$("#nights").next().text("Must be Numeric!");
			isValid = false;
		} else {
			$("#nights").next().text("");
		}
// Prevents the default action depending of the following expression.
		if (isValid == false) {
			event.preventDefault();
		}
	});
// The following line sets focus on the 'arrival_date' ID element.
	$("#arrival_date").focus();
});