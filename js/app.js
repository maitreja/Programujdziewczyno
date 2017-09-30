'use strict';
document.addEventListener('DOMContentLoaded', function() {
//zadanie 1
	var forDropdown = document.querySelector('.for-dropdown');
    console.log(forDropdown);
    var dropdown = document.querySelector('.dropdown');
    console.log(dropdown);
// function changeDisplayToBlock() {
	//menu.style.dusplay = 'block";
var buttons = document.querySelectorAll('.read-more');
console.log(buttons);
	forDropdown.addEventListener('mouseover', function() {
		dropdown.style.display = 'block'
	});
	forDropdown.addEventListener('mouseout', function () {
		dropdown.style.display = 'none'
	});
	console.log(buttons[0].previousElementSibling); 
	buttons[0].addEventListener('click', function() {
		console.log('działa');
	});
	buttons[0].addEventListener('click', function() {
		console.log(this);
	});
	buttons[0].addEventListener('click', function() {
		var textArea = this.previousElementSibling;
		console.log(textArea);

	});
})



      // tutaj będziemy umieszczać kod ze wszystkich zadań
    
    
    

