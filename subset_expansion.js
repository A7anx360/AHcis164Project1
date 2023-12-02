// Written by: Alan Hernandez
// Date Written: November 19, 2023
// Date Modified: December 01, 2023

// Strict mode is enabled (however that even works)
"use strict";

// A JQuery method that makes sue the DOM is loaded before executing.
$(document).ready( () => {
//
    $("main a").click( evt => {
// Prevents the default action of the Link.
        evt.preventDefault();
// The constant 'a_tag' is defined with the value of 'evt.currentTarget'.
        const a_tag = evt.currentTarget;
// The statement below toggles the HTML element above 'a_tag' by erasing the 'hide' class or adding it back.
        $(a_tag).prev().toggleClass("hide");
// The text displayed by the HTML element assigned to 'a_tag' will be changed depending on whether or not
// the 'hide' class is found in the div element above.
        if ($(a_tag).prev().attr("class") !== "hide") {
                $(a_tag).text("Show less");
        } else {
                $(a_tag).text("Show more");
        }
    });
});