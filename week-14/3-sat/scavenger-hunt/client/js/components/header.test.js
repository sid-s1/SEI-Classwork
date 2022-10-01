import { renderHeader } from './header.js'

test('renderHeader should render a list with three items', () => {
    document.body.innerHTML = `
    <header id="header-nav"></header>
    <section id="welcome"></section>
    <section class="progress-main" id="progress"></section>
    <section id="page"></section>
    `;
    renderHeader();

    const navList = document.getElementById('navlist');
    expect(navList).not.toBe(null);

    const listItemCount = navList.childElementCount;
    expect(listItemCount).toBe(4);
});