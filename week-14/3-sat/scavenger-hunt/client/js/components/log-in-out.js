const renderLogin = () => {
    welcome.style.display = 'none';
    page.style.display = 'none';
    page.innerHTML = '';

    const loginForm = document.createElement('form');
    loginForm.innerHTML = `
    <header>
        <h3>Log In</h3>
    </header>

    <div class="field-container field-container-one">
        <label for="name">Username</label>
        <input type="text" name="name">
    </div>

    <div class="field-container field-container-three login-pw">
        <label for="password">Password</label>
        <input type="password" name="password">
    </div>

    <button class="nav-btn" id="log-in-btn">Submit</button>
    `;

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

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const data = {
            username: formData.get('name'),
            password: formData.get('password')
        };
        axios.post('/api/session', data)
            .then((response) => {
                const messageMap = {
                    INCORRECT: 'Username or password is incorrect!'
                };
                if (response.data.message in messageMap) {
                    const pwLoginField = document.querySelector('.login-pw');
                    if (!document.querySelector('.login-notif')) {
                        const notif = document.createElement('p');
                        notif.textContent = messageMap[response.data.message];
                        notif.classList.add('login-notif');
                        loginForm.appendChild(notif);
                        pwLoginField.addEventListener('input', () => {
                            notif.textContent = '';
                        });
                    }
                    else {
                        const notif = document.querySelector('.login-notif');
                        notif.textContent = messageMap[response.data.message];
                        pwLoginField.addEventListener('input', () => {
                            notif.textContent = '';
                        });
                    }
                }
                else {
                    renderUserHeader(data.username);
                }
            })
            .catch((error) => {
            });
    });

    p.then(() => {
        for (const navBtn of navBtns) {
            navBtn.disabled = false;
        }
        page.replaceChildren(loginForm);
        page.style.display = 'flex';
    });
};

const logoutAction = () => {
    axios.get('/api/session')
        .then((response) => {
            if ('username' in response.data) {
                axios.delete('/api/session')
                    .then((res) => {
                        loggedIn = false;
                        renderHeader();
                    })
            }
            else {
                welcome.innerHTML = 'You need to be logged in to log out!';
                welcome.style.display = 'block';
                page.style.display = 'none';
                page.innerHTML = '';
            }
        })
};