const trial = () => {
    console.log('hello x 100000');
};
trial();
const elem = document.getElementById('abc');
elem.addEventListener('click', () => {
    console.log(elem.parentNode);
});

// versus

async function trial() {
    new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
    });
};
await trial(); // stop here; when resolve gets called, then continue to line 18
const elem2 = document.getElementById('abc');
elem2.addEventListener('click', () => {
    console.log(elem2.parentNode);
});