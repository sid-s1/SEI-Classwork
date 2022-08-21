const renderHeader = () => {
    const header = document.getElementById('header-nav');
    header.innerHTML = `
    <h1>Scavenger Hunt</h1>
    <ul id="navlist">
        <li onClick="renderChallenges()"><button class="nav-btn">Challenges</button></li>
        <li onClick="renderRules()"><button class="nav-btn">Rules</button></li>
    </ul>
    `;
};