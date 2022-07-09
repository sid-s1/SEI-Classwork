from flask import Flask, render_template, request, redirect
import psycopg2
import requests

app = Flask('__name__')


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
    return render_template('index.html', results=results)


@app.route('/food/new')
def add_food_item_page():
    return render_template('new_food.html')


@app.route('/food/create', methods=["POST"])
def add_food_item():
    name = request.form.get('name')
    url = request.form.get('url')
    price = request.form.get('price')
    conn = psycopg2.connect("dbname=food_truck")
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO food(name,image_url,price_cents) VALUES(%s,%s,%s)", (name, url, price))
    conn.commit()
    return redirect('/')


@app.route('/delete')
def delete_food_item():
    id = request.args.get('id')
    conn = psycopg2.connect("dbname=food_truck")
    cur = conn.cursor()
    cur.execute("""
    SELECT name FROM food WHERE id=%s
    """, (id,))
    return render_template('delete_food.html', id=id, item=cur.fetchone()[0])


@app.route('/delete/food/<id>', methods=["POST"])
def remove_item(id=None):
    conn = psycopg2.connect("dbname=food_truck")
    cur = conn.cursor()
    cur.execute("""
    DELETE FROM food WHERE id=%s
    """, (id,))
    conn.commit()
    return redirect('/')


@app.route('/update')
def update_food_item():
    id = request.args.get('id')
    conn = psycopg2.connect("dbname=food_truck")
    cur = conn.cursor()
    cur.execute("""
    SELECT * FROM food WHERE id=%s
    """, (id,))
    return render_template('update_food.html', id=id, item=cur.fetchall())


@app.route('/update/food/<id>', methods=["POST"])
def edit_item(id=None):
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


@app.route('/contact')
def contact_details():
    return render_template('contact_page.html')


@app.route('/nutrition')
def nutritional_page():
    conn = psycopg2.connect("dbname=food_truck")
    cur = conn.cursor()
    cur.execute("""
    SELECT * FROM nutrition
    LIMIT 100
    """)
    return render_template('nutritional_facts.html', results=cur.fetchall())
