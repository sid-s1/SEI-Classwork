from crypt import methods
import psycopg2
from flask import Flask, request, redirect, render_template
from urllib3 import Retry

app = Flask(__name__)


@app.route('/')
def index():
    conn = psycopg2.connect("dbname=foodtruck_two")
    cur = conn.cursor()
    cur.execute("SELECT id, name, image_url, price_in_cents from food")
    results = cur.fetchall()
    foods = []
    for row in results:
        foods.append({
            'id': row[0],
            'name': row[1],
            'image_url': row[2],
            'price_in_cents': row[3]
        })
    conn.close()
    return render_template('index_.html', foods=foods)


@app.route('/add_food')
def add_food():
    return render_template('add_food.html')


@app.route('/add_food_action', methods=["POST"])
def add_food_action():
    name = request.form.get('name')
    image_url = request.form.get('image_url')
    price_in_cents = request.form.get('price_in_cents')

    conn = psycopg2.connect("dbname=foodtruck_two")
    cur = conn.cursor()
    cur.execute("INSERT INTO food(name,image_url,price_in_cents) VALUES(%s,%s,%s)",
                (name, image_url, price_in_cents))
    conn.commit()
    conn.close()

    return redirect('/')


@app.route('/delete_food_action', methods=["POST"])
def delete_food_action():
    id = request.form.get('id')

    conn = psycopg2.connect("dbname=foodtruck_two")
    cur = conn.cursor()
    cur.execute("DELETE FROM food WHERE id = %s", (id,))
    conn.commit()
    conn.close()

    return redirect('/')


@app.route('/update_food')
def update_food():
    id = request.args.get('id')

    conn = psycopg2.connect("dbname=foodtruck_two")
    cur = conn.cursor()
    cur.execute(
        "SELECT id,name,image_url,price_in_cents FROM food WHERE id = %s", (id,))
    result = cur.fetchall()
    row = result[0]

    food = {
        'id': row[0],
        'name': row[1],
        'image_url': row[2],
        'price_in_cents': row[3]
    }

    return render_template('update_food.html', food=food)


@app.route('/update_food_action', methods=["POST"])
def update_food_action():
    id = request.form.get('id')
    name = request.form.get('name')
    image_url = request.form.get('image_url')
    price_in_cents = request.form.get('price_in_cents')

    conn = psycopg2.connect("dbname=foodtruck_two")
    cur = conn.cursor()
    cur.execute("UPDATE food SET name=%s,image_url=%s,price_in_cents=%s WHERE id=%s",
                (name, image_url, price_in_cents, id))
    conn.commit()
    conn.close()

    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)
