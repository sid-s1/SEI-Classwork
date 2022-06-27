from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def main():
    return render_template('index.html')


@app.route('/hello')
def greet_user(name=None, age=None, optional=None):
    return render_template('greeting.html', name=request.args['user'], age=int(request.args['age']), optional=request.args.get('optional'))
