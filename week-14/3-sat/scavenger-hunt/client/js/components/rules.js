const rules = document.getElementById('rules');

const renderRules = () => {
    welcome.style.display = 'none';
    page.style.display = 'none';

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
    });

    page.innerHTML = `
    <header>
        <h3>Rules</h3>
    </header>
    <div class="rules">
        <p>Rule 1: Do not talk about scavenger hunt</p>
        <p>Rule 2: DO NOT talk about scavenger hunt</p>
        <p>Rule 3: If someone says "peanuts" or goes crazy, the hunt is over</p>
        <p>Rule 4: No magic, no youtube</p>
        <p>Rule 5: If this is your first night at YHARNAM, you HAVE to hunt</p>
    </div>
    `;
};