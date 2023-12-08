// Written by: Alan Hernandez
// Date Written: December 03, 2023
// Date Modified: December 07, 2023

// Strict mode is enabled (however that even works)
"use strict";

// A JQuery method that makes sure the DOM is loaded before executing.
$(document).ready( () => {
// The Event Handler preloads the images.
    $("#image_list a").each( (index, link) => {
// The line below creates the 'Image' object.
        const image = new Image();
// The line below assigns the Image URL to the 'Image' Object's src attribute.
        image.src = link.href;
    });

// The Event Handler below is responsible for processing the Image Links.
    $("#image_list a").click( evt => {
// The value of 'evt.currentTarget' is stored within the constant 'link'.
        const link = evt.currentTarget;
// The line below replaces the '#main_image'.
        $("#main_image").attr("src", link.href);
// The line below replaces the '#caption'.
        $("#caption").text(link.title);
// Prevents the default action of the Link.
        evt.preventDefault();
    });

// The following line sets focus on the 'a' tag of the first
$("li:first-child a").focus();
});