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

            <div class="field-container field-container-one">
                <label for="name">Name</label>
                <input type="text" name="name">
            </div>

            <div class="field-container">
                <label for="description">Description</label>
                <input type="text" name="description">
            </div>

            <div class="field-container field-container-three">
                <label for="address">Address</label>
                <input type="text" name="address">
            </div>

            <button class="nav-btn" id="add-challenge-btn">Save</button>
        `;



        form.addEventListener('submit', event => {
            event.preventDefault();
            document.getElementById('add-challenge-btn').disabled = 'true';

            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                description: formData.get('description'),
                address: formData.get('address')
            };
            axios.post('/api/challenges', data)
                .then(
                    response => {
                        alert('Challenge accepted')
                        renderChallenges();
                    }
                )
                .catch(
                    error => alert(error.message)
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