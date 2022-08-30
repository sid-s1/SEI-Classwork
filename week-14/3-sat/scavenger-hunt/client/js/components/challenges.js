const challenges = document.getElementById('challenges');
const progress = document.getElementById('progress');
const navBtns = document.getElementsByClassName('nav-btn');
let loggedIn = false;

const deactivateEditBtns = (id) => {
    const editBtns = document.querySelectorAll('.edit-btn');
    for (const editBtn of editBtns) {
        if (editBtn.id !== id) {
            editBtn.disabled = true;
        }
    }
};

const reactivateEditBtns = () => {
    const editBtns = document.querySelectorAll('.edit-btn');
    for (const editBtn of editBtns) {
        editBtn.disabled = false;
    }
};

const renderChallenges = () => {
    page.style.display = 'none';
    welcome.style.display = 'none';
    page.innerHTML = '';
    axios.get('/api/session')
        .then((response) => {
            if ('username' in response.data) {
                loggedIn = true;
            }
            if (page.childElementCount === 0) {
                callApi();
            }
            let p = new Promise((resolve, reject) => {
                progress.classList.remove('reset-progress');
                progress.textContent = 'Loading';

                for (const navBtn of navBtns) {
                    navBtn.disabled = true;
                }

                myInterval = setInterval(function () {
                    progress.textContent += '.';
                }, 400);

                setTimeout(() => {
                    clearInterval(myInterval);
                    progress.textContent = '';
                    progress.classList.add('reset-progress');
                    resolve('Success');
                }, 1500);
            });
            p.then(() => {
                for (const navBtn of navBtns) {
                    navBtn.disabled = false;
                }
                page.style.display = 'flex';
                setTimeout(() => {
                    const boxes = document.getElementsByClassName('challenge-box');
                    for (const box of boxes) {
                        setInterval(() => {
                            box.classList.add('pulse');
                        }, 1500);
                        setInterval(() => {
                            box.classList.remove('pulse');
                        }, 3000);
                    }
                }, 100);
            });
        })
};

const callApi = () => {
    axios('/api/challenges')
        .then(function (response) {
            console.log('api called');
            apiCalled = true;
            const header = document.createElement('header');
            const headerContent = document.createElement('h3');
            headerContent.textContent = 'Challenges';
            header.appendChild(headerContent);

            const parent = document.createElement('div');
            parent.classList.add('challenge-parent');

            for (const challenge of response.data) {
                const div = document.createElement('div');
                const divContainer = document.createElement('div');
                const challengeHeader = document.createElement('p');
                challengeHeader.textContent = challenge.name;
                divContainer.className = 'challenge-container';
                const deleteBtn = document.createElement('button');
                const editBtn = document.createElement('button');
                const challengeId = challenge.id;

                div.classList.add('challenge-box');
                deleteBtn.textContent = 'X';
                editBtn.textContent = 'Edit';
                deleteBtn.className = 'modify-btn';
                editBtn.className = 'modify-btn';
                editBtn.classList.add('edit-btn');
                div.id = challengeId;
                editBtn.id = challengeId;

                div.appendChild(challengeHeader);

                deleteBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    divContainer.remove();
                    axios.delete(`/api/challenges/${challengeId}`)
                        .then((response) => {
                        })
                });

                const formDescription = document.createElement('form');
                const formAddress = document.createElement('form');
                formDescription.classList.add('edit-forms');
                formAddress.classList.add('edit-forms');
                const descriptionInput = document.createElement('textarea');
                const addressInput = document.createElement('textarea');

                editBtn.addEventListener('click', () => {
                    editDetails(challengeId);
                    if (document.querySelector('.challenge-container > .edit-forms')) {
                        divContainer.removeChild(formDescription);
                        divContainer.removeChild(formAddress);
                        reactivateEditBtns();
                    }
                    else {
                        if (document.querySelector('.challenge-box > .challenge-details')) {
                            if (loggedIn) {
                                div.replaceChildren(challengeHeader, deleteBtn);
                            }
                            else {
                                div.replaceChildren(challengeHeader);
                            }
                        }
                        deactivateEditBtns(editBtn.id);
                        axios.get(`/api/challenges/${challengeId}`)
                            .then((res) => {
                                descriptionInput.value = res.data[0].description;
                                addressInput.value = res.data[0].address;

                                descriptionInput.classList.add('editable-challenge-details');
                                descriptionInput.classList.add('description-edit');
                                addressInput.classList.add('editable-challenge-details');
                                addressInput.classList.add('address-edit');

                                formDescription.appendChild(descriptionInput);
                                formAddress.appendChild(addressInput);

                                divContainer.append(formDescription, formAddress);
                            })
                    }
                });

                const description = document.createElement('p');
                const address = document.createElement('p');

                if (loggedIn) {
                    div.append(deleteBtn);
                }

                div.addEventListener('click', () => {
                    if (document.querySelector('.challenge-container > .edit-forms')) {
                        axios.get(`/api/challenges/${challengeId}`)
                            .then(function (response) {
                                description.textContent = response.data[0].description;
                                address.textContent = response.data[0].address;
                                description.classList.add('challenge-details');
                                address.classList.add('challenge-details');

                                if (loggedIn) {
                                    div.replaceChildren(challengeHeader, deleteBtn, description, address);
                                    reactivateEditBtns();
                                    div.parentNode.replaceChildren(div, div.nextElementSibling);
                                }
                                else {
                                    div.replaceChildren(challengeHeader, description, address);
                                    div.parentNode.replaceChildren(div);
                                }
                            })

                    }
                    else {
                        if (document.querySelector('.challenge-box > .challenge-details')) {
                            if (loggedIn) {
                                div.replaceChildren(challengeHeader, deleteBtn);
                            }
                            else {
                                div.replaceChildren(challengeHeader);
                            }
                        }
                        else {
                            axios.get(`/api/challenges/${challengeId}`)
                                .then(function (response) {
                                    description.textContent = response.data[0].description;
                                    address.textContent = response.data[0].address;
                                    description.classList.add('challenge-details');
                                    address.classList.add('challenge-details');

                                    if (loggedIn) {
                                        div.replaceChildren(challengeHeader, deleteBtn, description, address);
                                    }
                                    else {
                                        div.replaceChildren(challengeHeader, description, address);
                                    }
                                })
                        }
                    }
                });

                divContainer.appendChild(div);

                if (loggedIn) {
                    divContainer.appendChild(editBtn);
                }

                parent.appendChild(divContainer);
                page.replaceChildren(header, parent);


            }
        })
        .catch(err => page.innerHTML = '<h2>Error retrieving data!</h2>')
};
