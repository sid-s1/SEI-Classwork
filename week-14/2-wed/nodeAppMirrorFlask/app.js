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

app.patch('/messages/:id', (request, response) => {
    const toPatchId = request.params.id;
    const message = request.body.message;
    const alterMessage = (dict) => {
        if (dict.id === toPatchId) {
            dict.message = message;
        }
        return dict;
    };
    messages.map(alterMessage);
    response.json(messages);
});

app.delete('/messages/:id', (request, response) => {
    const toDeleteId = request.params.id;

    // was trying below method; it works but only when i copy the filtered array into a new array. decided that it was a less efficient solution than below so i skipped it
    // const modifyArray = (dict) => {
    //     return dict.id !== toDeleteId;
    // };
    // const newArr = messages.filter(modifyArray);
    // response.json(newArr);

    for (const message of messages) {
        if (message.id === toDeleteId) {
            const index = messages.indexOf(message);
            messages.splice(index, 1);
        }
    }
    response.json(messages);
});

app.listen(3000, () => {
    console.log('App listening on http://127.0.0.1:3000');
}); // similar to python/flask app.run