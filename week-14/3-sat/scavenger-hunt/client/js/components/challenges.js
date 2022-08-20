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
                const challengeId = challenge.id;
                // description.textContent = challenge.description;
                // address.textContent = challenge.address;
                div.appendChild(name);
                let clickState = false;

                name.addEventListener('click', () => {
                    if (!clickState) {
                        clickState = true;
                        if (description.textContent.length == 0) {
                            axios(`/api/challenges/${challengeId}`)
                                .then(function (result) {
                                    description.textContent = result.data[0].description;
                                    address.textContent = result.data[0].address;
                                    div.appendChild(description);
                                    div.appendChild(address);
                                })
                        }
                        else {
                            div.appendChild(description);
                            div.appendChild(address);
                        }
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