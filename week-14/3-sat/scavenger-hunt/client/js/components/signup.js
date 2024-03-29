const renderSignup = () => {
    welcome.style.display = 'none';
    page.style.display = 'none';
    page.innerHTML = '';

    const signupFrom = document.createElement('form');
    signupFrom.innerHTML = `
    <header>
        <h3>Sign Up</h3>
    </header>

    <div class="field-container field-container-one username-signup">
        <label for="name">Username</label>
        <input type="text" name="name">
    </div>

    <div class="field-container email-signup">
        <label for="email">Email</label>
        <input type="text" name="email">
    </div>

    <div class="field-container field-container-three">
        <label for="password">Password</label>
        <input type="password" name="password">
    </div>

    <button class="nav-btn" id="sign-up-btn">Submit</button>
    `;

    signupFrom.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(signupFrom);
        const data = {
            username: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        };
        axios.post('/api/signup', data)
            .then((response) => {
                const messageMap = {
                    EMAIL_EXISTS: 'Email already exists!',
                    USERNAME_EXISTS: 'Username already exists!'
                };
                if (response.data.message in messageMap) {
                    const key = response.data.message.split('_')[0].toLowerCase();
                    const fieldToListen = document.querySelector(`.${key}-signup`);

                    if (!document.querySelector('.signup-notif')) {
                        const notif = document.createElement('p');
                        notif.textContent = messageMap[response.data.message];
                        notif.classList.add('signup-notif');
                        signupFrom.appendChild(notif);
                        fieldToListen.addEventListener('input', () => {
                            notif.textContent = '';
                        });
                    }
                    else {
                        const notif = document.querySelector('.signup-notif');
                        notif.textContent = messageMap[response.data.message];
                        fieldToListen.addEventListener('input', () => {
                            notif.textContent = '';
                        });
                    }
                }
                else {
                    renderLogin();
                }
            })
            .catch((error) => {
            });
    });

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
        page.replaceChildren(signupFrom);
        page.style.display = 'flex';
    });
}