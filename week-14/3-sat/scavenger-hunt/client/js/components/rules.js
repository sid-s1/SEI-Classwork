const rules = document.getElementById('rules');

const renderRules = () => {
    challenges.style.display = 'none';
    rules.innerHTML = `
    <h3>Rules</h3>
    <p>Rule 1: Don't talk about scavenger hunt</p>
    `;
    rules.style.display = 'block';
};