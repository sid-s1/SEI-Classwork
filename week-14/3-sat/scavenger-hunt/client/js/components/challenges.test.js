import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { renderChallenges } from './challenges';
import { waitFor, fireEvent } from '@testing-library/dom'

test('renderChallenges should render a loading message while the rest of the content loads', () => {
    document.body.innerHTML = `
    <section class="progress-main" id="progress"></section>
    <section id="page"></section>
    `;
    const MockAdapter = new MockAdapter(axios);

    MockAdapter.onGet('/api/challenges').reply(200, [{ id: 1, address: 'dfsd', description: 'sdc' }]);

    renderChallenges(); // wont work because another function is being called within renderChallenges

    return waitFor(() => {
        const challenges = document.querySelectorAll('.challenge-box');
        expect(challenges.length).not.toEqual(0);
    })
        .then(() => {
            const challenges = document.querySelectorAll('.challenge-box');
            expect(challenges.length).toBe(1);
            const buttons = document.getElementsByTagName('button');
            fireEvent.click(buttons[0]);

            // check empty page here
        })
});