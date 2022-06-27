let animals = [
    { name: 'Truffle', picture: 'https://petreferred.com/wp-content/uploads/2020/01/Pomeranian-Dog-Breed.png', status: 'available', species: 'dog' },
    { name: 'Mittens', picture: 'https://www.rd.com/wp-content/uploads/2022/04/GettyImages-1310147575.jpg?fit=700,466', status: 'hold', species: 'cat' },
    { name: 'Shadow', picture: 'https://i.kym-cdn.com/photos/images/newsfeed/002/005/085/d6e.jpg', status: 'adopted', species: 'dog' },
    { name: 'Tiger', picture: 'https://image.shutterstock.com/image-photo/rottweiler-puppy-lying-on-lawn-260nw-192451028.jpg', status: 'available', species: 'dog' },
    { name: 'Marmalade', picture: 'https://i.pinimg.com/originals/c2/7e/b8/c27eb8b35a15a6fc22a66fe82c939cca.jpg', status: 'adopted', species: 'cat' },
    { name: 'Fluffy', picture: 'https://wallpaperaccess.com/full/1703361.jpg', status: 'available', species: 'dog' }
];

const addAnimal = document.querySelector('#add-animal');
const animalProperties = document.querySelector('#animal-props');
let sortedByName = false;
let sortedByStatus = false;
let sortedBySpecies = false;
let availableOnly = false;
addAnimal.addEventListener('click',function() {
    const newAnimal = document.createElement('input');
    const submitNewAnimal = document.createElement('button');
    submitNewAnimal.textContent = 'Submit!'
    animalProperties.appendChild(newAnimal);
    animalProperties.appendChild(submitNewAnimal);
    newAnimal.placeholder = 'Enter name of the animal';
    newAnimal.setAttribute('size', newAnimal.getAttribute('placeholder').length);

    let inputsDone = 0;
    let propertyNumber = 1;
    const newObj = {};
    submitNewAnimal.addEventListener('click',function() {
        if (newAnimal.value !== '') {
            inputsDone++;
            if (inputsDone !== 5) {
                const newProp = newAnimal.value;
                if (propertyNumber === 1) {
                    newObj.name = newProp;
                }
                else if (propertyNumber === 2) {
                    newObj.picture = newProp;
                }
                else if (propertyNumber === 3) {
                    newObj.status = newProp;
                }
                else {
                    newObj.species = newProp;
                    animals.push(newObj);
                    newAnimal.remove();
                    submitNewAnimal.remove();
                    if (sortedByName === true) {
                        if (availableOnly === true) {
                            displayAvailableOnly();
                        }
                        sortByName();
                    }
                    if (sortedBySpecies === true) {
                        if (availableOnly === true) {
                            displayAvailableOnly();
                        }
                        sortBySpecies();
                    }
                    if (sortedByStatus === true) {
                        if (availableOnly === true) {
                            displayAvailableOnly();
                        }
                        sortByStatus();
                    }
                    if (sortedByName === false && sortedBySpecies === false && sortedByStatus === false) {
                        displayAll();
                    }
                }
                propertyNumber++;
                newAnimal.value = '';
                if (inputsDone !== 4) {
                    if (inputsDone === 1) {
                        newAnimal.placeholder = 'Enter link to the picture of your animal';
                    }
                    else if (inputsDone === 2) {
                        newAnimal.placeholder = 'Enter the status of your animal';
                    }
                    else {
                        newAnimal.placeholder = 'Enter the species of your animal';
                    }
                }
                newAnimal.setAttribute('size', newAnimal.getAttribute('placeholder').length);
            }
        }
    })
})

function capitalizeFirstLetterAndAddClass(string,parent) {
        string = string[0].toUpperCase() + string.slice(1);
        const newElement = document.createElement('p');
        newElement.classList.add('reset');
        newElement.textContent = string;
        return newElement;
    }
