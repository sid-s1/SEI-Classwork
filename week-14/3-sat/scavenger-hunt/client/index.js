const header = document.getElementById('header-nav');
header.innerHTML = `
<h1>Scavenger Hunt</h1>
<ul id="navlist">
    <li onClick="renderChallenges()">Challenges</li>
    <li onClick="renderRules()">Rules</li>
</ul>
`;

const section = document.getElementById('page');

const renderRules = () => {
    section.innerHTML = `
    <h3>Rules</h3>
    <p>Rule 1: Don't talk about scavenger hunt</p>
    `;
};

const renderChallenges = () => {
    section.innerHTML = `
    <h3>Challenges</h3>
    <p>Challenge 1: Collect all gems</p>
    `;
};