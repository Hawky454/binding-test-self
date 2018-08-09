'use strict';
/* eslint-env browser */

console.log('Hello Mom!');

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');

let firstNameView = document.getElementById('firstNameView');
let lastNameView = document.getElementById('lastNameView');



firstName.addEventListener('keyup', function (event) {
    console.log(event.target.value);
    firstNameView.innerHTML = event.target.value;

});

lastName.addEventListener('keyup', (e) => {
    console.log(event.target.value);
    lastNameView.innerHTML = event.target.value;
 
})


