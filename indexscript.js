// go get the box where we want to put the new name
const killing = document.getElementById('dead');

// go get the input element that has the user input
const myInput = document.getElementById('fill');

// go get the badly named button for the submit
const button = document.getElementById('submit');

const changeValue = () => {
    // when the user clicks, set the name box's text content to whatever the current value of the input is
    killing.textContent = myInput.value
}

// add an event listener to the button
button.addEventListener('click', changeValue)

