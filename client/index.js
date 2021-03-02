const checkForError = response => {
  if (!response.ok) {
    throw new Error('Please make sure that all fields are filled out.');
  } else {
    return response.json();
  }
}

const getAllAnimals = () => {
  fetch(animalsUrl)
  .then(response => response.json())
  .then(animals => addAnimalsToPage(animals))
  .catch(err => displayErrorMesssage(err));
}

const addAnimal = (newAnimal) => {
  fetch(animalsUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newAnimal)
  })
  .then(checkForError)
  .then(animal => addAnimalToPage(animal))
  .catch(err => displayErrorMesssage(err));
}

const animalsSection = document.querySelector('.js-animals');
const animalsUrl = 'http://localhost:3001/api/v1/animals';
getAllAnimals();


const displayErrorMesssage = (err) => {
  const errorField = document.querySelector('.js-error');
  const message = err.message === 'Failed to fetch' ? 
    'Something went wrong. Please check your internet connection' : err.message;
  errorField.innerText = message;
}

const addAnimalsToPage = animals => {
  animals.forEach(animal => {
    addAnimalToPage(animal);
  });
}

const addAnimalToPage = animal => {
  animalsSection.innerHTML += `<p>${animal.name}</p>`;
}

document.querySelector('.js-add-animal').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newAnimal = {
    id: animalsSection.childElementCount + 1,
    name: formData.get('name'),
    diet: formData.get('diet'),
    fun_fact: formData.get('fun_fact')
  };
  addAnimal(newAnimal);
  e.target.reset();
});
