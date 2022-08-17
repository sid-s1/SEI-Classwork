from urllib import request
from flask import Flask, request

app = Flask(__name__)

currentId = 2

messages = [
    {
        'id': '1',
        'message': 'This is a message'
    },
    {
        'id': '2',
        'message': 'This is another message'
    }
]


@app.route('/messages/<id>')
def get_message(id):
    for message in messages:
        if message.get('id') == id:
            return message
        else:
            return {'error': 'not found'}


@app.route('/messages', methods=["POST"])
def create_message():
    message = request.form.get('message')
    global currentId
    currentId += 1
    new_message = {
        'id': currentId,
        'message': message
    }
    messages.append(new_message)
    return messages


@app.route('/messages/<id>', methods=["PATCH"])
def update_message(id):
    for message in messages:
        if message.get('id') == id:
            new_message = request.form.get('message')
            message['message'] = new_message
            return message
        else:
            return {'error': 'not found'}


@app.route('/messages/<id>', methods=['DELETE'])
def delete_message(id):
    for message in messages:
        if message.get('id') == id:
            messages.pop(messages.index(message))
            return {'status': 'success'}
        else:
            return {'error': 'not found'}


if __name__ == '__main__':
    app.run(debug=True)
