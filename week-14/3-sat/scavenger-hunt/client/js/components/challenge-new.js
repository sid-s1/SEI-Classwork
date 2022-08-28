const renderNewChallengeForm = () => {

    welcome.style.display = 'none';

    let p = new Promise((resolve, reject) => {
        page.style.display = 'none';
        page.innerHTML = '';
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
        const form = document.createElement('form');
        form.innerHTML = `
            <header>
                <h3>Add a challenge</h3>
            </header>

            <div class="field-container field-container-one new-NAME">
                <label for="name">Name</label>
                <div class="input-prompt-containers">
                    <input type="text" name="name" class="newChallengeInputs">
                </div>
            </div>

            <div class="field-container new-DESCRIPTION">
                <label for="description">Description</label>
                <div class="input-prompt-containers">
                    <input type="text" name="description" class="newChallengeInputs">
                </div>
            </div>

            <div class="field-container field-container-three new-ADDRESS">
                <label for="address">Address</label>
                <div class="input-prompt-containers">
                    <input type="text" name="address" class="newChallengeInputs">
                </div>
            </div>

            <button class="nav-btn" id="add-challenge-btn">Save</button>
        `;
        const promptContainer = document.createElement('div');
        const emptyPromptContainer = () => promptContainer.innerHTML = '';

        form.addEventListener('submit', event => {
            event.preventDefault();
            document.getElementById('add-challenge-btn').disabled = 'true';

            for (const navBtn of navBtns) {
                navBtn.disabled = 'true';
            }

            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                description: formData.get('description'),
                address: formData.get('address')
            };
            axios.post('/api/challenges', data)
                .then(
                    (response) => {
                        console.log('where i should be');
                        for (const input of document.getElementsByClassName('newChallengeInputs')) {
                            input.value = '';
                        }
                        // if (promptContainer.hasChildNodes()) {
                        //     promptContainer.innerHTML = '';
                        // }

                        // left side below equates to boolean - if that is true the second part on the right executes
                        promptContainer.hasChildNodes() && emptyPromptContainer();

                        alert('Challenge added!');
                        setTimeout(() => {
                            renderChallenges();
                        }, 1000);
                    }
                )
                .catch(
                    error => {
                        console.log('where i should not be');
                        const errorMessageMap = {
                            NAME_REQUIRED: 'Name is a required field!',
                            ADDRESS_REQUIRED: 'Address is a required field!',
                            DESCRIPTION_REQUIRED: 'Description is a required field!',
                            NAME_EXISTS: 'Challenge already exists!',
                            ADDRESS_EXISTS: 'Address already exists!'
                        };
                        if (error && error.response.status === 500) {
                            alert('Unknown error! Please try again later!');
                        }
                        else {
                            const prompt = document.createElement('p');
                            promptContainer.appendChild(prompt);
                            prompt.textContent = errorMessageMap[error.response.data.code];
                            const arr = error.response.data.code.split('_');
                            const fieldToAppend = document.querySelector(`.new-${arr[0]} > .input-prompt-containers`);
                            promptContainer.replaceChildren(prompt);
                            fieldToAppend.appendChild(promptContainer);
                            document.getElementById('add-challenge-btn').disabled = false;
                            for (const navBtn of navBtns) {
                                navBtn.disabled = false;
                            }
                        }
                    }
                );
        });

        page.replaceChildren(form);

        const inputFields = document.querySelectorAll('input');

        for (const inputField of inputFields) {
            inputField.addEventListener('mouseover', () => {
                inputField.classList.add('expanded-input');
            });
            inputField.addEventListener('mouseout', () => {
                inputField.classList.remove('expanded-input');
            });
        }
        page.style.display = 'flex';
    });

};