const challenges = document.getElementById('challenges');
const progress = document.getElementById('progress');
const navBtns = document.getElementsByClassName('nav-btn');

const renderChallenges = () => {
    page.style.display = 'none';
    welcome.style.display = 'none';
    page.innerHTML = '';
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
                div.classList.add('challenge-box');
                const description = document.createElement('p');
                const address = document.createElement('p');

                div.textContent = challenge.name;
                const challengeId = challenge.id;
                let clickState = false;

                div.addEventListener('click', () => {
                    if (!clickState) {
                        clickState = true;
                        if (description.textContent.length == 0) {
                            axios(`/api/challenges/${challengeId}`)
                                .then(function (result) {
                                    console.log('api called - part 2');
                                    description.textContent = result.data[0].description;
                                    address.textContent = result.data[0].address;
                                    description.classList.add('challenge-details');
                                    address.classList.add('challenge-details');
                                    div.appendChild(description);
                                    div.appendChild(address);
                                })
                        }
                        else {
                            description.classList.add('challenge-details');
                            address.classList.add('challenge-details');
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
                parent.appendChild(div);
                page.replaceChildren(header, parent);
            }
        })
        .catch(err => page.innerHTML = '<h2>Error retrieving data!</h2>')
};
