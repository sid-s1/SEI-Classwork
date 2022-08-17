const express = require('express'); // similar to importing on python/flask

const app = express() // similar to app = Flask(__name__) in python/flask
app.use(express.json()) // telling express to expect some json in request

let currentId = 2;

const messages = [
    {
        'id': '1',
        'message': 'This is a message'
    },
    {
        'id': '2',
        'message': 'This is another message'
    }
];

app.get('/messages/:id', (request, response) => {
    const messageId = request.params.id;
    // const message = messages.filter((mess) => {
    //     return mess.id == messageId;
    // })[0]
    const message = messages.find(aMessage => aMessage.id === messageId);
    return response.json(message);
});

app.post('/messages', (request, response) => {
    const message = request.body.message;
    currentId += 1;
    const newMessage = {
        id: `${currentId}`,
        message: message
    };
    messages.push(newMessage);
    response.json(newMessage);
});

app.listen(3000, () => {
    console.log('App listening on http://127.0.0.1:3000');
}); // similar to python/flask app.run