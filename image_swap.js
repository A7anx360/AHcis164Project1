// Written by: Alan Hernandez
// Date Modified: December 08, 2023

// Strict mode is enabled (however that even works).
"use strict";

// A JQuery method that makes sure the DOM is loaded before executing.
$(document).ready( () => {
// Preloads the images.
	$("#image_list a").each( (index, element) => {
// The line below creates an 'Image' object called.
		const swappedImage = new Image();
// The line below assigns the image contained within elements that contain an 'href' attribute
// to the 'swappedImage.src' Object's src attribute.
		swappedImage.src = $(element).attr("href");
	});
	
// Set up event handlers for links.
	$("#image_list a").click( evt => {
// The value of 'evt.currentTarget' is stored within the constant 'link'.
		const link = evt.currentTarget;
// The image is supposed to fade out.
		$("#image").fadeOut(1000);
// The caption is supposed to fade out.
		$("#caption").fadeOut(1000);
// The constant 'imageURL' is defined below.
		const imageURL = $(link).attr("href");
// Image is swapped.
		$("#image").attr("src", imageURL).fadeIn(1000);
// The constant 'caption' is defined below.
		const caption = $(link).attr("title");
// Caption is swapped.
		$("#caption").text(caption).fadeIn(1000);

// It's some sort of unused function.
// setInterval( () => {
// 	$("#caption").fadeOut(1000);
// 	$("#image").fadeOut(1000,
// 		() => {
// // Image is swapped.
// 			$("#image").attr("src", imageURL).fadeIn(1000);
// // Caption is swapped.
// 			$("#caption").text(caption).fadeIn(1000);
// 		});
// 	},
// 	1000);

// Cancels the default action of the link.
	    evt.preventDefault();
	});
	
// Move focus to first thumbnail.
	$("li:first-child a").focus();
});