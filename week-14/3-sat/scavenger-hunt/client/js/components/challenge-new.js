const renderNewChallengeForm = () => {
    const form = document.createElement('form');
    form.innerHTML = `
    <fieldset>
        <label for="name">Name</label>
        <input type="text" name="name">
    </fieldset>

    <fieldset>
        <label for="description">Description</label>
        <input type="text" name="description">
    </fieldset>

    <fieldset>
        <label for="address">Address</label>
        <input type="text" name="address">
    </fieldset>

    <button>Save</button>
    `;

    form.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            description: formData.get('description'),
            address: formData.get('address')
        };
        axios.post('/api/challenges', data)
            .then(
                response => alert('Challenge accepted')
            )
            .catch(
                error => alert(error.message)
            );
    });
};