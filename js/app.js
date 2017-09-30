'use strict';
document.addEventListener('DOMContentLoaded', function() {
//zadanie 1
	var forDropdown = document.querySelector('.for-dropdown');
    console.log(forDropdown);
    var dropdown = document.querySelector('.dropdown');
    console.log(dropdown);
// function changeDisplayToBlock() {
	//menu.style.dusplay = 'block";

	forDropdown.addEventListener('mouseover', function() {
		dropdown.style.display = 'block'
	});
	forDropdown.addEventListener('mouseout', function () {
		dropdown.style.display = 'none'
	})
});



      // tutaj będziemy umieszczać kod ze wszystkich zadań
    
    
    

