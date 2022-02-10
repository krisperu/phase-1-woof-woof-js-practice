const url = "http://localhost:3000/pups"

// DOM Selectors && Created ELements
const dogBar = document.querySelector('#dog-bar');
const dogInfo = document.querySelector('#dog-info')

// Register Listeners
dogInfo.addEventListener('click', handleDogInfo)

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
function handleDogInfo(doggoInfo) {
    const dogCard = document.createElement("li");
    // dogCard.id = `dog-${dogCard.id}`;
    dogCard.innerHTML =
    `<img src="${dogCard.image}" />
    <h2>${dogCard.name}</h2>
    <button>Good Dog!</button>`

    doggoInfo.appendChild(dogCard)
}
// Event Handlers
// function

// Initializers
fetchDogs().then(renderAllDogs)