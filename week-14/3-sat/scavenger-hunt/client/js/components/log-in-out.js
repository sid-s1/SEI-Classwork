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

    <div class="field-container field-container-three">
        <label for="password">Password</label>
        <input type="password" name="password">
    </div>

    <button class="nav-btn" id="log-in-btn">Submit</button>
    `;

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
                    console.log(messageMap[response.data.message]);
                }
                else {
                    renderUserHeader();
                }
            })
            .catch((error) => {
            });
    });
    page.replaceChildren(loginForm);
    page.style.display = 'flex';
};

const logoutAction = () => {
    axios.get('/api/session')
        .then((response) => {
            let name = '';
            if ('username' in response.data) {
                name = response.data.username;
                const data = {
                    username: name
                };
                axios.delete('/api/session/')
                    .then((res) => {
                        renderHeader();
                    })
            }
            else {
                // post message in a modal?
            }
        })
};