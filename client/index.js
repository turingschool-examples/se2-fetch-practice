console.log('so fetch!')

// GET:

// 1. Make a GET request on page load to get all of the users, and log those items to the console.
// 2. Make a GET request on page load to get all of the sports teams, and log those items to the console.

// Let's hook it up to the DOM!
// 3. When the user clicks the "Log animals!" button, make a GET request to get all of the animals, and log them to the console first.
// 4. Then, hook up your fetch to display the animal data once it's successfully fetched from the back end. 

let logAnimalsButton = document.querySelector('.js-log-animals')
let section = document.querySelector('.js-collection')


logAnimalsButton.addEventListener('click', fetchAnimals)

function fetchAnimals() {
  console.log("Uh oh.. you're missing the fetch here!")
}

function displayAnimalData(data) {
  console.log(data)
  data.forEach(animal => {
    section.innerHTML += `
    <p>${animal.name} eat ${animal.diet}</p>
    <p>${animal.fun_fact}</p>
    `
  })
}


// POST:
// 1. Make a POST request to create a new instance of that resource, and log the result to the console. This POST should run on page load.

// Write your code for your POST here! 


// 2. Rerun your previous GET fetch request to verify you added the new resource
// 3. 🌶️ Add an event listener, so that when you click button.js-add-item (comment this back in the HTML file!), it will make a fetch request to POST that item to the server, AND update the page with the newly updated collection

// Spicy Challenge:
// Create a form and event listener so that the user can add an item of their choosing
// Handle the use case where a 422 is given back from the server (this will happen if not all params are sent with the POST)
