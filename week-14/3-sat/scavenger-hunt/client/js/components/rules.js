const rules = document.getElementById('rules');

const renderRules = () => {
    welcome.style.display = 'none';
    challenges.style.display = 'none';
    rules.innerHTML = `
    <header>
        <h3>Rules</h3>
    </header>
    <p>Rule 1: Do not talk about scavenger hunt</p>
    <p>Rule 2: DO NOT talk about scavenger hunt</p>
    <p>Rule 3: If someone says "peanuts" or goes crazy, the hunt is over</p>
    <p>Rule 4: No magic, no youtube</p>
    <p>Rule 5: If this is your first night at YHARNAM, you HAVE to hunt</p>
    `;
    rules.style.display = 'flex';
};