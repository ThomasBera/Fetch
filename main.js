const API_URL = 'https://66352f169bb0df2359a40bdd.mockapi.io/Animal/Animal';

function listAnimals() {
  fetch(API_URL)
    .then(response => response.json())
    .then(animals => {
      console.log(animals);
      const animalList = document.getElementById('animal-list');
      animalList.innerHTML = '';
      animals.forEach(animal => {
        const li = document.createElement('li');
        li.textContent = `${animal.id} - ${animal.nome} (${animal.idade}) - ${animal.raca}`;
        animalList.appendChild(li);
      });
    });
}
function createHardcodedAnimal() {
  const animal = {
    nome: 'Totó',
    idade: 12,
    raca: 'cachorro',
  };

  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(animal),
  })
    .then(response => response.json())
    .then(() => {
      alert('Animal hardcoded criado!');
      listAnimals();
    });
}


window.onload = listAnimals;
