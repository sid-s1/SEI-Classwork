from flask import Flask, render_template, request, redirect, session
import psycopg2
from hash import hash, check

app = Flask('__name__')
app.config['SECRET_KEY'] = 'somethingsomething'


@app.route('/')
def index():
    conn = psycopg2.connect("dbname=food_truck")
    cur = conn.cursor()
    cur.execute("""
    SELECT * FROM food
    LIMIT 100
    """)
    params = request.args.get('sort')
    if params == 'asc-price':
        results = sorted(cur.fetchall(), key=lambda tup: tup[3])
    elif params == 'desc-price':
        results = sorted(cur.fetchall(), key=lambda tup: tup[3], reverse=True)
    elif params == 'asc-name':
        results = sorted(cur.fetchall(), key=lambda tup: tup[1])
    elif params == 'desc-name':
        results = sorted(cur.fetchall(), key=lambda tup: tup[1], reverse=True)
    else:
        results = cur.fetchall()
    return render_template('index.html', results=results, user=session.get('username'), admin=session.get('admin'))


@app.route('/food/new')
def add_food_item_page():
    if session.get('username') != None:
        return render_template('new_food.html', user=session.get('username'), admin=session.get('admin'))
    else:
        return '''
        <h2>You need to login to view that page!</h2>
        <a href="javascript:history.back()">Go back</a>
        '''


@app.route('/food/create', methods=["POST"])
def add_food_item():
    if session.get('username') != None:
        name = request.form.get('name')
        url = request.form.get('url')
        price = request.form.get('price')
        calories = request.form.get('calories')
        carbs = request.form.get('carbs')
        protein = request.form.get('protein')
        fat = request.form.get('fat')

        conn = psycopg2.connect("dbname=food_truck")
        cur = conn.cursor()
        cur.execute("""
            INSERT INTO food(name,image_url,price_cents) VALUES(%s,%s,%s)
            """, (name, url, price))
        cur.execute("""
            INSERT INTO nutrition(name,calories,carb,protein,fat) VALUES(%s,%s,%s,%s,%s)
            """, (name, calories, carbs, protein, fat))
        conn.commit()
        return redirect('/')
    else:
        return '''
        <h2>You need to login to view that page!</h2>
        <a href="javascript:history.back()">Go back</a>
        '''


@app.route('/delete')
def delete_food_item():
    if session.get('username') != None:
        id = request.args.get('id')
        conn = psycopg2.connect("dbname=food_truck")
        cur = conn.cursor()
        cur.execute("""
        SELECT name FROM food WHERE id=%s
        """, (id,))
        return render_template('delete_food.html', id=id, item=cur.fetchone()[0], user=session.get('username'), admin=session.get('admin'))
    else:
        return '''
        <h2>You need to login to view that page!</h2>
        <a href="javascript:history.back()">Go back</a>
        '''


@app.route('/delete/food/<id>', methods=["POST"])
def remove_item(id=None):
    if session.get('username') != None:
        conn = psycopg2.connect("dbname=food_truck")
        cur = conn.cursor()
        cur.execute("""
        DELETE FROM food WHERE id=%s
        """, (id,))
        conn.commit()
        return redirect('/')
    else:
        return '''
        <h2>You need to login to view that page!</h2>
        <a href="javascript:history.back()">Go back</a>
        '''


@app.route('/update')
def update_food_item():
    if session.get('username') != None:
        id = request.args.get('id')
        conn = psycopg2.connect("dbname=food_truck")
        cur = conn.cursor()
        cur.execute("""
        SELECT * FROM food WHERE id=%s
        """, (id,))
        return render_template('update_food.html', id=id, item=cur.fetchall(), user=session.get('username'), admin=session.get('admin'))
    else:
        return '''
        <h2>You need to login to view that page!</h2>
        <a href="javascript:history.back()">Go back</a>
        '''


@app.route('/update/food/<id>', methods=["POST"])
def edit_item(id=None):
    if session.get('username') != None:
        name = request.form.get('name')
        url = request.form.get('url')
        price = request.form.get('price')

        conn = psycopg2.connect("dbname=food_truck")
        cur = conn.cursor()
        cur.execute("""
                UPDATE food SET name=%s,image_url=%s,price_cents=%s WHERE id=%s
                """, (name, url, price, id))
        conn.commit()
        return redirect('/')
    else:
        return '''
        <h2>You need to login to view that page!</h2>
        <a href="javascript:history.back()">Go back</a>
        '''


@app.route('/contact')
def contact_details():
    return render_template('contact_page.html', user=session.get('username'), admin=session.get('admin'))


@app.route('/nutrition')
def nutritional_page():
    conn = psycopg2.connect("dbname=food_truck")
    cur = conn.cursor()
    cur.execute("""
    SELECT * FROM nutrition
    LIMIT 100
    """)
    return render_template('nutritional_facts.html', results=cur.fetchall(), user=session.get('username'), admin=session.get('admin'))


