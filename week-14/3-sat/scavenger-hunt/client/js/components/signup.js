const renderSignup = () => {
    welcome.style.display = 'none';
    page.style.display = 'none';
    page.innerHTML = '';

    const signupFrom = document.createElement('form');
    signupFrom.innerHTML = `
    <header>
        <h3>Sign Up</h3>
    </header>

    <div class="field-container field-container-one">
        <label for="name">Username</label>
        <input type="text" name="name">
    </div>

    <div class="field-container">
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
                    console.log(messageMap[response.data.message]);
                }
                else {
                    // renderLogin();
                }
            })
            .catch((error) => {
            });
    });



    page.replaceChildren(signupFrom);
    page.style.display = 'flex';
}