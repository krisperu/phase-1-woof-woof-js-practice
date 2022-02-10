const url = "http://localhost:3000/pups"

// DOM Selectors && Created ELements
const dogBar = document.querySelector('#dog-bar');

// Register Listeners

//Fetches
function fetchDogs() {
    return fetch(url)
    .then(res => res.json())
}

// Render Functions

// Event Handlers

// Initializers
fetchDogs().then(console.log)