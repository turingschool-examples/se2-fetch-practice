const addAnimalsToPage = animals => {
  animals.forEach(animal => {
    addAnimalToPage(animal);
  });
}

const addAnimalToPage = animal => {
  const animalsSection = document.querySelector('.js-collection');
  animalsSection.innerHTML += `<p>${animal.name}</p>`;
}

// 1. Make a get request to get all of the items for a given resource, and log those items to the console.
const animalsUrl = 'http://localhost:3001/api/v1/animals';
const getAllAnimals = () => {
  fetch(animalsUrl)
  .then(response => response.json())
  .then(animals => addAnimalsToPage(animals));
}

// 2. Make a post request to create a new instance of that resource, and log the result to the console.
const addAnimal = (newAnimal) => {
  fetch(animalsUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newAnimal)
  })
  .then(response => response.json())
  .then(animal => addAnimalToPage(animal));
}

// Hook it up to the dom!
// 4. On page load, fire off #1 from above and populate the section.js-collection with those items
getAllAnimals();

// 5. Add an event listener, so that when you click button.js-add-item, it will make a fetch request to post that item to the server
document.querySelector('.js-add-item').addEventListener('click', () => {
  const newAnimal = {
    id: 55,
    name: 'coleslaw',
    diet: 'burritos',
    fun_fact: 'loves ramen as well'
  };
  addAnimal(newAnimal);
});

// EXTRA CREDIT:
// Create a form and event listener so that the user can add an item of their choosing
// Handle the use case where a 422 is given back from the server