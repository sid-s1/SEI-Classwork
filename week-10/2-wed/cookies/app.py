from flask import Flask, redirect, request, session
import psycopg2
from hash import hash, check

conn = psycopg2.connect('dbname=user_data')
cur = conn.cursor()

app = Flask('__name__')
app.config['SECRET_KEY'] = 'sidisgr8'


@app.route('/')
def home():
    user = session.get('user', 'No user logged in')
    return f'Hello, {user}'


@app.route('/login')
def login():
    return "<form method='POST'><input type='text' name='user'><input type='password' name='password'><button type='submit'>Log In</button></form>"


@app.route('/login', methods=['POST'])
def do_login():
    user = request.form.get('user')
    password = request.form.get('password')

    cur.execute("""
    SELECT password FROM users
    WHERE name = %s
    """, (user,))

    if cur.rowcount == 0:
        return redirect('/login')
    else:
        results = cur.fetchall()
        if check(password, results[0][0]):
            session['user'] = user
            return redirect('/')
        else:
            return redirect('/login')


app.run(debug=True)
