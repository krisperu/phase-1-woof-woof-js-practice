const url = "http://localhost:3000/pups"

// DOM Selectors && Created ELements
const dogBar = document.querySelector('#dog-bar');
const dogInfo = document.querySelector('#dog-info')

// Register Listeners


//Fetches
function fetchDogs() {
    return fetch(url)
    .then(res => res.json())
}

// Render Functions
function renderAllDogs(dogsArray){
    dogsArray.forEach(renderOneDog)
}

function renderOneDog(dogObj) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${dogObj.name}</span>`

    dogBar.appendChild(li)
}
// Event Handlers

// Initializers
fetchDogs().then(renderAllDogs)