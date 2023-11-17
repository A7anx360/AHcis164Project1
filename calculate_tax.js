// Written by: Alan Hernandez
// Date Started: October 14, 2023
// Date Modified: November 16, 2023

// Strict mode is enabled (however that even works)
"use strict";

// The following '$' function is used to select any HTML element from the HTML document.
// STUDY NOTE: It's concise & executes one statement.
const $ = selector => document.querySelector(selector);

// The event-handler function 'processEntry' is defined below.
const processEntry = evt => {
// Makes the program emphasize the first text box.
	$("#income").focus();
// The following 'if-else' statement makes sure that the value of '#income' is above 0.
// If the value returns false, an alert is displayed for the user to see.
	if (document.querySelector("#income").value > 0) {
// The variable 'user_value' is defined below.
// This variable selects the value of the HTML-Element '#income' & stores it as it's own value.
		let user_value = document.querySelector("#income").value;
// If the 'if-else' statement above returns true, the following statement will execute a function to perform
// some calculations.
		calculateTax(user_value);
	} else {
// The following statement displays an alert for the user to see.
// This alert indicates to the user that they entered an invalid number
		alert ("ERROR! Invalid Input Value!\nEntry must be above 0.\nPlease enter a higher value.");
	}
};

// The following Event-Listener is activated once the HTML document is fully loaded & DOM is ready,
// (by my understanding at least).
document.addEventListener("DOMContentLoaded", () => {
// The Event Listener below calls the Event-Handler Funtion 'processEntry'
// whenever the '#calculate' ID-element is triggered by the 'click' event.
	$("#calculate").addEventListener("click", processEntry);
});

// 'calculateTax' Function
// NOTE: Taxable Income$ * Tax Rate% = Income Tax Owed
const calculateTax = function(user_value) {
// The variable 'owed_income_tax' is defined below, for the purpose of future calculations.
	let owed_income_tax = 0;
// The variable 'taxable_income' is defined with 'user_value' being converted to a whole number
// & used as the initial value of 'taxable_income'.
	let taxable_income = parseInt(user_value);
// The constants for each tax rate are defined below.
	const taxRate1 = 10/100;
	const taxRate2 = 12/100;
	const taxRate3 = 22/100;
	const taxRate4 = 24/100;
	const taxRate5 = 32/100;
	const taxRate6 = 35/100;
	const taxRate7 = 37/100;
// Calculates the owed Income Tax. Or at least it tries to...?
	if (taxable_income > 0 && taxable_income <= 9875) {
		owed_income_tax = (taxable_income - 0) * taxRate1;
	} else if (taxable_income > 9875 && taxable_income <= 40125) {
		owed_income_tax = (9875) * taxRate1 + (taxable_income - 9875) * taxRate2;
	} else if (taxable_income > 40125 && taxable_income <= 85525) {
		owed_income_tax = (9875) * taxRate1 + (9875) * taxRate2 + (taxable_income - 40125) * taxRate3;
	} else if (taxable_income > 85525 && taxable_income <= 163300) {
		owed_income_tax = (9875) * taxRate1 + (9875) * taxRate2 + (taxable_income - 40125) * taxRate3 + (taxable_income - 85525) * taxRate4;
	} else if (taxable_income > 163300 && taxable_income <= 207350) {
		owed_income_tax = (9875) * taxRate1 + (9875) * taxRate2 + (taxable_income - 40125) * taxRate3 + (taxable_income - 85525) * taxRate4 + (taxable_income - 163300) * taxRate5;
	} else if (taxable_income > 207350 && taxable_income <= 518400) {
		owed_income_tax = (9875) * taxRate1 + (9875) * taxRate2 + (taxable_income - 40125) * taxRate3 + (taxable_income - 85525) * taxRate4 + (taxable_income - 163300) * taxRate5 + (taxable_income - 207350) * taxRate6;
	} else {
		owed_income_tax = (9875) * taxRate1 + (9875) * taxRate2 + (taxable_income - 40125) * taxRate3 + (taxable_income - 85525) * taxRate4 + (taxable_income - 163300) * taxRate5 + (taxable_income - 207350) * taxRate6 + (taxable_income - 518400) * taxRate7;
	}
// The following statement displays the number of pennies according to the user's remaining input.
	$("#tax").value = owed_income_tax.toFixed(2);
};