@app.route('/login')
def login_page():
    return render_template('login.html', user=session.get('username'), admin=session.get('admin'), unmatched=False)


@app.route('/login_check', methods=["POST"])
def login_check():
    email = request.form.get('email')
    password = request.form.get('password')

    conn = psycopg2.connect("dbname=food_truck")
    cur = conn.cursor()
    cur.execute("""
    SELECT password_hash FROM users WHERE email=%s
    """, (email,))
    stored_password = cur.fetchall()[0][0]
    passwords_match = check(password, stored_password)

    if passwords_match:
        cur.execute("""
        SELECT name,admin FROM users WHERE email=%s
        """, (email,))
        result = cur.fetchall()
        if len(result) != 0:
            session['username'] = result[0][0]
            session['admin'] = result[0][1]
            return redirect('/')
        else:
            return render_template('login.html', user=session.get('username'), admin=session.get('admin'), unmatched=True)
    else:
        return render_template('login.html', user=session.get('username'), admin=session.get('admin'), unmatched=True)


@app.route('/signup')
def signup_page():
    return render_template('signup.html', user=session.get('username'), admin=session.get('admin'))


@app.route('/signup', methods=["POST"])
def signup_action():
    name = request.form.get('name')
    email = request.form.get('email')
    admin = 'false'
    password = request.form.get('password')
    retyped_password = request.form.get('retyped_password')
    if retyped_password == password:
        hashed_password = hash(password)

        conn = psycopg2.connect("dbname=food_truck")
        cur = conn.cursor()
        cur.execute("""
        INSERT INTO users(email,name,admin,password_hash) VALUES(%s,%s,%s,%s)
        """, (email, name, admin, hashed_password))
        conn.commit()
        return redirect('/login')


@app.route('/users')
def user_list():
    conn = psycopg2.connect("dbname=food_truck")
    cur = conn.cursor()
    cur.execute("""
    SELECT * FROM users
    """)
    users = []
    for row in cur.fetchall():
        users.append({
            'id': row[0],
            'email': row[1],
            'name': row[2],
            'admin': row[3]
        })
    return render_template('users.html', admin=session.get('admin'), users=users)


@app.route('/edit_user/<id>')
def edit_user(id=None):
    if session.get('admin') == True:
        conn = psycopg2.connect("dbname=food_truck")
        cur = conn.cursor()
        cur.execute("""
        SELECT * FROM users WHERE id=%s
        """, (id,))
        user_data = []
        row = cur.fetchall()[0]
        user_data.append({
            'id': row[0],
            'email': row[1],
            'name': row[2],
            'admin': row[3]
        })
        return render_template('edit_user.html', user_data=user_data[0], user=session.get('username'), admin=session.get('admin'))
    else:
        return '''
        <h2>You need to login to view that page!</h2>
        <a href="javascript:history.back()">Go back</a>
        '''


@app.route('/edit_user/<id>', methods=["POST"])
def edit_user_page(id=None):
    if session.get('admin') == True:
        name = request.form.get('name')
        email = request.form.get('email')
        admin = request.form.get('admin')
        password = request.form.get('password')
        hashed_password = hash(password)

        if admin == 'on':
            admin = 'true'
        else:
            admin = 'false'

        conn = psycopg2.connect("dbname=food_truck")
        cur = conn.cursor()
        cur.execute("""
        UPDATE users SET name=%s,email=%s,admin=%s,password_hash=%s WHERE id=%s
        """, (name, email, admin, hashed_password, id))
        conn.commit()
        return redirect('/users')
    else:
        return '''
        <h2>You need to login to view that page!</h2>
        <a href="javascript:history.back()">Go back</a>
        '''


@app.route('/delete_user/<id>')
def delete_user(id=None):
    if session.get('admin') == True:
        conn = psycopg2.connect("dbname=food_truck")
        cur = conn.cursor()
        cur.execute("""
        DELETE FROM users WHERE id=%s
        """, (id,))
        conn.commit()
        return redirect('/users')
    else:
        return '''
        <h2>You need to login to view that page!</h2>
        <a href="javascript:history.back()">Go back</a>
        '''


@app.route('/add_user')
def add_user():
    return render_template('add_user.html')


@app.route('/add_user', methods=["POST"])
def add_user_db():
    if session.get('admin') == True:
        name = request.form.get('name')
        email = request.form.get('email')
        admin = request.form.get('admin')
        password = request.form.get('password')
        hashed_password = hash(password)

        if admin == 'on':
            admin = 'true'
        else:
            admin = 'false'

        conn = psycopg2.connect("dbname=food_truck")
        cur = conn.cursor()
        cur.execute("""
        INSERT INTO users(email,name,admin,password_hash) VALUES(%s,%s,%s,%s)
        """, (email, name, admin, hashed_password))
        conn.commit()
        return redirect('/users')
    else:
        return '''
        <h2>You need to login to view that page!</h2>
        <a href="javascript:history.back()">Go back</a>
        '''


@app.route('/logout')
def logout():
    session.pop('username', None)
    session.pop('admin', None)
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)