const animalList = document.querySelector('#animal-list');
displayAll();
function displayAll() {
    displayAvailableOnly();
    const allAnimalsReset = document.querySelectorAll('#animal-list > div');
    for (const animalDiv of allAnimalsReset) {
        animalDiv.remove();
    }
    for (const animal of animals) {
        const displayAnimal = document.createElement('div');
        const image = document.createElement('img');
        const description = document.createElement('p');
        image.src = animal.picture;
        const name = capitalizeFirstLetterAndAddClass(animal.name, displayAnimal);
        const species = capitalizeFirstLetterAndAddClass(animal.species, displayAnimal);
        setContent();
        const claimButton = document.createElement('button');
        const cancelButton = document.createElement('button');
        const finalizeButton = document.createElement('button');
        claimButton.classList.add('claim');
        cancelButton.classList.add('cancel');
        finalizeButton.classList.add('finalize');
        claimButton.textContent = 'Claim for adoption';
        cancelButton.textContent = 'Cancel adoption';
        finalizeButton.textContent = 'Finalize adoption';
        displayAnimal.appendChild(image);
        displayAnimal.appendChild(description);
        displayAnimal.appendChild(claimButton);
        displayAnimal.appendChild(cancelButton);
        displayAnimal.appendChild(finalizeButton);
        displayAnimal.classList.add(animal.status.toLowerCase());
        if (animal.status.toLowerCase() === 'available') {
            claimButton.style.display = 'block';
            cancelButton.style.display = 'none';
            finalizeButton.style.display = 'none';
        }
        else if (animal.status.toLowerCase() === 'hold') {
            cancelButton.style.display = 'block';
            claimButton.style.display = 'none';
            finalizeButton.style.display = 'block';
        }
        else if (animal.status.toLowerCase() === 'adopted') {
            cancelButton.style.display = 'none';
            finalizeButton.style.display = 'none';
            claimButton.style.display = 'none';
        }
        else {
            const error = document.createElement('p');
            error.textContent = 'Please enter a valid status!';
            animalList.appendChild(error);
        }
        if (availableOnly === true) {
            displayAvailableOnly();
        }
        if (document.querySelector('#search-box > input').value !== '') {
            searchBox();
        }
        claimButton.addEventListener('click',createButtons);
        cancelButton.addEventListener('click',createButtons);
        finalizeButton.addEventListener('click',finalizeAdoptionStatus);
        function setContent() {
            description.innerHTML = 'Hello! My name is ';
            description.appendChild(name);
            description.innerHTML = description.innerHTML + '<br/>' + 'Species - '
            description.appendChild(species);
            description.innerHTML = description.innerHTML + ' (if it wasn\'t\ obvious)' + '<br/><br/>' + 'Status - ' + animal.status.toUpperCase();
        }
        function createButtons() {
            setContent();
            if (animal.status.toLowerCase() === 'available') {
            animal.status = 'hold';
            claimButton.style.display = 'block';
            cancelButton.style.display = 'none';
            finalizeButton.style.display = 'none';
            displayAnimal.removeAttribute('class');
            displayAnimal.classList.add('available');
            }
            else if (animal.status.toLowerCase() === 'hold') {
                animal.status = 'available'
                cancelButton.style.display = 'block';
                claimButton.style.display = 'none';
                finalizeButton.style.display = 'block';
                displayAnimal.removeAttribute('class');
                displayAnimal.classList.add('hold');
            }
            else if (animal.status.toLowerCase() === 'adopted') {
                animal.status = 'adopted';
                cancelButton.style.display = 'none';
                finalizeButton.style.display = 'none';
                claimButton.style.display = 'none';
                displayAnimal.removeAttribute('class');
                displayAnimal.classList.add('adopted');
            }
            else {
                const error = document.createElement('p');
                error.textContent = 'Please enter a valid status!';
                animalList.appendChild(error);
            }
        }
        animalList.appendChild(displayAnimal);
        function finalizeAdoptionStatus() {
            animal.status = 'adopted';
            displayAnimal.removeAttribute('class');
            displayAnimal.classList.add('adopted');
            cancelButton.style.display = 'none';
            finalizeButton.style.display = 'none';
            claimButton.style.display = 'none';
            setContent();
            displayAvailableOnly();
        }
    }
}

document.querySelector('#sortName').addEventListener('click',sortByName);
document.querySelector('#sortStatus').addEventListener('click',sortByStatus);
document.querySelector('#sortSpecies').addEventListener('click',sortBySpecies);
document.querySelector('#available-pets > button').addEventListener('click',changeAvailableButton);
document.querySelector('#available-pets > button').addEventListener('click',displayAvailableOnly);

function sortByName() {
    animals.sort(function(a,b){
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        else if (nameA > nameB) {
            return 1;
        }
        else {
            return 0;
        }
    })
    sortedByName = true;
    displayAll();
}

function sortBySpecies() {
    animals.sort(function (a, b) {
        const speciesA = a.species.toUpperCase();
        const speciesB = b.species.toUpperCase();
        if (speciesA < speciesB) {
            return -1;
        }
        else if (speciesA > speciesB) {
            return 1;
        }
        else {
            return 0;
        }
    })
    sortedBySpecies = true;
    displayAll();
}

function sortByStatus() {
    animals.sort(function (a, b) {
        const statusA = a.status.toUpperCase();
        const statusB = b.status.toUpperCase();
        if (statusA < statusB) {
            return -1;
        }
        else if (statusA > statusB) {
            return 1;
        }
        else {
            return 0;
        }
    })
    sortedByStatus = true;
    displayAll();
}

function changeAvailableButton() {
    availableOnly = availableOnly ? false : true;
}

function displayAvailableOnly() {
    const allAnimals = document.querySelectorAll('#animal-list > div');
    for (const animal of allAnimals) {
        switch (availableOnly) {
            case true:
                if (animal.classList.contains('available')) {
                    animal.style.display = 'inherit';
                }
                else {
                    animal.style.display = 'none';
                }
                document.querySelector('#available-pets > button').textContent = 'Show all pets';
                break;
            case false:
                animal.style.display = 'inherit';
                document.querySelector('#available-pets > button').textContent = 'Show available pets';
                break;
        }
    }
}

document.querySelector('#search-box > input').setAttribute('size',document.querySelector('#search-box > input').getAttribute('placeholder').length);

function searchBox() {
    let filter = document.querySelector('#search-box > input').value.toLowerCase();
    const allDisplayedAnimals = document.querySelectorAll('#animal-list > div');
    if (filter !== '') {
        for (const animal of animals) {
            for (const value of Object.values(animal)) {
                value.toLowerCase();
            }
            if (filter in animal || Object.values(animal).includes(filter)){
                for (const displayedAnimal of allDisplayedAnimals) {
                    if (displayedAnimal.children[1].textContent.toLowerCase().includes(filter.toLowerCase())) {
                        displayedAnimal.style.display = '';
                    }
                    else {
                        displayedAnimal.style.display = 'none';
                    }
                }
            }
            else {
                for (const displayedAnimal of allDisplayedAnimals) {
                    if (displayedAnimal.children[1].textContent.toLowerCase().includes(filter.toLowerCase())) {
                        displayedAnimal.style.display = '';
                    }
                    else {
                        displayedAnimal.style.display = 'none';
                    }
                }
            }
        }
    }
    else {
        for (const displayedAnimal of allDisplayedAnimals) {
            if (displayedAnimal.children[1].textContent.toLowerCase().includes(filter.toLowerCase())) {
                displayedAnimal.style.display = '';
            }
        }
    }
    
}
document.querySelector('#search-box > input').addEventListener('input',searchBox);