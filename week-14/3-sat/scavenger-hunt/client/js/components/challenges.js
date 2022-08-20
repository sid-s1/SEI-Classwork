const renderChallenges = () => {
    section.innerHTML = '';
    axios('/api/challenges')
        .then(function (response) {
            for (const challenge of response.data) {
                const div = document.createElement('div');
                div.classList.add('challenge-box');
                const name = document.createElement('button');
                const description = document.createElement('p');
                const address = document.createElement('p');

                name.textContent = challenge.name;
                name.classList.add('challenge-btn');
                description.textContent = challenge.description;
                address.textContent = challenge.address;
                div.appendChild(name);
                let clickState = false;

                name.addEventListener('click', () => {
                    if (!clickState) {
                        clickState = true;
                        div.appendChild(description);
                        div.appendChild(address);
                    }
                    else {
                        clickState = false;
                        div.removeChild(description);
                        div.removeChild(address);
                    }
                });
                section.appendChild(div);
            }
        })
        .catch(err => section.innerHTML = '<h2>Error retrieving data!</h2>')
};