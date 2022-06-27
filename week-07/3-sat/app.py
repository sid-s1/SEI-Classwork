from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def main(num=None):
    number = 99
    return render_template('beers.html', num=number)


@app.route('/bottle/<num>')
def bottles(num=None):
    return render_template('beers.html', num=num)
