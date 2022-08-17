const express = require('express');
const app = express();
const port = 5000;

//trial comment

app.get('/', (request, response) => {
    response.send('Hello!')
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});