const renderHeader = () => {
    const header = document.getElementById('header-nav');
    const welcome = document.getElementById('welcome');
    header.innerHTML = `
    <h1>Scavenger Hunt | Yharnam Edition</h1>
    <ul id="navlist">
        <li onClick="renderChallenges()"><button class="nav-btn">Challenges</button></li>
        <li onClick="renderRules()"><button class="nav-btn">Rules</button></li>
    </ul>
    `;
    welcome.innerHTML = `
    <h2>So you think you have what it takes... to be here, in Yharnam?</h2>
    `;
};